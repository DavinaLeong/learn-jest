// Matchers: https://jestjs.io/docs/en/expect
const functions = require('./functions');

// toBe
test('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});

test('Adds 2 + 2 to NOT equal 4', () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

// toBeNull
test('Should be null', () => {
  expect(functions.isNull()).toBeNull();
});

// toBeFalsy
test("'null' should be falsy", () => {
  expect(functions.checkValue(null)).toBeFalsy();
});

test("'undefined' should be falsy", () => {
  expect(functions.checkValue(undefined)).toBeFalsy();
});

// toEqual
test('User should be Davina Leong object', () => {
  expect(functions.createUser()).toEqual({ firstName: 'Davina', lastName: 'Leong', weight: 70 });
});


// Less than, greater than
test('Should be under 100kg', () => {
  expect(functions.createUser().weight).toBeLessThanOrEqual(100);
});

// Regex
test("There is no 'I' in team", () => {
  expect(functions.team()).not.toMatch(/I/i);
});

test("There is no 'i' in team", () => {
  expect(functions.team()).not.toMatch(/I/i);
});


// Arrays
test("'Admin' should be in usernames", () => {
  expect(functions.users).toContain('Admin');
});