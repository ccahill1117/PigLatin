import './styles.css';
import { Sentence } from './piglatin.js';
import $ from 'jquery';


$(document).ready(function(){
  $("#inputForm").submit(function(event){
    event.preventDefault();

    var userString = $("#inputText").val();
    var translate = new Sentence(userString);
    var translated = translate.sentenceMachine();


    $(".resultDiv").empty();
    $(".resultDiv").append(translated);

  });
});
