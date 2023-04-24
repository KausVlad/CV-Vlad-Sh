'use strict';
const toggle = document.getElementById('toggle');
const body = document.querySelector('body');

const personalPhoto = document.querySelector('.personal-photo');

const loader = document.getElementById('loader');
const GITHUB_URL_BASE = 'https://api.github.com';
const GITHUB_USER = 'KausVlad';
const GITHUB_TOKEN = 'в кабінеті користувача';

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

class ApiWork {
  constructor(baseUrl, loader, token, user) {
    this.baseUrl = baseUrl;
    this.loader = loader;
    this.token = token;
    this.user = user;
    this.url = `${this.baseUrl}/users/${this.user}/repos`;
  }
  render(data) {
    return !data.length
      ? (this.loader.innerHTML = '<li>0 repos</li>')
      : data.forEach((item) => {
          this.loader.innerHTML += `<li><a href="${item.html_url}" target="_blank">${item.full_name}</a></li>`;
        });
  }
  async getProjects() {
    const response = await fetch(this.url);
    const data = await response.json();
    this.render(data);
  }
  async getRepos() {
    try {
      const response = await fetch(this.url, {
        headers: {
          Authorization: `Bearer  ${this.token}`,
        },
      });
      const data = await response.json();
      this.render(data);
    } catch (error) {
      console.log(error);
    }
  }
}

const apiGitHub = new ApiWork(
  GITHUB_URL_BASE,
  loader,
  GITHUB_TOKEN,
  GITHUB_USER
);

// apiGitHub.getProjects();

apiGitHub.getRepos(); //Не до кінця зрозумів що змінилося, але я так розумію ми отримали більше доступу
