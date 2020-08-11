$(document).ready(function() {
  $("p#p1").click(function() {
    $("p#p1").removeClass();
    $("p#p1").addClass("highlight");
    $("p#p1").addClass("boxyBox");
  });
  $("p#p2").click(function() {
    $("p#p2").removeClass();
    $("p#p2").addClass("highlight");
    $("p#p2").addClass("boxyBox");
  });
});