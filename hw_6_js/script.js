console.log(' 1. створити масив з 5 числових значень');
let array1  = [5, 55, 23.8, 49, 54];
console.log(array1);

console.log(' 2. створити масив з 5 стічкових значень');
array1  =   ['55', 'погода', 'консоль', 'Arrey', 'weather'];
console.log(array1);

console.log(' 3. створити масив з 5 значень стрічкового, числового та булевого типу');
array1  =   [55, true, 'консоль', false, 'weather'];
console.log(array1);

console.log(' 4. Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль');
let array2 = [];
array2[0]= 4;
array2[1]= true;
array2[4]= false;
array2[3]= 'weather';
array2[5]= 3.14;
console.log(array2);

console.log(' 5. За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині');
document.write('5. За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині');
for (let i=0; i<10; i++) {
    document.write('<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa explicabo reprehenderit saepe. </div>')
}

console.log(' 6. За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині');
document.write(' 6. За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині');
for (let i=0; i<10; i++) {
    document.write(`<div> ${i} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa explicabo reprehenderit saepe. </div>`)
}



console.log(' 7. За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.');
document.write(' 7. За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.');
let x=0;
while (x<20 ){
    document.write(`<h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>`)
    x++
}



console.log(' 8. За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.');
document.write(' 8. За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.');
x=0;
while (x<20 ){
    document.write(`<h1> ${x} Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>`)
    x++
}


console.log(' 9. Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.');
document.write(' 9. Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.' + '</br>');
array1 = [8,15, 25 ,75, 65 ,63,3.25,87,2.1,55];  // щоб не створювати новий , очистив масив
for (let i in array1) {
    console.log(array1[i]);
}



console.log(' 10. Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.');
document.write(' 10. Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.' + '</br>');
array1=[] ;              // щоб не створювати новий , очистив масив
array1 = ['mail', 'work', '8', '55', 'job', 'red', 'green', 'weather', 'рак', 'пиво'];
for (let i in array1) {
    console.log(array1[i]);
}

console.log(' 11. Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.');
document.write(' 11. Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.' + '</br>');
array1=[] ;              // щоб не створювати новий , очистив масив
array1 = [true, 55, 'false', '55', 'несогласованный', false, 22, 'true', true, 55];

for (let i=0; i < array1.length; i++) {
        console.log(array1[i])
}

console.log(' 12. Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи');
document.write(' 12. Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи' + '</br>');
for (let i=0; i < array1.length; i++) {
    if (typeof array1[i] === "boolean"){
        console.log(array1[i])
    }
}

console.log(' 13. Створити масив з 10 елементів  числового, стірчкового і  булевого типу. За допомогою if та typeof вивести тільки числові елементи');
document.write(' 13. Створити масив з 10 елементів  числового, стірчкового і  булевого типу. За допомогою if та typeof вивести тільки числові елементи' + '</br>');
for (let i=0; i < array1.length; i++) {
    if (typeof array1[i] === "number"){
        console.log(array1[i])
    }
}


console.log(' 14. Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи');
document.write(' 14. Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи' + '</br>');
for (let i=0; i < array1.length; i++) {
    if (typeof array1[i] === "string"){
        console.log(array1[i])
    }
}


console.log(' 15. Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.');
document.write(' 15. Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.' + '</br>');
array2 = [];
array2[0]= 88;
array2[1]= 855;
array2[2]= 951;
array2[3]= true;
array2[4]= false;
array2[5]= true;
array2[6]= "text";
array2[7]= "string";
array2[8]= "long string";
array2[9]= NaN;
for(let i in array2){
    console.log(array2[i]);
}


console.log(' 16. Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write');
document.write(' 16. Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write' + '</br>');
for (let i=0; i<10; i++){
    console.log('поточний номер кроку - ' + i);
    document.write('поточний номер кроку - ' + i + '</br>');
}


console.log(' 17. Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write');
document.write(' 17. Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write' + '</br>');
for (let i=0; i<100; i++){
    console.log('поточний номер кроку - ' + i);
    document.write('поточний номер кроку - ' + i + '</br>');
}


console.log(' 18. Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write');
document.write(' 18. Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write' + '</br>');
for (let i=0; i<100; i=i+2){
    console.log('поточний номер кроку - ' + i);
    document.write('поточний номер кроку - ' + i + '</br>');
}


console.log(' 19. Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write');
document.write(' 19. Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write' + '</br>');
for (let i=0; i<100; i++){
    if (i%2 == 0){
        console.log('поточний номер кроку - ' + i);
        document.write('поточний номер кроку - ' + i + '</br>');
    }
}


