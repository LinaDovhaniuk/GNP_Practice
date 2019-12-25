import {Circle, EquilateralTriangle, Rhombus, RightTriangle, Square} from "./after/classes.js";
import {func} from './after/index.js';

const figures = [
    new RightTriangle('red', 3,4),
    new Circle('green', 5),
    new EquilateralTriangle('yellow', 7),
    new Rhombus('blue', 9,5),
    new Square('purple', 8),
    new Square('purple', 6)
];

func(figures, 'byColor', 'byPerimeter');
