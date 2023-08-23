'use strict';

const first = +prompt('Syötä ensimmäinen pituus');
const second = +prompt('Syötä toinen pituus');
const third = +prompt('Syötä kolmas pituus');

let triangle = '';

if (first === second && second === third) {
  triangle = 'equilateral';
} else if (first === second || second === third || first === third) {
  triangle = 'isosceles';
} else {
  triangle = 'scalene';
}

document.getElementById('kohde').insertAdjacentHTML('beforeend', triangle);
