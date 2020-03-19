
 var bfirst = 1;
 
 var solarMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
 function solarDays(y, m){
    if (m == 1)
        return (y % 4 == 0 && y % 100 != 0 || y % 400 == 0 ? (29) : (28));
    else
        return (solarMonth[m]);
} 

function inte(id,r,col1,col2,percent,day) {
  var canvas_1 = document.querySelector(id);
  var ctx_1 = canvas_1.getContext('2d');
  ctx_1.lineWidth = 10;
  ctx_1.strokeStyle = col1;
  
  //画底部的灰色圆环
  var rad = percent * Math.PI* 2; //将360度分成100份，那么每一份就是rad度
 if (rad == 0)
 {
 	ctx_1.clearRect(0, 0, 224, 224);
 	ctx_1.strokeStyle = col2;
 	rad = Math.PI* 2;
 	} 
 	
  ctx_1.beginPath();
  //用于绘制圆弧context.arc(x坐标，y坐标，半径，起始角度，终止角度，顺时针/逆时针)
  //ctx_1.arc(canvas_1.width / 2, canvas_1.height / 2, canvas_1.width / 2 - ctx_1.lineWidth / 2, 0, Math.PI * 2, false);
  ctx_1.arc(112, 112, r - ctx_1.lineWidth / 2, -Math.PI/2, -Math.PI/2 +rad, false);
  ctx_1.stroke();//绘制
  ctx_1.closePath();//路径结束
 if (day > 0)
 {
    ctx_1.save();//save和restore可以保证样式属性只运用于该段canvas
    ctx_1.beginPath();
    //ctx_1.rotate(270 * Math.PI / 180)
    ctx_1.font = '35px Arial';
    // ctx_1.fillStyle = col1;
    // 创建渐变
    var gradient=ctx_1.createLinearGradient(0,0,170,0);
    gradient.addColorStop("0","magenta");
    gradient.addColorStop("0.5","blue");
    gradient.addColorStop("1.0","red");
    // 用渐变进行填充
    ctx_1.fillStyle=gradient;  
    ctx_1.fillText(day, 72, 122);
    ctx_1.closePath();
    ctx_1.restore();
 	}       
}

		inte("#canvas_1",112,"#FF0080","#FFF0F8",0,0);	
		inte("#canvas_2",100,"#80FF00","#F7FFEE",0,0);	
		inte("#canvas_3",88,"#0080FF","#EEF7FF",0,0);	
		inte("#canvas_4",76,"#FF8000","#FFF9F2",0,0);	
		inte("#canvas_5",64,"#00AE57","#ECFFF5",0,0);	
		inte("#canvas_6",52,"#F2F200","#FFFFF0",0,0);

//高度条
 function SetVol(id,vol,max){				
 					var height = (vol * 100 )/ max;					
					var obj = document.getElementById(id);
					obj.style.height = height + "px";  
 					if(vol < 10)
 					obj.innerHTML = "0"+vol;
 					else
 					obj.innerHTML = vol;
} 
//二制显示
 function BinaryNum(id,cls,num,myname){
 	  var show=document.getElementById(id).getElementsByTagName("span");  
 		var vol =	num;
	  var iseg=6;
	  var zz="";	
	while (iseg--){	
			if(iseg==0){
				if(num < 10) zz = "0"+num;
 				else zz = num;	
			}else if(iseg==1){
				zz = myname;
			}
			else
			zz = "&nbsp";
					
		if(vol&1)
			show[iseg].innerHTML='<div class="'+cls+'">'+zz+'</div>';     
		else
			show[iseg].innerHTML='<div class="bhui">'+zz+'</div>'; 
	
		vol >>= 1;
	}
}

setInterval(function(){
 /*   var timeing=new Date();
      var time=new Date(2007,1,8,0,0,0);
      var num=timeing.getTime()-time.getTime();
      var day=parseInt(num/(24*60*60*1000));  
      num=num%(24*60*60*1000);
      var hour=parseInt(num/(60*60*1000));      
      num=num%(60*60*1000);
      var minute=parseInt(num/(60*1000));
      num=num%(60*1000);
      var seconde=parseInt(num/1000);
       show[0].innerHTML=conversion(day)+day;
       show[1].innerHTML=hour;
       show[2].innerHTML=minute;
       show[3].innerHTML=seconde;
      },100)*/

    var mytime = new Date(2007, 1, 8, 0, 0, 0);
    var nowtime = new Date();
    var num = nowtime.getTime() - mytime.getTime();
    //var _loc15 = num / 1000;
    //var _loc20 = Math.floor(_loc15);
    var zDay = num / 86400000;
    var AllDay = Math.floor(zDay);
    var zHour = (zDay - AllDay) * 24;
    var hour = Math.floor(zHour);
    var ZMin = (zHour - hour) * 60;
    var minute = Math.floor((zHour - hour) * 60);
    var second = Math.floor((ZMin - minute) * 60);
    var sad = AllDay;
    var sy = mytime.getFullYear();
    var tYear = 0;
    var tMonth = 0;
    var tDay = 0;
    var sd = 0;
    while (sad)
    {
        sd = solarDays(sy, tMonth);
        sad = sad - sd;
        if (sad < 0)
        {
            tDay = sad + sd;
            break;
            continue;
        } 
        ++tMonth;
        if (tMonth > 11)
        {
            ++tYear;
            tMonth = 0;
            ++sy;
        } 
    } // end while
   
   /* show[0].innerHTML=AllDay;//天
    show[1].innerHTML=hour;
    show[2].innerHTML=minute;
    show[3].innerHTML=second;
   show[4].innerHTML=tYear+'年'+tMonth+'月'+tDay+'天';*/

		BinaryNum("iseconds","seconds",second,"秒");						
		//SetVol("div6",second,60);
		inte("#canvas_1",112,"#FF0080","#FFF0F8",second/60,0);
		if(second==0|| bfirst == 1){
  		/*SetVol("div1",tYear,60);		
  		SetVol("div2",tMonth,12);		
  		SetVol("div3",tDay,31);	    	
  		SetVol("div4",hour,24);				
  		SetVol("div5",minute,60);*/			
  		BinaryNum("iyear","year",tYear,"年");
  		BinaryNum("imonth","month",tMonth,"月");
  		BinaryNum("idays","days",tDay,"日");
  		BinaryNum("ihours","hours",hour,"时");
  		BinaryNum("iminutes","minutes",minute,"分");
  		
  		inte("#canvas_2",100,"#80FF00","#F7FFEE",minute/60,0);	
  		inte("#canvas_3",88,"#0080FF","#EEF7FF",hour/24,AllDay);	
  		inte("#canvas_4",76,"#FF8000","#FFF9F2",tDay/31,0);	
  		inte("#canvas_5",64,"#00AE57","#ECFFF5",tMonth/12,0);	
  	  inte("#canvas_6",52,"#00EEEE","#DFFFFF",tYear/60);
  	  bfirst = 0;
	  }
},1000);
