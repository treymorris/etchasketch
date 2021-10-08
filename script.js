//add 16 divs to the dom
const container = document.querySelector('#container');
const userInput = document.getElementById("quantity");
const clear = document.querySelector(".clear");

function createContainer() {
    for (let i = 0; i < 256; i++) {
        const grids = document.createElement('div');
        grids.classList.add('grids');
        container.appendChild(grids);
        grids.addEventListener('mouseover', runEvent); //set up hover effect to make divs change color
        function runEvent(e) {

        console.log(e.type);
    
        grids.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)";
}
}
};

function updateContainer() {
    container.innerHTML="";
    container.style.setProperty("grid-template-columns", `repeat(${userInput.value}, 2fr)`);
    container.style.setProperty("grid-template-rows", `repeat(${userInput.value}, 2fr)`);

    for (let i = 0; i < userInput.value * userInput.value; i++) {
        const grids = document.createElement('div');
        grids.classList.add('grids');
        container.appendChild(grids);
        grids.addEventListener('mouseover', runEvent); //set up hover effect to make divs change color
        function runEvent(e) {

        console.log(e.type);
    
        grids.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)";
}
}
};

userInput.addEventListener("change", updateContainer);

clear.addEventListener("click", function() {
    container.innerHTML = "";
    userInput.innerHTML = "";
    container.style.setProperty("grid-template-columns", `repeat(16, 2fr)`);
    container.style.setProperty("grid-template-rows", `repeat(16, 2fr)`);
    createContainer();
});

createContainer();