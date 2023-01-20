// 05-js-dom

// 1. Таблицу с id="age-table".
const ageTable = document.body.getElementsByClassName('#age-table');
console.log(ageTable);

// 2. Все элементы `label` внутри этой таблицы (их три).
const labelsWithinAgeTable = document.querySelectorAll('label');
console.log(labelsWithinAgeTable);

// 3. Первый `td` в этой таблице (со словом «Age»).
const tdWithAge = document.getElementsByTagName('td')[0];
console.log(tdWithAge);

// 4. Форму `form` с именем `name="search"`.
const formSearch = document.querySelector('form[name="search"]');
console.log(formSearch);


// 5. Первый `input` в этой форме.
const firstInputWithinformSearch = document.querySelector('form[name="search"] input[name="search"]');
console.log(firstInputWithinformSearch);

// 6. Последний `input` в этой форме.
const lastInputWithinformSearch = document.querySelector('form[name="search"] input[type="submit"]');
console.log(lastInputWithinformSearch);