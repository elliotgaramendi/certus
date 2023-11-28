import { socialMediaData } from '../../../utils/dataUtils.js';

const SocialMedia = () => {
  const socialMediaList = document.getElementById('socialMediaList');

  socialMediaData.forEach(element => {
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
};

export default SocialMedia;