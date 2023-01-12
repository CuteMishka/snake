
//Создание основных переменных

let dir;
let snakeY = 50;
let snakeX = 50;


//Определение изначальных координат змеи

document.getElementById("snake2").style.top = snakeY + "px";
document.getElementById("snake2").style.left = snakeX + "px";

//Изменение направления

document.addEventListener("keydown", function(event){
	if (event.code == "KeyW"){
		dir = "up";
	} else if (event.code == "KeyD"){
		dir = "right";
	} else if (event.code == "KeyA"){
		dir = "left";
	} else if (event.code == "KeyS"){
		dir = "down";
	}
})

//Движение

let snake = document.getElementById("snake2")

let foodY = Math.floor(Math.random() * 11)*10
let foodX = Math.floor(Math.random() * 11)*10

function foodSpawn() {
	document.getElementById('food').style.top = foodY + "px";
	document.getElementById('food').style.left = foodX + "px";
	document.getElementById('food').style.display = "block";
}

foodSpawn()

function movement(){
	
	if (snakeY > 110){
		snakeY = 0;
	} else if (snakeY < 0){
		snakeY = 110;
	} else if (snakeX > 110){
		snakeX = 0;
	} else if (snakeX < 0){
		snakeX = 110;
	}

	if (dir == "up"){
		snakeY = snakeY - 10;
		snake.style.top = snakeY + "px";
	}else if (dir == "down"){
		snakeY = snakeY + 10
		snake.style.top = snakeY + "px";
	}else if (dir == "right"){
		snakeX = snakeX + 10;
		snake.style.left = snakeX + "px";
	} else if ( dir == "left") {
		snakeX = snakeX - 10;
		snake.style.left = snakeX + "px";
	}
}

let game = setInterval(movement, 500);