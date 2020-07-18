const cardsContainer = document.querySelector('.cards-container'); // container to insert individual cards into
const cards = document.querySelectorAll('.card');
const filterInput = document.querySelector('.intro__input');

const colors = [
  { class: 'accusoft', heading: 'Accusoft', hexes: ['#f79e5c', '#ff7e4a', '#5abaae'] },
  { class: 'adobe', heading: 'Adobe', hexes: ['#ff0000'] },
  { class: 'airbnb', heading: 'Airbnb', hexes: ['#ff5a5f'] },
  { class: 'algolia', heading: 'Algolia', hexes: ['#1b89f2'] },
  { class: 'alipay', heading: 'Alipay', hexes: ['#00aaee'] },
  { class: 'amazon', heading: 'Amazon', hexes: ['#ff9900'] },
  { class: 'amazon-pay', heading: 'Amazon Pay', hexes: ['#ff9900'] },
  { class: 'cc-amazon-pay', heading: 'Amazon Pay', hexes: ['#ff9900'] },
  { class: 'aws', heading: 'AWS', hexes: ['#ff9900'] },
  { class: 'amilia', heading: 'Amilia', hexes: ['#2b91e1'] },
  { class: 'android', heading: 'Android', hexes: ['#3ddc84'] },
  { class: 'angellist', heading: 'AngelList', hexes: ['#000'] },
  { class: 'angular', heading: 'Angular', hexes: ['#dd0031', '#c3002f'] },
  { class: 'app-store', heading: 'App Store', hexes: ['#1ac7fc', '#1d72f2'] },
  { class: 'app-store-ios', heading: 'App Store', hexes: ['#1ac7fc', '#1d72f2'] },
  { class: 'apple', heading: 'Apple', hexes: ['#666'] },
  { class: 'apple-pay', heading: 'Apple Pay', hexes: ['#231f20'] },
  { class: 'artstation', heading: 'ArtStation', hexes: ['#13aff0'] },
  { class: 'asymmetrik', heading: 'Asymmetrik', hexes: ['#be1e2d', '#606060', '#000'] },
  { class: 'atlassian', heading: 'Atlassian', hexes: ['#2684ff', '#0052cc'] },
  { class: 'audible', heading: 'Audible', hexes: ['#ff9900'] },
  { class: 'autoprefixer', heading: 'Autoprefixer', hexes: ['#dd3735'] },
  { class: 'bandcamp', heading: 'bandcamp', hexes: ['#1da0c3', '#333'] },
  { class: 'battle-net', heading: 'Battle.net', hexes: ['#04c1f0', '#0471a7'] },
  { class: 'behance', heading: 'Behance', hexes: ['#0056ff'] },
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

    cardsContainer.appendChild(card);
  });
}
document.addEventListener('DOMContentLoaded', createCards);
