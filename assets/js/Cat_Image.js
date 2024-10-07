const catImage = document.getElementById('catImage');
const newCatButton = document.getElementById('newCatButton');

function fetchCatImage() {
    fetch('https://api.thecatapi.com/v1/images/search?limit=1&api_key=live_eEC0uq3zBWcioKk2gKYisdIcCJXfUCsNIudOKibbR5yjtnqOHBEgmPqo7Us8S307')
        .then(response => response.json())
        .then(data => {
            catImage.src = data[0].url; // 更新圖片的src為獲取到的貓咪圖片
            // 在這裡控制圖片的大小
            catImage.style.maxWidth = '500px';  // 最大寬度設置為500px
            catImage.style.height = 'auto';     // 高度自動調整
            console.log(data)
        })
        .catch(error => {
            console.error('Error fetching cat image:', error);
        });
}

// 初始加載隨機貓咪圖片
fetchCatImage();

// 點擊按鈕時加載新的貓咪圖片
newCatButton.addEventListener('click', fetchCatImage);