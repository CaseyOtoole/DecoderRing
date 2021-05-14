const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if (shift == 0 || shift > 25 || shift < -25) return false; //exiting early if conditions not met
    input = input.toLowerCase();
    const encodedMessage = [];
    const alphabet = "abcdefghijklmnopqrstuvwxyz"; //repeating alphabet 3 times, removes necessity in multiple conditions check
    const searchArray = [...alphabet,...alphabet,...alphabet];
    shift = (encode == true) ? shift : shift*(-1); //different shift for encoding/decoding

    for(letter of input){ // (i) variable is not needed, while naming each variable is handy
      const letterPosition = alphabet.indexOf(letter);
      if (!alphabet.includes(letter)){
        encodedMessage.push(letter);
      } else {
        encodedMessage.push(searchArray[letterPosition + 26 + shift]);
      }
    }
    return encodedMessage.join("");

  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };