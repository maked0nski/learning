// - створити функцію яка виводить масив
function printArray(arr) {
    document.write(arr + "</br>");
    console.log(arr);
}
printArray([1, 5, 2, 8, 4, 6, "jh", "hfdsg", 44]);

// - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.
function randomItem(x) {
    let a = [];
    for (i = 0; i < x; i++) {
        a[i] = Math.floor(Math.random() * x);
    }
    return printArray(a);
}
let randomArray = randomItem(100);

// - створити функцію яка приймає три числа та виводить та повертає найменьше.

function minNumber(a, b, c) {
    let min = a;
    if (a < b) {
        min = a;
    } else {
        min = b;
    }
    if (min > c) {
        min = c;
    }
    return min;
}
console.log(minNumber(1, 9, -25));

// - створити функцію яка приймає три числа та виводить та повертає найбільше.

function maxNumber(a, b, c) {
    let max = a;
    if (a > b) {
        max = a;
    } else {
        max = b;
    }
    if (max < c) {
        max = c;
    }
    return max;
}
console.log(maxNumber(-12, -112, -2));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше

function minArgument() {
    let a_min = arguments[0];
    let a_max = arguments[0];
    console.log(arguments);
    console.log(arguments.length);

    for (let i = 1; i < arguments.length; i++) {
        console.log(arguments[i]);
        if (a_min > arguments[i]) {
            a_min = arguments[i];
        }
        if (a_max < arguments[i]) {
            a_max = arguments[i];
        }
    }
    document.write(
        "створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше" +
            "</br>"
    );
    document.write(a_max + "</br>");
    return a_min;
}

console.log(minArgument(-1, 5, 8, 54, 958, 12, 2, 8, 9, -165, 3, -5, 55, -99));

// створити функцію яка виводить масив
let test_array = [-1, 5, 8, 54, 958, 12, 2, 8, 99, -165, 3, -5, 55, -99];
document.write("створити функцію яка виводить масив" + "</br>");
printArray(test_array);

// - створити функцію яка повертає найбільше число з масиву
function maxArrayItem(arr) {
    let a = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (a < arr[i]) {
            a = arr[i];
        }
    }
    return a;
}
console.log("створити функцію яка повертає найбільше число з масиву");
console.log(maxArrayItem(test_array));

// створити функцію яка повертає найменьше число з масиву
function minArrayItem(arr) {
    let a = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (a > arr[i]) {
            a = arr[i];
        }
    }
    return a;
}
console.log("створити функцію яка повертає найменьше число з масиву");
console.log(minArrayItem(test_array));

// створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
console.log(
    "створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його"
);
document.write(
    "створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його" +
        "</br>"
);
let sum = 0;
function SummatorArrayItems(arr) {
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
document.write(
    `Сума елементів масиву складає : ${SummatorArrayItems(test_array)}` +
        "</br>"
);

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
console.log(
    "створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень."
);
document.write(
    "створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень." +
        "</br>"
);
function arithmetic_mean(arr) {
    return SummatorArrayItems(arr) / arr.length;
}
let tmp = arithmetic_mean(test_array);
console.log(tmp);
document.write(
    `середнє арифметичне значень елементів масиву дорівнює : ${tmp}` + "</br>"
);

// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
//
let test_arr = [
    { id: 1, name: "vasya", age: 31, status: false },
    { id: 2, name: "petya", age: 30, status: true },
    { id: 3, name: "kolya", age: 29, status: true },
    { id: 4, name: "olya", age: 28, status: false },
    55,
    12,
    "skdhgksd",
    [333, 56, "jgjgj"],
    { id: 4, name: "olya" },
];

function lenght_Arr(arr) {
    let a = 0;
    for (const i of arr) {
        if (typeof i === "object") {
            a++;
        }
    }
    return a;
}

console.log(lenght_Arr(test_arr));

// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них

function arr_items(arr) {
    let a = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "object" && !Array.isArray(arr[i]))
            a += Object.keys(arr[i]).length;
    }
    return a;
}

console.log(arr_items(test_arr));

// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   Приклад
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]
function SummatorArr(arr1, arr2) {
    let arr3 = [];
    for (let i = 0; i < arr1.length; i++) {
        arr3.push(arr1[i] + arr2[i]);
    }
    return arr3;
}
console.log(SummatorArr([1, 2, 3, 4], [2, 3, 4, 5]));

//  не зроблено
// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
function array_index(arr, k) {
    let a = arr[k + 1];
    arr[k + 1] = arr[k];
    arr[k] = a;
    return arr;
}
console.log(array_index([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
console.log(array_index([1, true, "", 4, 45, 5, 6, 7, 3, null, 1, 2], 1));

// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
let test2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0];
let test1 = [1, 0, 2, 3, 0, 4, 5, 6, 0, 7, 8, 9];
function replace_item_arr(arr) {
    let arr0 = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === 0) {
            arr.splice(i, 1);
            arr0.push(0);
        }
    }
    return arr.concat(arr0);
}
console.log(test1);
console.log(replace_item_arr(test1));

// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
function hello_div() {
    let div = document.createElement("div");
    div.textContent = "Hello owu";
    document.body.append(div);
}
hello_div();

// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
function add_element(tags, text) {
    let tag = document.createElement(tags);
    tag.textContent = text;
    document.body.append(tag);
}
add_element("span", "привет всем");

// - приймає масив автомобілів , та  індентифікатор елемнту
// в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент,
// індентифікатор якого ви отримали. Всі властивості авто в обному блоці

let cars = [
    {
        brend: "Honda",
        model: "Civic Sport",
        year: 2014,
        engine: { fuel: "gasoline", volume: 1.8 },
        mileage: 84000,
        color: "black",
        price: 12500,
    },
    {
        brend: "Range Rover",
        model: "Evoque SD4",
        year: 2012,
        engine: { fuel: "diesel", volume: 2.2 },
        mileage: 75000,
        color: "black",
        price: 24999,
    },
    {
        brend: "Volkswagen",
        model: "Golf VII Comfortline",
        year: 2014,
        engine: { fuel: "diesel", volume: 1.6 },
        mileage: 124000,
        color: "metallic blue",
        price: 12846,
    },
    {
        brend: "Mazda",
        model: "CX-5",
        year: 2018,
        engine: { fuel: "gasoline", volume: 2.5 },
        mileage: 12000,
        color: "white",
        price: 19850,
    },
];

function arr_car0(arr, Element_id) {
    let tag_div = document.createElement("div");
    document.body.append(tag_div);
    for (let i = 0; i < arr.length; i++) {
        let tag_car_div = document.createElement("div");
        tag_car_div.id = Element_id;
        tag_div.append(tag_car_div);
        for (let k of Object.values(arr[i])) {
            if (typeof k === "object") {
                tag_car_div.textContent += JSON.stringify(k);
            } else {
                tag_car_div.textContent += k;
            }
        }
    }
}

arr_car0(cars, "ID_cars0");

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок

function arr_car(arr, Element_id) {
    let tag_div = document.createElement("div");
    tag_div.id = Element_id;
    document.body.append(tag_div);

    for (let i = 0; i < arr.length; i++) {
        let tag_ul = document.createElement("ul");
        document.getElementById(Element_id).append(tag_ul);

        for (let k of Object.values(arr[i])) {
            tag_li = document.createElement("li");
            tag_ul.appendChild(tag_li);

            if (typeof k === "object") {
                tag_li.textContent = JSON.stringify(k);
            } else {
                tag_li.textContent = k;
            }
        }
    }
}

arr_car(cars, "ID_cars");

// - функція приймає 2 масиви з рівною кількістю об'єктів
//  та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:
let usersWithId = [
    { id: 1, name: "vasya", age: 31, status: false },
    { id: 2, name: "petya", age: 30, status: true },
    { id: 3, name: "kolya", age: 29, status: true },
    { id: 4, name: "olya", age: 28, status: false },
];
let citiesWithId = [
    { user_id: 3, country: "USA", city: "Portland" },
    { user_id: 1, country: "Ukraine", city: "Ternopil" },
    { user_id: 2, country: "Poland", city: "Krakow" },
    { user_id: 4, country: "USA", city: "Miami" },
];

function user_cities(user, citi) {
    for (let i = 0; i < user.length; i++) {
        for (let j = 0; j < citi.length; j++) {
            if (user[i].id === citi[j].user_id) {
                user[i].adress = citi[j];
            }
        }
    }
    return user;
}
console.log(user_cities(usersWithId, citiesWithId));

let rules = [
    {
        title: "Первое правило Бойцовского клуба.",
        body: "Никому не рассказывать о Бойцовском клубе.",
    },
    {
        title: "Второе правило Бойцовского клуба.",
        body: "Никогда никому не рассказывать о Бойцовском клубе.",
    },
    {
        title: "Третье правило Бойцовского клуба.",
        body: "В схватке участвуют только двое.",
    },
    {
        title: "Четвертое правило Бойцовского клуба.",
        body: "Не более одного поединка за один раз.",
    },
    {
        title: "Пятое правило Бойцовского клуба.",
        body: "Бойцы сражаются без обуви и голые по пояс.",
    },
    {
        title: "Шестое правило Бойцовского клуба.",
        body: "Поединок продолжается столько, сколько потребуется.",
    },
    {
        title: "Седьмое правило Бойцовского клуба.",
        body:
            "Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.",
    },
    {
        title: "Восьмое и последнее правило Бойцовского клуба.",
        body: "Новичок обязан принять бой.",
    },
];
function f_rules(arr) {
    let div_1 = document.createElement("div");
    div_1.id = "wrap";
    document.body.append(div_1);
    for (let i = 0; i < arr.length; i++) {
        let div_0 = document.createElement("div");
        div_1.appendChild(div_0);
        let h3 = document.createElement("h3");
        h3.textContent = arr[i].title;
        div_0.appendChild(h3);
        let span = document.createElement("span");
        span.textContent = arr[i].body;
        div_0.appendChild(span);
    }
}

f_rules(rules);

// ===========додаткове від віктора========
// 1) Точная степень двойки.
// Дано натуральное число N.
// Выведите слово YES, если число N является точной степенью двойки,
// или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!

function degree(n) {
    let i = 1;
    while (i < n) {
        i *= 2;
        console.log(i);
    }
    if (i === n) {
        console.log("YES");
    } else {
        console.log("NO");
    }
}

degree(128);

