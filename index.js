document.getElementById('login-btn').addEventListener('click',function(){
   const username =  document.getElementById('username-in')
   const password =  document.getElementById('password-in')
   
   const username_input = username.value
   const password_input = password.value

   if (username_input== "admin" && password_input == "admin123") {
     alert("Login Success")
     window.location.assign('/home.html')
   }
   else {alert("Login Failed! Cheek Username and Password and try again")}
})
