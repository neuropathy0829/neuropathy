//禁用右鍵
document.addEventListener('contextmenu', function (event) {
  event.preventDefault();
}, true);

//禁用F12、Ctrl+Shift+I、Ctrl+Shift+J、Ctrl+U
document.onkeydown = function (e) {
  if (event.keyCode == 123) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
    return false;
  }
}

// 使用JavaScript禁止整個頁面的文本選取
document.addEventListener('selectstart', (e) => {
  e.preventDefault();
});

//18歲彈窗
document.addEventListener('DOMContentLoaded', function () {
  showOverlay();
});

function showOverlay() {
  document.getElementById('overlay').style.display = 'flex';
  document.body.style.overflow = 'hidden'; // 隱藏網頁滾動
}

function closeOverlay() {
  document.getElementById('overlay').style.display = 'none';
  document.body.style.overflow = 'auto'; // 恢復網頁滾動
}

function redirectToOtherSite() {
  window.location.href = 'https://reurl.cc/ZWgMWg'; // 替換成您想要跳轉的其他網站URL
}