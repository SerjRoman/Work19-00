let rightNine = document.querySelector('.right__nine');
let leftNine = document.querySelector('.left__nine');
let gates = document.querySelector('.gate__block');

let score = document.querySelector('.score');
let ball = document.querySelector('.ball');


gates.addEventListener('click',(event) =>{
    ball.style.top = event.clientY;
	ball.style.left = event.clientX;
	console.log(event.clientX);
	console.log(ball.style.left);
});


