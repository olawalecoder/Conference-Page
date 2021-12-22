const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  const email = document.getElementById('email').value;
  const message = document.getElementById('message');
  const pattern = /^[^]+@[^]+\.[a-z]{2,3}$/;
  if (email === email.toLowerCase() && email.match(pattern)) {
    message.innerHTML = 'Your Email Address is Valid. <br> Form was sent.';
    message.style.color = '#F55800';
    form.submit();
  } else {
    message.innerHTML = 'Please write your email in lowercase!. <br> The form was not sent';
    message.style.color = '#ff0000';
    e.preventDefault();
  }
});