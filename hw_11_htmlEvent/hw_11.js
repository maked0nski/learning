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


// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.

let comment = [
    {title: 'lorem_1', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem_2', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem_3', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem_4', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem_5', body: 'lorem ipsum dolo sit ameti'}
    ];

let block = document.createElement('div')
document.body.appendChild(block);

for (let commentKey in comment) {
    let tag_comment = document.createElement('div');
    let tag_title = document.createElement('h3');
    let tag_body = document.createElement('div');

    let tag_button = document.createElement('input')
    tag_button.type = 'submit';
    tag_button.value = 'Приховати'

    block.appendChild(tag_comment);
    tag_comment.appendChild(tag_title);
    tag_comment.appendChild(tag_body);
    tag_comment.appendChild(tag_button)

    tag_title.innerText = comment[commentKey].title;
    tag_body.innerText = comment[commentKey].body;
}

block.addEventListener('click', (ev) => {
    let {target} = ev;
    ev.preventDefault();
    if (target.value === 'Приховати'){
        target.previousElementSibling.style.display = 'none';
        target.value = 'Розгорнути'
    } else {
        target.value = 'Приховати';
        target.previousElementSibling.style.display = 'block';
    }
})

// forma_comments[1].onclick = (ev) => {
//     ev.preventDefault();
//     if (forma_comments[1].value === 'Приховати'){
//         coment_text_list[1].style.display = 'none';
//         forma_comments[1].value = 'Розгорнути'
//     } else {
//         forma_comments[1].value = 'Приховати';
//         coment_text_list[1].style.display = 'block';
//     }
// };
// forma_comments[2].onclick = (ev) => {
//     ev.preventDefault();
//     if (forma_comments[2].value === 'Приховати'){
//         coment_text_list[2].style.display = 'none';
//         forma_comments[2].value = 'Розгорнути'
//     } else {
//         forma_comments[2].value = 'Приховати';
//         coment_text_list[2].style.display = 'block';
//     }
// };
// forma_comments[3].onclick = (ev) => {
//     ev.preventDefault();
//     if (forma_comments[3].value === 'Приховати'){
//         coment_text_list[3].style.display = 'none';
//         forma_comments[3].value = 'Розгорнути'
//     } else {
//         forma_comments[3].value = 'Приховати';
//         coment_text_list[3].style.display = 'block';
//     }
// };
// forma_comments[4].onclick = (ev) => {
//     ev.preventDefault();
//     if (forma_comments[4].value === 'Приховати'){
//         coment_text_list[4].style.display = 'none';
//         forma_comments[4].value = 'Розгорнути'
//     } else {
//         forma_comments[4].value = 'Приховати';
//         coment_text_list[4].style.display = 'block';
//     }
// };
//
// console.log(document.forms);

// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та
// виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// - Створити функцію, яка генерує таблицю.
// Перший аргумент визначає кількість строк.
// Другий параметр визначає кліькіть ячеєк в кожній строці.
// Третій параметр визначає елемент в який потрібно таблицю додати.

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
