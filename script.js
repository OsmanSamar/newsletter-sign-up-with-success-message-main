function validateEmail(event) {
  event.preventDefault(); // Prevent the form from submitting normally
  console.log("validateEmail function is being executed.");

  let isValidate = true;

  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("email-error");
  const successMessage = document.getElementById("success-message");
  const mainFormContainer = document.getElementById("main-form-container");

  // Use a regular expression to check for a valid email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(emailInput.value)) {
    // Styles for invalid email
    emailInput.classList.add(
      "ring-1",
      "ring-tomato",
      "bg-tomatobg",
      "text-tomato"
    );
    emailInput.classList.remove("ring-gray-300");
    emailError.classList.remove("hidden");
    isValidate = false;
  } else {
    // Remove styles for valid email

    emailInput.classList.remove(
      "ring-1",
      "ring-tomato",
      "bg-tomatobg",
      "text-tomato"
    );
    emailInput.classList.add("ring-gray-300");
    emailError.classList.add("hidden");
  }
  // Show success message and hide main form container if validation is successful
  if (isValidate) {
    const emailAddress = document.getElementById("email-address");
    emailAddress.textContent = emailInput.value;
    // successMessage.classList.remove("hidden"); // Remove the 'hidden' class
    successMessage.style.display = "block";
    mainFormContainer.style.display = "none";
  }
}
