const cardsContainer = document.querySelector('.cards-container'); // container to insert individual cards into
const cards = document.querySelectorAll('.card');
// const filterInput = document.querySelector('.intro__input');

const createCards = async () => {
  const response = await fetch('../data/brands.json');
  const brands = await response.json();
  console.log(brands);

  brands.forEach((el, i, arr) => {
    const card = document.createElement('div');
    const hexes = el.hexes;

    card.classList.add('card');
    card.innerHTML = `
      <div class="card__header">
        <i class="fab fa-${el.class} card__icon"></i>
        <h3 class="card__heading">${el.heading}</h3>
      </div>
    `;

    hexes.forEach((el, i, arr) => {
      const para = document.createElement('p');
      para.classList.add('card__color-value');
      para.innerHTML = `${el} <i class="far fa-copy card__color-icon"></i>`;
      para.style.backgroundColor = el;
      card.appendChild(para);
    });

    cardsContainer.appendChild(card);
  });
};

document.addEventListener('DOMContentLoaded', createCards);
