function moveBall (event){

    let ball = document.querySelector('.ball')

    let x = event.clientX;
    let y = event.clientY;

    ball.style.left = x+'px';
    ball.style.top = y+'px';

}

let field = document.querySelector(".field");

field.onclick = moveBall;

