let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

var mountain1 = document.getElementById("mountain1");

//建立一個物件儲存滑鼠目前的x,y座標
let mouse = {
  x: 0,
  y: 0
};

//加入監聽器
window.addEventListener("mousemove", (event) => {
  //在這裡把滑鼠座標寫到物件mouse中
  mouse.x = event.pageX;
  mouse.y = event.pageY;

  var mountain1 = document.querySelector(".mountain1");
  mountain1.style.transform = "translateX(" + mouse.x / -10 + "px) ";

  var mountain2 = document.querySelector(".mountain2");
  mountain2.style.transform = "translateX(" + mouse.x / -10 + "px) ";

  var mountain3 = document.querySelector(".mountain3");
  mountain3.style.transform = "translateX(" + mouse.x / -15 + "px) ";

  var mountain4 = document.querySelector(".mountain4");
  mountain4.style.transform = "translateX(" + mouse.x / -15 + "px) ";

  var cloud1 = document.querySelector(".cloud1");
  cloud1.style.transform = "translateX(" + mouse.x / -45 + "px) ";

  var cloud2 = document.querySelector(".cloud2");
  cloud2.style.transform = "translateX(" + mouse.x / -45 + "px) ";

  var cloud3 = document.querySelector(".cloud3");
  cloud3.style.transform = "translateX(" + mouse.x / -65 + "px) ";

  // var Nursery = document.querySelector(".Nursery");
  // Nursery.style.transform = "translateX(" + mouse.x / 5 + "px) ";
});
