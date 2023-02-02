
//Создание основных переменных

let snake = []

snake[0]={
	x: 50,
	y: 50
}
let map = document.getElementById("map")

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
		snakeLength()
	} 
}

let snakeNumber

function snakeLength() {
	snakeNumber = snake.length++
	let div = document.createElement("div")
  	div.innerHTML = "<div class='snakeBody' id='snakebody"+ snakeNumber +"'></div>"
  	map.appendChild(div);
}

snake[snakeNumber]={
		x: snake[0].x,
		y: snake[0].y,
	}

function snakeMovement() {
	
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
	

	document.getElementById("snakebody"+ snakeNumber).style.top = snake[0].y + "px"
	document.getElementById("snakebody"+ snakeNumber).style.left = snake[0].x + "px"
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