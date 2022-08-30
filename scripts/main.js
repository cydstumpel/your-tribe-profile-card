const bCard = document.querySelector('.business-card-full');
if (bCard) {
  bCard.addEventListener('click', () => {
    bCard.classList.toggle('active')
  })
}