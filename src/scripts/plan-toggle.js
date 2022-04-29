const planBtn = document.querySelector(`.card__plan--button`);

const toggle = document.getElementById(`toggle`);

planBtn.addEventListener(`click`, (e) => {
  planBtn.classList.toggle(`active--btn`);
  toggle.classList.toggle(`active--toggle`);
});
