let items = [`Unlimited websites`, `100% data ownership`, `Email reports`];

const list = document.querySelector(`.card__props__list`);

items.forEach((el) => {
  let listItem = document.createElement(`li`);

  let imgItem = document.createElement(`img`);

  imgItem.setAttribute(`src`, `./images/icon-check.svg`);

  imgItem.setAttribute(`alt`, `check`);

  listItem.classList.add(`card__props__item`);

  listItem.append(imgItem);

  listItem.append(el);

  list.append(listItem);
});
