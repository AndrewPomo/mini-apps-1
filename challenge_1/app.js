document.addEventListener("DOMContentLoaded", function() {
  // initial state
  var currentTurn = 0;
  var winCallCount = 0;

  var squares = document.getElementsByClassName('square');

  var row1 = document.getElementsByClassName('row1');
  var row2 = document.getElementsByClassName('row2');
  var row3 = document.getElementsByClassName('row3');
  var col1 = document.getElementsByClassName('col1');
  var col2 = document.getElementsByClassName('col2');
  var col3 = document.getElementsByClassName('col3');

  var major = [
    document.getElementById('r1c1'),
    document.getElementById('r2c2'),
    document.getElementById('r3c3')
  ];

  var minor = [
    document.getElementById('r1c3'),
    document.getElementById('r2c2'),
    document.getElementById('r3c1')
  ];
  
  var lines = [
    row1,
    row2,
    row3,
    col1,
    col2,
    col3,
    major,
    minor
  ];

  var windicator = document.getElementById('windicator');
  
  // Respond to user input
  document.onkeyup = function (event) {
    if (event.which == 82 || event.keyCode == 82) {
      currentTurn = 0;
      winCallCount = 0;
      windicator.innerHTML = '';
      for (var i = 0; i < squares.length; i++) {
        squares[i].innerHTML = '';
      }
    }
  };

  var checkForOutcome = function(line) {
    var win = true;
    var first = line[0].innerHTML;

    if (first === '') {
      win = false;
    }

    for (var i = 0; i < line.length; i++) {
      if (line[i].innerHTML !== first) {
        win = false;
      }
    }

    if (win) {
      windicator.innerHTML = first + ' wins'  ;
    } else if (winCallCount === 9) {
      windicator.innerHTML = 'draw! hit the "r" key to restart';
    }
    
  }

  var clickHandler = function () {
    console.log(winCallCount + ' calls');
    console.log(currentTurn + ' turns');
    if (this.innerHTML === '') {
      if (currentTurn % 2 === 0) {
        this.innerHTML = 'X';
      } else {
        this.innerHTML = 'O';
      }
      winCallCount++;

      lines.forEach(function(line) {
        checkForOutcome(line);
      })

      currentTurn++;
    }
  }

  // Listen for userInput
  for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', clickHandler);
  }

});