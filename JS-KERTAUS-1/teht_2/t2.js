'use strict';

const x1 = +prompt('Syötä ensimmäiset koordinaatit');
const y1 = +prompt('Syötä toiset koordinaatit');
const x2 = +prompt('Syötä kolmannet koordinaatit');
const y2 = +prompt('Syötä neljännet koordinaatit');

const calculate = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

const vastaus = `${calculate}`;

document.getElementById('kohde').innerHTML = vastaus;
