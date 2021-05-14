// Write your tests here!
const expect = require("chai").expect;
const polybius = require("../src/polybius.js");

describe("should encode/decode messages with numbers and letters", () => {
    it("should encode a message by translating each letter to number pairs", () => {
      const expected = "3251131343";
      const actual = polybius("hello");
      expect(actual).to.equal(expected);
    });
    it("should translate both 'i' and 'j' to 42", () => {
        const expected = "4242";
        const actual = polybius("ij");
        expect(actual).to.equal(expected);
    });
    it("should leave spaces as is", () => {
    const expected = "42 42 42";
    const actual = polybius("i j i");
    expect(actual).to.equal(expected);
    });
    it("should decode a message by translating each pair of numbers into a letter", () => {
    const expected = "hhh";
    const actual = polybius("323232", false);
    expect(actual).to.equal(expected);
    });
    it("should translate 42 to both 'i' and 'j'", () => {
        const expected = "i/j";
        const actual = polybius("42", false);
        expect(actual).to.equal(expected);
    });
    it("should leave spaces as is", () => {
        const expected = "i/j i/j";
        const actual = polybius("42 42", false);
        expect(actual).to.equal(expected);
    });
    it("should return false if the length of all numbers is odd", () => {
        const actual = polybius("424", false);
        expect(actual).to.be.false;
    });
    it("should leave spaces as is", () => {
        const expected = "i/j i/j";
        const actual = polybius("42 42", false);
        expect(actual).to.equal(expected);
    });        
});