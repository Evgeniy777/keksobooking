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
});
