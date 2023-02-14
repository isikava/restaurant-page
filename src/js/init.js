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

// Initialize
const init = () => {
  const content = document.querySelector('#content');
  const homeTab = document.querySelector('.header nav a[data-tab="home"]');
  const menuTab = document.querySelector(`.header nav a[data-tab="menu"]`);
  const contactsTab = document.querySelector(
    `.header nav a[data-tab="contacts"]`
  );

  // Render pages content on tab clicked
  homeTab.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    render(content, homeHtml);
  });

  menuTab.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    render(content, menuHtml);
  });

  contactsTab.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    render(content, contactsHtml);
  });

  const tabs = document.querySelectorAll('.header nav a');

  // Set active tab
  tabs.forEach((clickedTab) => {
    clickedTab.addEventListener('click', (e) => {
      tabs.forEach((tab) => {
        tab.classList.remove('active');
      });
      e.target.classList.add('active');
    });
  });

  // Render Home page
  render(content, homeHtml);
};

export default init;
