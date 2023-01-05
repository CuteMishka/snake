const map = document.getElementById("game");
const type = canvas.getContext("2d");
const map = new Image();
map.src = "map.png";
const block = 10;

	function Game(){
		type.drawImage(map, 0, 0)
	}
const game = setInterval(Game, 10)