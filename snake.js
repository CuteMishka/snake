let dir;
let block = 10;

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
		document.getElementById("snake2").style.top += 100 + "px";
		console.log(dir)
	}
}

let game = setInterval(movement, 100)