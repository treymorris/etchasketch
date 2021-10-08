//add 16 divs to the dom
var container = document.querySelector('#container');

for (let i = 0; i < 256; i++) {

    const grids = document.createElement('div');
    grids.classList.add('grids');
    grids.style.backgroundColor = 'white';
    container.appendChild(grids);
    grids.addEventListener('mouseover', runEvent); //set up hover effect to make divs change color
    function runEvent(e) {

    console.log(e.type);
    
    grids.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)";
}
}