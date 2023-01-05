let dir;
let block = 10;
let snake = document.getElementById('snake2');


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
function movement(){
	if (dir =="up"){
		snake.style.top += 10
	}
}

let game = setInterval(movement, 100)