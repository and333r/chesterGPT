START

const addTheseNumbers = require('../js/session1');

describe('addTheseNumbers function', () => {
  it('should return the sum of two given numbers', () => {
    const result = addTheseNumbers(2, 5);

    expect(result).toBe(7);
  });

  it('should return 0 if no numbers are passed', () => {
    const result = addTheseNumbers();

    expect(result).toBe(0);
  });

  it('should return the given number if only one number is passed', () => {
    const result = addTheseNumbers(5);

    expect(result).toBe(5);
  });

  it('should return the sum of more than two numbers', () => {
    const result = addTheseNumbers(2, 5, 3);

    expect(result).toBe(10);
  });

  it('should handle negative numbers', () => {
    const result = addTheseNumbers(-2, 5);

    expect(result).toBe(3);
  });

  it('should handle decimals', () => {
    const result = addTheseNumbers(2.5, 2.5);

    expect(result).toBe(5);
  });
});

FINAL
