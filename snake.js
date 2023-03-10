	
//Создание основных переменных

let snake = []

let map = document.getElementById("map")
let snakeBody = document.getElementById("snakebody")
let score = 0;
let snake2 = document.getElementById("snake2")
let dir
snake[0]={
	x: 50,
	y: 50,
}
let snakebody


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
	if ((snake[0].y == 330) && (dir == "down")){
		snake[0].y = -10;
	} else if ((snake[0].y == 0) && (dir == "up")){
		snake[0].y = 330;
	} else if ((snake[0].x == 330)  && (dir == "right")){
		snake[0].x = -10;
	} else if ((snake[0].x == 0)  && (dir == "left")){
		snake[0].x = 330;
	}
}

	let foodY = Math.floor(Math.random() * 33)*10
	let foodX = Math.floor(Math.random() * 33)*10

function foodSpawn() {
	document.getElementById('food').style.top = foodY + "px";
	document.getElementById('food').style.left = foodX + "px";
	document.getElementById('food').style.display = "block";
}

foodSpawn()

function snakeMovement() {
	for (let i = snake.length - 1; i > 0; i--) {
    	snake[i].x = snake[i - 1].x;
    	snake[i].y = snake[i - 1].y;
    	snake[i].el.style.top = snake[i].y + "px"
		snake[i].el.style.left = snake[i].x + "px"
    }
	if ((snake[0].x == foodX) && (snake[0].y == foodY)){
		foodY = Math.floor(Math.random() * 33)*10
		foodX = Math.floor(Math.random() * 33)*10
		score += 1;
		snakeLength()
		foodSpawn()
	}
	if (dir == "up"){
		snake[0].y = snake[0].y - 10;
		snake2.style.top = snake[0].y + "px";
	}else if (dir == "down"){
		snake[0].y = snake[0].y + 10
		snake2.style.top = snake[0].y + "px";
	}else if (dir == "right"){
		snake[0].x = snake[0].x + 10;
		snake2.style.left = snake[0].x + "px";
	}else if (dir == "left") {
		snake[0].x = snake[0].x - 10;
		snake2.style.left = snake[0].x + "px";
	}
	if (snake.length >= 4) { // проверяем столкновение только после достижения нужной длины
    for (let i = 1; i < snake.length; i++) {
      if ((snake[0].x == snake[i].x) && (snake[0].y == snake[i].y)) {
        clearInterval(gameProccess);
        alert("Game Over! Your score is " + score);
      }
    }
  }
}	

function snakeLength() {
	let newHead = document.createElement("div")
	newHead.id = "sn" + snake.length
	newHead.style.backgroundColor = "green"
	newHead.style.width = 10 + "px"
	newHead.style.height = 10 + "px"
	newHead.style.position = "absolute"
	newHead.style.boxShadow = "0px 5px 5px -5px rgba(34, 60, 80, 0.6)"
	map.appendChild(newHead)
	let snakenewbody = {
		x: snake[snake.length - 1].x,
		y: snake[snake.length - 1].y,
		el: newHead
	}
	snake.push(snakenewbody)
}

function score2() {
	document.getElementById("score").innerHTML = score;
}

function game(){
	borderTeleport();
	snakeMovement();
	score2()
}
let gameProccess = setInterval(game, 150);