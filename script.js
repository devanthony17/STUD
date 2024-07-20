document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('editStudentModal');
    const closeBtn = document.querySelector('.close');
    const confirmBtn = document.querySelector('.confirm-btn');

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    confirmBtn.addEventListener('click', () => {
        alert('Confirm button clicked');
        modal.style.display = 'none';
    });
});
