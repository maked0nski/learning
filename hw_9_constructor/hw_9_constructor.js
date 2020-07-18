// Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

function DescriptionTag(titleOfTag, action, atrib = []) {
    this.titleOfTag = titleOfTag;
    this.action = action;
    this.atrib = atrib;
}

let tag_a = new DescriptionTag(
    "<a>",
    "HTML теґ <a> створює посилання на іншу сторіку(Зовнішне посилання) або на певний елемент цієї сторінки(Внутрішне посилання).",
    [
        {
            titleOfAttr: "href",
            actionOfAttr: "Задає адресу документа, на який слід перейти.",
        },
        {
            titleOfAttr: "download",
            actionOfAttr: "Пропонує завантажити вказаний за посиланням файл.",
        },
        {
            titleOfAttr: "media",
            actionOfAttr:
                "Вказує, що пов’язаний документ оптимізований під деякий пристрій.",
        },
    ]
);
let tag_div = new DescriptionTag(
    "<div>",
    "Тег <div> використовується, щоб групувати блоки інформації та форматувати її за допомогою CSS. Елемент <div> є блоковим елементом і призначений для виділення фрагмента документа з метою зміни виду вмісту. Як правило, вид блоку управляється за допомогою стилів. Щоб не описувати кожен раз стиль всередині тега, можна виділити стиль в зовнішню таблицю стилів, а для тега додати атрибут class або id з ім'ям селектора.",
    [
        {
            titleOfAttr: "align",
            actionOfAttr:
                "Визначає вирівнювання вмісту всередині `<div>` елемента.",
        },
    ]
);

let tag_h1 = new DescriptionTag(
    "<h1>",
    "HTML заголовки визначаються тегами від <h1> до <h6>: <H1> визначає найбільш важливі заголовки, а <h6> визначає найменш важливі заголовки (<h1> заголовки повинні бути основними заголовками, потім слідують заголовки <h2> і так далі). Браузери автоматично додають порожній простір до і після кожного заголовка. Пошукові системи використовують ваші заголовки для індексації структури і змісту веб-сторінок. Тому важливо використовувати заголовки, щоб показати структуру документа. Теги <h1> -<h6> відносяться до блокових елементів, вони завжди починаються з нового рядка, а після них інші елементи відображаються на наступному рядку. Крім того, перед заголовком і після нього додається порожній простір.",
    [
        {
            titleOfAttr: "align",
            actionOfAttr: "Вирівнювання заголовку",
        },
        {
            titleOfAttr: "accesskey",
            actionOfAttr: "Дозволяє активувати або сфокусуватись на елементі за допомогою заданого сполучення клавіш.",
        },
        {
            titleOfAttr: "style",
            actionOfAttr:
                "Задає вбудований (inline) CSS стиль для елемента.",
        },
    ]
);
let tag_span = new DescriptionTag(
    "<span>",
    "Тег <span> являє собою універсальний порожній контейнер, який необхідно заповнити будь-яким вмістом, або згрупувати вкладені елементи для їх подальшої стилізації засобами CSS, і при необхідності динамічно маніпулювати ними з використанням скриптів, наприклад, на такій мові програмування як Javascript. Тег <span> є рядковим і застосовується до внутрішніх (inline) елементів сторінки, тобто до слів, фраз, які знаходяться в межах абзацу або невеликого фрагмента тексту, змісту тощо.",
    [
        {
            titleOfAttr: "contenteditable",
            actionOfAttr: "Дозволяє редагувати текст в середні тегу.",
        },
        {
            titleOfAttr: "dropzone",
            actionOfAttr: "Вказує, що робити з перетягувати елементи.",
        },
        {
            titleOfAttr: "hidden",
            actionOfAttr: "Приховує вміст елемента від перегляду.",
        },
    ]
);

let tag_input = new DescriptionTag(
    '<input>',
    'HTML теґ <input> є одним з різнобічних елементів форми і дозволяє створювати різні елементи інтерфейсу і забезпечити взаємодію з користувачем. Головним чином <input> призначений для створення текстових полів, різних кнопок, перемикачів і прапорців. Елемент введення <input> може мати різний вигляд - залежить від атрибуту type.',
    [
        {
            titleOfAttr: 'accept',
            actionOfAttr: 'Встановлює фільтр на типи файлів, які ви можете надіслати через поле завантаження файлів.'
        },
        {
            titleOfAttr: 'alt',
            actionOfAttr: 'Задає альтернативний текст для зображення (для type ="image")'
        },
        {
            titleOfAttr: 'autofocus',
            actionOfAttr: 'Автоматичне отримання фокусу елементом форми відразу після повного завантаження сторінки.'
        },
    ]
);
    