console.log(' 20. Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write');
document.write(' 20. Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write' + '</br>');
for (let i=0; i<100; i=i+2) {
    console.log('поточний номер кроку - ' + i);
    document.write('поточний номер кроку - ' + i + '</br>');
}



console.log(' 21. Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write');
document.write(' 21. Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write' + '</br>');
for (let i=0; i<100; i++){
    if (i%2 !== 0){
        console.log('поточний номер кроку - ' + i);
        document.write('поточний номер кроку - ' + i + '</br>');
    }
}


console.log(' 22. - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)');
document.write(' 22. - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)' + '</br>');
for (let m=0; m<3; m++){
    console.log(`${m} хвилина`);
    document.write(`<h1>${m} хвилина </h1><hr>`);
    if (m<2) {
        for (let s = 0; s < 60; s++) {
            console.log(`${s} секунда`);
            document.write(`${s} секунда </br>`);
        }
    }
}



console.log(' 23. - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)');
document.write(' 23. - Відтворити роботу  годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)' + '</br>');
start: for (let h1=0; h1<3; h1++){
    for (let m=0; m<60; m++){
        for (let i=0; i<60; i++){
            if (h1===2 && m === 20 && i === 1){
                break start;
            }else {
                console.log(`${h1} Година ${m} хвилин ${i} секунд`);
                document.write(`${h1} Година ${m} хвилин ${i} секунд </br>`);
            }
        }
    }
}



console.log(" 24. - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.");
document.write(" 24. - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово." + '</br>');
let area3=[ 'a', 'b', 'c']
let str = '';
for (let i in area3){
    str += area3[i];
}
document.write(str + '</br>');
console.log(str);



console.log(" 25. - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.");
document.write(" 25. - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово." + '</br>');
let area4=[ 'a', 'b', 'c'];
let str4 = '';
while (str4.length < area4.length){
    str4 += area4[str4.length];
}
document.write(str4 + '</br>');
console.log(str4);


console.log(" 26. - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.");
document.write(" 26. - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово." + '</br>');
let area5=[ 'a', 'b', 'c']
let str5 = '';
for (let i of area5){
    str5 += i;
}
document.write(str5 + '</br>');
console.log(str5);



console.log(" 27. - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.");
document.write(" 27. - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово." + '</br>');
let area6=[ 'a', 'b', 'c']
let str6 = '';
for (let i=0; i<area6.length; i++){
    str6 += area6[i];
}
document.write(str6 + '</br>');
console.log(str6);


console.log(" 28. - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу");
document.write(" 28. - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу" + '</br>');
let array7 = ['a', 'b', 'c'];
for (let i=1; i<4; i++){
    array7.push(i);
}
document.write(array7 + '</br>');
console.log(array7);


console.log(" 29. - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].");
document.write(" 29. - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1]." + '</br>');
let array8 = [1, 2, 3];
let arrayNew = [];
for (let i=array8.length-1; i >= 0; i--){
    arrayNew.push(array8[i]);
}
document.write(arrayNew + '</br>');
console.log(arrayNew);


console.log(" 30. - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.");
document.write(" 30. - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6." + '</br>');
let array9 = [1, 2, 3];
for (let i = 4; i<7; i++){
    array9.push(i);
}
console.log(array9);
document.write(array9 + '</br>');



console.log(" 31. - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.");
document.write(" 31. - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6." + '</br>');
let array10 = [1, 2, 3];
for (let i = 6; i>3; i--){
    array10.unshift(i);
}
console.log(array10);
document.write(array10 + '</br>');


console.log(" 32. - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()");
document.write(" 32. - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()" + '</br>');
let array11 = ['js', 'css', 'jq'];
let element0 = array11.shift()
console.log(element0);
document.write(element0 + '</br>');


console.log(" 33. - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()");
document.write(" 33. - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()" + '</br>');
let array12 = ['js', 'css', 'jq'];
let element1 = array12.pop();
console.log(element1);
document.write(element1 + '</br>');


console.log(" 34. - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].");
document.write(" 34. - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5]." + '</br>');
let array13 = [1, 2, 3, 4, 5];
console.log(array13.slice(-2));
document.write(array13.slice(3,5) + '</br>');


console.log(" 35. - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].");
document.write(" 35. - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2]." + '</br>');
let array14 = [1, 2, 3, 4, 5];
console.log(array14.slice(0,2));
document.write(array14.slice(0,2) + '</br>');


console.log(" 36. - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].");
document.write(" 36. - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5]." + '</br>');
let array15 = [1, 2, 3, 4, 5];
// let arraytmp =
array15.splice(1,2)
console.log(array15);
document.write(array15 + '</br>');



