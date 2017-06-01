$(document).ready(function() {

  makeBoard()


  $(document).on("keydown", function(event){
    event.preventDefault();
    makeBoard();
    // $.playSound('http://flashkit.com/imagesvr_ce/flashkit/soundfx/Ambience/Woop-Ryan_Cur-8800/Woop-Ryan_Cur-8800_hifi')
    game.gameOver();
    $("#score").text("Current Score: " + game.score * 100)

    if (game.score > highScore){
      highScore = game.score
    $("#high-score").text("High Score: " + game.score * 100)
    }
  })


    $(document).keydown(function(e) {
      if($("#game-board").length >= 1){
        switch(e.which) {
            case 37: // left
              game.move("left")
            break;

            case 38: // up
              game.move("up")
            break;

            case 39: // right
              game.move("right")
            break;

            case 40: // down
              game.move("down")
            break;

            default: return; // exit this handler for other keys
        }
        e.preventDefault(); // prevent the default action (scroll / move caret)
      };
    });




     $("#new-game").on("click", function(event){
      game = new Game
      makeBoard()


     })
});




var makeBoard = function(){
    for(i=0; i<game.boardArray.length ; i++){
      if (game.boardArray[i] === 0){
    $("#tile" + (i + 1)).html("<td class='number0' id='tile" + (i + 1) + "'> 0</td>");
  }else if (game.boardArray[i] === 2){
     $("#tile" + (i + 1)).html("<td class='number2' id='tile" + (i + 1) + "'>" +  game.boardArray[i] + "</td>");
   } else if (game.boardArray[i] === 4){
     $("#tile" + (i + 1)).html("<td class='number4' id='tile" + (i + 1) + "'>" +  game.boardArray[i] + "</td>");
  } else if (game.boardArray[i] === 8){
     $("#tile" + (i + 1)).html("<td class='number8'id='tile" + (i + 1) + "'>" +  game.boardArray[i] + "</td>");
  } else if (game.boardArray[i] === 16){
     $("#tile" + (i + 1)).html("<td class='number16'id='tile" + (i + 1) + "'>" +  game.boardArray[i] + "</td>");
  } else if (game.boardArray[i] === 32){
     $("#tile" + (i + 1)).html("<td class='number32' id='tile" + (i + 1) + "'>" +  game.boardArray[i] + "</td>");
  } else if (game.boardArray[i] === 64){
     $("#tile" + (i + 1)).html("<td class='number64'id='tile" + (i + 1) + "'>" +  game.boardArray[i] + "</td>");
  } else if (game.boardArray[i] === 128){
     $("#tile" + (i + 1)).html("<td class='number128' id='tile" + (i + 1) + "'>" +  game.boardArray[i] + "</td>");
  } else if (game.boardArray[i] === 256){
     $("#tile" + (i + 1)).html("<td class='number256' id='tile" + (i + 1) + "'>" +  game.boardArray[i] + "</td>");
  } else if (game.boardArray[i] === 512){
     $("#tile" + (i + 1)).html("<td class='number512' id='tile" + (i + 1) + "'>" +  game.boardArray[i] + "</td>");
  } else if (game.boardArray[i] === 1024){
     $("#tile" + (i + 1)).html("<td class='number1024' id='tile" + (i + 1) + "'>" +  game.boardArray[i] + "</td>");
  } else if (game.boardArray[i] === 2014){
     $("#tile" + (i + 1)).html("<td class='number2048' id='tile" + (i + 1) + "'>" +  game.boardArray[i] + "</td>");}


}}