let tag_form = new DescriptionTag(
        '<form>',
        'HTML теґ <form> використовується для створення HTML форми на сторінці.',
        [
            {
                titleOfAttr: 'action',
                actionOfAttr: 'Вказує URL адресу обробника форми.'
            },
            {
                titleOfAttr: 'enctype',
                actionOfAttr: 'Вказує кодування даних форми, що відправляються на сервер.'
            },
            {
                titleOfAttr: 'name',
                actionOfAttr: 'Вказує унікальне імʼя форми.'
            },
        ]
);
let tag_option = new DescriptionTag(
        '<option>',
        'HTML тег option призначений для створення пункту списку для тега select чи datalist. Елементи option завжди повиннен розташовуватися всередині контейнера select чи datalist. Якщо планується відправляти дані списку на сервер, то потрібно помістити елемент <select> всередину форми. Це також необхідно, коли до даних списку йде звернення через скрипти.',
        [
            {
                titleOfAttr: 'disabled',
                actionOfAttr: 'Відключає пункт списку.'
            },
            {
                titleOfAttr: 'label',
                actionOfAttr: 'Вказує короткий опис для пункту списку'
            },
            {
                titleOfAttr: 'selected',
                actionOfAttr: 'Задає пункт списку, який буде обраний за дефолтом.'
            },
            {
                titleOfAttr: 'value',
                actionOfAttr: 'Задає значення елементу `select`, яке буде обробляти скрипт.'
            },
        ]
);
let tag_select = new DescriptionTag(
        '<select>',
        'Тег <select> дозволяє створити елемент інтерфейсу у вигляді списку, що розкривається, а також список з одним або множинним вибором. Кожен пункт створюється за допомогою тега <option>, який повинен бути вкладений в контейнер <select>. Якщо планується відправляти дані списку на сервер, то потрібно помістити елемент <select> всередину форми. Це також необхідно, коли до даних списку йде звернення через скрипти.',
        [
            {
                titleOfAttr: 'autofocus',
                actionOfAttr: 'Встановлює фокус після завантаження сторінки.'
            },
            {
                titleOfAttr: 'name',
                actionOfAttr: 'Імʼя випадаючого списка'
            },
            {
                titleOfAttr: 'form',
                actionOfAttr: 'Повʼязує список з однією або з кількома формами.'
            },
            {
                titleOfAttr: 'disabled',
                actionOfAttr: 'Блокує доступ та зміну елемента.'
            },
        ]
);

console.log(tag_a);
console.log(tag_div);
console.log(tag_h1);
console.log(tag_span);
console.log(tag_input);
console.log(tag_form);
console.log(tag_option);
console.log(tag_select);
console.log("__________________________________________");


// ==============================================
// -  Створити класс  для об'єкту який описує теги

class ClassTag {
    constructor(titleOfTag, action, atrib){
        this.titleOfTag = titleOfTag;
        this.action = action;
        this.atrib = atrib;
    }
}


let tag_a_class = new ClassTag(
    "<a>",
    "HTML теґ <a> створює посилання на іншу сторіку(Зовнішне посилання) або на певний елемент цієї сторінки(Внутрішне посилання).",
    [
        {
            titleOfAttr: "href",
            actionOfAttr: "Задає адресу документа, на який слід перейти.",
        },
        {
            titleOfAttr: "download",
            actionOfAttr: "Пропонує завантажити вказаний за посиланням файл.",
        },
        {
            titleOfAttr: "media",
            actionOfAttr:
                "Вказує, що пов’язаний документ оптимізований під деякий пристрій.",
        },
    ]
);
let tag_div_class = new ClassTag(
    "<div>",
    "Тег <div> використовується, щоб групувати блоки інформації та форматувати її за допомогою CSS. Елемент <div> є блоковим елементом і призначений для виділення фрагмента документа з метою зміни виду вмісту. Як правило, вид блоку управляється за допомогою стилів. Щоб не описувати кожен раз стиль всередині тега, можна виділити стиль в зовнішню таблицю стилів, а для тега додати атрибут class або id з ім'ям селектора.",
    [
        {
            titleOfAttr: "align",
            actionOfAttr:
                "Визначає вирівнювання вмісту всередині `<div>` елемента.",
        },
    ]
);

let tag_h1_class = new ClassTag(
    "<h1>",
    "HTML заголовки визначаються тегами від <h1> до <h6>: <H1> визначає найбільш важливі заголовки, а <h6> визначає найменш важливі заголовки (<h1> заголовки повинні бути основними заголовками, потім слідують заголовки <h2> і так далі). Браузери автоматично додають порожній простір до і після кожного заголовка. Пошукові системи використовують ваші заголовки для індексації структури і змісту веб-сторінок. Тому важливо використовувати заголовки, щоб показати структуру документа. Теги <h1> -<h6> відносяться до блокових елементів, вони завжди починаються з нового рядка, а після них інші елементи відображаються на наступному рядку. Крім того, перед заголовком і після нього додається порожній простір.",
    [
        {
            titleOfAttr: "align",
            actionOfAttr: "Вирівнювання заголовку",
        },
        {
            titleOfAttr: "accesskey",
            actionOfAttr: "Дозволяє активувати або сфокусуватись на елементі за допомогою заданого сполучення клавіш.",
        },
        {
            titleOfAttr: "style",
            actionOfAttr:
                "Задає вбудований (inline) CSS стиль для елемента.",
        },
    ]
);
   
