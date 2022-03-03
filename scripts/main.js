const form = document.getElementsByTagName('form')[0];

const email = document.getElementById('email');

const emailError = document.querySelector('.error');

const emailErrorImg = document.querySelector('.error-img');

email.addEventListener('input', event => {
    if (email.validity.valid) {
        emailError.textContent = '';
        removeClass(emailError, 'active');
        removeClass(emailErrorImg, 'active');
    } else {
        showError();
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
        emailError.textContent = 'Email should be at least ${email.minLength} characters';
    }

    addClass(emailError, 'active');
    addClass(emailErrorImg, 'active');
}

function addClass(nodeElement, className) {
    if (!nodeElement.classList.contains(className)) {
        nodeElement.classList.add(className);
    }
}

function removeClass(nodeElement, className) {
    if (nodeElement.classList.contains(className)) {
        nodeElement.classList.remove(className);
    }
}



