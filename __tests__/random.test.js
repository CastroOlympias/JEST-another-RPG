const Potion = require('../lib/Potion.js');

test('creates a health potion object', () => {
    const potion = new Potion('health');

    expect(potion.name).toBe('health');
    expect(potion.value).toEqual(expect.any(Number));
});

















// const randomNumber = require('../lib/random.js');

// test('gets random number between 1 and 10', () => {
//     expect(randomNumber()).toBeGreaterThanOrEqual(1);
//     expect(randomNumber()).toBeLessThanOrEqual(10);
// });