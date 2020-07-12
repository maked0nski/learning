// - створити функцію яка виводить масив
function printArray(arr) {
    document.write(arr + '</br>');
    console.log(arr)
}
printArray([1,5,2,8,4,6,'jh','hfdsg',44])

// - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.
function randomItem(x) {
    let a = [];
    for (i = 0; i<x; i++) {
        a[i] = Math.floor((Math.random()*x));
    }
    return printArray(a);
}
let randomArray = randomItem(100);


// - створити функцію яка приймає три числа та виводить та повертає найменьше.

function minNumber(a,b,c) {
    let min = a;
    if (a<b){
        min = a;
    } else{
        min =b;
    }
    if (min>c) {
        min = c;
    }
    return min
};
console.log(minNumber(1,9,-25));


// - створити функцію яка приймає три числа та виводить та повертає найбільше.

function maxNumber(a, b, c) {
    let max = a;
    if ( a > b){
        max = a;
    } else{
        max = b;
    }
    if (max < c) {
        max = c;
    }
    return max;
};
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
            a_min = arguments[i]
        }
        if (a_max < arguments[i]) {
            a_max = arguments[i]
        }  
    }
    document.write('створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше' + '</br>')
    document.write(a_max  + '</br>');
    return a_min;
};

console.log(minArgument(-1,5,8,54,958,12,2,8,9,-165,3,-5,55,-99));


// створити функцію яка виводить масив
let test_array = [-1,5,8,54,958,12,2,8,99,-165,3,-5,55,-99]
document.write('створити функцію яка виводить масив' + '</br>')
printArray(test_array);


// - створити функцію яка повертає найбільше число з масиву
function maxArrayItem(arr) {
    let a = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (a < arr[i]) {
            a=arr[i];
        }
    }
    return a
}
console.log('створити функцію яка повертає найбільше число з масиву');
console.log(maxArrayItem(test_array));


// створити функцію яка повертає найменьше число з масиву
function minArrayItem(arr) {
    let a = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (a > arr[i]) {
            a=arr[i];
        }
    }
    return a
}
console.log('створити функцію яка повертає найменьше число з масиву');
console.log(minArrayItem(test_array));


// створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
console.log('створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його');
document.write('створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його' + '</br>');
let sum = 0;
function SummatorArrayItems(arr) {
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
document.write(`Сума елементів масиву складає : ${SummatorArrayItems(test_array)}` + '</br>');

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
console.log('створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.');
document.write('створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.' + '</br>');
function arithmetic_mean(arr) {
    return SummatorArrayItems(arr)/arr.length
}
let tmp = arithmetic_mean(test_array);
console.log(tmp);
document.write(`середнє арифметичне значень елементів масиву дорівнює : ${tmp}` + '</br>');

