'use strict';

class Shape {
    constructor(name, colour, item) {
        this._name = name;
        this._colour = colour;
        this._item = item;
    }

    get info() {
        return `Index ${this._item}, ${this._colour} ${this._name}`;
    }
};

export {Shape};