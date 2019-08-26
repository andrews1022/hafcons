// Get the input element
const filterInput = document.querySelector('.filter-input');

function filterIcons() {
  // Get value of input
  // eslint-disable-next-line prettier/prettier
  const filterValue = document.querySelector('.filter-input').value.toUpperCase();

  // Get icon section
  const section = document.querySelector('.section-icons');

  // Get cards from this section
  const card = section.querySelectorAll('.icon-card');

  // Loop through
  for (let i = 0; i < card.length; i++) {
    const h3 = card[i].getElementsByTagName('h3')[0];

    // if matched
    if (h3.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      card[i].style.display = '';
    } else {
      card[i].style.display = 'none';
    }
  }
}

// Add event listener
filterInput.addEventListener('keyup', filterIcons);
