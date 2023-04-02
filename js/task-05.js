const inPut = document.querySelector(`#name-input`);
const outPutNameEl = document.querySelector(`#name-output`);

const onInputEve = (event) => {
  event.preventDefault();
  outPutNameEl.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "") {
    outPutNameEl.textContent = "Anonymous";
  }
};

inPut.addEventListener(`input`, onInputEve);
// console.dir(inPut);
