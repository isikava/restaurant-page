import homeHtml from './home';
import menuHtml from './menu';
import contactsHtml from './contacts';

/**
 * Replace innerHTML of the nodeElement
 * @param { Node } nodeElement
 * @param { String } html
 */
const render = (nodeElement, html) => {
  if (!nodeElement) return;
  nodeElement.innerHTML = html;
};

const content = document.querySelector('#content');
const homeTab = document.querySelector('.header nav a[data-tab="home"]');
const menuTab = document.querySelector(`.header nav a[data-tab="menu"]`);
const contactsTab = document.querySelector(
  `.header nav a[data-tab="contacts"]`
);

// Initialize Home page load
const init = () => {
  homeTab.addEventListener('click', () => {
    render(content, homeHtml);
  });

  menuTab.addEventListener('click', () => {
    render(content, menuHtml);
  });

  contactsTab.addEventListener('click', () => {
    render(content, contactsHtml);
  });

  render(content, homeHtml);
};

export default init;
