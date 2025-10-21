import { supabase } from "./config.js";

const loginForm = document.getElementById('loginForm');
const lemail = document.getElementById('loginEmail');
const lpassword = document.getElementById('loginPassword');

async function login(e) {
  e.preventDefault();

  if (!lemail.value || !lpassword.value) {
    alert('Please fill all fields');
    return;
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email: lemail.value,
    password: lpassword.value
  });

  if (error) {
    console.log('Login Error:', error);
    alert(error.message);
    return;
  }

  console.log('Login Success:', data);
  window.location.href = 'home.html';
}

loginForm?.addEventListener('submit', login);
