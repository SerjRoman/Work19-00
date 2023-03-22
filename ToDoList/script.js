function showCover() {
    let cover = document.createElement("div");
    cover.classList.add("cover");
    document.body.appendChild(cover);
}
function hideCover() {
    let cover = document.querySelector('.cover');
    cover.remove();
}

function showModalWindow() {
    let window = document.querySelector('.modal-window');
    showCover();
    window.style.display = 'flex';
}
function hideModalWindow() {
    let window = document.querySelector('.modal-window');
    hideCover();
    window.style.display = 'none';
}
function createTask(){
    if (descriptionTask.value == '' & nameTask.value == '') {
        alert('лееее, поля нужно заполнить')
    }
    
    let ul = document.querySelector('.list-tasks');
    let li = document.createElement('li');

    let divText = document.createElement("div");
    let p = document.createElement("p");
    let h1 = document.createElement("h1");
    let divDelete = document.createElement("div");
    let buttonDelete = document.createElement("button");

    p.innerHTML = descriptionTask.value;
    h1.innerHTML = nameTask.value;
    buttonDelete.innerHTML = '&Cross;';
    // class 
    ul.appendChild(li);
    li.appendChild(divText);
    li.appendChild(divDelete);

    divText.appendChild(h1);
    divText.appendChild(p);
    
    divDelete.appendChild(buttonDelete);

    hideModalWindow();
}

let buttonShowWindow = document.querySelector('.button-add-task');
buttonShowWindow.addEventListener('click', showModalWindow);
let buttonCloseWindow = document.querySelector(".block-close-window");
buttonCloseWindow.addEventListener('click', hideModalWindow);

let buttonCreateTask = document.querySelector('.button-create-task');
buttonCreateTask.addEventListener('click', createTask);
 
function deleteTask(event) {
    let button = event.target;
    let task = button.closest("li");
    task.remove();
}
// click на крестик