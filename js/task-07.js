const controleFontSizeEl = document.getElementById("font-size-control");
const textEl = document.getElementById("text");

function ontextSizeChange() {
  textEl.style.fontSize = controleFontSizeEl.value + "px";
}
controleFontSizeEl.addEventListener("input", ontextSizeChange);
