//simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

const FirstName = document.querySelector("#first-name-input");
const Lastname = document.querySelector("#last-name-input");
const Email = document.querySelector("#email-input");
const Password = document.querySelector("#password-input");
const RegButton = document.querySelector("#submit-btn");

RegButton.onclick = () => {
  let FirstNCheck = false;
  let LastNCheck = false;
  let EmailCheck = false;
  let PassCheck = false;

  if (FirstName.value === "") {
    FirstName.classList.add("is-invalid");
  } else {
    FirstName.classList.add("is-valid");
    FirstNCheck = true;
  }

  if (Lastname.value === "") {
    Lastname.classList.add("is-invalid");
  } else {
    Lastname.classList.add("is-valid");
    LastNCheck = true;
  }

  if (validateEmail(Email.value)) {
    Email.classList.add("is-valid");
    EmailCheck = true;
  } else {
    Email.classList.add("is-invalid");
  }

  if (Password.value.length >= 6) {
    Password.classList.add("is-valid");
    PassCheck = true;
  } else {
    Password.classList.add("is-invalid");
  }

  if (FirstNCheck && LastNCheck && EmailCheck && PassCheck) {
    alert("Registered successfully");
  }
};

FirstName.onkeyup = () => {
  FirstName.classList.remove("is-invalid");
  FirstName.classList.remove("is-valid");
};

Lastname.onkeyup = () => {
  Lastname.classList.remove("is-invalid");
  Lastname.classList.remove("is-valid");
};

Email.onkeyup = () => {
  Email.classList.remove("is-invalid");
  Email.classList.remove("is-valid");
};

Password.onkeyup = () => {
  Password.classList.remove("is-invalid");
  Password.classList.remove("is-valid");
};
