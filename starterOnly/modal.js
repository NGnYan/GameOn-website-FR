function editNav() {
  let navbar = document.getElementById("myTopnav");
  if (navbar.className === "topnav") {
    navbar.className += " responsive";
  } else {
    navbar.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtns = document.querySelectorAll(".modal-btn");
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

const isBirthdateCorrect = (birthdate) => {
  const date = new Date(birthdate);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const currentDay = currentDate.getDate();

  if (isNaN(date.getTime())) return false;

  if (year < 1900 || year > currentYear) return false;

  if (year === currentYear) {
    if (month > currentMonth || month === currentMonth || day > currentDay) {
      return false;
    }
  }

  return true;
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
  const birthdate = document.querySelector("#birthdate").value;
  const quantity = document.querySelector("#quantity")?.value;
  const selectedRadios = document.querySelectorAll('input[name="location"]');
  const selectedTerms = document.querySelector("#checkbox1");

  event?.preventDefault();

  const isFormValid = () => {
    let valid = true;

    if (isFirstNameCorrect(firstName)) {
      document.querySelector("#firstError").innerHTML = "";
    } else {
      document.querySelector("#firstError").innerHTML =
        "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
      valid = false;
    }

    if (isLastNameCorrect(lastName)) {
      document.querySelector("#lastError").innerHTML = "";
    } else {
      document.querySelector("#lastError").innerHTML =
        "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
      valid = false;
    }

    if (isEmailCorrect(email)) {
      document.querySelector("#emailError").innerHTML = "";
    } else {
      document.querySelector("#emailError").innerHTML =
        "Veuillez entrer une adresse email valide.";
      valid = false;
    }

    if (isBirthdateCorrect(birthdate)) {
      document.querySelector("#birthdateError").innerHTML = "";
    } else {
      document.querySelector("#birthdateError").innerHTML =
        "Vous devez entrer votre date de naissance.";
      valid = false;
    }

    if (isQuantityCorrect(quantity)) {
      document.querySelector("#quantityError").innerHTML = "";
    } else {
      document.querySelector("#quantityError").innerHTML =
        "Veuillez entrer un nombre valide";
      valid = false;
    }

    if (isBtnRadiosCorrect(selectedRadios)) {
      document.querySelector("#locationError").innerHTML = "";
    } else {
      document.querySelector("#locationError").innerHTML =
        "Vous devez choisir un lieu.";
      valid = false;
    }

    if (isBtnTermsCorrect(selectedTerms)) {
      document.querySelector("#checkboxError").innerHTML = "";
    } else {
      document.querySelector("#checkboxError").innerHTML =
        "Vous devez vérifier que vous acceptez les termes et conditions.";
      valid = false;
    }
    return valid;
  };

  if (isFormValid()) {
    // add text to confirm registration.
    const modalBody = document.querySelector(".modal-body");
    modalBody.innerHTML = "Merci pour votre inscription !";
    modalBody.classList.add("modal-form-submit");

    // add a button to close the modal
    const closeButton = document.createElement("button");
    closeButton.innerHTML = "Fermer";
    closeButton.classList.add("button");

    closeButton.addEventListener("click", closeModal);

    modalBody.appendChild(closeButton);
  }
});
