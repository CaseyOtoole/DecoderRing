const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
    const graph = [
      {key: 11, value: "a"},{key: 21, value: "b"},{key: 31, value: "c"},{key: 41, value: "d"},{key: 51, value: "e"},
      {key: 12, value: "f"},{key: 22, value: "g"},{key: 32, value: "h"},{key: 42, value: "i/j"},{key: 52, value: "k"},
      {key: 13, value: "l"},{key: 23, value: "m"},{key: 33, value: "n"},{key: 43, value: "o"},{key: 53, value: "p"},
      {key: 14, value: "q"},{key: 24, value: "r"},{key: 34, value: "s"},{key: 44, value: "t"},{key: 54, value: "u"},
      {key: 15, value: "v"},{key: 25, value: "w"},{key: 35, value: "x"},{key: 45, value: "y"},{key: 55, value: "z"}
    ];
    let code = "";
    const trueInput = input.toLowerCase();
    if(encode){
      for(let i = 0; i < trueInput.length; i++){
        let letter = trueInput[i];
        let charCode = letter.charCodeAt(0);
        if(charCode < 97 || charCode > 122){
          code += letter;
        }
        else if(letter.includes('i') || letter.includes('j')){
          code += "42";
          }
        for(let j = 0; j < graph.length; j++){  
        let match = graph[j].value;
          if(letter === match){
            code += String(graph[j].key);
          }
        }
      } 
    }
    else{
      const noSpace = input.replace(/\s/g, '');
      if(noSpace.length % 2 !== 0){
        return false;
      }
      for(let i = 0; i < trueInput.length; i++){
        let charCode = trueInput[i].charCodeAt(0);
        if(charCode < 49 || charCode > 57){
          code += trueInput[i];
        }
        else {
          let numA = trueInput[i];
          i++;
          let numB = trueInput[i];
          let combo = numA + numB;
          for(let j = 0; j < graph.length; j++){
            let numbers = graph[j].key;
            let letter = graph[j].value;
            if(combo == numbers){
              code += letter;
            }
          }
        }    
      }
    }
    return code;
  }

  return {
    polybius,
  };
})();
polybiusModule.polybius("hello");
module.exports = { polybius: polybiusModule.polybius };
