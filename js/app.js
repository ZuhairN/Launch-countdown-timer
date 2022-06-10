'use strict';

const sec = document.querySelector('.sec');
const min = document.querySelector('.min');
const hour = document.querySelector('.hour');
const day = document.querySelector('.day');

const time = function () {
  const period = 14 * 24 * 60 * 60 * 1000;
  const endDate = Date.now() + period;

  const count = function (a, b = 1, c = 1, d = 1) {
    let num = Math.floor(((endDate - Date.now()) / (1000 * b * c * d)) % a);
    num = num < 10 ? '0' + num : num;
    return num;
  };

  const time = setInterval(() => {
    sec.textContent = count(60);
    min.textContent = count(60, 60);
    hour.textContent = count(24, 60, 60);
    day.textContent = count(14, 24, 60, 60);
  }, 1000);
  setTimeout(() => {
    clearInterval(time);
  }, period);
};
time();
