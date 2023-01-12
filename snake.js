
//Создание основных переменных

let dir;
let snakeY = 50;
let snakeX = 50;

let score = 0;

let snake = document.getElementById("snake2")

//Определение изначальных координат змеи

document.getElementById("snake2").style.top = snakeY + "px";
document.getElementById("snake2").style.left = snakeX + "px";

//Изменение направления

document.addEventListener("keydown", function(event){
	if ((event.code == "KeyW") && (dir != "down")){
		dir = "up";
	} else if ((event.code == "KeyD") && (dir != "left")){
		dir = "right";
	} else if ((event.code == "KeyA") && (dir != "right")){
		dir = "left";
	} else if ((event.code == "KeyS") && (dir != "up")){
		dir = "down";
	}
})

//Функции

function borderTeleport() {
	if ((snakeY == 100) && (dir == "down")){
		snakeY = -10;
	} else if ((snakeY == 0) && (dir == "up")){
		snakeY = 110;
	} else if ((snakeX == 100)  && (dir == "right")){
		snakeX = -10;
	} else if ((snakeX == 0)  && (dir == "left")){
		snakeX = 110;
	}
}

function snakeMovement() {
	if (dir == "up"){
		snakeY = snakeY - 10;
		snake.style.top = snakeY + "px";
	}else if (dir == "down"){
		snakeY = snakeY + 10
		snake.style.top = snakeY + "px";
	}else if (dir == "right"){
		snakeX = snakeX + 10;
		snake.style.left = snakeX + "px";
	} else if (dir == "left") {
		snakeX = snakeX - 10;
		snake.style.left = snakeX + "px";
	}
}

	let foodY = Math.floor(Math.random() * 11)*10
	let foodX = Math.floor(Math.random() * 11)*10

function foodSpawn() {
	document.getElementById('food').style.top = foodY + "px";
	document.getElementById('food').style.left = foodX + "px";
	document.getElementById('food').style.display = "block";
}

foodSpawn()

function foodCheck() {
	if ((snakeX == foodX) && (snakeY == foodY)){
		foodY = Math.floor(Math.random() * 11)*10
		foodX = Math.floor(Math.random() * 11)*10
		score += 1;
		foodSpawn()
	} 
}

function score2() {
	document.getElementById("score").innerHTML = score;
}

function game(){
	borderTeleport();
	snakeMovement();
	foodCheck();
	score2()
}

let gameProccess = setInterval(game, 500);