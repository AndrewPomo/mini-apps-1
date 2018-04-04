$( document ).ready(function() {
  
  $('#submit').on('click', function() {
    handleSubmit($('#JSON').val());
    $('#JSON').val('');
  })

  var handleSubmit = function(json) {
    $.ajax({
      type: "POST",
      url:"http://127.0.0.1:3000/",
      contentType: "application/json",
      data: json,
      success:function(data) {
        formatDataToTable(data);
      }
    });
  }

  var formatDataToTable = function(data) {
    data = data.split('<br>');
    data = data.map(function(line) {
      return line.split(', ')
    })
    var $table = $('<table></table>')
    data.forEach(function(line, index) {
      var $row = $('<tr></tr>');
      if (index === 0) {
        line.forEach(function(header) {
          $row.append('<th>' + header + '</th>')
        })
      } else {
        line.forEach(function(val) {
          $row.append('<td>' + val + '</td>')
        })
      }
      $table.append($row);
    })
    console.log($table);
    $('#result').html($table);

  }

});