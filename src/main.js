import './styles.css'
import { makeInputArray, pigLatinTranslator } from './piglatin.js'
import $ from 'jquery';


$(document).ready(function(){
  $("#inputForm").submit(function(event){
    event.preventDefault();

    var userString = $("#inputText").val();
    var userArray = makeInputArray(userString, "");
    var result = pigLatinTranslator(userArray);

    console.log(userString);

    $(".resultDiv").empty();
    $(".resultDiv").append(result);

    $(".resultDiv2").empty();
    $(".resultDiv2").text(result.join(''));



  });
});
