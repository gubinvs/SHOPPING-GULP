// Программы выводит список подразделов из разделов каталога при наведении мыши


// функция реализующая выпадающий список при наведении кусора на строку (для одного раздела каталога)
export function listDropDown () {

    const section = document.getElementById('catalog-list_1'); // инициализация строки каталога
    const list = document.getElementById('list-subsection_1'); // инициализация списка каталога

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

/*  Функция реализующая выпадающий список при наведении кусора на строку (для n - разделов каталога)
    quantity - количество строк (разделов) в каталоге
*/
export function arrayListDropDown (quantity) {
    var section = new Array();
    var list = new Array();

    for (let i=1; i <= quantity; i++ ) {

        section[i] = document.getElementById('catalog-list_' + i); // инициализация строки каталога
        list[i] = document.getElementById('list-subsection_' + i); // инициализация списка каталога

        section[i].addEventListener('mouseover', function() {
            list[i].className = "search-block-list_subsection subsection-schneider";
        });
    
        section[i].addEventListener('mouseout', function() {
            list[i].className = "search-block-list_subsection subsection-abb list_subsection-none";
        });
    
        list[i].addEventListener('mouseover', function() {
            list[i].className = "search-block-list_subsection subsection-schneider";
        });
    
        list[i].addEventListener('mouseout', function() {
            list[i].className = "search-block-list_subsection subsection-abb list_subsection-none";
        });
    } 
}