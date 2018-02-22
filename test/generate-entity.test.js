const assert = require(`assert`);
const {generateEntity} = require(`../src/generate-entity`);
const DATA = require(`../src/data`);

describe(`#generateEntity`, () => {
  it(`should generate "author" section`, () => {
    assert.ok(generateEntity().author);
  });

  it(`"author.avatar" is string type`, () => {
    assert.equal(typeof generateEntity().author.avatar, `string`);
  });

  it(`"offer.title" is one of TITLES`, () => {
    const {offer: {title}} = generateEntity();
    assert.ok(DATA.TITLES.indexOf(title) > -1);
  });

  it(`"offer.address" has format like ({{x}},{{y}})`, () => {
    assert.equal(generateEntity().offer.address, `{{${generateEntity().location.x}}}, {{${generateEntity().location.y}}}`);
  });

  it(`"offer.price" is between 1000 and 1 000 000`, () => {
    const {offer: {price}} = generateEntity();

    assert.ok(price >= DATA.PRICE.MIN);
    assert.ok(price <= DATA.PRICE.MAX);
  });

  it(`"offer.rooms" is between 1 and 5`, () => {
    const {offer: {rooms}} = generateEntity();

    assert.ok(rooms >= DATA.ROOMS.MIN);
    assert.ok(rooms <= DATA.ROOMS.MAX);
  });

  it(`"offer.guests" is number > 0`, () => {
    const {offer: {guests}} = generateEntity();
    assert.equal(typeof guests, `number`);
    assert.ok(guests > 0);
  });

  it(`"offer.checkin" is one of TIME`, () => {
    const {offer: {checkin}} = generateEntity();
    assert.ok(DATA.TIME.indexOf(checkin) > -1);
  });

  it(`"offer.checkout" is one of TIME`, () => {
    const {offer: {checkout}} = generateEntity();
    assert.ok(DATA.TIME.indexOf(checkout) > -1);
  });

  it(`"offer.features" is array of random values from FEATURES`, () => {
    const {offer: {features}} = generateEntity();

    assert.ok(features instanceof Array);
    features.forEach((feature) => {
      assert.ok(DATA.FEATURES.indexOf(feature) > -1);
    });
  });

  it(`"offer.description" is string this length equal 0`, () => {
    const {offer: {description}} = generateEntity();

    assert.ok(typeof description === `string` && description.length === 0);
  });

  it(`"offer.photos" is array of random values from PHOTOS`, () => {
    const {offer: {photos}} = generateEntity();

    assert.ok(photos instanceof Array);
    photos.forEach((photo) => {
      assert.ok(DATA.PHOTOS.indexOf(photo) > -1);
    });
  });

  it(`"location.x" is between 300 and 900`, () => {
    const entity = generateEntity();

    assert.ok(entity.location.x >= DATA.LOCATION.X.MIN);
    assert.ok(entity.location.x <= DATA.LOCATION.X.MAX);
  });

  it(`"location.y" is between 150 and 500`, () => {
    const entity = generateEntity();

    assert.ok(entity.location.y >= DATA.LOCATION.Y.MIN);
    assert.ok(entity.location.y <= DATA.LOCATION.Y.MAX);
  });
});
