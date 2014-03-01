$(document).ready(function(){
  $("#get_color").click(function(event){
    event.preventDefault();
    $.ajax({
      url: "/color",
      type: "POST",
      dataType: "json"
    }).done(function( serverResponse ) {
      console.log(serverResponse);
      $("li:nth-child(" + serverResponse.cell + ")").css("background-color", serverResponse.color)
    });

  });
});
