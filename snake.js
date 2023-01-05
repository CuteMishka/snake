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

let snake = document.getElementById("snake2")

function movement(){
	if (dir == "up"){
		snakeY = snakeY - 10;
		snake.style.top = snakeY + "px";
	}
	if (dir == "down"){
		snakeY = snakeY + 10
		snake.style.top = snakeY + "px";
	}
	if (dir == "right"){
		snakeX = snakeX + 10;
		snake.style.left = snakeX + "px";
	}
	if ( dir = "left") {
		snakeX = snakeX - 10;
		snake.style.left = snakeX + "px";
	} else {
		snakeX = 50;
		snakeY = 50;
	}
}

let game = setInterval(movement, 100)