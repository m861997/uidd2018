var bg1 = document.getElementById("bg1");
var river = document.getElementById("river");
var h1 = document.getElementById("h1");
var h2 = document.getElementById("h2");
var bird = document.getElementById("bird");
var house = document.getElementById("house");
var bg2 = document.getElementById("bg2");
var shadow = document.getElementById("shadow");
var temple = document.getElementById("temple");
bg1.style.animation = "fadein 1.5s forwards";
setTimeout(function(){river.style.animation = "fadein 1.5s forwards";},1500);
setTimeout(function(){h1.style.animation = "fadein 1.5s forwards";},3000);
setTimeout(function(){h2.style.animation = "flyindown1 1.5s forwards";},3000);
setTimeout(function(){bird.style.animation = "flyinright 1.5s forwards";},3000);
bird.onclick = function(){click()};
function changeopa1(){
	house.style = "opacity:1;";
}
function changeopa0(){
	house.style = "opacity:0;";
}

function click(){
	bg2.style.opacity = "1";
	bg2.style.zIndex = "4";
	h3.style.zIndex = "4";
	h4.style.zIndex = "4";
	h3.style.animation = "fadein 2s forwards";
	h4.style.animation = "flyindown2 2s forwards";
	bird.style.zIndex = "5";
	bird.style.animation = "flyinright 2s forwards";
	setTimeout(function(){shadow.style.animation = "fadein 1.5s forwards";},1500);
	setTimeout(function(){temple.style.animation = "fadein 1.5s forwards";},1500);
}