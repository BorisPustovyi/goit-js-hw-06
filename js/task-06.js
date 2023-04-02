const inputEl = document.getElementById("validation-input");
inputEl.addEventListener("blur", onBlurEvent);
function onBlurEvent() {
  if (this.getAttribute("data-length") != this.value.length) {
    this.classList.add(`invalid`);
  } else {
    this.classList.replace(`invalid`, `valid`);
  }
}
