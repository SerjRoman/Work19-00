let pElem = document.querySelector(".privet");

console.log(pElem);

console.log(pElem.innerHTML);

pElem.innerHTML = "<div><input type = 'password' class='input content'></div>";

let inputElem = document.querySelector("input");

console.log(inputElem);

inputElem.type = "email";

let att = inputElem.getAttribute("type");

console.log(att);

inputElem.setAttribute("type", "password");

inputElem.classList.remove('input');


pElem.style.backgroundColor = "aquamarine";

let andreyElem = document.createElement("a");

andreyElem.innerHTML = "andrey Pelmen"

document.body.append(andreyElem);

console.log(andreyElem);