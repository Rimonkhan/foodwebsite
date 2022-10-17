

var footerButon = document.getElementById('footerButon');
var email = document.getElementById('email');
var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;



footerButon.addEventListener('click', ()=>{
    if(email.value == null || email.value == ""){
        alert("plese fill up the information");
    }

  else  if(email.value.match(validRegex)){
        alert("Thank you for your given valid email")
        console.log(email.value);
    }

    else{
        alert('NOt a valid email')
    }

});




// Can also be included with a regular script tag

