$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var person1Input = $("input#person1").val();
    var person2Input = $("input#person2").val();

    $(".person1").text(person1Input);
    $(".person2").text(person2Input);


    $("#shout").toggle();

    $("#yousaid").append("<li>" + person1Input + "</li>");
    $("#webpagesaid").append(("<li>" + person2Input + "</li>").toUpperCase());

    event.preventDefault();
  });
});
