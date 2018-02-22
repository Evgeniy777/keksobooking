const {TITLES, PRICE, ROOMS, GUESTS, LOCATION, TIME, TYPE, DESCRIPTION, FEATURES, PHOTOS} = require(`../src/data`);
const AVATAR_URL = `https://robohash.org/`;

const generateRandomNumber = () => {
  return Math.random().toFixed(4).substr(2);
};

const generateRandomNumberInRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateRandomStringFromArray = (arr) => {
  return arr[generateRandomNumberInRange(0, arr.length - 1)];
};

const shuffleStringsFromArray = (arr) => {
  return ([...arr]).sort(() => Math.random() - 0.5);
};

const location = {
  x: generateRandomNumberInRange(LOCATION.X.MIN, LOCATION.X.MAX),
  y: generateRandomNumberInRange(LOCATION.Y.MIN, LOCATION.Y.MAX)
};

const generateEntity = () => {
  return {
    author: {
      avatar: [AVATAR_URL, generateRandomNumber()].join(``)
    },
    offer: {
      title: generateRandomStringFromArray(TITLES),
      address: `{{${location.x}}}, {{${location.y}}}`,
      price: generateRandomNumberInRange(PRICE.MIN, PRICE.MAX),
      type: generateRandomStringFromArray(TYPE),
      rooms: generateRandomNumberInRange(ROOMS.MIN, ROOMS.MAX),
      guests: generateRandomNumberInRange(GUESTS.MIN, GUESTS.MAX),
      checkin: generateRandomStringFromArray(TIME),
      checkout: generateRandomStringFromArray(TIME),
      features: shuffleStringsFromArray(FEATURES),
      description: DESCRIPTION,
      photos: shuffleStringsFromArray(PHOTOS)
    },
    location: {
      x: location.x,
      y: location.y
    }
  };
};

module.exports = {
  generateEntity
};
