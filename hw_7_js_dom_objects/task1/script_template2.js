// Взяти файл template_2.html та працювати в ньому
// - Напишіть код, який :
// -- змінює колір тексту елемнту з ід main_header на будь-який інший
let id_main_header = document.getElementById('main_header');
id_main_header.style.color = 'green';

// -- робить шириниу елементу ul 400 пікселів
let tag_ul = document.getElementsByTagName('ul');
for(i of tag_ul){
    i.style.width = '400px';
}


// -- робить шириниу всіх елементів з класом linkList шириною 50%
let class_linkList = document.getElementsByClassName('linkList')
for(i of class_linkList){
    i.style.width = "50%"
}

// -- отримує текст який зберігається в елементі з класом listElement2
let class_listElement2 = document.getElementsByClassName('listElement2');
for (const i of class_listElement2) {
}

// -- отримує всі елементи li та змінює ім колір фону на сірий
let tag_li = document.getElementsByTagName('li');
for (const i of tag_li) {
    i.style.background = 'silver';
}

// -- отримує всі елементи 'a' та додає їм клас anchor

let tag_a = document.getElementsByTagName('a');
for (const i of tag_a) {
    i.classList.add('anchor')
}
// -- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, 
//    змінює йому розмір тексту на 40 пікселів
for (const i of tag_a) {
    if (i.textContent === 'link3'){
        i.style.fontSize = '40px'
    }
}


// -- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
let tag_a1 = document.getElementsByTagName('a');
for (const i of tag_a1) {
    i.classList.add('element_'+i.textContent)
}

// -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let input_color = prompt('Введи цвет');
// let class_sub_header = document.getElementsByClassName('sub-header');
// for (const i of class_sub_header) {
//     i.style.background = input_color;
// }
// -- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст 
//    елемнту = content 2 segment . Колір отримати з prompt()
// let class_sub_header1 = document.getElementsByClassName('sub-header');
// let input_color1 = prompt('ще раз')
// for (const i of class_sub_header1) {
//     if (i.textContent === 'content 2 segment'){
//         i.style.color = input_color1;
//     }
// }

// -- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let class_content_1 = document.getElementsByClassName('content_1');
class_content_1[0].textContent = prompt('текст для линка')

// -- отримати елементи p та змінити їм padding на довільне значення
let tag_p = document.getElementsByTagName('p');
for (const iterator of tag_p) {
    iterator.style.padding = '120px';
}

// -- отримати елементи з класом text2 та змінити їм текст на довільне значення
let class_text2 = document.getElementsByClassName('text2');
class_text2[0].textContent = "osvbidbvbsdn ood dvo ssdvou sdoh vusd hvouhsdduvhosdj voij sdodv voso voosd voussdouovh osdj voj dsoiivj oisdj vvoij sdoivjoisdj jvoiijjsd ovi ";