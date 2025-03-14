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
const closeBtn = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal element
closeBtn.addEventListener("click", closeModal);

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// Validation submit
const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const email = document.querySelector("#email");
const quantity = document.querySelector("#quantity");
const checkboxInputs = document.querySelectorAll(".checkbox-input");
const selectedRadio = document.querySelector('input[name="location"]:checked');
const selectedTerms = document.querySelector("#checkbox1");
const selectedNews = document.querySelector("#checkbox2");

const inscriptionForm = document.querySelector('input[name="reserve"]');

const isFirstNameCorrect = (firstName) => {
  return firstName.length >= 2 && firstName != "";
};

const isLastNameCorrect = (lastName) => {
  return lastName.length >= 2 && lastName != "";
};

const isEmailCorrect = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const isQuantityCorrect = (quantity) => {
  return !isNaN(quantity) && Number(quantity) > 0 && quantity !== "";
};

const isBtnRadioCorrect = (selectedRadio) => {
  return selectedRadio !== null;
};

const isBtnTermsCorrect = (selectedTerms) => {
  return selectedTerms.checked;
};

const isBtnNewsCorrect = (selectedNews) => {
  if (selectedNews) {
    return true;
  } else {
    return true;
  }
};

const isFormValid = () => {
  return (
    isFirstNameCorrect(firstName) &&
    isLastNameCorrect(lastName) &&
    isEmailCorrect(email) &&
    isQuantityCorrect(quantity) &&
    isBtnRadioCorrect(selectedRadio) &&
    isBtnTermsCorrect(selectedTerms) &&
    isBtnNewsCorrect(selectedNews)
  );
};
