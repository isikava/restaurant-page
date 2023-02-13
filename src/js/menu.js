const menuItems = [
  {
    title: 'Cheese Pizza',
    description:
      'Get our Manhattan Classic Cheese Pizza with your choice of sauce and crust.',
    img: 'images/1.jpg',
  },
  {
    title: 'Pepperoni Pizza',
    description:
      'Get our classic Pepperoni pizza with your choice of sauce and crust.',
    img: 'images/2.jpg',
  },
  {
    title: 'Vegetarian Pizza',
    description:
      'Tomato Sauce, Mozzarella, Green Pepper, Onions, Fresh Mushrooms, Tomatoes, and Black Olives.',
    img: 'images/3.jpg',
  },
  {
    title: 'Original',
    description: 'Tomato sauce, mozzarella & oregano',
    img: 'images/4.jpg',
  },
  {
    title: 'Salami',
    description: 'Tomato sauce, mozzarella & mild salami.',
    img: 'images/5.jpg',
  },
  {
    title: 'Chicken',
    description: 'Tomato sauce, mozzarella, chicken, pineapple* & bbq sauce.',
    img: 'images/6.jpg',
  },
];

const cardHtml = (menuItem) => /* html */ `
    <div class="card menu-card">
        <img src=${menuItem.img} />
        <h3>${menuItem.title}</h3>
        <p>${menuItem.description}</p>
    </div>
`;

const menuHtml = /* html */ `
    <div class="menu">
      <div class="menu-bg">
        <h1>Italy Pizza Menu</h1>
      </div>

      <div class="container">
        <div class="menu-cards"> 
          ${menuItems.map((item) => cardHtml(item)).join('')}
        </div>
      </div>
    </div>
`;

export default menuHtml;
