document.addEventListener("DOMContentLoaded", function() {

  var gBI = function(id) {
    return document.getElementById(id);
  }

  var gBC = function(className) {
    return document.getElementsByClassName(className);
  }

  var s =  {
    symbol: 'X',
    checks: 0,
    xWins: 0,
    oWins: 0,
    winner:''
  }

  var squares = gBC('square');
  var M = [gBI('0'), gBI('4'), gBI('8')];
  var m = [gBI('6'), gBI('4'), gBI('2')];
  var lines = [gBC('r1'), gBC('r2'), gBC('r3'), gBC('c1'), gBC('c2'), gBC('c3'), M, m];
  var wIndicator = gBI('wIndicator');

  var handleWin = function(winner) {
    s.winner = winner;
    wIndicator.innerHTML = winner + ' wins! push the "r" key to reset the board';
    if (winner === 'X') {
      s.xWins++
      s.symbol = 'X';
      gBI('xWins').innerHTML = s.xWins;
    } else {
      s.oWins++
      s.symbol = 'O'
      gBI('oWins').innerHTML = s.oWins;
    }
    document.removeEventListener('click', clickHandler);
  }

  var checkForOutcome = function(line) {
    var win = true;
    var first = line[0].innerHTML;
    console.log(line, s.checks);
    s.checks++;
    if (first === '') {
      win = false;
    }
    for (var i = 0; i < line.length; i++) {
      if (line[i].innerHTML !== first) {
        win = false;
      }
    }
    if (win) {
      handleWin(first);
    } else if (s.checks === 72 && s.winner === '') {
      wIndicator.innerHTML = 'draw! push the "r" key to reset the board';
    }
  }

  var clickHandler = function (e) {
    if (e.target.innerHTML === '') {
      if (s.symbol === 'X') {
        e.target.innerHTML = 'X';
        s.symbol = 'O'
      } else {
        e.target.innerHTML = 'O';
        s.symbol = 'X'
      }
      lines.forEach(function(line) {
        checkForOutcome(line);
      })
    }
  }

  document.onkeyup = function (event) {
    if (event.keyCode == 82) {
      gBI('firstSymbol').innerHTML = s.symbol;
      s.checks = 0;
      s.winner = '';
      wIndicator.innerHTML = '';
      for (var i = 0; i < squares.length; i++) {
        squares[i].innerHTML = '';
      }
      document.addEventListener('click', clickHandler, false);
    }
  };

  document.addEventListener('click', clickHandler, false);
});