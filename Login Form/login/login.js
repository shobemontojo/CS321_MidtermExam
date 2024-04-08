function login(){

    const usName = document.getElementById("useName").value; //getting the value of the username input box
    const pass = document.getElementById("passWord").value; //getting the value of the password inout box

    const dummuser = "shobemontojo";
    const dummpass = "123456789";

//Condition for account authentication
if(usName==dummuser && pass==dummpass){

    window.location.assign("homepage.html"); //if the account is correct, the page from login page will redirect to the homepage
    

}
else{
    alert("Invalid Information");
    return;
}

}