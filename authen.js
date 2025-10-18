import supabase from "./config.js";

let registerForm =document.getElementById('registerForm');


let semail =document.getElementById('exampleInputEmail1');
let spassword =document.getElementById('exampleInputPassword1');

async function signup(e){
    e.preventDefault();
try{
    if(!semail.value){
        alert('Please enter email');
        return
    }
    if(!spassword.value){
        alert('Please enter ppassword');
        return
    }
 const { data, error } = await supabase.auth.signUp({
  email: semail.value,
  password: spassword.value,
  option:{
    data:{
        first_name:'Hira',
        last_name:'Israr'
    }
  }
});

if (error) {
  console.log("Signup Error:", error);
  alert(error.message);
  return;
} // addition

if(data){
    console.log(data);
    location.href='home.html';
}
} catch(err){

}

}
registerForm.addEventListener('submit',signup);












// __________________________________login


let loginForm =document.getElementById('registerForm');


let lemail =document.getElementById('exampleInputEmail1');
let lpassword =document.getElementById('exampleInputPassword1');

async function login (e){
    e.preventDefault();
try{
    if(!lemail.value){
        alert('Please enter email');
        return
    }
    if(!lpassword.value){
        alert('Please enter ppassword');
        return
    }
 const { data, error } = await supabase.auth.signUp({
  email: lemail.value,
  password: lpassword.value,
});

if (error) {
  console.log("Signup Error:", error);
  alert(error.message);
  return;
} // addition

if(data){
    console.log(data);
    location.href='home.html';
}
} catch(err){

}

}
loginForm.addEventListener('submit',login)