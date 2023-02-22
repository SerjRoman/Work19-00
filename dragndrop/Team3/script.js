
function startDrag(event) {
    event.target.classList.add('selected');
	event.dataTransfer.setData('html', event.target.innerHTML);
}

function endDrag(event) {
	const selectedElement = document.querySelector('.selected');
	selectedElement.classList.remove('selected');
}

function enterDrag(event) {
    const selectedElement = document.querySelector('.selected');
	const dragendElement = closest('div')
    if (dragendElement !== selectedElement){
        event.target.classList.add('drop');
    }
}

function leaveDrag(event) {
    const content = document.querySelector('.content');
	selectedElement.classList.remove('drop');

}


selectedElement.addEventListener('dragend', endDrag);
