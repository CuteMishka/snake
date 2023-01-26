
//Создание основных переменных

let snake = []

snake[0]={
	x: 50,
	y: 50
}
snake[1]={
	x:40,
	y:50
}
snake[2]={
	x:30,
	y:50
}
snake[3]={
	x:20,
	y:50
}

let snakeBody = document.getElementById("snakebody")

let dir;

let score = 0;

let snake2 = document.getElementById("snake2")

//Определение изначальных координат змеи

document.getElementById("snake2").style.top = snake[0].x + "px";
document.getElementById("snake2").style.left = snake[0].y + "px";

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
	if ((snake[0].y == 100) && (dir == "down")){
		snake[0].y = -10;
	} else if ((snake[0].y == 0) && (dir == "up")){
		snake[0].y = 110;
	} else if ((snake[0].x == 100)  && (dir == "right")){
		snake[0].x = -10;
	} else if ((snake[0].x == 0)  && (dir == "left")){
		snake[0].x = 110;
	}
}

function snakeMovement() {
	snake[3].y = snake[2].y
	snake[3].x = snake[2].x
	snake[2].y = snake[1].y
	snake[2].x = snake[1].x
	snake[1].y = snake[0].y
	snake[1].x = snake[0].x
	if (dir == "up"){
		snake[0].y = snake[0].y - 10;
		snake2.style.top = snake[0].y + "px";
	}else if (dir == "down"){
		snake[0].y = snake[0].y + 10
		snake2.style.top = snake[0].y + "px";
	}else if (dir == "right"){
		snake[0].x = snake[0].x + 10;
		snake2.style.left = snake[0].x + "px";
	} else if (dir == "left") {
		snake[0].x = snake[0].x - 10;
		snake2.style.left = snake[0].x + "px";
	}
	document.getElementById("snakebody").style.top = snake[1].y + "px";
	document.getElementById("snakebody").style.left = snake[1].x + "px";
	document.getElementById("snakebody2").style.top = snake[2].y + "px";
	document.getElementById("snakebody2").style.left = snake[2].x + "px"
	document.getElementById("snakebody3").style.top = snake[3].y + "px";
	document.getElementById("snakebody3").style.left = snake[3].x + "px"
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
	if ((snake[0].x == foodX) && (snake[0].y == foodY)){
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


let gameProccess = setInterval(game, 100);