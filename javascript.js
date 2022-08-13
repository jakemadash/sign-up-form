const password = document.getElementById('password');
const passwordConfirm = document.getElementById('password-confirm');
const message = document.getElementById('error');

password.addEventListener('input', () => {
    if (passwordConfirm.value !== '' && password.value !== passwordConfirm.value) {
        passwordConfirm.classList.add('error');
        message.textContent = '* Passwords do not match';
        message.style.color = 'red';
    }

    else if (password.value !== '' && passwordConfirm.value === password.value) {
        passwordConfirm.classList.remove('error');
        message.textContent = 'Passwords match!';
        message.style.color = 'green';
    }

    else if (password.value !== '') {
        password.classList.remove('error');
    }
})

passwordConfirm.addEventListener('input', () => {
    if (password.value !== '' && passwordConfirm.value === password.value) {
        passwordConfirm.classList.remove('error');
        message.textContent = 'Passwords match!';
        message.style.color = 'green';
    }

    else {
        passwordConfirm.classList.add('error');
        message.textContent = '* Passwords do not match';
        message.style.color = 'red';
    }
});