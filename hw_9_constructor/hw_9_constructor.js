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

// ==============================================
// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

let car_object = {
    model : 'BMV',
    brend : 'X5',
    year :  2005,
    max_speed : 200,
    engine : 8,
    drive : function () {
        console.log(`Їдемо зі швидкісттю ${this.max_speed} на годину`);
    },
    info : function () {
        console.log(`Коротко про машину: 
                    модель : ${this.model}
                    Виробник : ${this.brend}
                    Рік випуску : ${this.year}
                    максимальна швидкість : ${this.max_speed} км/год
                    Об'єм двигуна : ${this.engine}`);
    },
    increaseMaxSpeed : function(newSpeed) {
        this.max_speed = newSpeed;
    },
    changeYear : function(newValue) {
        this.year = newValue;
    },
    addDriver : function(driver) {
        this.driver = driver;
    }
};


car_object.drive();
car_object.info();
car_object.increaseMaxSpeed(300);
car_object.changeYear(2010);
car_object.addDriver({name : 'Viktor', age : 34, experience : 12});
console.log(car_object);

// ==============================================
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

function CarObjectFunc (model, brend, year, max_speed, engine){
    this.model = model,
    this.brend = brend,
    this.year = year,
    this.max_speed = max_speed,
    this.engine = engine,

    this.drive = function(){
        console.log(`їдемо зі швидкістю ${this.max_speed} на годину`); 
    },
    this.info = function() {
        console.log(`Я купив собі автомобіль :
                    Модель : ${this.model}
                    Виробник : ${this.brend},
                    ${this.year} року випуску
                    Максимальна швидкість авто ${max_speed}
                    Об'єм двигуна : ${engine}`); 
    },

    this.increaseMaxSpeed = function (newSpeed) {
        this.max_speed = newSpeed;
    },
    this.changeYear = function (newValue) {
        this.year = newValue;
    },
    this.addDriver = function (driver) {
        this.driver = driver;
    }
};

let firstCar = new CarObjectFunc('407', 'peugot', 2005, 200, 2)
console.log(firstCar);
firstCar.increaseMaxSpeed(250);
firstCar.addDriver({name: 'Andrey', age : 28 , experience : 2})

console.log(firstCar);

// ==============================================
// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

class CarObject {
    constructor(model, brend, year, max_speed, engine) {
        this.model = model,
        this.brend = brend,
        this.year = year,
        this.max_speed = max_speed,
        this. engine = engine
    };
    drive(){
        console.log(`їдемо зі швидкістю ${this.max_speed} на годину`);
    };
    info(){
        console.log(`Я купив собі автомобіль :
                    Модель : ${this.model}
                    Виробник : ${this.brend},
                    ${this.year} року випуску
                    Максимальна швидкість авто ${max_speed}
                    Об'єм двигуна : ${engine}`); 
    };
    increaseMaxSpeed(newSpeed) {
        this.max_speed = newSpeed;
    };
    changeYear(newValue) {
        this.max_speed = newValue;
    };
    addDriver(driver) {
        this.driver = driver;
    }
}

let firstCar1 = new CarObjectFunc('3008', 'peugot', 2015, 200, 2);
firstCar1.increaseMaxSpeed(500);
firstCar1.changeYear(2018);
firstCar1.addDriver({name : 'Mark', age : 28, experience : 8});
console.log(firstCar1);

// ==============================================
// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================
class girl {
    constructor(name, age, footSize) {
        this.name = name,
        this.age = age,
        this.footSize = footSize
    };
};
class prince {
    constructor(name, age, boot) {
        this.name = name,
        this.age = age,
        this.boot = boot
    };
};

let girl1 = new girl('Lida', 18, 37)
let girl2 = new girl('Inna', 19, 35)
let girl3 = new girl('Ira', 20, 36)
let girl4 = new girl('Olga', 21, 38)
let girl5 = new girl('Mira', 22, 39)
let girl6 = new girl('Lena', 22, 40)
let girl7 = new girl('Anna', 23, 41)
let girl8 = new girl('Vira', 18, 30)
let girl9 = new girl('Vika', 23, 31)
let girl10 = new girl('Nata', 32, 32)

let girls = [girl1, girl2, girl3, girl4, girl5, girl6, girl7, girl8, girl9, girl10]
console.log(girls);

let prince1 = new prince('Josef', 33, 32)
for (let i = 0; i < girls.length; i++) {
    if (girls[i].footSize === prince1.boot )
        console.log(girls[i]);
}
console.log(prince1.boot);