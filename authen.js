import { supabase } from "./config.js";

const registerForm = document.getElementById('registerForm');
const semail = document.getElementById('signupEmail');
const spassword = document.getElementById('signupPassword');

async function signup(e) {
  e.preventDefault();

  if (!semail.value || !spassword.value) {
    alert('Please fill all fields');
    return;
  }

  const { data, error } = await supabase.auth.signUp({
    email: semail.value,
    password: spassword.value,
    options: {
      data: { name: document.getElementById('username').value }
    }
  });

  if (error) {
    console.log('Signup Error:', error);
    alert(error.message);
    return;
  }

  alert('Signup successful! Check your email to confirm.');
  window.location.href = 'login.html';
}

registerForm?.addEventListener('submit', signup);
