function editNav() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtns = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");

// Launch modal event
modalBtns?.forEach((btn) => btn.addEventListener("click", launchModal));

// Launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal element
closeBtn?.addEventListener("click", closeModal);

// Close the form modal
function closeModal() {
  modalbg.style.display = "none";
}

// Conditions for valid form submission
const isFirstNameCorrect = (firstName) => {
  return firstName?.length >= 2 && firstName != "";
};

const isLastNameCorrect = (lastName) => {
  return lastName?.length >= 2 && lastName != "";
};

const isEmailCorrect = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex?.test(email);
};

const isQuantityCorrect = (quantity) => {
  return !isNaN(quantity) && Number(quantity) > 0;
};

const isBtnRadiosCorrect = (selectedRadios) => {
  return Array.from(selectedRadios).some((radio) => radio.checked);
};

const isBtnTermsCorrect = (selectedTerms) => {
  return selectedTerms?.checked;
};

// Form submission
const inscriptionForm = document.querySelector(".btn-submit");

inscriptionForm?.addEventListener("click", (event) => {
  const firstName = document.querySelector("#first")?.value;
  const lastName = document.querySelector("#last")?.value;
  const email = document.querySelector("#email")?.value;
  const quantity = document.querySelector("#quantity")?.value;
  const selectedRadios = document.querySelectorAll('input[name="location"]');
  const selectedTerms = document.querySelector("#checkbox1");

  event.preventDefault();

  const isFormValid = () => {
    return (
      isFirstNameCorrect(firstName) &&
      isLastNameCorrect(lastName) &&
      isEmailCorrect(email) &&
      isQuantityCorrect(quantity) &&
      isBtnRadiosCorrect(selectedRadios) &&
      isBtnTermsCorrect(selectedTerms)
    );
  };

  if (isFormValid()) {
    document.querySelector(".modal-body").innerHTML = "Bravo !";
  } else {
    console.log("Formulaire invalide");
  }
});
