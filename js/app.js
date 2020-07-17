const cards = document.querySelector('.cards'); // container to insert individual cards into
const colors = [
  { class: 'accusoft', heading: 'Accusoft', hexes: ['#f79e5c', '#ff7e4a', '#5abaae'] },
  { class: 'adobe', heading: 'Adobe', hexes: ['#ff0000'] },
  { class: 'airbnb', heading: 'Airbnb', hexes: ['#ff5a5f'] },
  { class: 'algolia', heading: 'Algolia', hexes: ['#1b89f2'] },
  { class: 'alipay', heading: 'Alipay', hexes: ['#00aaee'] },
];

function createCards() {
  colors.forEach((color) => {
    const card = document.createElement('div');
    const hexes = color.hexes;

    card.classList.add('card');
    card.innerHTML = `
      <div class="card__header">
        <i class="fab fa-${color.class} card__icon"></i>
        <h3 class="card__heading">${color.heading}</h3>
      </div>
    `;

    hexes.forEach((hex) => {
      const para = document.createElement('p');
      para.classList.add('card__color-value');
      para.innerHTML = `${hex} <i class="far fa-copy card__color-icon"></i>`;
      para.style.backgroundColor = hex;
      card.appendChild(para);
    });

    cards.appendChild(card);
  });
}
document.addEventListener('DOMContentLoaded', createCards);
