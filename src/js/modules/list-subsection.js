// Программы выводит список подразделов из разделов каталога при наведении мыши


const section = document.getElementById('catalog-list_1'); // инициализация строки каталога
const list = document.getElementById('list-subsection_1'); // инициализация списка каталога


// функция реализующая выпадающий список при наведении кусора на строку
export function listDropDown (section, list) {
    section.addEventListener('mouseover', function() {
        list.className = "search-block-list_subsection subsection-schneider";
    });

    section.addEventListener('mouseout', function() {
        list.className = "search-block-list_subsection subsection-abb list_subsection-none";
    });

    list.addEventListener('mouseover', function() {
        list.className = "search-block-list_subsection subsection-schneider";
    });

    list.addEventListener('mouseout', function() {
        list.className = "search-block-list_subsection subsection-abb list_subsection-none";
    });

}

listDropDown(section, list);