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
  // validate CGU
  let isValid = false;
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
  const first_name = document.querySelector('#first');
  toggleError(first_name.value.length > 2, "#firstnameError");
  // validate last_name
  firstNameValid = first_name.value.length > 2 
  const last_name = document.querySelector('#last');
  lastNameValid = last_name.value.length > 2 
  toggleError(last_name.value.length > 2, "#nameError");
  // validate email
  const email = document.querySelector("#email");
  const regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const emailValid = regexp.test(email.value) 
  toggleError( emailValid, "#emailError");
  // validate if tournament count is a integer
  const tournamentCount = document.querySelector('#quantity');
  if (tournamentCount.value != "") {
    toggleError(Number.isInteger(parseInt(tournamentCount.value)), '#tournamentError')
  }

  if (checkboxCGU == true && checkboxCity == true && emailValid == true &&
    firstNameValid == true && lastNameValid == true) {
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
  // console.log(validate());
  if (!isValid) {
    
  } else {
    modalbg.style.display = "none";
    modalSuccess = document.querySelector("#modalSuccess");
    modalSuccess.style.display = "flex";
  }
})

closeSuccessModal = document.querySelectorAll("#close-successmodal");

closeSuccessModal.forEach(btn => {
  btn.addEventListener("click", (e) => {
    modalSuccess.style.display = "none"
  })
});