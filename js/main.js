
$( document ).ready(function() {
 /* $('.col').on('click', function(){
  	$("this div:nth-child(6)").addClass("red");
  	console.log(this);
  });*/
  function Game (){
    /*$('.col').on('click', function() {
      $(this).children('.empty').last().removeClass('empty').addClass('red');
    });
    var currentPlayer = 'player1';
    function tooglePlayer (){}*/
  }

  Game.prototype.turn = function(){
  	var currentPlayer = player1;
    console.log("hey");
    $('.col').on('click', function() {
      if (currentPlayer === player1){
        $(this).children('.empty').last().removeClass('empty').addClass('red');
        currentPlayer = player2;
      } else {
        $(this).children('.empty').last().removeClass('empty').addClass('black');
        currentPlayer = player1;
      }
    });
  }

  function Player (color){
  	this.color= color;
  }

   player1 = new Player("red");
   player2 = new Player("black");

   game = new Game();

 });
