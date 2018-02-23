const TITLES = [
  `Большая уютная квартира`,
  `Маленькая неуютная квартира`,
  `Огромный прекрасный дворец`,
  `Маленький ужасный дворец`,
  `Красивый гостевой домик`,
  `Некрасивый негостеприимный домик`,
  `Уютное бунгало далеко от моря`,
  `Неуютное бунгало по колено в воде`
];

const PRICE = {
  MIN: 1000,
  MAX: 1000000
};

const ROOMS = {
  MIN: 1,
  MAX: 5
};

const GUESTS = {
  MIN: 1,
  MAX: 5
};

const LOCATION = {
  X: {
    MIN: 300,
    MAX: 900
  },
  Y: {
    MIN: 150,
    MAX: 500
  }
};

const TIME = [
  `12:00`,
  `13:00`,
  `14:00`
];

const TYPE = [
  `flat`,
  `palace`,
  `house`,
  `bungalo`
];

const DESCRIPTION = ``;

const FEATURES = [
  `wifi`,
  `dishwasher`,
  `parking`,
  `washer`,
  `elevator`,
  `conditioner`
];

const PHOTOS = [
  `http://o0.github.io/assets/images/tokyo/hotel1.jpg`,
  `http://o0.github.io/assets/images/tokyo/hotel2.jpg`,
  `http://o0.github.io/assets/images/tokyo/hotel3.jpg`
];


module.exports = {
  TITLES,
  PRICE,
  ROOMS,
  GUESTS,
  LOCATION,
  TIME,
  TYPE,
  DESCRIPTION,
  FEATURES,
  PHOTOS
};
