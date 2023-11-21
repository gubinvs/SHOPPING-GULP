//-- Взаимодействие с бургером
//-- инициализировал переменную с бургером
const burger = document.getElementById('burger'); 
//-- Инициализировал переменную с крестиком
const burgerСlose = document.querySelector('.burger_close');
//-- Инициализировал переменную с классом .header__mobile
const classBlockActive = document.querySelector('.nav-block-active');
//-- Инициализировал переменную с классом .header__mobile
const classBurgerClose = document.querySelector('.burger_close');

// событие клик по бургеру
burger.addEventListener("click", function(e) {
    //-- добаляю классы
    classBlockActive.className = "nav-block-active";
    classBurgerClose.className = "burger_close";
    burger.className = ".none-block";
});

// событие клик по бургеру крестику
burgerСlose.addEventListener("click", function(e) {
    //-- добаляю классы
    classBlockActive.className = "nav-block-active none-block";
    classBurgerClose.className = "burger_close none-block";
    burger.className = "burger";
});
