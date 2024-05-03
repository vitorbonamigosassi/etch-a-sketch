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
    const arr = [];
    for (i = 0; i < (size ** 2); i++) {
        let cell = document.createElement("div");
        main.appendChild(cell).setAttribute("id", "pixel");
        arr.push(cell);
    };
    arr.forEach(pixel => {
        pixel.addEventListener("mouseup", (e) => {
            switch (e.button) {
                case 0:
                    pixel.style.backgroundColor = "red";
                    break;
                case 2:
                    pixel.style.backgroundColor = "turquoise";
                    break;
            }
        });
    });
};



makeRows(16);
