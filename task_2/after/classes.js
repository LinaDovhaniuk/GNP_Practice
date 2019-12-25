import {colors} from "./colors.js";

class Circle {
    constructor (color, radius) {
        this.color = color;
        this.radius = radius;
    }

    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }

    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }

    getColor() {
        return colors.filter(c => c.color === this.color)[0];
    }

    getInfo() {
        return `Circle: color = ${this.getColor().color}, perimeter = ${this.getPerimeter()}, area = ${this.getArea()}`
    }

}

class Square {
    constructor (color, side) {
        this.color = color;
        this.side = side;
    }

    getPerimeter() {
        return 4 * this.side;
    }

    getArea() {
        return Math.pow(this.side, 2);
    }

    getColor() {
        return colors.filter(c => c.color === this.color)[0];
    }

    getInfo() {
        return `Square: color = ${this.getColor().color}, perimeter = ${this.getPerimeter()}, area = ${this.getArea()}`
    }
}

class Rhombus {
    constructor (color, firstDiagonal, secondDiagonal) {
        this.color = color;
        this.firstDiagonal = firstDiagonal;
        this.secondDiagonal = secondDiagonal;
    }

    getPerimeter() {
        let side = Math.pow(Math.pow(this.firstDiagonal, 2) + Math.pow(this.secondDiagonal, 2), 1/2)/2;
        return 4 * side;
    }

    getArea() {
        return this.firstDiagonal * this.secondDiagonal / 2;
    }

    getColor() {
        return colors.filter(c => c.color === this.color)[0];
    }

    getInfo() {
        return `Rhombus: color = ${this.getColor().color}, perimeter = ${this.getPerimeter()}, area = ${this.getArea()}`
    }
}

class EquilateralTriangle {
    constructor (color, side) {
        this.color = color;
        this.side = side;
    }

    getPerimeter() {
        return 3 * this.side;
    }

    getColor() {
        return colors.filter(c => c.color === this.color)[0];
    }

    getArea() {
        return (Math.pow(this.side,2) * Math.pow(3, 1/2)/4);
    }

    getInfo() {
        return `Equilateral triangle: color = ${this.getColor().color}, perimeter = ${this.getPerimeter()}, area = ${this.getArea()}`
    }

}

class RightTriangle {
    constructor(color, firstCathet, secondCathet) {
        this.color = color;
        this.firstCathet = firstCathet;
        this.secondCathet = secondCathet;
    }

    getPerimeter() {
        let hypotenuse = Math.pow(this.firstCathet, 2) + Math.pow(this.secondCathet, 2);
        return (this.firstCathet + this.secondCathet + Math.pow(hypotenuse, 1/2));
    }

    getColor() {
        return colors.filter(c => c.color === this.color)[0];
    }

    getArea() {
        return (this.firstCathet * this.secondCathet / 2);
    }

    getInfo() {
        return `Right triangle: COLOR = ${this.getColor().color}, PERIMETER = ${this.getPerimeter()}, AREA = ${this.getArea()}`
    }
}

export {RightTriangle, Circle, EquilateralTriangle, Rhombus, Square};



