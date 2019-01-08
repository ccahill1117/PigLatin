
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
  var resultArray = [];
  var input = this.string;
  if (vowels.includes(input[0])) {
    var result = new Sentence(input).vowelFinder();
    resultArray.push(result);
  }
  else if (consonants.includes(input[0])) {
    var result2 = new Sentence(input).consonantFinder();
    resultArray.push(result2);
  }
  else if (qArray.includes(input[0])) {
    var result3 = new Sentence(input).qFinder();
    resultArray.push(result3);
  }
  else if (yArray.includes(input[0])) {
    var result4 = new Sentence(input).yFinder();
    resultArray.push(result4);
  }
  return resultArray.join('');
}

Sentence.prototype.sentenceMachine = function() {
  var input = this.string;
  var sentence = input.split(' ');
  var resultingArray = [];
  sentence.forEach(function(word) {
    resultingArray.push(new Sentence(word).wordMachine());
  })
  return resultingArray.join(' ');
}
