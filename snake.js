let dir;
let block = 10;
let snakeY = 50;
let snakeX = 50;

document.getElementById("snake2").style.top = snakeY + "px";
document.getElementById("snake2").style.left = snakeX + "px";

document.addEventListener("keydown", function(event){
	if (event.code == "KeyW"){
		dir = "up";
	} else if (event.code = "KeyD"){
		dir = "right";
	} else if (event.code = "KeyA"){
		dir = "left";
	} else if (event.code = "KeyS"){
		dir = "down";
	}
})

let move = 50;

function movement(){
	if (dir =="up"){
		move = 10 + move;
		document.getElementById("snake2").style.top = move + "px";
	}
}

let game = setInterval(movement, 100)