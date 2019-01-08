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
})
