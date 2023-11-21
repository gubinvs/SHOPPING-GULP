//-- Функция отображения на сайте в верхнем углу корзины количество позиций в корзине.
import {shoppingIcon}  from './modules/shopping-icon.js';
import { catalogList } from './modules/catalog-list.js';


//-- Инициализация переменных по ID селектору, которую контролируем и меняем классы.
const basket = document.getElementById('shopping-icon'); // корзина
const catalog = document.getElementById('catalog-block'); // каталог товаров
const catList = document.getElementById('catalog-list'); // выпадающий список из каталога


// --  Инициализируется переменная с количеством позиций в корзине
const quantity = 0;
// -- Инициализация переменной с классами по умолчанию для корзины
const classDisplay = "quantity-shopping-icon";
//-- Переменная с классами по умолчанию + класс скрывающих видимость иконки для корзины
const classNoneDisplay = "quantity-shopping-icon shopping-icon__display-none";



//-- Реализация функции отображения на сайте в верхнем углу корзины количество позиций в корзине.
shoppingIcon(basket, quantity, classDisplay, classNoneDisplay);
//-- Реализация функции выпадающего списка разделов каталога, по клику мыши
catalogList(catalog, catList);
