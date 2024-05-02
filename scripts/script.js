const main = document.querySelector("#main");
const inputButton = document.querySelector("#inputButton");


const GRID_SIZE = 16;

for (let i = 0; i < GRID_SIZE; i++){
    const div = document.createElement("div");
    div.setAttribute("id", "pixel")
    main.appendChild(div);
}

inputButton.onclick = () => {
    main.textContent = '';
}