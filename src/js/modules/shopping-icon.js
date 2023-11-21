
// -- Программа для отображения на сайте в верхнем углу корзины количество позиций в корзине.
//-- Инициализация переменной иконки, по ID селектору.
// const basket = document.getElementById('shopping-icon'); 


export function shoppingIcon (basket,number, classDisplay, classNoneDisplay) { 
    /* -- Инициализирую переменную с количеством позиций в корзине, в последствии ее нужно будет брать 
    от величины массива */
    let quantity = number;

    if (quantity > 0) {
    //-- если длина массива более нуля, удаляю все классы и добавляю без класса .shopping-icon__display-none
    // basket.className = "quantity-shopping-icon";
        basket.className = classDisplay; // Присваиваю все классы при которых иконка видимая
    } 
    // -- если в переменной ноль то добавляю класс, чтобы не видеть иконку
    else {
        // basket.className = "quantity-shopping-icon shopping-icon__display-none";
        basket.className = classNoneDisplay; // Присваиваю все классы которые были и добавляю ксасс который скрывает иконку
    }
}


