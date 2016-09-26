
$('.col').on('click', function(){
	$("this div:nth-child(6)").addClass("red");
	console.log(this);
});

function Game (){

}

Game.prototype.turn = function(){
	var currentPlayer = player1;
	$("#pressme").on('click', function(){
		if (currentPlayer === player1){
			currentPlayer = player2;
			console.log(player2.color);
		} else {
			currentPlayer = player1;
			console.log(player1.color);
		}
	});
}

function Player (color){
	this.color= color;
}

var player1 = new Player("red");
var player2 = new Player("black");

var game = new Game();
