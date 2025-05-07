// const showPopupBtn = document.getElementById('showPopupBtn');
// const imagePopup = document.getElementById('imagePopup');
// const closeBtn = document.querySelector('.close-btn');
// const imageSlider = document.querySelector('.image-slider');
// const prevBtn = document.getElementById('prevBtn');
// const nextBtn = document.getElementById('nextBtn');
// const images = document.querySelectorAll('.image-slider img');
// let currentIndex = 0;

// // ฟังก์ชันเปิดป๊อปอัพ
// function openPopup() {
//   imagePopup.style.display = 'flex';
//   showImage(currentIndex);
// }

// // ฟังก์ชันปิดป๊อปอัพ
// function closePopup() {
//   imagePopup.style.display = 'none';
//   currentIndex = 0; // รีเซ็ตตำแหน่งเมื่อปิด
// }

// // ฟังก์ชันแสดงรูปภาพตาม index
// function showImage(index) {
//   const translateXValue = -index * 100 + '%';
//   imageSlider.style.transform = 'translateX(' + translateXValue + ')';
// }

// // Event listeners
// showPopupBtn.addEventListener('click', openPopup);
// closeBtn.addEventListener('click', closePopup);
// imagePopup.addEventListener('click', (event) => {
//   if (event.target === imagePopup) {
//     closePopup();
//   }
// });

// prevBtn.addEventListener('click', () => {
//   if (currentIndex > 0) {
//     currentIndex--;
//     showImage(currentIndex);
    
//   }
  
// });

// nextBtn.addEventListener('click', () => {
//   if (currentIndex < images.length - 1) {
//     currentIndex++;
//     showImage(currentIndex);
//   }
// });