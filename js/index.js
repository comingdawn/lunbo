//获取页面元素
var ul = document.getElementById("pic-list");
var container = document.getElementById("container");
var btn_left = document.getElementById("btn-left");
var btn_right = document.getElementById("btn-right");
var li_1 = document.getElementsByClassName("img-style");
var imgSum = 4;
var i = 0;
function $(id) {
    return document.getElementById(id);
}
console.log(li_1.style.width);
li_1.style.backgroundImage="url('../image/1.jpg')";
//创建li元素
for(i=1; i<=imgSum; i++){
    console.log(i);
    var li = document.createElement("li");
    ul.appendChild(li.cloneNode(false));
    ul.children[i-1].style.backgroundImage = "url('../image/"+ i.toString() +".jpg')";
}
//左右按钮的出现和消失
container.onmouseover = function () {
    btn_left.style.opacity = 1;
    btn_right.style.opacity = 1;
};
container.onmouseout = function () {
    btn_left.style.opacity = 0;
    btn_right.style.opacity = 0;
};
// window.onload = liCreat(imgSum);
/**
 * 根据imgSum生成li
 * @param imgSum{number} - 轮播图片总数
 */
// function liCreat(imgSum){
//     var i=0;
//     var li = document.getElementById("img-li");
//     li.style.backgroundImage = "url('../image/'" + imgSum +".jpg)";
//     for (i = 0; i < imgSum+1; i++){
//         ul.appendChild(li);
//         li.className = "img-style";
//         if(i == imgSum){
//             li.style.backgroundImage = "url('../image/1.jpg)";
//         }
//         else{
//             li.style.backgroundImage = "url('../image/'" + i+1 +".jpg)";
//         }
//         console.log(li.style.backgroundImage);
//     }
// }
//图片滑动的动画效果
function imgFlide(direction) {
    var imgFlideLength = "1200px";
    if(dirction == "left"){
        imgFlideLength = "-1200px";
    }
    ul.style.transform = "translate(" + imgFlideLength +")";
    ul.style.transition = "3s";
}
