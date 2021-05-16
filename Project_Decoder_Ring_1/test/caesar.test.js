// Write your tests here!
const expect = require("chai").expect;
const caesar = require("../src/caesar.js");


describe("Caesar function should encode/decode any message", () => {
    it("should return false if the shift is 0", () => {
      const actual = caesar("zkdwv jrlqj rq", 0, false);
      expect(actual).to.be.false;
    });
    it("should return false if the shift is less than -25", () => {
        const actual = caesar("zkdwv jrlqj rq", -30, false);
        expect(actual).to.be.false;
      });
      it("should return false if the shift is greater than 25", () => {
        const actual = caesar("zkdwv jrlqj rq", 30, false);
        expect(actual).to.be.false;
      });
      it("should return false if the shift isn't supplied", () => {
        const actual = caesar("zkdwv jrlqj rq");
        expect(actual).to.be.false;
      });
      it("should put all special characters into the message without shifting them", () => {
        const expected = "l'oo zrun uhdo !@#$%^&*() kdug";
        const actual = caesar("i'll work real !@#$%^&*() hard", 3);
        expect(actual).to.equal(expected);
      });
      it("should return decoded/encoded message if the shift is a string", () => {
        const expected = "whats going on";
        const actual = caesar("zkdwv jrlqj rq", "3", false);
        expect(actual).to.equal(expected);
      });
      it("should return a string", () => {
        const actual = caesar("zkdwv jrlqj rq", "3", false);
        expect(actual).to.be.a('string');
      });
      it("should ignore all capital letters", () => {
        const expected = "whats going on";
        const actual = caesar("zKdWv JrLqJ rQ", 3, false);
        expect(actual).to.equal(expected);
      });
      it("should loop through the alphabet from xyz back to abc", () => {
        const expected = "abc";
        const actual = caesar("xyz", 3);
        expect(actual).to.equal(expected);
      });
  });

  
