var metas = document.getElementsByTagName('meta');
var i;
if (navigator.userAgent.match(/iPhone/i)) {
  for (i=0; i<metas.length; i++) {
    if (metas[i].name == "viewport") {
      metas[i].content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
    }
  }
  document.addEventListener("gesturestart", gestureStart, false);
}
function gestureStart() {
  for (i=0; i<metas.length; i++) {
    if (metas[i].name == "viewport") {
      metas[i].content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";
    }
  }
}
function ShowtoHide(myid,mysrc) {
if(document.getElementById(myid).innerHTML=="") {
//alert('<img src="'+mysrc+'"/>');
document.getElementById(myid).innerHTML='<img src="'+mysrc+'"/>';}
else
{
document.getElementById(myid).innerHTML="";
}}

/*
function ShowtoHide(comfirmPic1Local,lookPic) {
if(document.getElementById(lookPic).innerHTML=='<i class="fa fa-eye" aria-hidden="true"></i>') {
document.getElementById(comfirmPic1Local).style.display = "block";
document.getElementById(lookPic).innerHTML='<i class="fa fa-eye-slash" aria-hidden="true"></i>'; } else
if(document.getElementById(lookPic).innerHTML=='<i class="fa fa-eye-slash" aria-hidden="true"></i>') {
document.getElementById(comfirmPic1Local).style.display = "none";
document.getElementById(lookPic).innerHTML='<i class="fa fa-eye" aria-hidden="true"></i>';
}}
*/