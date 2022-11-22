import {Shape} from "./Shape.js";

// Bridge to HTML
const shape = document.getElementById('shape-input');
const color = document.getElementById('color-input');

const createBtn = document.querySelector('.create-btn');
const shapesContainer = document.querySelector('.shapes-container');

const shapeArray = [];

createBtn.addEventListener('click', () => {
    const shapes = new Shape (
        shape.value, 
        color.value
    );

    function createShape() {
        shapeArray.push(shapes.info);
        shapesContainer.innerHTML = `<div class="shape">${shapeArray}</div>`;
    }


    createShape();
    console.log(shapeArray);
});
