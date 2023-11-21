//-- Подключение функций
/* Функция отображения на сайте в верхнем углу корзины c количеством позиций в корзине.
*/
import {shoppingIcon}  from './modules/shopping-icon.js';
/* Функция при нажатии на меню каталога отображает выпадающий список с разделами каталога. Функция принимает два параметра (catalog) область при
клике на которую происходит выпадание списка и параметр catList объект где нужно менять классы для отображения каталога. 
*/
import { catalogList } from './modules/catalog-list.js';
/* Функция выводит список подразделов из разделов каталога при наведении мыши.
    Функция принимает два параметра строку каталога  (section) при наведении мышью на которую выпадает список подразделов каталога и переменную
    со списком каталога  (list). В перспективе нужно получить массив с этими переменными. Функция при наведении мыши на строку каталога выводит список, 
    а при перемещении мыши с данной строки удаляет этот список.
*/
import { listDropDown } from './modules/list-subsection.js';

//-- Инициализация переменных по ID селектору, которую контролируем и меняем классы.
const basket = document.getElementById('shopping-icon');                            // корзина
const quantity = 0;                                                                 // --  Инициализируется переменная с количеством позиций в корзине
const classDisplay = "quantity-shopping-icon";                                      // Инициализация переменной с классами по умолчанию для корзины
const classNoneDisplay = "quantity-shopping-icon shopping-icon__display-none";      // Переменная с классами по умолчанию + класс скрывающих видимость иконки для корзины
const catalog = document.getElementById('catalog-block');                           // каталог товаров
const catList = document.getElementById('catalog-list');                            // выпадающий список из каталога
const section1 = document.getElementById('catalog-list_1');                          // инициализация строки каталога
const list1 = document.getElementById('list-subsection_1');                          // инициализация списка для соответствующей строки каталога


//-- Реализация функции отображения на сайте в верхнем углу корзины количество позиций в корзине.
shoppingIcon(basket, quantity, classDisplay, classNoneDisplay);
//-- Реализация функции выпадающего списка разделов каталога, по клику мыши
catalogList(catalog, catList);
// Реализация функции выпадающего списка при наведении мыши на строку каталога
listDropDown(section1, list1);
