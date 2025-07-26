// Your tests here
const { isPalindrome } = require("../utils");

describe("isPalindrome", () => {
  it("returns true for a simple palindrome", () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  it("returns false for a non-palindrome", () => {
    expect(isPalindrome("car")).toBe(false);
  });

  it("returns true for a palindrome with mixed case", () => {
    expect(isPalindrome("RaceCar")).toBe(true);
  });

  it("returns false for an empty string", () => {
    expect(isPalindrome("")).toBe(false);
  });

  it("throws an error for input with non-alphabetic characters", () => {
    expect(() => isPalindrome("hello123")).toThrow("Input must contain only alphabetic characters");
  });

  it("throws an error for non-string input", () => {
    expect(() => isPalindrome(12345)).toThrow("Input must be a string");
  });
});
