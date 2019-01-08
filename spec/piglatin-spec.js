import { makeInputArray, pigLatinTranslator, Sentence } from './../src/piglatin.js';

describe('makeInputArray', function() {

  it('should take an input string and return an array of characters', function() {
    var result = makeInputArray("hello","");
    expect(result).toEqual(["h","e","l","l","o"]);
  });
});

  describe ('Sentence', function() {
  it('should test whether Sentence can accept a string', function() {
    var string = new Sentence ("lookie here");
    expect(string.string).toEqual("lookie here");
  })
  it('should test whether Sentence is a word', function() {
    var anotherString = new Sentence("1ok");
    expect(anotherString.isWord()).toEqual("not allowed");
  })

  it('should identify if a word starts with a vowel, and a append "way" to the word', function() {
    var string = new Sentence ("a");
    expect(string.vowelFinder()).toEqual("away");
  })

  it('should cut the number all consonant letters in a word that appear before a vowel, add them to the end of the word, and append ay', function () {
    var string = new Sentence("Hello");
    expect(string.consonantFinder()).toEqual("elloHay");
  })
})
