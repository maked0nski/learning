// - создать массив с 20 числами.
let numbers = [
    1,
    6,
    9,
    3,
    16,
    4,
    15,
    10,
    99,
    85,
    80,
    -8,
    55,
    -12,
    54,
    32,
    18,
    -3,
    -25,
    2,
];

// -- при помощи метода sort и колбека  отсортировать массив.
// numbers.sort((a,b) => a-b)

// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// numbers.sort((a,b) => b-a)

// -- при помощи filter получить числа кратные 3
// let filtred_3 =  numbers.filter((value) => !(value % 3));

// -- при помощи filter получить числа кратные 10
// let filtred_10 = numbers.filter((value) => !(value%10));

// -- перебрать (проитерировать) массив при помощи foreach()
// numbers.forEach(value => console.log(value));

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
// let mapArray = numbers.map((value) => value * 3);

// - создать массив со словами на 15-20 элементов.
let words = [
    "weather",
    "rain",
    "skeell",
    "box",
    "headphouns",
    "laptop",
    "lamp",
    "credit",
    "wall",
    "flour",
    "charger",
    "table",
    "title",
    "array",
    "crash",
    "job",
    "work",
    "mouse",
    "car",
    "wood",
];

// -- отсортировать его по алфавиту в восходящем порядке.
// words.sort();

// -- отсортировать его по алфавиту  в нисходящем порядке.
// words.sort((a,b) => {
//     if (a<b){
//         return 1
//     }
//     return -1
// })

// -- отфильтровать слова длиной менее 4х символов
// let symbol_4 = words.filter(value => {
//     if (value.length>4) {
//         console.log(value);
//     }
// });

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
// let newArr = words.map(value => value + '!')

// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
let users = [
    { name: "vasya", age: 31, status: false },
    { name: "petya", age: 30, status: true },
    { name: "kolya", age: 29, status: true },
    { name: "olya", age: 28, status: false },
    { name: "max", age: 30, status: true },
    { name: "anya", age: 31, status: false },
    { name: "oleg", age: 28, status: false },
    { name: "andrey", age: 29, status: true },
    { name: "masha", age: 30, status: true },
    { name: "olya", age: 31, status: false },
    { name: "max", age: 31, status: true },
];
// - відсортувати його за  віком (зростання , а потім окремо спадання)
// users.sort((a,b) => {
//     return a.age - b.age;
// })


// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// users.sort((a,b) => {
//     return a.name.length - b.name.length;
// })

// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор
//  (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)


// - відсортувати його за індентифікатором

console.log(users);
