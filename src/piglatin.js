
export function makeInputArray(inputString, separator) {
  return (inputString.split(separator));
}

export function Sentence(string) {
  this.string = string;

}

Sentence.prototype.isWord = function() {
  var input = this.string.split("");
  var exclude = "1234567890!@#$%^&*()?><";
  for (var i =0; i <input.length; i++)
  if(exclude.indexOf(input[i]) != -1)
  {
    return "not allowed";
  }
  else
  {
    return input.join("");
  }
}

Sentence.prototype.vowelFinder = function() {
  var input = this.string;
  var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  if (vowels.includes(input[0])) {
  var result = input + "way";
  console.log(result);
  return result;
}
else {
  return input;
}
}

Sentence.prototype.qFinder = function() {
  var input = this.string;
  var qArray = ["q","Q"];
  if(qArray.includes(input[0])) {
    return (input.slice(2)).concat("quay")
  }
}

Sentence.prototype.yFinder = function() {
  var input = this.string;
  var qArray = ["y","Y"];
  if(qArray.includes(input[0])) {
    return (input.slice(1)).concat("yay")
  }
}


Sentence.prototype.consonantFinder = function() {
  var input = this.string;
  var arr = [];
  var consonantCounter = 0;
  var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "v", "w", "x", "z", "B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "R", "S", "T", "V", "W", "X", "Z"];
    for (var i = 0; i < input.length; i++)
      {
      if (consonants.includes(input[i])) {
        arr.push(input[i]);
        consonantCounter = consonantCounter + 1;
      }
      else if (vowels.includes(input[i]))
        { break; }
    }

    return ((input.slice(consonantCounter)).concat(arr.join('')).concat("ay"));
  }

Sentence.prototype.wordMachine = function() {
  var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "v", "w", "x", "z", "B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "R", "S", "T", "V", "W", "X", "Z"];
  var qArray = ["q","Q"];
  var yArray = ["y","Y"];
  var input = this.string;
  if (vowels.includes(input[0])) {
    var result = new Sentence(input).vowelFinder();
  }
  if (consonants.includes(input[0])) {
    var result = new Sentence(input).consonantFinder();
  }
  if (qArray.includes(input[0])) {
    var result = new Sentence(input).qFinder();
  }
  if (yArray.includes(input[0])) {
    var result = new Sentence(input).yFinder();
  }
  return result;
}

export function pigLatinTranslator(inputArray) {
  var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  var consonantArray = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "v", "w", "x", "z", "B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "R", "S", "T", "V", "W", "X", "Z"];
  var yArray = ["y", "Y"];


  if (yArray.includes(inputArray[2])) {
    var yBeginning = inputArray.slice(0,2);
    var yEnd = inputArray.slice(2);
    return (yEnd.concat(yBeginning)).concat(["a","y"]);
  }
  else if (yArray.includes(inputArray[0])) {
    var yCon = inputArray.shift();
    return (inputArray.concat(yCon)).concat(["a","y"]);
  }

  else if (vowels.includes(inputArray[0])) {
    return inputArray.concat(["w","a","y"])

  }
  else if (consonantArray.includes(inputArray[0]) &&
           consonantArray.includes(inputArray[1]) &&
           consonantArray.includes(inputArray[2])) {
           var threeCons = inputArray.slice(0,3);
           var endOfThreeCons = inputArray.slice(3);
           return (endOfThreeCons.concat(threeCons)).concat(["a","y"]);
  }
  else if (consonantArray.includes(inputArray[0]) &&
           consonantArray.includes(inputArray[1])) {
           var twoCons = inputArray.slice(0, 2);
           var endOfTwoCons = inputArray.slice(2);
           return (endOfTwoCons.concat(twoCons)).concat(["a", "y"]);
  }
  else if (consonantArray.includes(inputArray[0])) {
           var oneCon = inputArray.shift();
           return (inputArray.concat(oneCon)).concat(["a","y"]);
  }

}
