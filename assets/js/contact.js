const contactDetails = document.querySelectorAll('.js-contact-details');
const contactModal = document.querySelector('.js-contact-modal');
const contactModalClose = document.querySelector('.js-contact-modal-close');
const contactModalContainer = document.querySelector('.js-contact-modal-container');

// Hàm hiển thị modal (thêm class open vào modal)
function showModal() {
    contactModal.classList.add('open');
}

// Hàm Ẩn modal (Gỡ bỏ class open vào modal)
function hideModal() {
    contactModal.classList.remove('open');
}

// Lặp qua từng thẻ và nghe hành bi click
for (const contactDetail of contactDetails) {
    contactDetail.addEventListener('click', showModal);
}

// Nghe hành vi click vào close
contactModalClose.addEventListener('click', hideModal);

// Bước nổi nọt chọn và click sẽ bị ẩn
contactModal.addEventListener('click', hideModal);

// ngừng việc nổi bọt tự động lại trong container
contactModalContainer.addEventListener('click', function (event) {
    event.stopPropagation();
});
