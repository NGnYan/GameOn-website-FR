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

// Launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal element
closeBtn.addEventListener("click", closeModal);

// Close the form modal
function closeModal() {
  modalbg.style.display = "none";
}

// Conditions elements
const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const email = document.querySelector("#email");
const quantity = document.querySelector("#quantity");
const selectedRadio = document.querySelectorAll('input[name="location"]');
const selectedTerms = document.querySelector("#checkbox1");
const selectedNews = document.querySelector("#checkbox2");
const inscriptionForm = document.querySelector(".btn-submit");

// Conditions for valid form submission
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
  return !isNaN(quantity) && Number(quantity) > 0;
};

const isBtnRadioCorrect = (selectedRadio) => {
  return selectedRadio.checked;
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

// Form submission

inscriptionForm.addEventListener("click", (event) => {
  event.preventDefault();

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

  const conditionsValid = isFormValid();

  if (isFormValid()) {
    console.log("Formulaire valide");
  } else {
    console.log("Formulaire invalide");
  }
});
