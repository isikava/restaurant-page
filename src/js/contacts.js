const contactsItems = [
  {
    img: 'images/icon-1.png',
    title: 'our main office',
    para: 'SoHo 94 Broadway St New York, NY 1001',
  },
  {
    img: 'images/icon-2.png',
    title: 'PHONE NUMBER',
    para: '234-9876-5400 <br> 888-0123-4567 (Toll Free)',
  },
  {
    img: 'images/icon-3.png',
    title: 'FAX',
    para: '1-234-567-8900',
  },
  {
    img: 'images/icon-4.png',
    title: 'email',
    para: 'hello@freshy.com',
  },
];

const cardHtml = (cardItem) => /* html */ `
    <div class="card contacts-card">
      <img src=${cardItem.img} />
      <h5>${cardItem.title}</h5>
      <p>${cardItem.para}</p>
    </div>
`;

const contactsHtml = /* html */ `
    <div class="contacts">
      <div class="container">
        <div class="contacts-cards">
          ${contactsItems.map((item) => cardHtml(item)).join('')}
        </div>
      </div>
    </div>
`;

export default contactsHtml;
