function validate(){

    const fname = document.getElementById("text")
    const password = document.getElementById("pass")
    const passconf = document.getElementById("passcon")
    const mobile = document.getElementById("mobile")
    const form = document.getElementById("form")

    
        
        if(fname.value.length < 3){
            document.getElementById("div1").innerHTML = "Please enter valid name";
            return false;
        }
        else if(password.value.length < 5) {
            
             document.getElementById("div2").innerHTML = "Password should contain atleast 5 characters";
             return false;
        }
        else if(password.value.length != passconf.value.length) {
           
            document.getElementById("div3").innerHTML = "Password should match";
            return false;
        }
        else if(mobile.value.length < 10) {
            
            document.getElementById("div4").innerHTML = "Please enter valid mobile number";
            return false;
        }
        else {
           return true
        }
    
}