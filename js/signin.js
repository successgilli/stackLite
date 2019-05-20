let submit = document.getElementById('submit');
let email = document.getElementById('email');
let password = document.getElementById('password');
let form = document.getElementById('form');


const url = 'https://stack-o-lite.herokuapp.com/api/v1/auth/login';

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let data = {
        email: email.value,
        password: password.value,
    }
    const req = new Request(url, {
        method: 'POST',
        headers: new Headers({'Content-type': 'application/json'}),
        body: JSON.stringify(data),
    })
    
    fetch(req)
        .then((res) => res.json())
        .then(data => {
            if (data.status === 'success') {
                location = './question.html'
            } else {
                alert(data.message)
            }
        })
});
