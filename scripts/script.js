const pinDisplay = document.getElementById("pinDisplay");

let pin = "";

function addToPin(number) {
  if (pin.length < 5) {
    pin += number;
    updatePinDisplay();
  }
}

function updatePinDisplay() {
  pinDisplay.textContent = pin.replace(/./g, "*").padEnd(5, "-");
}

document.getElementById("deleteBtn").addEventListener("click", () => {
  pin = pin.slice(0, -1);
  updatePinDisplay();
});
