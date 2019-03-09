let oUl=document.getElementById("moving");
let timer1=null;
let speed=-2;
let aLi=oUl.getElementsByTagName("li");
let totalWidth=parseInt(getComputedStyle(oUl).width);
let oBtn1=document.getElementById("btn1");
let oBtn2=document.getElementById("btn2");
function rolling(){
    timer1=setInterval(() => {
        if(oUl.offsetLeft < -totalWidth/2)
        {
            oUl.style.left=0;
        }
        if(oUl.offsetLeft > 0)
        {
            oUl.style.left= -totalWidth/2+"px";
        }
        oUl.style.left=oUl.offsetLeft+speed+"px";
    },30);
}
oBtn1.onclick=function () {
    speed=-2;
}
oBtn2.onclick=function () {
    speed=2;
}
oUl.onmouseover=function () {
    clearInterval(timer1);
}
oUl.onmouseout=function () {
    rolling();
}
rolling();