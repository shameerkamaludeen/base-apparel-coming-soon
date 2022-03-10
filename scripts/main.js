const form = document.getElementsByTagName('form')[0];
form.setAttribute('novalidate', '');

const email = document.getElementById('email');

const emailError = document.querySelector('.error');

const emailErrorImg = document.querySelector('.error-img');

email.addEventListener('input', event => {
    if (email.validity.valid) {
        emailError.textContent = '';
        emailError.classList.toggle('active', false);
        emailErrorImg.classList.toggle('active', false);
    }
});

form.addEventListener('submit', event => {
    if (!email.validity.valid) {
        showError();
        event.preventDefault();
    }
});

function showError() {
    if (email.validity.valueMissing) {
        emailError.textContent = 'Please enter email';
    } else if (email.validity.typeMismatch) {
        emailError.textContent = 'Please provide a valid email';
    } else if (email.validity.tooShort) {
        emailError.textContent = `Email should be at least ${email.minLength} characters`;
    }

    emailError.classList.toggle('active', true);
    emailErrorImg.classList.toggle('active', true);
}