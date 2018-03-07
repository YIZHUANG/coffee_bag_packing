const Calculator = require('./Calculator');

const boxOutOfRange =
  'Invalid input! The edeges of the cubic box has to be 30 to 100';
const boxEmpty = 'Invalid input! Please specify the box edeges';
const inputTooLarge = 'Invalid input! Your input is too large';
const quntityMissing =
  'Invalid input, the quantity of your bags have to be larger than 0';
const noBags = 'Invalid input! Please specify the coffee bags';

test(`adds bagArray and box to equal 13`, () => {
  let bagArray = [
    { volume: '734', quantity: 300 },
    { volume: '1144', quantity: 300 },
    { volume: '3460', quantity: 300 }
  ];
  let box = [50];
  expect(Calculator(bagArray, box)).toBe(13);
});

test(`box edege out of range equal ${boxOutOfRange}`, () => {
  let bagArray = [
    { volume: '734', quantity: 300 },
    { volume: '1144', quantity: 300 },
    { volume: '3460', quantity: 300 }
  ];
  let box1 = [29];
  let box2 = [101];
  expect(Calculator(bagArray, box1)).toBe(boxOutOfRange);
  expect(Calculator(bagArray, box2)).toBe(boxOutOfRange);
});

test(`if box empty equals ${boxEmpty}`, () => {
  let bagArray = [
    { volume: '734', quantity: 300 },
    { volume: '1144', quantity: 300 },
    { volume: '3460', quantity: 300 }
  ];
  let box = [];
  expect(Calculator(bagArray, box)).toBe(boxEmpty);
});

test(`if the input is too large equal ${inputTooLarge}`, () => {
  let bagArray = [
    { volume: '734', quantity: 5000 },
    { volume: '1144', quantity: 70000 },
    { volume: '3460', quantity: 60000 }
  ];
  let box = [50];
  expect(Calculator(bagArray, box)).toBe(inputTooLarge);
});

test(`if the input bags' quantity have 0 or some are missing equals ${quntityMissing}`, () => {
  let zeroQuantity = [
    { volume: '734', quantity: 0 },
    { volume: '1144', quantity: 3 },
    { volume: '3460', quantity: 3 }
  ];
  let box = [50];
  expect(Calculator(zeroQuantity, box)).toBe(quntityMissing);
});

test(`if the input bags are empty ${noBags}`, () => {
  let emptyArray = [];
  let box = [50];
  expect(Calculator(emptyArray, box)).toBe(noBags);
});
