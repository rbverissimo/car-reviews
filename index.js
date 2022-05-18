const cars = [
  {
    id: 1,
    car: "honda civic",
    price: "$28,000",
    img: "./img/civic-2022-img.jpg",
    info: "this a car a good car etc etc nobody cares this a car a good car etc etc nobody cares this a car a good car etc etc nobody cares this a car a good car etc etc nobody cares this a car a good car etc etc nobody cares",
  },

  {
    id: 2,
    car: "porsche boxster",
    price: "45,000",
    img: "./img/boxster-2022-img.jpg",
    info: "this a car a good car etc etc nobody cares this a car a good car etc etc nobody cares this a car a good car etc etc nobody cares this a car a good car etc etc nobody cares this a car a good car etc etc nobody cares, and plus etc,  and plus etc, and plus etc, and plus etc, and plus etc, and plus etc, and plus etc, and plus etc, and plus etc, and plus etc, and plus etc, and plus etc, and plus etc, and plus etc, and plus etc,",
  },

  {
    id: 3,
    car: "chevrolet camaro",
    price: "32,000",
    img: "./img/camaro-2022-img.jpg",
    info: "this a car a good car etc etc nobody cares this a car a good car etc etc nobody cares this a car a good car etc etc nobody cares this a car a good car etc etc nobody cares this a car a good car etc etc nobody cares, and plus etc,  and plus etc, and plus etc, and plus etc, and plus etc, and plus etc, and plus etcS",
  },

  {
    id: 4,
    car: "audi rs6",
    price: "60,000",
    img: "./img/rs6-2022-img.jpg",
    info: "this a car a good car etc etc nobody cares this a car a good car etc etc nobody cares this a car a good car etc etc nobody cares this a car a good car etc etc nobody cares this a car a good car etc etc nobody cares, better buy a bmw,better buy a bmw,better buy a bmw,better buy a bmw,better buy a bmw,better buy a bmw,better buy a bmw,better buy a bmw,better buy a bmw,better buy a bmw,better buy a bmw,better buy a bmw,better buy a bmw,better buy a bmw,better buy a bmw,better buy a bmw,better buy a bmw,better buy a bmw,",
  },
];

const img = document.getElementById("car-img");
const carName = document.getElementById("car-name");
const price = document.getElementById("price");
const info = document.getElementById("info");

const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
  showObject();
});

function showObject() {
  const obj = cars[currentItem];
  img.src = obj.img;
  carName.textContent = obj.car;
  price.textContent = obj.price;
  info.textContent = obj.info;
}

nextBtn.addEventListener("click", function () {
  if (currentItem < cars.length - 1) currentItem++;
  else currentItem = 0;
  showObject();
});

prevBtn.addEventListener("click", function () {
  if (currentItem == 0) currentItem = cars.length - 1;
  else currentItem--;
  showObject();
});