console.log(" 37. - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].");
document.write(" 37. - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5]." + '</br>');
let array16 = [1, 2, 3, 4, 5];
array16.splice(3, 0, 'a', 'b', 'c')
console.log(array16);
document.write(array16+'</br>');


console.log(" 38. - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].");
document.write(" 38. - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']." + '</br>');
let array17 = [1, 2, 3, 4, 5];
array17.splice(1, 0, 'a', 'b');
array17.splice(6, 0, 'c');
array17.splice(8, 0, 'e');
console.log(array17);
document.write(array17+'</br>');


console.log(" 39. - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.");
document.write(" 39. - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними." + '</br>');
let array18 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i of array18){
    if (i%2!=0){continue}else console.log(i);
}


console.log(" 40. - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший");
document.write(" 40. - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший" + '</br>');
let array19 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let array20 =[];
for (let i of array19){
    array20.push(i);
}
console.log(array20);
document.write(array20+'</br>');


console.log(" 41. - Взяти масив з 10 чисел . Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.");
document.write(" 41. - Взяти масив з 10 чисел. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший." + '</br>');
let array21 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let array22 =[];
for (let i=0; i<array21.length; i++){
    array22.push(array21[i]);
}
console.log(array22);
document.write(array22+'</br>');


console.log(" 42. - зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та: перебрати його циклом while");
document.write(" 42. - зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та: перебрати його циклом while" + '</br>');
let array23 = [2,17,13,6,22,31,45,66,100,-18];
let n = 0;
while (n < array23.length){
    console.log(array23[n]);
    document.write(array23[n]+'</br>');
    n++
}


console.log(" 43. - зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та: перебрати його циклом for");
document.write(" 43. - зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та: перебрати його циклом for" + '</br>');
let array24 = [2,17,13,6,22,31,45,66,100,-18];
for(let i of array24){
    console.log(i);
    document.write(i +'</br>');
}


console.log(" 44. - зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та: перебрати циклом while та вивести  числа тільки з непарним індексом");
document.write(" 44. - зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та: перебрати циклом while та вивести  числа тільки з непарним індексом" + '</br>');
// let array24 = [2,17,13,6,22,31,45,66,100,-18];
n = 0;
while (n < array24.length){
    if (n % 2 !== 0){
        console.log(array24[n]);
        document.write(array24[n]+'</br>');
    }
    n++
}


console.log(" 45. - зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та: перебрати циклом for та вивести  числа тільки з непарним індексом");
document.write(" 45. - зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та: перебрати циклом for та вивести  числа тільки з непарним індексом" + '</br>');
// let array24 = [2,17,13,6,22,31,45,66,100,-18];
for(let i=0; i<array24.length; i++){
    if (i%2 !== 0){
        console.log(array24[i]);
        document.write(array24[i]+'</br>');
    }
}


console.log(" 46. - зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та: перебрати циклом while та вивести  числа тільки парні  значення");
document.write(" 46. - зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та: перебрати циклом while та вивести  числа тільки парні  значення" + '</br>');
// let array24 = [2,17,13,6,22,31,45,66,100,-18];
n = 0;
while (n < array24.length){
    if (array24[n] % 2 === 0){
        console.log(array24[n]);
        document.write(array24[n]+'</br>');
    }
    n++
}



console.log(" 47. - зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та: перебрати циклом for та вивести  числа тільки парні  значення");
document.write(" 47. - зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та: перебрати циклом for та вивести  числа тільки парні  значення" + '</br>');
// let array24 = [2,17,13,6,22,31,45,66,100,-18];
for(let i=0; i<array24.length; i++){
    if (array24[i]%2 === 0){
        console.log(array24[i]);
        document.write(array24[i]+'</br>');
    }
}


console.log(" 48. - зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та: замінити кожне число кратне 3 на слово 'okten'");
document.write(" 48. - зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та: замінити кожне число кратне 3 на слово 'okten'" + '</br>');
// let array24 = [2,17,13,6,22,31,45,66,100,-18];
for(let i=0; i<array24.length; i++){
    if (array24[i]%3 === 0){
        array24.splice(i,1,'okten');
    }
}
console.log(array24);
document.write(array24+'</br>');



console.log(" 49. - зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та: вивести масив в зворотньому порядку.");
document.write(" 49. - зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та: вивести масив в зворотньому порядку." + '</br>');
let array25 = [2,17,13,6,22,31,45,66,100,-18];
let array_rev = []
for(let i=0; i<array25.length; i++){
    array_rev.unshift(array25[i])
}
console.log(array_rev);
document.write(array_rev +'</br>');



