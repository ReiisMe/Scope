function login() {
 
    var username = document.getElementById("username");
    var pass = document.getElementById("password");
    if (username.value == "") {
 
        alert("enter your username");
 
    } else if (pass.value  == "") {
 
        alert("enter your password");
 
    } else if(username.value == "kelly" && pass.value == "123456"){
 
        window.location.href="../index.html?username="+username.value;
 
    } else {
 
        alert("please enter the correct username or password")
 
    }
}
