//-- Взаимодействие с блоком вопроса
//-- инициализировал переменную блока вопроса
const questionBlock1 = document.getElementById('question1');
const questionBlock2 = document.getElementById('question2');
const questionBlock3 = document.getElementById('question3'); 
const questionBlock4 = document.getElementById('question4'); 
const questionBlock5 = document.getElementById('question5'); 
const questionBlock6 = document.getElementById('question6'); 
const questionBlock7 = document.getElementById('question7'); 
const questionBlock8 = document.getElementById('question8'); 


const questionBlockNone1 = document.querySelector('.question1');
const questionBlockNone2 = document.querySelector('.question2');
const questionBlockNone3 = document.querySelector('.question3');
const questionBlockNone4 = document.querySelector('.question4');
const questionBlockNone5 = document.querySelector('.question5');
const questionBlockNone6 = document.querySelector('.question6');
const questionBlockNone7 = document.querySelector('.question7');
const questionBlockNone8 = document.querySelector('.question8');

// событие клик по блоку с вопросом
questionBlock1.addEventListener("click", function(e) {
//-- добаляю класс для отображения если блок невидим и наоборот
    if (questionBlockNone1 == document.querySelector('.question1')) {
        questionBlockNone1.className = "question-list__item_answer";
    } else questionBlockNone1.className = "question1";
});


// событие клик по блоку с вопросом
questionBlock2.addEventListener("click", function(e) {
//-- добаляю класс для отображения если блок невидим и наоборот
    if (questionBlockNone2 == document.querySelector('.question2')) {
        questionBlockNone2.className = "question-list__item_answer";
    } else questionBlockNone2.className = "question2";
});

// событие клик по блоку с вопросом
questionBlock3.addEventListener("click", function(e) {
//-- добаляю класс для отображения если блок невидим и наоборот
    if (questionBlockNone3 == document.querySelector('.question3')) {
        questionBlockNone3.className = "question-list__item_answer";
    } else questionBlockNone3.className = "question3";
});

// событие клик по блоку с вопросом
questionBlock4.addEventListener("click", function(e) {
//-- добаляю класс для отображения если блок невидим и наоборот
    if (questionBlockNone4 == document.querySelector('.question4')) {
        questionBlockNone4.className = "question-list__item_answer";
    } else questionBlockNone4.className = "question4";
});

// событие клик по блоку с вопросом
questionBlock5.addEventListener("click", function(e) {
//-- добаляю класс для отображения если блок невидим и наоборот
    if (questionBlockNone5 == document.querySelector('.question5')) {
        questionBlockNone5.className = "question-list__item_answer";
    } else questionBlockNone5.className = "question5";
});

// событие клик по блоку с вопросом
questionBlock6.addEventListener("click", function(e) {
//-- добаляю класс для отображения если блок невидим и наоборот
    if (questionBlockNone6 == document.querySelector('.question6')) {
        questionBlockNone6.className = "question-list__item_answer";
    } else questionBlockNone6.className = "question6";
});

// событие клик по блоку с вопросом
questionBlock7.addEventListener("click", function(e) {
//-- добаляю класс для отображения если блок невидим и наоборот
    if (questionBlockNone7 == document.querySelector('.question7')) {
        questionBlockNone7.className = "question-list__item_answer";
    } else questionBlockNone7.className = "question7";
});

// событие клик по блоку с вопросом
questionBlock8.addEventListener("click", function(e) {
//-- добаляю класс для отображения если блок невидим и наоборот
    if (questionBlockNone8 == document.querySelector('.question8')) {
        questionBlockNone8.className = "question-list__item_answer";
    } else questionBlockNone8.className = "question8";
});



//-- Сокращенный код c использованием массива
//-- Взаимодействие с блоком вопроса

const item = 6; //-- количество блоков с вопросами
const questionBlock = [];
const questionBlockNone = [];

for (let i=1; i<item+1; i++) {
    questionBlock[i] = document.getElementById('question'+i);
    questionBlockNone[i] = document.querySelector('.question'+i);
    // событие клик по блоку с вопросом
    questionBlock[i].addEventListener("click", function(e) {
    //-- добаляю класс для отображения если блок невидим и наоборот
        if (questionBlockNone[i] == document.querySelector('.question'+i)) {
            questionBlockNone[i].className = "question-list__item_answer";
        } 
        else {
            questionBlockNone[i].className = "question"+i;
        }
    });   
}