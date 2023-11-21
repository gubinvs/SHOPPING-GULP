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
}
