$(document).ready(function(){
  $("#thisForm").submit(function(event){
    var myName = $("input#name").val();
    var myAddress = $("input#address").val();
    var myEmail = $("input#email").val();
    var myProduct = $("#product").val();
    var mySize = $("input:radio[name=size]:checked").val();
    var myDate = $("#date").val();
    var myColor = $("#color").val();

    $("#aname").text(myName);
    $("#aaddress").text(myAddress);
    $("#aemail").text(myEmail);
    $("#aproduct").text(myProduct);
    $("#asize").text(mySize);
    $("#adate").text(myDate);
    $("#acolor").text(myColor);

    event.preventDefault();
  });
});
