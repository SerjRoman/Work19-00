// переменная с тегом form (ищем элемент с тегом form)
let form = document.querySelector("form");
// константа списка запрещённых символов 
const forbiddenSymbols = ['$','#','%'];
// событие отправки формы
form.addEventListener("submit", (event)=> {
    // отменяем отправку формы
    event.preventDefault();
    //  ищем элемент с класом error
    let errors = document.querySelectorAll(".error");
    // удаляем все елементы error
    for (let error of errors) {
        error.remove();
    }
    // ищем все елементы input
    let inputs = document.querySelectorAll("input");
    // записываем result как true
    let result = true;
    // проверяем все елементы input в inputs
    for (let input of inputs){
        // валедируем все input
        if (!validation(input)) {
            // записываем result как false ( если хоть один инпут некорректный - не отправляем форму)
            result = false;
        }
    }
    // если все input коректны 
    if (result) {
        // отправляем form
        form.submit();
    }
})
// Функция валидации
function validation(input){
    // Проверяем, если поле пустое
    if (input.value == ''){
        // Создаем ошибку
        createError(input,text = 'Пусто!');
        // Возвращаем False
        return false;
    }
    // Если id поля равно username
    if (input.id == 'username'){
        // Проверяем что текст коректный (Без запрещенных символов)
        if (!validateText(input.value)){
            // Создаем ошибку
            createError(input,text = 'Не правильное поле');
            // Возвращаем False
            return false;
        }
    }
    // Проверяем, если id поля равно email
    else if (input.id == 'email'){
        // Проверяем что текст коректный (Без запрещенных символов)
        if (!validateText(input.value)){
            // Создаем ошибку
            createError(input,text = 'Не правильное поле');
            // Возвращаем False
            return false;
        }
        // Проверяем, если текст не имеет @
        if (!input.value.includes('@')) {
            // Создаем ошибку
            createError(input,text = 'Неверный адрес электронной почты');
            // Возвращаем False
            return false;
        }
    }
    // Возвращаем True
    return true;
}
// функция создания ошибки
function createError(input, text ){
    // присваивает елементу значение в html
    let elementError = document.createElement('div');
    // добавляет класс елементу
    elementError.classList.add('error');
    // добавляем после input ошибку
    input.after(elementError);
    // присваиваем елементу значение в html
    let errorP = document.createElement('p');
    // присваиваем елементу картинки значение в html
    let errorImg = document.createElement('img');
    // присваивает елементу в html значение елемента из текста ошибки
    errorP.innerHTML = text;
    // присваивает атрибут для картинки ошибки 
    errorImg.setAttribute('src', 'error.svg');
    
    // добавляем в елемент ошибки картинку ошибки
    elementError.append(errorImg);
    // добавляем в елемент ошибки текст ошибки
    elementError.append(errorP);
    // 
}
// Создаём функцию которая будет проверять на наличие коректных символов
function validateText(text){
    // Создаём цикл который перебирает список некоректных символов
    for (let symbol of forbiddenSymbols){
        // Делаем проверку на наличие некоректных символов в нашей строке
        if (text.includes(symbol)){
            //Если в тексте есть некоректные символы возвращаем false  
           return false;
        }
    }
    //Если в тексте нет некоректных символов возвращаем true
    return true;
}
