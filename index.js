
var loginButton =document.getElementById("loginButton")

function saylaniLogInPage(){
   
var  userEmail =document.getElementById("email").Value;
var  userPassword = document.getElementById("password").value;

    if (userEmail === "test@example.com" && userPassword ==="123456"){
        alert ("login successful")}
       else {alert ("invalid email or password")
       }
}
loginButton.addEventListener("click" , "saylaniLogInPage")
