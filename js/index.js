import { socialMedia, teams } from '../utils/dataUtils.js';

const socialMediaList = document.getElementById('socialMediaList');
const teamList = document.getElementById('teamList');

socialMedia.forEach(element => {
  const { id, href, title, content } = element;
  socialMediaList.innerHTML += `
    <li key="${id}">
      <a
        href="=${href}"
        target="_blank"
        rel="noopener noreferrer"
        title="${title}"
        class="link"
      >
        ${content}
      </a>
    </li>
  `;
});

teams.forEach(element => {
  const { id, title, slug, subtitle, description, image } = element;
  teamList.innerHTML += `
    <li
      class="card"
      key="${id}"
    >
      <img
        src="${image}"
        alt="${title}"
        class="img img--card"
      />
      <div class="card__body">
        <h3 class="card__title">${title}</h3>
        <h4 class="card__subtitle">${subtitle}</h4>
        <p class="card__text">${description}</p>
        <a href="./teams/${slug}" class="button">Proyectos</a>
      </div>
    </li>
  `;
});