console.log(" 50. - зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та: перебрати його циклом while але в зворотньому циклі (с заду на перед)");
document.write(" 50. - зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та: перебрати його циклом while але в зворотньому циклі (с заду на перед)" + '</br>');
array23 = [2,17,13,6,22,31,45,66,100,-18];
n = array23.length-1;
while (n >= 0){
    console.log(array23[n]);
    document.write(array23[n]+'</br>');
    n--
}



console.log(" 51. - зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та: перебрати його циклом for але в зворотньому циклі (с заду на перед)");
document.write(" 51. - зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та: перебрати його циклом for але в зворотньому циклі (с заду на перед)" + '</br>');
array23 = [2,17,13,6,22,31,45,66,100,-18];
for(let i=array23.length-1; i>=0; i--){
    console.log(array23[i]);
    document.write(array23[i] +'</br>');
}



console.log(" 52. - зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та: перебрати циклом while та вивести  числа тільки з непарним індексом але в зворотньому циклі (с заду на перед)");
document.write(" 52. - зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та: перебрати циклом while та вивести  числа тільки з непарним індексом але в зворотньому циклі (с заду на перед)" + '</br>');
array23 = [2,17,13,6,22,31,45,66,100,-18];
n = array23.length-1;
while (n >= 0){
    if (n % 2 == 0){
        console.log(array23[n]);
        document.write(array23[n]+'</br>');
    }
    n--
}



console.log(" 53. - зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та: перебрати циклом for та вивести  числа тільки з непарним індексом але в зворотньому циклі (с заду на перед)");
document.write(" 53. - зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та: перебрати циклом for та вивести  числа тільки з непарним індексом але в зворотньому циклі (с заду на перед)" + '</br>');
// let array24 = [2,17,13,6,22,31,45,66,100,-18];
for(let i=array23.length-1; i>=0; i--){
    if (i % 2 !== 0){
        console.log(array23[i]);
        document.write(array23[i]+'</br>');
    }
}



console.log(" 54. - зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та: перебрати циклом while та вивести  числа тільки парні  значення але в зворотньому циклі (с заду на перед)");
document.write(" 54. - зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та: перебрати циклом while та вивести  числа тільки парні  значення але в зворотньому циклі (с заду на перед)" + '</br>');
n = array23.length;
while (n >= 0){
    if (array23[n] % 2 === 0){
        console.log(array23[n]);
        document.write(array23[n]+'</br>');
    }
    n--
}


console.log(" 55. - зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та: перебрати циклом for та вивести  числа тільки парні  значення але в зворотньому циклі (с заду на перед)");
document.write(" 55. - зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та: перебрати циклом for та вивести  числа тільки парні  значення але в зворотньому циклі (с заду на перед)" + '</br>');
// let array23 = [2,17,13,6,22,31,45,66,100,-18];
for(let i=array23.length-1; i>=0; i--){
    if (array23[i]%2 === 0){
        console.log(array23[i]);
        document.write(array23[i]+'</br>');
    }
}


console.log(" 56. - зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18] та: замінити кожне число кратне 3 на слово 'okten' але в зворотньому циклі (с заду на перед)");
document.write(" 56. - зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18] та: замінити кожне число кратне 3 на слово 'okten' але в зворотньому циклі (с заду на перед)" + '</br>');
let array56 = [2,17,13,6,22,31,45,66,100,-18];
let array56_rev = [];
for(let i=0; i<array56.length; i++){
        if (array56[i]%3 === 0){
        array56.splice(i,1,'okten');
    }
    array56_rev.unshift(array56[i]);
}
console.log(array56_rev);
document.write(array56_rev +'</br>');


console.log(" 57. -  створити пустий масив та заповнити його 50 парними  числами за допомоги циклу");
document.write(" 57. - створити пустий масив та заповнити його 50 парними  числами за допомоги циклу" + '</br>');
let array57 = [];
n =0;
while (array57.length <50 ){
    if (n % 2 === 0){
        array57.push(n);
    }
    n++
}
console.log(array57);
document.write(array57 +'</br>' + '</br>');



console.log(" 58. -  створити пустий масив та заповнити його 50 парними  числами за допомоги циклу");
document.write(" 58. - створити пустий масив та заповнити його 50 непарними числами за допомоги циклу" + '</br>' + '</br>');
let array58 = [];
n =0;
while (array58.length <50 ){
    if (n % 2 !== 0){
        array58.push(n);
    }
    n++
}
console.log(array58);
document.write(array58 +'</br>' + '</br>');


