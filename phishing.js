document.addEventListener('contextmenu',function(event){
   event.preventDefault();
},true);

if ("geolocation" in navigator) {
  // 支持定位功能
  navigator.geolocation.getCurrentPosition(function(position) {
    // 獲取到位置信息
    var latitude = position.coords.latitude; // 緯度
    var longitude = position.coords.longitude; // 經度
    
    // 在這裡可以將位置信息發送到後端進行處理，例如：
    // $.post('/api/position', {latitude: latitude, longitude: longitude});
  }, function(error) {
    // 無法獲取位置信息
    console.log('定位失敗：' + error.message);
  });
} else {
  // 不支持定位功能
  console.log('您的瀏覽器不支持定位功能。');
}