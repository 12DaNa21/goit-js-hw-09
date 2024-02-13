
const LOCAL_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', onInputData);
form.addEventListener('submit', onFormSubmit);

let dataForm = JSON.parse(localStorage.getItem(LOCAL_KEY)) || {};
const { email, message } = form.elements;
reloadPage();

function onInputData(e) {
  const { name, value } = e.target;

    if (dataForm.hasOwnProperty(name)) {
    dataForm[name] = value.trim();
    localStorage.setItem(LOCAL_KEY, JSON.stringify(dataForm));
  }
}

function reloadPage() {
   if (dataForm && dataForm.email) {
    email.value = dataForm.email;
  }
  if (dataForm && dataForm.message) {
    message.value = dataForm.message;
  }
}

function onFormSubmit(e) {
  e.preventDefault();

    if (email.value.trim() === '' || message.value.trim() === '') {
    return alert('Please fill in all the fields!');
  }

    console.log({ email: email.value, message: message.value });

  localStorage.removeItem(LOCAL_KEY);
  e.currentTarget.reset();
  dataForm = {};
}