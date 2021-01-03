const container = document.querySelector('.container');

let active = false;

container.addEventListener('click', function () {
    if (active === false) {
        container.addEventListener('mouseover', draw);
        active = true;
    } else {
        container.removeEventListener('mouseover', draw);
        active = false;
    }
});

let currentColor = 'black';
const inputColor = document.querySelector('#color-input');
inputColor.addEventListener('input', changeColor);

const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', reset);

let gridSize = document.getElementById('slider');
gridSize.addEventListener('input', changeGridSize);

function makeRows(size) {
    container.style.setProperty('--grid-rows', size);
    container.style.setProperty('--grid-cols', size);
    for (i = 0; i < (size * size); i++) {
        let cell = document.createElement('div');
        container.appendChild(cell).className = 'grid-item';
    };
};

function draw(e) {
    if (e.target.className === 'grid-item') {
        e.target.style.backgroundColor = currentColor;
    }
};

function changeColor(e) {
    currentColor = e.target.value;
};

function reset() {
    const grid = document.getElementsByClassName('grid-item');
    for (i = 0; i < grid.length; i++) {
        grid[i].style.backgroundColor = 'white';
    }
};

function changeGridSize(e) {
    const sizeValue = document.getElementById('size-value');
    sizeValue.innerText = `Squares per side: ${e.target.value}`;
    
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    makeRows(e.target.value);
};


makeRows(16);