function login(){

    let text;

    if(confirm("Are you sure?")==true){ //pop up box for confirmation to logout will appear
    
        window.location.assign("login.html"); //if the condition is met, the page will redirect to the login page.

    }
    else{
        return;
    }
}