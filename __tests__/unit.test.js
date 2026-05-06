// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// isPhoneNumber tests (2 pass, 2 fail)
test('isPhoneNumber: (123) 456-7890 is valid', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('isPhoneNumber: 123-456-7890 is valid', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('isPhoneNumber: 123456789 is invalid', () => {
  expect(isPhoneNumber('123456789')).toBe(false);
});

test('isPhoneNumber: 123-456 is invalid', () => {
  expect(isPhoneNumber('123-456')).toBe(false);
});

// isEmail tests (2 pass, 2 fail)
test('isEmail: user@example.com is valid', () => {
  expect(isEmail('user@example.com')).toBe(true);
});

test('isEmail: test@domain.co is valid', () => {
  expect(isEmail('test@domain.co')).toBe(true);
});

test('isEmail: test@.com is invalid', () => {
  expect(isEmail('test@.com')).toBe(false);
});

test('isEmail: invalid@domain..com is invalid', () => {
  expect(isEmail('invalid@domain..com')).toBe(false);
});

// isStrongPassword tests (2 pass, 2 fail)
test('isStrongPassword: Password1 is valid', () => {
  expect(isStrongPassword('Password1')).toBe(true);
});

test('isStrongPassword: MyPass123 is valid', () => {
  expect(isStrongPassword('MyPass123')).toBe(true);
});

test('isStrongPassword: 1password is invalid (starts with number)', () => {
  expect(isStrongPassword('1password')).toBe(false);
});

test('isStrongPassword: A123! is invalid (contains special character)', () => {
  expect(isStrongPassword('A123!')).toBe(false);
});

// isDate tests (2 pass, 2 fail)
test('isDate: 1/1/2020 is valid', () => {
  expect(isDate('1/1/2020')).toBe(true);
});

test('isDate: 12/31/2020 is valid', () => {
  expect(isDate('12/31/2020')).toBe(true);
});

test('isDate: 2020/01/01 is invalid (wrong format)', () => {
  expect(isDate('2020/01/01')).toBe(false);
});

test('isDate: 1-1-2020 is invalid (dashes instead of slashes)', () => {
  expect(isDate('1-1-2020')).toBe(false);
});

// isHexColor tests (2 pass, 2 fail)
test('isHexColor: #FFF is valid', () => {
  expect(isHexColor('#FFF')).toBe(true);
});

test('isHexColor: FFFFFF is valid (without hash)', () => {
  expect(isHexColor('FFFFFF')).toBe(true);
});

test('isHexColor: #GGGGGG is invalid (G is not valid hex)', () => {
  expect(isHexColor('#GGGGGG')).toBe(false);
});

test('isHexColor: #FF is invalid (too short)', () => {
  expect(isHexColor('#FF')).toBe(false);
});
