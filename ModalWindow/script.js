// Показивает наш "ковер" 
function showCover(){
    // Создаем елемент div
    let coverDiv = document.createElement('div');
    // добавляет ковер в body
    document.body.append(coverDiv);
    //  Добавляет клас для ковра
    coverDiv.classList.add('cover');
}
// Прячит наш "ковер" //
function hideCover(){
    //возврощаем елементи с класом ковр//
    const coverDiv = document.querySelector('.cover');
    // убирает ковер //
    coverDiv.remove();
}

//  Показивает наш модельное окно //
function showModalWindow(event){
    // Заносим в контейнер modal-window
    let container = document.querySelector('.modal-window');
    //Задаем стиль дисплею -flex
    container.style.display = 'flex';
    // показивает ковер//
    showCover();
    
}
//  Закритие окна
function closeModalWindow(event){
    //Прячим ковер
    hideCover();
    // Заносим в кнонтейнер  modal-window
    let container = document.querySelector('.modal-window');
    // Не задаем стиль дисплею
    container.style.display = 'none';
}
//Создаем функцию заказа товаров 
function orderItem(event) {
    //Визиваем функцию closeModalWindow
    closeModalWindow(event);
    // Для форми count ставим ссьлку с количеством товара
    orderForm.action = `#order&count=${count.innerHTML}`;
} 
// Создаем функцию добавления количеста обьктов
function plusCount(){
    //К переменной count добавляем +1 количество товара
    count.innerHTML = `${+count.innerHTML+1}`;
}
// Создаем функцию отнимания количеста обьктов 
function minusCount(){
    // Задаем условие которое не позволяем задать 0 или ниже количества товара
    if (+count.innerHTML > 1){
        // К переменной count отнимаем 1 количество товаров
        count.innerHTML = `${+count.innerHTML-1}`;
    }
}
// Задаем условие click для кнопки plusButton
plusButton.addEventListener("click",plusCount)
// Задаем условие click для кнопки minusButton
minusButton.addEventListener('click', minusCount);
// Задаем условие click для кнопки cart
cart.addEventListener('click', showModalWindow);
// Задаем условие submit для кнопки orderForm
orderForm.addEventListener('submit', orderItem);
// Задаем условие click для кнопки closeButton
closeButton.addEventListener('click', closeModalWindow);