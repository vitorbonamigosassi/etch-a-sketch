const main = document.querySelector("#main");
const inputButton = document.querySelector("#inputButton");
const inputText = document.querySelector("#inputText");
const inputDisabled = document.querySelector("#inputDisabled");

let flag = false
let color = "red";

inputText.oninput = () => {
    inputDisabled.value = inputText.value;
    inputButton.textContent = "Create";
}

inputButton.onclick = () => {
    main.textContent = '';
    if (inputText.value > 100 || inputText.value < 2) {
        inputText.value = "";
        inputText.placeholder = "Between 2 and 100!";
    } else {
        makeRows(inputText.value);
        inputButton.textContent = "Clear Board";
    }
}

window.onmouseup = () => {
    flag = false;
}

function makeRows(size) {
    main.style.setProperty('--grid-cols', size);
    const arr = [];
    for (i = 0; i < (size ** 2); i++) {
        let cell = document.createElement("div");
        main.appendChild(cell).setAttribute("id", "pixel");
        arr.push(cell);
    };
    arr.forEach(pixel => {
        pixel.onmouseover = () => {
            pixel.addEventListener("mousedown", (e) => {
                flag = true;
                switch (e.button) {
                    case 0:
                        color = "grey";
                        pixel.style.backgroundColor = color;
                        break;
                    case 2:
                        color = "turquoise";
                        pixel.style.backgroundColor = color;
                        pixel.addEventListener("contextmenu", e => e.preventDefault());
                        break;
                }
            });
            if (flag) {
                pixel.style.backgroundColor = color;
            }
        }
    });
};