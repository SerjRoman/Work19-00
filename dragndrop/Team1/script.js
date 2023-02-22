function startDrag(event){

    let select = event.target;
    select.clasList.add("selected");
    event.dataTransfer.setData('html', select.innerHTML);

}

function endDrag(event){

    let select = document.querySelector(".selected");
    select.classList.remove("selected");

}

function enterDrag(event){

    let select = event.target.closest("div");

    let elemSelected = document.querySelector(".selected");
    if (elemSelected != select){
        select.classList.add("drop");
    }
}

function leaveDrag(event){

    let select = event.target;

    if (document.elementFromPoint(event.clientX,event.clientY) === select.getBoundingClientRect){
        select.clasList.remove('drag');
    }

}

