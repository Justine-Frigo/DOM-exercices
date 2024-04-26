let inputButton = document.querySelectorAll("input");
inputButton[0].addEventListener("keyup", () => {
  document.getElementById("display-firstname").innerHTML = inputButton[0].value;
});

inputButton[1].addEventListener("keyup", () => {
  if (inputButton[1].value < 18) {
    document.getElementById("a-hard-truth").style.visibility = "hidden";
  } else {
    document.getElementById("a-hard-truth").style.visibility = "visible";
  }
});

let pwd = document.getElementById("pwd");
let pwdConfirm = document.getElementById("pwd-confirm");
let pwdError = document.getElementById("pwd-error");

function passCheck() {
  if (pwd.value === pwdConfirm.value && pwd.value.length > 5) {
    pwd.style.border = "1px solid #065143";
    pwd.style.color = "#065143";
    pwdConfirm.style.border = "1px solid #065143";
    pwdConfirm.style.color = "#065143";
    pwdError.textContent = "";
  } else {
    pwd.style.border = "1px solid #FF4242";
    pwd.style.color = "#FF4242";
    pwdConfirm.style.border = "1px solid #FF4242";
    pwdConfirm.style.color = "#FF4242";
    if (pwd.value !== pwdConfirm.value) {
      pwdError.textContent = "The password doesn't match.";
    } else if (pwd.value.length <= 5) {
      pwdError.textContent = "The password must contain at least 6 characters.";
    }
  }
}

pwdConfirm.addEventListener("keyup", passCheck);
pwd.addEventListener("keyup", passCheck);


let darkmodeToggle = document.getElementById("toggle-darkmode");

darkmodeToggle.addEventListener("change", setDark);

function setDark() {
  let darkmode = darkmodeToggle.selectedIndex;
  let selectedOption = darkmodeToggle.getElementsByTagName("option")[darkmode];
  let selectedMode = selectedOption.value;

  if (selectedMode === "dark") {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
}


let firstnameInput = document.getElementById("firstname");
let ageInput = document.getElementById("age");

let firstnameError = document.getElementById("firstname-error");
let ageError = document.getElementById("age-error");

firstnameInput.addEventListener("keyup", () => {
  if (firstnameInput.value.length === 0) {
    firstnameError.textContent = "This field must be completed.";
  } else {
    firstnameError.textContent = "";
  }
});

ageInput.addEventListener("keyup", () => {
  if (ageInput.value < 18) {
    ageError.textContent = "You must be of legal age.";
  } else {
    ageError.textContent = "";
  }
});