console.log(" 59. -  используя Math.random заполнить массив из ???(сколько хотите) элементов сначала пробуйте БЕЗ ДИАПАЗОНА!)");
document.write(" 59. - используя Math.random заполнить массив из ???(сколько хотите) элементов сначала пробуйте БЕЗ ДИАПАЗОНА!)" + '</br>' + '</br>');
let array59 = [];
n =0;
while (array59.length <50 ){
    array59.push(Math.random());
}
console.log(array59);
document.write(array59 + '</br>' + '</br>');


console.log(" 60. -  используя Math.random заполнить массив из ???(сколько хотите) элементов. диапазон рандома 8 до 732");
document.write(" 60. - используя Math.random заполнить массив из ???(сколько хотите) элементов. диапазон рандома 8 до 732" + '</br>' + '</br>');
let array60 = [];
n =0;
while (array60.length < 50 ){
    array60.push(Math.floor(Math.random() * (732 - 8)) + 8);
}
console.log(array60);
document.write(array60 + '</br>' + '</br>');


console.log(" 61. -  используя Math.random заполнить массив из ???(сколько хотите) элементов. диапазон рандома 8 до 732 вывести на консоль  каждый третий елемент");
document.write(" 61. - используя Math.random заполнить массив из ???(сколько хотите) элементов. диапазон рандома 8 до 732 вывести на консоль  каждый третий елемент" + '</br>' + '</br>');
for (let i=2; i<array60.length; i+=3){
    console.log(array60[i]);
    document.write(array60[i] + '</br>' + '</br>');
}


console.log(" 62. -  используя Math.random заполнить массив из ???(сколько хотите) элементов. диапазон рандома 8 до 732 вывести на консоль  каждый третий елемент но при условии что его значение является парным");
document.write(" 62. - используя Math.random заполнить массив из ???(сколько хотите) элементов. диапазон рандома 8 до 732 вывести на консоль  каждый третий елемент но при условии что его значение является парным" + '</br>' + '</br>');
let array61 = []
for (let i=2; i<array60.length; i+=3){
    if (array60[i] % 2 === 0){
        console.log(array60[i]);
        document.write(array60[i] + '</br>' + '</br>');
        array61.push(array60[i])
    }
}
console.log(array61);
document.write('новий масив : ' + array61 + '</br>' + '</br>');


console.log(" 63. -  Вывести каждый елемент  массива у которого соседний с права элемент - парный");
document.write(" 63. - Вывести каждый елемент  массива у которого соседний с права элемент - парный" + '</br>' + '</br>');
console.log(array60);
document.write(array60 + '</br>' + '</br>');

for (let i=0; i<array60.length; i++){
    if (array60[(i + 1)] % 2 === 0){
        console.log(array60[i]);
        document.write(array60[i] + '</br>' + '</br>');
    }
}


console.log(" 64. -  масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек.");
document.write(" 64. - масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек." + '</br>' + '</br>');
let array64 = [100,250,50,168,120,345,188];
let sum = 0
for ( i in array64){
    sum += array64[i];
}
console.log(sum);
console.log(sum/array64.length);


console.log(" 65. -  створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.");
document.write(" 65. - створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив." + '</br>' + '</br>');
let array65 = [];
let array65_new = [];
for (let i=0; i<50; i++){
    array65.push(Math.round(Math.random()*5));
}
while (array65.length>0){
    array65_new.unshift(array65.pop());
}
console.log('новий масив : ');
console.log(array65_new);


console.log(" 66. -  створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,  додати його в інший масив");
document.write(" 66. - створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,  додати його в інший масив" + '</br>' + '</br>');
let array66 = [100,250, 'js', 'css', 'jq', 50,168,120, 1, 'a', 'b', 2, 3, 4, 'c', 5, 'e',345,188, 55, true, 'консоль', false, 'weather'];
let array66_new = [];
for (let i=0; i<array66.length; i++){
    if(typeof array66[i] === 'number'){
        array66_new.unshift(array66[i]);
        console.log(typeof array66[i]);
    }
}
console.log(array66_new);



console.log(' 67 - Напишите решение, которое вычисляет сумму квадратных корней для всех чётных чисел целочисленного массива.');
document.write(' 67 - Напишите  решение, которое вычисляет сумму квадратных корней для всех чётных чисел целочисленного массива.' + '</br>');
document.write(array60);
let sum_67 = 0;
for (i of array60){
    if(i % 2 == 0){
        sum_67 += Math.sqrt(i);
    }
}
console.log(sum_67);

let a=[];
a = JSON.parse(jsonUser);
