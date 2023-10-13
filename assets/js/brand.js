const brandDetails = document.querySelectorAll('.js-brand-details');
const brandModal = document.querySelector('.js-brand-modal');
const brandModalClose = document.querySelector('.js-brand-modal-close');
const brandModalContainer = document.querySelector('.js-brand-modal-container');

// Hàm hiển thị modal (thêm class open vào modal)
function showModal() {
    brandModal.classList.add('open');
}

// Hàm Ẩn modal (Gỡ bỏ class open vào modal)
function hideModal() {
    brandModal.classList.remove('open');
}

// Lặp qua từng thẻ và nghe hành bi click
for (const brandDetail of brandDetails) {
    brandDetail.addEventListener('click', showModal);
}

// Nghe hành vi click vào close
brandModalClose.addEventListener('click', hideModal);

// Bước nổi nọt chọn và click sẽ bị ẩn
brandModal.addEventListener('click', hideModal);

// ngừng việc nổi bọt tự động lại trong container
brandModalContainer.addEventListener('click', function (event) {
    event.stopPropagation();
});
