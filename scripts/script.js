const main = document.querySelector("#main");
const inputButton = document.querySelector("#inputButton");
const inputText = document.querySelector("#inputText");
const inputDisabled = document.querySelector("#inputDisabled");

inputText.oninput = () => {
    inputDisabled.value = inputText.value;
}

inputButton.onclick = () => {
   main.textContent = '';
   if (inputText.value > 100) {
    inputText.value = "Your max size is 100!";
   } else {
    makeRows(inputText.value);
   }
}

function makeRows(size) {
    main.style.setProperty('--grid-cols', size);
    for (i = 0; i < (size ** 2); i++) {
      let cell = document.createElement("div");
      main.appendChild(cell).setAttribute("id", "pixel");
    };
  };


 
  makeRows(16);