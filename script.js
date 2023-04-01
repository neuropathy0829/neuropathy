var button = document.getElementById("scare-button");
var audio = new Audio("1.mp3");
var img = document.createElement('img');
var container = document.getElementById('image-container');
img.src = '1.jpg';
img.alt = '圖片';

button.onclick = function() {
    alert("你被嚇到了吧！");
    alert("哈哈");
    audio.play();
    container.appendChild(img);
};
