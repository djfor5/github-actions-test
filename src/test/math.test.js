const { add, subtract, multiply } = require("../math.js"); // eslint-disable-line no-unused-vars

/* eslint-disable no-undef */

test("Expect 2 + 3 = 5", () => {
  expect(add(2, 3)).toEqual(5);
  // throw new Error("Test forced to fail");
});

test("Expect 5 - 2 = 3", () => {
  expect(subtract(5, 2)).toEqual(3);
});

test("Expect 2 * 3 = 6", () => {
  expect(multiply(2, 3)).toEqual(6);
});

/* eslint-enable no-undef */
