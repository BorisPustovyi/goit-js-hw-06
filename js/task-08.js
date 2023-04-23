const form = document.querySelector(".login-form");
form.addEventListener("submit", onSumbit);
function onSumbit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Please fill the all fields");
  }
  const userValues = {
    email: email.value,
    password: password.value,
  };
  event.currentTarget.reset();
}
