let gameDiv = document.querySelector('.game_football');
let ball = document.querySelector('.ball');

gameDiv.onclick = (event) => {

    console.log(event.clientX, event.clientY);
    ball.style.left = event.clientX+'px';
    ball.style.top = event.clientY+'px';
    
}

