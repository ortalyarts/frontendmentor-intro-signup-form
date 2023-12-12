
// Form validation

var emailInvalid = document.querySelector('#email-invalid-message');
var inputInvalid = document.querySelector('#Email');

let firstName = document.querySelector('#firstName');
let lastName = document.querySelector('#lastName');
let password = document.querySelector('#password');
let email = document.querySelector('#Email');

// Function validating the filds
function validate(inputId, inputType){
  let n = inputId; // get input id
  let nType = inputType; // get input type
  let nInvalidMessage = n.parentNode.querySelector('.invalid-message');

  function addError (){
    nInvalidMessage.classList.add('activeMessage');
    n.classList.add('input-invalid');
  }
  function removeError (){
    nInvalidMessage.classList.remove('activeMessage');
    n.classList.remove('input-invalid');
  }
  if (n.value == "") {
    addError();
  } 
  // Email validation 
  else if (nType == "email") {
    var rea = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    var Email = $(inputInvalid).val();
    var x = rea.test(Email);
    if (!x) { // Switch error message if Email is not formated correctly
      nInvalidMessage.classList.remove('activeMessage');
      n.classList.add('input-invalid');
      emailInvalid.classList.add('activeMessage');
    }
    else{
      n.classList.remove('input-invalid');
      emailInvalid.classList.remove('activeMessage');
    }
  }
  else{
    removeError();
  }
}

$("#submit").click(function(){       

  // Calling validation for all the fields
  validate (firstName, 'text');
  validate (lastName, 'text');
  validate (password, 'password');
  validate (email, 'email');
})
