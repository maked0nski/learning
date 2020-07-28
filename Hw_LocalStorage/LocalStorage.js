// // - Дана textarea.
// //     В неё вводится текст.
// //     Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.
//
// let TextArea = document.createElement('textarea')
// let content = document.getElementById('content')
// let btn = document.createElement('button')
// btn.type = 'submit'
// btn.innerText = "Сохрани"
// content.appendChild(TextArea)
// content.appendChild(btn)
// TextArea.innerText = localStorage.getItem('TextArea')
//
// btn.onclick = (ev) => {
//     ev.preventDefault()
//     localStorage.setItem('TextArea', TextArea.value)
// }

// Второй вариант:

// let text = document.getElementById('textarea')
// text.innerText = localStorage.getItem('text_input')
// text.oninput = (ev) => {
//     localStorage.setItem('text_input', ev.target.value)
//     // console.log(ev.target.value);
// }


// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
//     Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
//     Сделайте ваш скрипт как можно более универсальным.
//

let forma = document.getElementById('form');
getData(forma);

function  saveForm(t) {
    setData(t);
}

function setData(tag) {
    for (let i = 0; i < tag.length; i++) {
        const tagElement = tag[i];
        if (tagElement.type === 'checkbox' || tagElement.type === 'radio')
            tagElement.checked
            ? tagElement.value = true
                : tagElement.value = false

        localStorage.setItem(tagElement.id, tagElement.value);
    }
}

function getData(tag) {
    for (let i = 0; i < localStorage.length; i++) {
        console.log(i);
        console.log(localStorage.getItem(tag.children[i].id))
        if (localStorage.hasOwnProperty(tag.children[i].id)){
            tag.children[i].value = localStorage.getItem(tag.children[i].id);
            if (tag.children[i].value === 'true'){
                tag.children[i].setAttribute('checked', 'checked')
            }
        }
    }
}




// // -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище),
// // затем поредактировать их, затем еще поредактировать и возможно еще.....
// // Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// // Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории
// // (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).
// //
// let left = document.getElementById('left');
// let right = document.getElementById('right');
// let data = document.getElementById('NewTextArea');
// let save = document.getElementById('save');
// let content_id = localStorage.length;
// checkLocalStofage ();
//
// function checkLocalStofage () {
//     if (localStorage.length > 0){
//         data.value = localStorage[content_id];
//     }
// }
// left.onclick = () => {
//     if (content_id > 1 ){
//         content_id = content_id - 1;
//         checkLocalStofage ();
//     } else {
//         content_id = localStorage.length;
//         checkLocalStofage();
//     }
// }
// right.onclick = () => {
//     if (content_id < localStorage.length ){
//         content_id = content_id + 1;
//         checkLocalStofage ();
//     } else {
//         content_id = 1;
//         checkLocalStofage();
//     }
// }
//
// save.onclick = () => {
//     localStorage.setItem(localStorage.length+1, data.value);
//     checkLocalStofage ();
// }

// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
//     Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта
//
