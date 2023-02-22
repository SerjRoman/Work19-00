let drag = document.querySelector('.main');
function startDrag {
    event.target.classList.add("Selected")
    event.dataTransfer.setData('html', event.target.innerHTML)
}

function endDrag {
    document.querySelector(".Selected").classList.remove("Selected")

}

function enterDrag{
    let elem = event.target.closest("div") 
    let selectedElem = document.querySelector(".Selected") //.classList.remove("Selected")
    if (elem != selectedElem){
        elem.classList.add("drop")
    
    


    }

}
function leaveDrag{
    if(document.elementFromPoint(event.clientX, event.clientY)){
        
    }
}