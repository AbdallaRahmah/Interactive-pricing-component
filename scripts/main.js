const menu = [
  [`10K pageviews`, 8],
  [`50K pageviews`, 12],
  [`100K pageviews`, 16],
  [`500K pageviews`, 24],
  [`1M pageviews`, 36],
];

const rangeBtn = document.getElementById(`billings`);

const price = document.getElementById(`price`);

const views = document.getElementById(`views`);

const discountBtn = document.getElementById(`discount-btn`);

let discountStatus = false;

const planBtnText = document.getElementById("plan-button-text");

const toggle = document.getElementById(`toggle`);

// range button event to modify the price to the user
rangeBtn.addEventListener(`change`, (e) => {
  updateMenu(menu[rangeBtn.value - 1]);
  changeSliderBG(rangeBtn.value);
});

// discount button
discountBtn.addEventListener(`click`, () => {
  discountStatus ? (discountStatus = false) : (discountStatus = true);
  updateMenu(menu[rangeBtn.value - 1]);
  changePlan();
});

const updateMenu = (arr = menu[2]) => {
  views.innerHTML = arr[0];
  if (discountStatus === true) {
    let x = arr[1];
    x = (x * 75) / 100;
    price.innerHTML = `$${x}.00`;
  } else {
    price.innerHTML = `$${arr[1]}.00`;
  }
};

// discount billing code
function changePlan() {
  discountBtn.classList.toggle(`active--btn`);
  toggle.classList.toggle(`active--toggle`);

  discountBtn.classList.contains(`active--btn`)
    ? (planBtnText.innerHTML = "Monthly")
    : (planBtnText.innerHTML = "Yearly");
}

// slider background code
function changeSliderBG(number) {
  console.log(number);
  switch (number) {
    case "1":
      document.documentElement.style.setProperty("--slider-bg", "0");
      console.log("no");
      break;
    case "2":
      document.documentElement.style.setProperty(
        "--slider-bg",
        "calc(25% - 1.25rem)"
      );
      break;
    case "3":
      document.documentElement.style.setProperty(
        "--slider-bg",
        "calc(50% - 1.25rem)"
      );
      break;
    case "4":
      document.documentElement.style.setProperty(
        "--slider-bg",
        "calc(75% - 2.5rem)"
      );
      break;
    case "5":
      document.documentElement.style.setProperty(
        "--slider-bg",
        "calc(100% - 2.5rem)"
      );
      break;
    default:
      document.documentElement.style.setProperty(
        "--slider-bg",
        "calc(50% - 1.25rem)"
      );
  }
}
