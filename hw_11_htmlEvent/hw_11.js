// // - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, 
// // чтобы при клике на кнопку исчезал элемент с id="text".

// const forma = document.forms.myForm;
// let element_id = document.getElementById('text');
// forma.buttom.onclick = (ev) => {
//     ev.preventDefault();
//     element_id.style.display = 'none'
// };

// // - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
//
//
// const forma = document.forms.myForm;
// let element_form = document.getElementById('form');
// forma.buttom.onclick = (ev) => {
//     ev.preventDefault();
//     element_form.style.display = 'none';
// }

// // - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на
// // кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
// const forma = document.forms.myForm;
// let element_form = document.getElementById('form');
// let input_text = forma.human_age
// let input_value = input_text.value
// forma.buttom.onclick = (ev) => {
//     ev.preventDefault();
//     if (typeof input_value === 'number'){
//         if (+input_value >= 18) {
//
//             alert('В карточку добавлена информация о Вашем возрасте. Спасибо!')
//         } else alert('Вы не достигли полнолетия. Сорри :( ')
//     } else alert(`Вы ввели : "${input_value}" не является числом. Повторите попытку`)
// };




// - Создайте меню, которое раскрывается/сворачивается при клике

// ?????????????????????



// // - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// // Вывести список комментариев в документ, каждый в своем блоке.
// //  Добавьте каждому комментарию по кнопке для сворачивания его body.
//
// let comment = [
//     {title: 'lorem_1', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'lorem_2', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'lorem_3', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'lorem_4', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'lorem_5', body: 'lorem ipsum dolo sit ameti'}
//     ];
//
// let block = document.createElement('div')
// document.body.appendChild(block);
//
// for (let commentKey in comment) {
//     let tag_comment = document.createElement('div');
//     let tag_title = document.createElement('h3');
//     let tag_body = document.createElement('div');
//
//     let tag_button = document.createElement('input')
//     tag_button.type = 'submit';
//     tag_button.value = 'Приховати'
//
//     block.appendChild(tag_comment);
//     tag_comment.appendChild(tag_title);
//     tag_comment.appendChild(tag_body);
//     tag_comment.appendChild(tag_button)
//
//     tag_title.innerText = comment[commentKey].title;
//     tag_body.innerText = comment[commentKey].body;
// }
//
// block.addEventListener('click', (ev) => {
//     let {target} = ev;
//     ev.preventDefault();
//     if (target.value === 'Приховати'){
//         target.previousElementSibling.style.display = 'none';
//         target.value = 'Розгорнути'
//     } else {
//         target.value = 'Приховати';
//         target.previousElementSibling.style.display = 'block';
//     }
// })


// // - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та
// // виводиться на консоль інформація з цих 2х форм.
// // Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// // Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//
// //создать блок
// let two_forms = document.createElement('div');
// two_forms.id = 'two_forms';
// document.body.appendChild(two_forms);
//
// //  Елемент Форма 1
// let form_1 = document.createElement('form');
// form_1.id = 'form_1';
// two_forms.appendChild(form_1);
//
// // два инпута
// let login_1 = document.createElement('input');
// login_1.setAttribute('type', 'text');
// login_1.setAttribute('placeholder', 'Введите имя');
// login_1.setAttribute('name', 'login');
// form_1.appendChild(login_1);
//
// let form_1_pass = document.createElement('input');
// form_1_pass.setAttribute('type', 'text');
// form_1_pass.setAttribute('placeholder', 'Введите пороль');
// form_1_pass.setAttribute('name', 'password');
// form_1.appendChild(form_1_pass);
//
//
// let form_2 = document.createElement('form');
// form_2.id = 'form_2';
// two_forms.appendChild(form_2)
//
// let form_2_name = document.createElement('input');
// form_2_name.setAttribute('type', 'text');
// form_2_name.setAttribute('placeholder', 'Повторите имя');
// form_2_name.setAttribute('name', 'login');
// form_2.appendChild(form_2_name);
//
// let form_2_pass = document.createElement('input');
// form_2_pass.setAttribute('type', 'text');
// form_2_pass.setAttribute('placeholder', 'Повторите пороль');
// form_2_pass.setAttribute('name', 'password');
// form_2.appendChild(form_2_pass);
//
// let btn = document.createElement('button');
// btn.id = 'btn';
// btn.innerText = 'Нажми на мене'
// two_forms.appendChild(btn);
//
// btn.addEventListener('click', (ev) => {
//     let {form_1, form_2} = document.forms;
//     console.log(`В першій формі в полі І'мя, ви ввели ${form_1.login.value} а пароль : ${form_1.password.value}`);
//     console.log(`В другій формі в полі І'мя, ви ввели ${form_2.login.value} а пароль : ${form_2.password.value}`);
// })
//



