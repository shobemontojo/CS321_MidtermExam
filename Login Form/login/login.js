function login(){

const loginBtn = document.querySelector(".login-btn")
let userName = document.getElementById("username").value;
let pass = document.getElementById("password").value;

let dummuser = "admin";
let dummpass = "123";


if(userName==username && pass==password){

    loginBtn.addEventListener("click", ()=>{
        window.location.replace = "homepage.html";
    })

}

    
}