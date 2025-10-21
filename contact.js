const form = document.getElementById("form");
const email = document.getElementById("email");
const name = document.getElementById("name");
const subject = document.getElementById("subject");
const message = document.querySelector(".message");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const name_error = document.getElementById("name_error");
const email_error = document.getElementById("email_error");
const subject_error = document.getElementById("subject_error");
const message_error = document.getElementById("message_error");
isValidEmail = (email) => {
  return emailRegex.test(email);
};
form.addEventListener("submit", (e) => {
  e.preventDefault();
let validForm = true;

  if (name.value === "") {
    name.classList.add("error-border");
    name_error.innerHTML = "Name field cannot be empty";
    validForm = false;
  } 
  if (email.value === "") {
    email.classList.add("error-border");
    validForm = false;
    email_error.innerHTML = "Email field cannot be empty";
  } else if (!isValidEmail(email.value)) {
    email.classList.add("error-border");
    validForm = false;
    email_error.innerHTML = "Please enter a valid email address";
  } 
  if (subject.value === "") {
    subject.classList.add("error-border");
    validForm = false;
    subject_error.innerHTML = "Subject field cannot be empty";
  } 
  if (message.value === "") {
    validForm = false;
    message.classList.add("error-border");
    message_error.innerHTML = "Message field cannot be empty";
  } else if (message.value.length < 10) {
    validForm = false;
    message_error.innerHTML = "Message should be at least 10 characters long";
    message.classList.add("error-border");
  } 
  if (validForm) {
    const toast = document.getElementById("toast");
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
    form.reset();
  }
});
email.addEventListener("input", () => {
  email_error.textContent = "";
  email.classList.remove("error-border");
});
name.addEventListener("input", () => {
  name_error.textContent = "";
  name.classList.remove("error-border");
});
subject.addEventListener("input", () => {
  subject_error.textContent = "";
  subject.classList.remove("error-border");
});
message.addEventListener("input", () => {
  message_error.textContent = "";
  message.classList.remove("error-border");
});
