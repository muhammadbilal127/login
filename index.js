
var button =document.getElementById('button')

function userLogin(){
var  userEmail =document.getElementById("email").value;

var  userPassword =document.getElementById("password").value;

    if (userEmail === "test@example.com" && userPassword ==="123456"){
       
        alert ("login successful")
        
    }else {
        alert ("invalid email or password")
       }
}
button.addEventListener("click" , userLogin)
