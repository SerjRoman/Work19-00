let ballElem = document.querySelector(".ball");
let gatesElem = document.querySelector(".gates");

let score = document.querySelector(".score");

const game = document.querySelector(".game");

game.addEventListener("click", follow_ball);


function follow_ball(event) {

    if(gatesElem.onclick == true) {
        ballElem.style.top = event.clientX;
        ballElem.style.left = event.clientY;
    }
    
}

