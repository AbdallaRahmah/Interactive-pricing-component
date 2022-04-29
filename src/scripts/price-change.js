// 25% x *  75 / 100
let menu = [
  [`10K pageviews`, 8],
  [`50K pageviews`, 12],
  [`100K pageviews`, 16],
  [`500K pageviews`, 24],
  [`1M pageviews`, 36],
];

let rangeBtn = document.getElementById(`billings`);

const price = document.getElementById(`price`);

const content = document.querySelector(`.card__header__title`);

const discountBtn = document.querySelector(`.card__plan--button`);

let discountStatus = false;

discountBtn.addEventListener(`click`, () => {
  discountStatus ? (discountStatus = false) : (discountStatus = true);
  updateMenu(menu[rangeBtn.value - 1]);
});

// range button event to modify the price to the user
rangeBtn.addEventListener(`change`, (e) => {
  updateMenu(menu[rangeBtn.value - 1]);
});

const updateMenu = (arr = menu[2]) => {
  content.innerHTML = arr[0];
  if (discountStatus === true) {
    let x = arr[1];
    x = (x * 75) / 100;
    price.innerHTML = `$${x}.00`;
  } else {
    price.innerHTML = `$${arr[1]}.00`;
  }
};

updateMenu();
