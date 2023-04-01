var button = document.getElementById("scare-button");
var audio = new Audio("1.mp3");

button.onclick = function() {
    alert("你被嚇到了吧！");
    alert("哈哈");
    audio.play();
};
