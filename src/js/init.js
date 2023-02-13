import homeHtml from './home';
import menuHtml from './menu';

const content = document.querySelector('#content');

/**
 * Replace innerHTML of the nodeElement
 * @param {Node} nodeElement
 * @param { String } html
 */
function render(nodeElement, html) {
  if (!nodeElement) return;
  nodeElement.innerHTML = html;
}

const homeTab = document.querySelector('.header nav a[data-tab="home"]');
const menuTab = document.querySelector(`.header nav a[data-tab="menu"]`);

homeTab.addEventListener('click', () => {
  render(content, homeHtml);
});

menuTab.addEventListener('click', () => {
  render(content, menuHtml);
});

// Initialize Home page load
const init = () => {
  render(content, homeHtml);
};

export default init;
