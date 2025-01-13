
var  userEmail =document.getElementById("email").Value;
var  userpassword = document.getElementById("password");

var userbutton =document.getElementById("login-button")

function saylaniLogInPage(){
   
    if (useremail === "test@email.com" && userpassword ==="123456"){
        console.log ("login successful")}
       else {console.log
       ("invalid email or password")
       }
}
userbutton.addEventListener("click" , "saylaniLogInPage")
