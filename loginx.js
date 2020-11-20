let email = document.getElementById("email");
let pwd = document.getElementById("pwd");
let num = document.getElementById("num");

function Validate() 
{
 let passwordformat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
 let emailformat = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\.-]+).([a-z]{2,3}).([a-z]{2,3})?$/;
 let phoneformat = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
 if (emailformat.test(email.value)){
    if(passwordformat.test(pwd.value)){ 
        if(phoneformat.test(num.value))
        {
	       return true; 
        }
        else
        {
           alert("Invalid Phone Number!");
           return false;
        }
    }
    else
    { 
    alert(' Invalid Password!')
    return false;
    }
 }
 else{
    alert("Invalid email address!")
    return (false)
  }
}
