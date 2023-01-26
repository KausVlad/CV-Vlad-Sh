'use strict';
const toggle = document.getElementById('toggle');
const body = document.querySelector('body');

toggle.addEventListener('change', function () {
  console.log(toggle.checked);

  if (toggle.checked) {
    body.classList.add('my-theme');
    body.classList.remove('main-theme');
  } else {
    body.classList.remove('my-theme');
    body.classList.add('main-theme');
  }
});
