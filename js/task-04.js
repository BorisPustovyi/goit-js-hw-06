let counterValue = 0;
const currentCounterValueEl = document.querySelector(`#value`);
const clickDecrementEl = document.querySelector(
  `button[data-action="decrement"]`
);
const clickIncrementEl = document.querySelector(
  `button[data-action="increment"]`
);

clickDecrementEl.addEventListener("click", () => {
  currentCounterValueEl.textContent = counterValue -= 1;
});
clickIncrementEl.addEventListener("click", () => {
  currentCounterValueEl.textContent = counterValue += 1;
});
