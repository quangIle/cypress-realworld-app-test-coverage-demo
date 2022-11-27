const sum = require("./../banktransfer-routes");

test("adds 1 + 2 to equal 3", () => {
  expect(sum.default(1, 2)).toBe(3);
});
