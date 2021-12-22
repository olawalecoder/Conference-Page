const contactForm = document.querySelector('#form');
const { name, email, msg } = contactForm.elements;

// storing the form in LocalStorage
contactForm.addEventListener('change', () => {
  const obj = {};

  if (name.value.trim() !== '') {
    obj.userName = name.value.trim();
  }

  if (email.value.trim() !== '') {
    obj.userEmail = email.value.trim();
  }

  if (msg.value.trim() !== '') {
    obj.userMessage = msg.value.trim();
  }

  localStorage.setItem('formData', JSON.stringify(obj));
});

// set Localstorage data to form

const formObj = JSON.parse(localStorage.getItem('formData'));
const { userName, userEmail, userMessage } = formObj;

name.value = userName || '';
email.value = userEmail || '';
msg.value = userMessage || '';