let textInput = document.querySelector("#input-text");
const boldBtn = document.querySelector("#turn-text-bold");
const italicBtn = document.querySelector("#turn-text-italic");
const clearBtn = document.querySelector("#clear-text");
const textDisplayer = document.querySelector("#text-displayer");

function myTurnBold() {
  boldBtn.addEventListener('click', () => {
    textDisplayer.style.fontWeight = 'bold';
  })
}

function myTurnItalic() {
  italicBtn.addEventListener('click', () => {
    textDisplayer.style.fontStyle = 'italic';
  })
}

function myClearText() {
  clearBtn.addEventListener('click', () => {
    textDisplayer.innerHTML = "";
    textInput.value = "";
  })
}

function myDisplayText() {
  textInput.addEventListener('input', () => {
    textDisplayer.innerHTML = textInput.value;
  })
}

myDisplayText();
myTurnBold();
myTurnItalic();
myClearText();
