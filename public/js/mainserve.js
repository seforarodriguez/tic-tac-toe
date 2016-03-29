$(document).ready(function(){

var gamePiece = "X";

var opponent = $("input[name='opponent']").val();
  
  //debug
  console.log(opponent);

//set the intial player value to X
$("#player").html(gamePiece);

//set the gamePiece value to X on start up
gamePiece = $("#player").html();


function checkWinner() { //begin function

    var currentPlayer;

    var board = [];

    var match;

    //if the gamePiece = X
    if (gamePiece === "X") {

      currentPlayer = "O";

      //set the match string to OOO
      match = "OOO";
    } else {

      currentPlayer = "X";

      //set match string to XXX
      match = "XXX";

    }

    var row1, row2, row3, col1, col2, col3, diag1, diag2, winner;

    $("#tic-tac-toe td").each(function(i) { //begin each

      //add the board values to the array
      board.push($(this).html());

    }); //end each

    //start building the test conditions
    row1 = board[0] + board[1] + board[2];

    row2 = board[3] + board[4] + board[5];

    row3 = board[6] + board[7] + board[8];

    col1 = board[0] + board[3] + board[6];

    col2 = board[1] + board[4] + board[7];

    col3 = board[2] + board[5] + board[8];

    diag1 = board[0] + board[4] + board[8];

    diag2 = board[2] + board[4] + board[6];

    //test for the 8 possible win conditions
    winner = row1 === match || row2 === match || row3 === match || col1 === match || col2 === match || col3 === match || diag1 === match || diag2 === match;

    //if there is a winner
    if (winner) { //begin if then

      //notify the winner
      alert("Player " + currentPlayer + " won!");

      //clear the board
      $("#tic-tac-toe td").html("")

      
      //set the initial player value to X
      $("#player").html("X");

      //set the gamePiece value to X on start up
      gamePiece = $("#player").html();

    } //end if then
    else{

      //set the value for the player
      $("#player").html(gamePiece);
      
    } //end if then else
  
  

  } //end function


//on change event for component radio buttons
$("input[name='opponent']").on("change",function(){//begin event
  
  //set the opponent value 
  opponent = $(this).val();
  
  
  
});//end event
  

  function Computer(){//begin function
    
    //debug
    console.log("computers turn");
    
    //find an empty space
 $("#tic-tac-toe td").each(function(i){ //begin each
       
      //if the space is empty
      if($(this).html()===""){
        
//simulate the button click for the computer
        $(this).click();
        
        //exit the loop
        return false;
        
      }
   
 
       
 });//end each
    
    
  }//end function
  
  
});

