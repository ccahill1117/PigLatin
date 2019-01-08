import { Sentence } from './../src/piglatin.js';


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

  it('should translate a single word string into piglatin', function() {
    var anotherString = new Sentence("tricky");
    expect(anotherString.wordMachine()).toEqual("ickytray");
  })

  it('should translate an entire sentence into piglating', function() {
    var sentenceString = new Sentence ("here is a sentence");
    expect(sentenceString.sentenceMachine()).toEqual("erehay isway away entencesay")
  })
})
