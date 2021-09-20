function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const form = document.querySelector("#form");
const btnExit = document.querySelector("#closeForm");
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
};
// hide modal on click X
btnExit.addEventListener('click', (e) => {
  modalbg.style.display = "none";
});

// validation form
const validate = () => {
  // return this value if valid or not
  let isValid = false;

  // validate CGU 
  const checkbox = document.querySelector("#checkbox1");
  let checkboxCGU = checkbox.checked;
  toggleError(checkboxCGU, "#cguError");
  
  // validate city
  let checkboxCity = false
  const checkCity = formData[5].querySelectorAll(".checkbox-input");
  checkCity.forEach(city => {
    if (city.checked) {
      checkboxCity = true;
    }
  });
  toggleError(checkboxCity, "#cityError")
  
  // validate first_name
  const regexpName = /[a-zA-Z]{3,}/;
  const first_name = document.querySelector('#first');
  const firstNameValid = regexpName.test(first_name.value);
  console.log(regexpName.test(first_name.value));
  toggleError(firstNameValid, "#firstnameError");
  // validate last_name
  const last_name = document.querySelector('#last');
  const lastNameValid = regexpName.test(last_name.value);
  toggleError(lastNameValid, "#nameError");
  // validate email
  const email = document.querySelector("#email");
  const regexpEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const emailValid = regexpEmail.test(email.value) 
  toggleError( emailValid, "#emailError");
  // validate if tournament count is a integer
  const tournamentCount = document.querySelector('#quantity');
  if (tournamentCount.value != "") {
    toggleError(Number.isInteger(parseInt(tournamentCount.value)), '#tournamentError')
  }

  if (checkboxCGU  && checkboxCity  && emailValid  &&
    firstNameValid  && lastNameValid ) {
    isValid = true;
  } 
  return isValid
}

// display errors messages
const toggleError = (value, id) => {
  let element = document.querySelector(id);
  if (value == true) {
    element.style.display = "none";
  } else {
    element.style.display = "block"
  }
}

// submit form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let isValid = validate();
  if (isValid) {
    // hide form & display success modal 
    modalbg.style.display = "none";
    modalSuccess = document.querySelector("#modalSuccess");
    modalSuccess.style.display = "flex";
  } 
})

// Close success modal  
closeSuccessModal = document.querySelectorAll("#close-successmodal");
closeSuccessModal.forEach(btn => {
  btn.addEventListener("click", (e) => {
    modalSuccess.style.display = "none"
  })
});