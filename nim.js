// nim has 16 pebbles (can be a string or array with 16 things in it)
// action is removing things from the string/array
// pebbles can be represented as *
// code in AI to have computer play against you


// we need a board - doing a 4x4 array
/* 
Variables:
- Players
- Position
- Board
- Pebbles
- Input Total (How many pebbles?) */

console.log("Welcome to NIM");

var peb = "*";
var board = [peb, peb, peb, peb, peb, peb, peb, peb, peb, peb, peb, peb, peb, peb, peb, peb];
var playerTurn = 1; 
var inputTotal = 0; //default value
var inputSpot = 0;
var turnsLeft = 0;
var isGameOver = false; 


/*
Functions:
- switchPlayers - switch between player turns to identify whose turn it is
- Player Pick Pebs - player chooses total number of pebbles to remove from board. Options are 1, 2 and 3. 
- Player Pick Location - player chooses which array position to remove pebbles from. 
- Remove Pebble - this removes the pebbles from the selected position
- Print Current Board - this function shows the board status after each player turn. 
- Determine Winner - this function determines which player wins the game. Winner is player that removes final pebble. 
- Display Winner Banner - this function notifies players that game is over and cheers the winner. 
*/

function switchPlayer() 
{
    if (playerTurn == 1) 
    {
        playerTurn = 2;
    }
    else 
    {
        playerTurn = 1; 
    }
}

function pickNumberOfPebs() 
{
    do
    {
        inputTotal = parseInt( prompt("how many pebs?") );
    }while(inputTotal < 0 || inputTotal > 3);
}

function pickSpotOfPebs()
{
    do
    {
        inputSpot = parseInt( prompt("which location?") );
    }while(inputSpot < 0 || inputSpot > 15);
}

function removePebs()
{
    board[inputSpot] = " ";
}

function printBoard()
{
    console.log(board);
}

function displayWinner()
{
    console.log("You Rocked THIS!");
}

function whoWins()
{
    var keepCount = 0;
    for (var i=0; i < board.length; i++) 
    {
       if(board[i] == peb ) 
       {
         keepCount = keepCount + 1; // could also say keepCount++
       }
    }
    if (keepCount == 0) 
    {
       isGameOver = true;
       displayWinner(); 
    }
}

while(isGameOver == false)
{
    console.log("HEY");
    printBoard();
    if (playerTurn == 1)
    {
        console.log("Player 1, it's your turn.");
    }
    else 
    {
        console.log("Player 2, it's your turn.");
    }
    pickNumberOfPebs();
    turnsLeft = inputTotal;
    while(turnsLeft != 0) 
    {
        pickSpotOfPebs();
        removePebs();
        printBoard();
        turnsLeft = turnsLeft - 1;
        whoWins();
        if(isGameOver == true) //checking if the game has ended after whoWins
        {
            turnsLeft = 0; //Forcing turnsLeft to be 0 since there are no more "*" elements on the board. No need for another turn
        }
    }
    switchPlayer();  
}
