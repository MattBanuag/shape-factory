import {Shape} from "./Shape.js";

// Bridge to HTML
const shape = document.getElementById('shape-input');
const color = document.getElementById('color-input');
const options = document.querySelectorAll('option');

const createBtn = document.querySelector('.create-btn');
const shapesContainer = document.querySelector('.shapes-container');
const elementContainer = document.querySelector('.element-container');

const shapeArray = [];
let count = 0;
createBtn.addEventListener('click', () => {
    const shapes = new Shape (
        shape.value, 
        color.value,
        count
    );

    function createShape() {
        let div = document.createElement("div");
        div.classList.add('shape-item');
        
        shapeArray.push(shapes.info);

        // GETTING INDEX
        div.addEventListener('click', () => {
            elementContainer.innerHTML = `<p>${shapes.info}</p>`;
        });        

        // VALIDATION
        // CIRCLE 
        if(shape.value == 'circle') {
            div.style.borderRadius = '50px';
        }

        // COLORS
        switch(color.value) {
            case 'blue':
                div.style.backgroundColor = '#0099ff';
                shapesContainer.append(div);
                break;
            case 'green':
                div.style.backgroundColor = '#00ff99'; 
                shapesContainer.append(div);
                break;
            case 'orange':
                div.style.backgroundColor = '#ff9900'; 
                shapesContainer.append(div);
                break;
            case 'pink':
                div.style.backgroundColor = '#ff0099'; 
                shapesContainer.append(div);
                break;
            case 'purple':
                div.style.backgroundColor = '#9900ff'; 
                shapesContainer.append(div);
            }
    }

    createShape();
    console.log(shapeArray);
    ++count;
});


