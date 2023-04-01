var button = document.getElementById("scare-button");
var audio = new Audio("scary-sound.mp3");

button.onclick = function() {
    alert("你被嚇到了吧！");
    alert("哈哈");
    audio.play();
    document.body.style.backgroundImage = "url('scary-image.jpg')";
    setTimeout(function() {
        document.body.style.backgroundImage = "";
    }, 100);
};
