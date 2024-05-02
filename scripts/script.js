const main = document.querySelector("#main");


// const GRID_SIZE = 16;

for (let i = 0; i < 16; i++){
    const div = document.createElement("div");
    div.setAttribute("id", "pixel")
    main.appendChild(div);
}