const signupForm = document.querySelector('#signup-form');
const error = document.querySelector('.error');
const success = document.querySelector('.success');

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = signupForm.name.value;
  const email = signupForm.email.value;
  const password = signupForm.password.value;

  if (!name || !email || !password) {
    error.textContent = 'All the fields are mandatory';
    return;
  }

  const Tokens = accessToken();

  const newUser = {
    name,
    email,
    password,
    Tokens,
  };

  localStorage.setItem("currentUser", JSON.stringify(newUser));

  success.textContent = 'Successfully Signed Up';
  error.textContent =''
  setTimeout(()=>{
    window.location.href = '/profile.html';
  },100);
});

function accessToken() {
  const characters =
    '@#$%^&_/*?ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let token = '';
  for (let i = 0; i < 16; i++) {
    token += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return token;
}