$(document).ready(function(){
  $("#glossary").hide();
  $("#problem").hide();
  $("#resolve").hide();
});

function ImMononofu(){
  $("#problem").show();
  $("#resolve").show();
  $(".not-mononofu").hide();
  $(".mononofu").show();
};

function ImNotMononofu(){
  $("#problem").show();
  $("#resolve").show();
  $(".not-mononofu").show();
  $(".mononofu").hide();
};