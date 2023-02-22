const menu = document.querySelector('.side-menu');

menu.addEventListener('pointerenter', (event)=>{

    let elem = event.currentTarget;
    elem.style.opacity = 1;
     
})

menu.addEventListener("pointerout",(event)=>{
    
    let elem = event.currentTarget;
    // Записываем в переменную, элемент на координатах нашего курсора.
    let hoverElem = document.elementFromPoint(event.clientX,event.clientY);
    // Ближайший родительский элемент с тегом div.
    let parentDivHoverElem = hoverElem.closest("div");
    // если У родительского блока(div) есть класс side-menu
    if (parentDivHoverElem.classList.contains("side-menu")){
    // Мы находимся в меню, поэтому ничего не делаем
        return 
    }
    // Скрываем наше меню
    elem.style.opacity = 0;

})