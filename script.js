'use strict';
const toggle = document.getElementById('toggle');
const body = document.querySelector('body');

const personalPhoto = document.querySelector('.personal-photo');

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

personalPhoto.addEventListener('click', function () {
  personalPhoto.classList.toggle('personal-photo-hover');
});

function idWarpPage(button) {
  document.getElementById(button).scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('keydown', function (e) {
  if (e.code === 'KeyA') {
    idWarpPage('KeyA');
  } else if (e.code === 'KeyB') {
    idWarpPage('KeyB');
  } else if (e.code === 'KeyC') {
    idWarpPage('KeyC');
  } else if (e.code === 'KeyD') {
    idWarpPage('KeyD');
  }
});
