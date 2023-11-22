//-- Программа реализует открытие списка при нажатии на объект
// событие клик по блоку с вопросом
// const catalog = document.getElementById('catalog-block');
// const catalogList = document.getElementById('catalog-list');


export function catalogList (catalog, catList) {
    catalog.addEventListener("click", function(e) {
    //-- добаляю класс для отображения если блок невидим и наоборот
        if (catList == document.querySelector('.search-block-none')) {
            catList.className = "search-block search-block-subsection";
        } else catList.className = "search-block search-block-subsection search-block-none";
    });

    // -- При нажатии мыши в теле окна браузера, проверяется не является ли нажатая облать областью меню каталог, если нет список каталога закрывается
    window.addEventListener('click', e => {
        var target = e.target; // получаем элемент экрана, на который была нажата мышь
        if (target !== catalog) { // если это не блок каталог товаров, меню и список скрываются
            catList.className = "search-block search-block-subsection search-block-none";
        }
    });
}
