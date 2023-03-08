// ну тип задание дива blockAuth в js
let blockAuth=document.querySelector(".block-auth");
// ну тип задание дива blockReg в js 
let blockReg=document.querySelector(".block-reg");
// тип задание детектора события клацанья тип и скрытия blockAuth
buttonReg.addEventListener("click", function(event){
// тип blockAuth не скрыт 
    blockAuth.hidden = false;
// тип blockReg скрыт
    blockReg.hidden = true;
});
// тип задание детектора события клацанья тип и  скрытия BlockReg
buttonAuth.addEventListener("click", function(event){
// тип blockAuth скрыт
    blockAuth.hidden = true;
// тип blockReg не скрыт
    blockReg.hidden = false;
});

// ШУТКА1:
// -Тук-Тук
// -Кто там?
// -Тук-Тук
// -Кто там?!
// -Тук-Тук
// "идиот" подумал Штирлиц
// "баран" подумал Тук-Тук
// 
//  ШУТКА2:
// В семье пуговиц проблема:
// Батю пришили