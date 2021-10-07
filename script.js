//add 16 divs to the dom
const gridContainer = document.querySelector('.container');

for (let i = 0; i < 16; i++) {

    const gridDiv = document.createElement('div');
    gridDiv.classList.add('gridDiv');
    gridContainer.appendChild(gridDiv);

}

//set up hover effect to make divs change color
//use event listeners to track mouse
