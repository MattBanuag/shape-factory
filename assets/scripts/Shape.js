'use strict';

class Shape {
    constructor(name, colour) {
        this.name = name;
        this.colour = colour;
    }

    get info() {
        return `Shape: ${this.name}, Colour: ${this.colour}`;
    }
    
};

export {Shape};