// - Створити функцію, яка генерує таблицю.
// Перший аргумент визначає кількість строк.
// Другий параметр визначає кліькіть ячеєк в кожній строці.
// Третій параметр визначає елемент в який потрібно таблицю додати.

function CreatTable(tr, td, id, content = 'text') {
    let table = document.createElement('table');
    table.setAttribute('bordercolor', 'black');
    let element = document.getElementById(id)
    element.appendChild(table);
    for (let i = 0; i < tr; i++) {
        let line = document.createElement('tr');
        table.appendChild(line);
        for(let k=0; k < td; k++){
            let col = document.createElement('td');
            line.appendChild(col);
            col.innerText = content;
        }
    }
}

CreatTable(3, 8, 'content', 'сало');





// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

let tag_div = document.createElement('div');
let forms_table = document.createElement('form');
let input_tr = document.createElement('input')
let input_td = document.createElement('input')
let input_text = document.createElement('input')
let  btn = document.createElement('button');

forms_table.name = 'tabl'
input_tr.name = 'line';
input_tr.placeholder = 'кількість рядків';
input_td.name = 'row';
input_td.placeholder = 'кількість ячеєк';
input_text.name = 'content';
input_text.placeholder = 'вмиіст ячеєк';
btn.type = 'submit';
btn.innerText = 'Створи!'

document.body.appendChild(tag_div);
tag_div.appendChild(forms_table);
forms_table.appendChild(input_tr);
forms_table.appendChild(input_td);
forms_table.appendChild(input_text);
forms_table.appendChild(btn);

btn.onclick = (ev) => {
    ev.preventDefault();
    let x = document.forms.tabl
    console.log(document.forms.tabl);
    console.log(document.forms.tabl.line);
    CreatTable(+x.line.value, +x.row.value, 'text', x.content)
}


// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

let  image_array = [
    'https://kaifolog.ru/uploads/posts/2013-03/thumbs/1363239476_006.jpg',
    'https://kaifolog.ru/uploads/posts/2013-03/thumbs/1363239438_009.jpg',
    'https://kaifolog.ru/uploads/posts/2013-03/thumbs/1363239460_010.jpg',
    'https://kaifolog.ru/uploads/posts/2013-03/thumbs/1363239433_013.jpg',
    'https://kaifolog.ru/uploads/posts/2013-03/thumbs/1363239459_017.jpg'
];

let block = document.createElement('div');
document.body.appendChild(block);

let divImage = document.createElement('div');
let divImages = document.createElement('img');
divImage.appendChild(divImages)
divImages.id= 'Image';
block.appendChild(divImage);

let currentIndexImage = 0;
chengeImage()
divImages.style.width = '350px';
divImages.style.padding = '50px';

let forms = document.createElement('form')
forms.name = 'LeftRight';
block.appendChild(forms)

let btnLeft = document.createElement('button');
btnLeft.type = 'submit';
btnLeft.name = 'Left'
btnLeft.innerText = 'Сюда'
let btnRight = document.createElement('button');
btnRight.type = 'submit';
btnRight.name = 'Right'
btnRight.innerText = 'Туда'

forms.appendChild(btnLeft);
forms.appendChild(btnRight);

function chengeImage(){
    divImages.src = image_array[currentIndexImage]
}

block.addEventListener('click', (ev) => {
    let {target} = ev;
    ev.preventDefault();

    if (target.name === 'Left'){

        if (currentIndexImage === 0) {
            currentIndexImage = image_array.length - 1;
            chengeImage();
        }
        currentIndexImage--
        chengeImage();
    }

    if (target.name === 'Right') {
        if (currentIndexImage === image_array.length-1) {
            currentIndexImage = 0
            chengeImage();
        }
        currentIndexImage++;
        chengeImage();
    }
})

// btnLeft.onclick = (ev) => {
//     ev.preventDefault();
//
//     if (currentIndexImage === 0) {
//         currentIndexImage = image_array.length-1;
//         chengeImage();
//     }
//     currentIndexImage--
//     chengeImage()
// }
//
// btnRight.onclick = (ev) => {
//     ev.preventDefault();
//     if (currentIndexImage === image_array.length-1) {
//         currentIndexImage = 0
//         chengeImage(currentIndexImage);
//     }
//     currentIndexImage++;
//     chengeImage(currentIndexImage);
// }
