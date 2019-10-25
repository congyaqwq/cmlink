// 侧边栏的显示
var icon = document.getElementById("icon");
var aside = document.getElementsByTagName("aside")[0];
var cover = document.getElementById("cover");
icon.onclick = function show(){
	// aside.style.visibility = "visible";
	// cover.style.visibility = "visible";
	aside.classList.remove("hidden");
	cover.classList.remove("hidden");
	cover.classList.add("show");
	aside.classList.add("show");
}
var close = document.getElementById("close");
close.onclick = hide;
cover.onclick = hide;
function hide(){
	console.log("HIDE")
	aside.classList.remove("show");
	cover.classList.remove("show");
	aside.classList.add("hidden");
	cover.classList.add("hidden");
	// cover.style.visibility = "hidden";
}

// 获取图片高度覆盖图片
function coverImg(){
	var img = document.getElementById("needed-cover");
	var height = img.height;
	// console.log(img.height)
	var white_cover = document.getElementById("white-cover");
	white_cover.style.height = height + "px";
}
coverImg();

var scroll = document.getElementById("scroll");
// console.log(scroll.scrollLeft);
// console.log(scroll.scrollWidth);

var width = document.documentElement.clientWidth;
var dots = document.getElementsByClassName("plan-dot");
function scrollCenter(width){
	// console.log(scroll.scrollLeft)
	scroll.scrollLeft = 160-(width-250)/2;
	// console.log(scroll.scrollLeft,width)

	dots[0].style.backgroundColor = "pink";

	for(let i=0;i<4;i++){
		dots[i].onclick = function change(){
			console.log(i)
			scroll.scrollLeft = 160-(width-250)/2 + i*410;
			for(let j=0;j<4;j++){
				if(j==i){
					dots[i].style.backgroundColor = "pink";
				}else{
					dots[j].style.backgroundColor = "white";
				}
			}
		}
	}
}
scrollCenter(document.documentElement.clientWidth);

var scrollpayg = document.getElementById("paygscroll");
// console.log(scrollpayg.scrollWidth)
var dotsP = document.getElementsByClassName("plan-dot-payg");

dotsP[0].style.backgroundColor = "pink";
function paygScrollCenter(i,width=scrollpayg.scrollWidth){
	console.log(i)
	scrollpayg.scrollLeft = (width/3)*(i);
	for(let j=0;j<3;j++){
		if(j==i){
			dotsP[i].style.backgroundColor = "pink";
		}else{
			dotsP[j].style.backgroundColor = "#ddd";
		}
	}
}
for(let i=0;i<3;i++){
	dotsP[i].onclick = function(){
		paygScrollCenter(i)
	}
}
paygScrollCenter(0)

// 每次窗口重组
window.onresize = function(){
	coverImg();
	var aside = document.getElementsByTagName("aside")[0];
	var width = document.documentElement.clientWidth;
	aside.style.height = document.documentElement.clientHeight - 100 + "px"; 
	scrollCenter(width);
	paygScrollCenter(0)
}
