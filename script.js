//default hard
var numSquares=6;

var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor=pickColor();
var displayColor = document.getElementById('displayColor');
displayColor.textContent=pickedColor;
var message= document.getElementById("message");
var h1= document.querySelector('h1');


//easy hard button
var easyButton = document.getElementById("easy");
var hardButton = document.getElementById("hard");
//click event
easyButton.addEventListener('click',function(){
	numSquares=3;
	//generate colors
	colors=generateRandomColors(numSquares);
	//pickcolor
	pickedColor=pickColor();
	displayColor.textContent =  pickedColor;
	//change colors of square
	for(var i=0; i<colors.length ; i++){
	squares[i].style.backgroundColor= colors[i];
    } 
    for(var i=3; i<6 ; i++){
    	squares[i].style.backgroundColor="#232323";
    }
    h1.style.backgroundColor="steelblue";
    resetButton.textContent="New Colors";
    message.textContent="";
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");


})
hardButton.addEventListener('click',function(){
	numSquares=6;
	colors=generateRandomColors(numSquares);
	//pickcolor
	pickedColor=pickColor();
	displayColor.textContent =  pickedColor;
	//change colors of square
	for(var i=0; i<colors.length ; i++){
	squares[i].style.backgroundColor= colors[i];
    } 
    h1.style.backgroundColor="steelblue";
    resetButton.textContent="New Colors";
    message.textContent="";
    hardButton.classList.add("selected");
    easyButton.classList.remove("selected");
})


//resetting colors
var resetButton = document.querySelector('#reset');
resetButton.addEventListener('click',function(){
	//generate new colors
    numSquares=6;
	colors=generateRandomColors(numSquares);
	//pickcolor
	pickedColor=pickColor();
	displayColor.textContent =  pickedColor;
	//change colors of square
	for(var i=0; i<colors.length ; i++){
	squares[i].style.backgroundColor= colors[i];
    } 
    h1.style.backgroundColor="steelblue";
    resetButton.textContent="New Colors";
    message.textContent="";
    hardButton.classList.add("selected");

})


for(var i=0; i<colors.length ; i++){
	squares[i].style.backgroundColor= colors[i];

	//onclicking a square
	squares[i].addEventListener("click",function(){
		//grab the picked color
		var selectColor= this.style.backgroundColor;
		//compare the color
		if(selectColor === pickedColor){
			resetButton.textContent="Play Again";
			changeColor(selectColor);
			message.textContent="Correct";
			h1.style.backgroundColor=selectColor;


		}else{
			this.style.backgroundColor="#232323";
			message.textContent="Try Again";

		}


	});
		
}

function changeColor(color){
	//loop through all squares
	for(var i=0; i<colors.length ;i++){
		squares[i].style.backgroundColor=color;
	}

}

function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];
	for(var i=0; i<num ;i++){
		arr.push(randomColor());
     
	}
	return arr;
}
function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}
