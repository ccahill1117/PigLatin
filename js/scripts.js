
function makeInputArray(inputString, separator) {
  return (inputString.split(separator));
}


function pigLatinTranslator(inputArray, vowels) {
  // var newArray =[];
  if (vowels.includes(inputArray[0])) {
    return inputArray.concat(["w","a","y"])
    debugger
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
           return inputArray.concat(twoCons);
  }
  else if (consonantArray.includes(inputArray[0])) {
           var oneCon = inputArray.shift();
           return (inputArray.concat(oneCon)).concat(["a","y"]);
  }

}



var vowelArray = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
var consonantArray = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "v", "w", "x", "z", "B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "R", "S", "T", "V", "W", "X", "Z"];
var exceptionsArray = ["y", "Y", "q", "Q"];


$(document).ready(function(){
  $("#inputForm").submit(function(event){
    event.preventDefault();

  var userString = $("#inputText").val();
  var userArray = makeInputArray(userString, "");
  var result = pigLatinTranslator(userArray, vowelArray);

  console.log(result);


  });
});
