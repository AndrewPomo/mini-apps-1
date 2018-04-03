$( document ).ready(function() {
  
  $('#submit').on('click', function() {
    handleSubmit($('#JSON').val());
  })

  var handleSubmit = function(json) {
    $.ajax({
      type: "POST",
      url:"http://127.0.0.1:3000/",
      contentType: "application/json",
      data: json,
      success:function(data) {
        console.log(data)
      }
    });
  }

});