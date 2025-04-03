function signup() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
        alert('Please fill in all fields to sign up.');
        return;
    }

    if (localStorage.getItem('userEmail') && localStorage.getItem('userPassword')) {
        alert('You are already signed up. Please log in.');
        return;
    }

    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);
    alert('Signup successful! You can now log in.');
}

function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const savedEmail = localStorage.getItem('userEmail');
    const savedPassword = localStorage.getItem('userPassword');

    if (!savedEmail || !savedPassword) {
        alert('Please sign up before logging in.');
        return;
    }

    if (email === savedEmail && password === savedPassword) {
        alert('Login successful!');
        document.body.innerHTML = '<h1><a href="xyz/index.html" target="_blank">Welcome</a></h1>';
    } else {
        alert('Invalid email or password.');
    }
}

function forgotPassword() {
    const email = prompt('Enter your registered email:');
    const savedEmail = localStorage.getItem('userEmail');

    if (email === savedEmail) {
        alert('Password reset link sent to your email!');
    } else {
        alert('Email not found. Please sign up.');
    }
}