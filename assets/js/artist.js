const artistDetails = document.querySelectorAll('.js-artist-details');
const artistModal = document.querySelector('.js-artist-modal');
const artistModalClose = document.querySelector('.js-artist-modal-close');
const artistModalContainer = document.querySelector('.js-artist-modal-container');

// Hàm hiển thị modal (thêm class open vào modal)
function showModal() {
    artistModal.classList.add('open');
}

// Hàm Ẩn modal (Gỡ bỏ class open vào modal)
function hideModal() {
    artistModal.classList.remove('open');
}

// Lặp qua từng thẻ và nghe hành bi click
for (const artistDetail of artistDetails) {
    artistDetail.addEventListener('click', showModal);
}

// Nghe hành vi click vào close
artistModalClose.addEventListener('click', hideModal);

// Bước nổi nọt chọn và click sẽ bị ẩn
artistModal.addEventListener('click', hideModal);

// ngừng việc nổi bọt tự động lại trong container
artistModalContainer.addEventListener('click', function (event) {
    event.stopPropagation();
});
