function login(){

    const usName = document.getElementById("useName").value;
    const pass = document.getElementById("passWord").value;

    const dummuser = usName;
    const dummpass = pass;

//Condition for account authentication
if(usName==dummuser && pass==dummpass){

    window.location.assign("homepage.html");
    

}
else{
    alert("Invalid Information");
    return;
}

}