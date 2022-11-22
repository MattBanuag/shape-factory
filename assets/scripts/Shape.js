'use strict';

class Shape {
    constructor(name, colour) {
        this._name = name;
        this._colour = colour;
    }

    get info() {
        return `Shape: ${this._name}, Colour: ${this._colour}`;
    }
};

export {Shape};