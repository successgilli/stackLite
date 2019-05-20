const btn = document.getElementById('signupBtn');
const firstnameInput = document.getElementById('firstName');
const lastnameInput = document.getElementById('lastName');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');

const url = 'https://stack-o-lite.herokuapp.com/api/v1/auth/signup';
btn.addEventListener('click', (e) => {
e.preventDefault();
console.log({
    firstnameInput: firstnameInput.value,
    lastnameInput: lastnameInput.value,
    emailInput: emailInput.value,
    passwordInput: passwordInput.value,
    confirmPasswordInput: confirmPasswordInput.value,
});
const request = new Request(url, {
    method: 'POST',
    headers: new Headers({'Content-type':'application/json', 'Accept':'application/json,text/plain,*/*'}),
    body: JSON.stringify({
        firstName: firstnameInput.value,
        lastName: lastnameInput.value,
        email: emailInput.value,
        password: passwordInput.value,
        confirmPassword: confirmPasswordInput.value,
    }),
} )
fetch(request).then( res => res.json()).then(obj => {
    if (obj.status === 'success') {
        localStorage.setItem('token', obj.data.token);
        location = './question.html';
    } else {
        alert(obj.message);
    }
})
})