let tag_span_class = new ClassTag(
    "<span>",
    "Тег <span> являє собою універсальний порожній контейнер, який необхідно заповнити будь-яким вмістом, або згрупувати вкладені елементи для їх подальшої стилізації засобами CSS, і при необхідності динамічно маніпулювати ними з використанням скриптів, наприклад, на такій мові програмування як Javascript. Тег <span> є рядковим і застосовується до внутрішніх (inline) елементів сторінки, тобто до слів, фраз, які знаходяться в межах абзацу або невеликого фрагмента тексту, змісту тощо.",
    [
        {
            titleOfAttr: "contenteditable",
            actionOfAttr: "Дозволяє редагувати текст в середні тегу.",
        },
        {
            titleOfAttr: "dropzone",
            actionOfAttr: "Вказує, що робити з перетягувати елементи.",
        },
        {
            titleOfAttr: "hidden",
            actionOfAttr: "Приховує вміст елемента від перегляду.",
        },
    ]
);
    
let tag_input_class = new ClassTag(
    '<input>',
    'HTML теґ <input> є одним з різнобічних елементів форми і дозволяє створювати різні елементи інтерфейсу і забезпечити взаємодію з користувачем. Головним чином <input> призначений для створення текстових полів, різних кнопок, перемикачів і прапорців. Елемент введення <input> може мати різний вигляд - залежить від атрибуту type.',
    [
        {
            titleOfAttr: 'accept',
            actionOfAttr: 'Встановлює фільтр на типи файлів, які ви можете надіслати через поле завантаження файлів.'
        },
        {
            titleOfAttr: 'alt',
            actionOfAttr: 'Задає альтернативний текст для зображення (для type ="image")'
        },
        {
            titleOfAttr: 'autofocus',
            actionOfAttr: 'Автоматичне отримання фокусу елементом форми відразу після повного завантаження сторінки.'
        },
    ]
);

let tag_form_class = new ClassTag(
    '<form>',
    'HTML теґ <form> використовується для створення HTML форми на сторінці.',
    [
        {
            titleOfAttr: 'action',
            actionOfAttr: 'Вказує URL адресу обробника форми.'
        },
        {
            titleOfAttr: 'enctype',
            actionOfAttr: 'Вказує кодування даних форми, що відправляються на сервер.'
        },
        {
            titleOfAttr: 'name',
            actionOfAttr: 'Вказує унікальне імʼя форми.'
        },
    ]
);
        
let tag_option_class = new ClassTag(
    '<option>',
    'HTML тег option призначений для створення пункту списку для тега select чи datalist. Елементи option завжди повиннен розташовуватися всередині контейнера select чи datalist. Якщо планується відправляти дані списку на сервер, то потрібно помістити елемент <select> всередину форми. Це також необхідно, коли до даних списку йде звернення через скрипти.',
    [
        {
            titleOfAttr: 'disabled',
            actionOfAttr: 'Відключає пункт списку.'
        },
        {
            titleOfAttr: 'label',
            actionOfAttr: 'Вказує короткий опис для пункту списку'
        },
        {
            titleOfAttr: 'selected',
            actionOfAttr: 'Задає пункт списку, який буде обраний за дефолтом.'
        },
        {
            titleOfAttr: 'value',
            actionOfAttr: 'Задає значення елементу `select`, яке буде обробляти скрипт.'
        },
    ]     
);


let tag_select_class = new ClassTag(
    '<select>',
    'Тег <select> дозволяє створити елемент інтерфейсу у вигляді списку, що розкривається, а також список з одним або множинним вибором. Кожен пункт створюється за допомогою тега <option>, який повинен бути вкладений в контейнер <select>. Якщо планується відправляти дані списку на сервер, то потрібно помістити елемент <select> всередину форми. Це також необхідно, коли до даних списку йде звернення через скрипти.',
    [
        {
            titleOfAttr: 'autofocus',
            actionOfAttr: 'Встановлює фокус після завантаження сторінки.'
        },
        {
            titleOfAttr: 'name',
            actionOfAttr: 'Імʼя випадаючого списка'
        },
        {
            titleOfAttr: 'form',
            actionOfAttr: 'Повʼязує список з однією або з кількома формами.'
        },
        {
            titleOfAttr: 'disabled',
            actionOfAttr: 'Блокує доступ та зміну елемента.'
        },
    ]
);

console.log(tag_a_class);
console.log(tag_div_class);
console.log(tag_h1_class);
console.log(tag_span_class);
console.log(tag_input_class);
console.log(tag_form_class);
console.log(tag_option_class);
console.log(tag_select_class);
console.log("__________________________________________");
