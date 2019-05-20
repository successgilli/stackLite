const title = document.querySelector('.title');
const description = document.querySelector('.description');
const button = document.querySelector('.submit-btn');
const error = document.querySelector('.error');
const details = document.querySelector('.data');
const token = localStorage.getItem('token');

const validateInput = () => {
  if ((title.value === '') || (description.value === '')) {
    error.style.display = 'flex';
    details.innerHTML = 'title or description is empty';
    setTimeout(() => {
      error.style.display = 'none';
      details.innerHTML = '';
    }, 1500);
  } else {
    const url = `https://stack-o-lite.herokuapp.com/api/v1/questions?token=${token}`;
    const data = { 
      questionTitle: title.value,
      questionDescription: description.value
    };
    fetchData(url, data);
  }
}


const fetchData = (url, data) => {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
  }).then(response => {
    return response.json();
  }).then(result => {
    console.log(result);
    error.style.borderColor = 'green';
    details.innerHTML = 'question created successfully';
    setTimeout(() => {
      error.style.display = 'none';
      details.innerHTML = '';
    }, 1500);
  })
}

button.addEventListener('click', () => {
  validateInput();
});
