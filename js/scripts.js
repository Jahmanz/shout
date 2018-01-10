$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var person1Input = $("input#person1").val();
    var webpageInput = $("input#person2").val();

    $(".person1").text(person1Input);
    $(".webpage").text(person2Input);


    $("#shout").toggle();

    $("#yousaid").append("<li>" + person1Input + "</li>");
    $("#webpagesaid").append(("<li>" + webpageInput + "</li>").toUpperCase());

    event.preventDefault();
  });
});
