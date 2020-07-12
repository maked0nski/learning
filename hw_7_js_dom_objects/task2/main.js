// - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей.
// (Т.е поле name  должно присутствовать только 1 раз в одном объекте )

let object_users = {
  name: "Vasil",
  age: 54,
  languages: ["German", "English", "Russian", "Ukrainian"],
};
let object_cars = {
  brend: "Opel",
  model: "Askona",
  color: "red",
  engine: { fuel: "gasoline", volume: 2 },
};
let object_dog = {
  dog_breed: "Saint Bernard",
  country: "Swiss",
  life_expectancy: 10,
  height: 80,
  weight: 95,
};

let object_telefon = {
  brend_telefon: "Samsung",
  model_telefon: "Galaxy J7",
  display_telefon: ['5,5"', "Full HD", "Super Amoled Plus"],
  memory_telefon: { pzu: "16 Гб", ozu: " 1,5 Гб", max: "128 Гб" },
  volule: 3000,
};

let object_guitar = {
  brend_guitar: "Cort",
  model_guitar: "ad810 op",
  color_guitar: "Sandbress",
  material_guitar: {
    grif: "Червоне дерево",
    corps: "Червоне дерево",
    deka: "Ялина",
  },
  complectation_guitar: ["струни", "лад", "ключ", "гарантія"],
};

// - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект.
// Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
let object_cat = {
  cat_brend: "Scottish Fold",
  sex: "male",
  food: { dry_food: 80, wet_food: 120 },
  equipment: ["paws", "tail", "head", "body"],
};

let object_milk = {
  milk_color: "White",
  country_milk: "Ukraine",
  Chemical_warehouse: {
    beers: 3.5,
    fat: 3.9,
    wuglevodi: 4.7,
    Organic_Acids: NaN,
    Ash: 0.7,
    wather: 87,
  },
  egive_milk: ["cov", "horse", "sheep", "goat"],
};

let object_bike = {
  bike_brend: "Cube",
  frame:
    "HPC Carbon Monocoque Advanced Twin Mold Technology, Aluminum 6061 T6 Rear Triangle, карбоновая с алюминиевым задним треугольником",
  fork: "Fox 32 Float FIT4, 15QR, ход 120 мм",
  rear_shock_absorber: "Fox Float DPS, 184x44 мм",
  bike_wheels: {
    tires: 'Schwalbe Nobby Nic Kevlar 27,5х2.25", LiteSkin',
    wheels: "Fulcrum Fulcrum Red 44, 28/28 Spokes, 15QR/X12",
  },
  gear_switch: [
    "Shimano XT SL-M8000-I, Direct Attach, 22 скорости",
    "Shimano XT, FD-M8020-D, Direct Mount",
    "Shimano XT, RD-M8000-DGS, ShadowPlus, 11 скоростей",
  ],
};

let backpacks = {
  backpacks_brend: "Osprey",
  category: ["Рюкзаки велосипедные", "туристические", "городские"],
  color: "Серый",
  characteristic: { weight: 2.08, volume: 65, dimensions: "79 x 38 x 39 см" },
};

// - При помощи for in вывести все ключи всех объектов из задания 1 и 2
let temp_arr1 = [
  object_users,
  object_cars,
  object_dog,
  object_telefon,
  object_guitar,
  object_cat,
  object_milk,
  object_bike,
  backpacks,
];
for (const i of temp_arr1) {
  for (const key in i) {
    console.log(key);
  }
}

// - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
for (const i of temp_arr1) {
  console.log(Object.keys(i));
}

// 5 - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)
let object_car = [
  {
    brend_car: "Volkswagen",
    model_car: "Passat B7 SE",
    year_car: 2013,
    color_car: "white",
    volume: 2.5,
  },
  {
    brend_car: "Volkswagen",
    model_car: "Passat B8",
    year_car: 2016,
    color_car: "Gray metallic",
    volume: 2,
  },
  {
    brend_car: "Volkswagen",
    model_car: "Passat B8 2.0TDI 110KW",
    year_car: 2015,
    color_car: "Black",
    volume: 2,
  },
  {
    brend_car: "Kia",
    model_car: "Sorento",
    year_car: 2017,
    color_car: "white",
    volume: 2.4,
  },
  {
    brend_car: "Volkswagen",
    model_car: "Caddy пасс. MAXI 7",
    year_car: 2017,
    color_car: "Gray metallic",
    volume: 2,
  },
  {
    brend_car: "Skoda",
    model_car: "Octavia",
    year_car: 2017,
    color_car: "Gray metallic",
    volume: 2,
  },
  {
    brend_car: "Ford",
    model_car: "Mustang",
    year_car: 2016,
    color_car: "Black",
    volume: 2.3,
  },
  {
    brend_car: "Audi",
    model_car: "A6",
    year_car: 2015,
    color_car: "Black",
    volume: 2,
  },
  {
    brend_car: "Opel",
    model_car: "Insignia",
    year_car: 2015,
    color_car: "Green",
    volume: 2.3,
  },
  {
    brend_car: "Renault",
    model_car: "Megane",
    year_car: 2015,
    color_car: "Gray metallic",
    volume: 1.5,
  },
];

// 6 - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)

let cities = [
  {
    citi: "Тернопіль",
    population: 221820,
    country: "Україна",
    region: "Тернопільська область",
  },
  {
    citi: "Берлін",
    population: 3644826,
    country: "Німеччина",
    region: "Столиця",
  },
  {
    citi: "Париж",
    population: 2148000,
    country: "Франція",
    region: "Столиця",
  },
  {
    citi: "Вашингтон",
    population: 601723,
    country: "США",
    region: "Округ Колумбія",
  },
  {
    citi: "Нью Йорк",
    population: 8175133,
    country: "США",
    region: "Нью Йорк",
  },
];

// 7 - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель.
//  Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
let cars = [
  {
    brend: "Volkswagen",
    model: "Passat B7 SE",
    year: 2013,
    color: "white",
    driver: { name: "Aleksandr", age: 34, experience: 18 },
  },
  {
    brend: "Reno",
    model: "Logan",
    year: 2014,
    color: "Black",
    driver: { name: "Viktor", age: 25, experience: 10 },
  },
  {
    brend: "Reno",
    model: "Lodgy",
    year: 2019,
    color: "Red",
    driver: { name: "Inna", age: 30, experience: 18 },
  },
  {
    brend: "BMV",
    model: "X5",
    year: 2014,
    color: "Blue",
    driver: { name: "Jon", age: 18, experience: 1 },
  },
];

function randomElement(arr) {
  let rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
}

let models = [
  "Chevrolet",
  "Volkswagen",
  "Pegeout",
  "Renault",
  "Lamborgini",
  "Subaru",
  "Kia",
  "Cherry",
  "Mercedes",
  "BMV",
];
let years = [
  2000,
  2001,
  2002,
  2003,
  2004,
  2005,
  2006,
  2007,
  2008,
  2009,
  2010,
  2011,
  2012,
  2013,
  2014,
  2015,
  2012,
  2010,
  2018,
  2019,
];
let powers = [
  1000,
  1500,
  2000,
  2500,
  3000,
  3500,
  4000,
  4500,
  5000,
  5500,
  6000,
  6500,
  7000,
  7500,
  8000,
  8500,
  9000,
  9500,
];
let colors = [
  "Blue",
  "Yellow",
  "Green",
  "Silver",
  "Black",
  "White",
  "Red",
  "Grey",
];
// 5 - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)
let cars1 = [];
for (let i = 0; i < 10; i++) {
  let car1 = {
    model: randomElement(models),
    year: randomElement(years),
    power: randomElement(powers),
    color: randomElement(colors),
  };
  cars1[i] = car1;
}
console.log(cars1);

temp_arr = [object_car, cities, cars, cars1];

// - проитерировать каждый массив из задания 5,6,7 при помощи while.
// let i = 0
// while (i < object_car.length) {
//     console.log(object_car[i]);
//     i++
// }
// i = 0
// while (i < cars1.length) {
//     console.log(cars1[i]);
//     i++
// }
// i = 0
// while (i < cars.length) {
//     console.log(cars[i]);
//     i++
// }
// i = 0
// while (i < cities.length) {
//     console.log(cities[i]);
//     i++
// }
// i = 0
// while (i < object_car.length) {
//     console.log(object_car[i]);
//     i++
// };

// - проитерировать каждый массив из задания 5,6,7 при помощи for .
function forIterator(array) {
  for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
  }
}

function whileIterator(array) {
  let i = 0;
  while (i < array.length) {
    console.log(array[i]);
    i++;
  }
}

function forOfIterator(array) {
  for (const i of array) {
    console.log(i);
  }
}

console.log("_______________________");
for (const i of temp_arr) {
  console.log("проитерировать каждый массив из задания 5,6,7 при помощи for");
  forIterator(i);
  console.log("проитерировать каждый массив из задания 5,6,7 при помощи for");

  whileIterator(i);
  console.log(
    "- проитерировать каждый массив из задания 5,6,7 при помощи  for of."
  );

  forOfIterator(i);
}

// - взять объекты из задания 1 и превратить каждый в json. object_users, object_cars, object_dog, object_telefon, object_guitar
// for (const i in temp_arr1) {
//     let Json_arrey$i = JSON.stringify(temp_arr1[i]);
// }
let Json_object_users = JSON.stringify(object_users);
let Json_object_cars = JSON.stringify(object_cars);
let Json_object_dog = JSON.stringify(object_dog);
let Json_object_telefon = JSON.stringify(object_telefon);
let Json_object_guitar = JSON.stringify(object_guitar);

// - взять json из задания 11 и превратить их обратно в объекты.
object_users = JSON.parse(Json_object_users);
object_cars = JSON.parse(Json_object_cars);
object_dog = JSON.parse(Json_object_dog);
object_telefon = JSON.parse(Json_object_telefon);
object_guitar = JSON.parse(Json_object_guitar);

// - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
// object_car
for (const iterator of object_car) {
  console.log(JSON.stringify(iterator));
}

// - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .  cities
for (const i of cities) {
  console.log(JSON.stringify(cities));
}
// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.    cars
let new_cars_arr = [];
console.log("_________________________________________________");
// console.log(cars);
for (const i of cars) {
  let tmp = JSON.stringify(cars);
  new_cars_arr.push(tmp);
}
// console.log(new_cars_arr);

// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом.
// Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
let arrey_users = [
  {
    name: "Viktor",
    age: 38,
    skills: ["js", "kotin", "java"],
  },
  {
    name: "Inna",
    age: 25,
    skills: ["java", "python", "mysql", "html"],
  },
  {
    name: "Ira",
    age: 30,
    skills: ["python", "kotin", "html", "java"],
  },
  {
    name: "Andrey",
    age: 31,
    skills: ["java", "kotin"],
  },
  {
    name: "Yura",
    age: 22,
    skills: ["mysql", "html", "css"],
  },
  {
    name: "Kiril",
    age: 58,
    skills: ["js", "java", "kotin", "python", "mysql", "html", "css"],
  },
];

for (const i of arrey_users) {
  console.log(i);
  console.log("Skills :");
  console.log(i.skills);
}

// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом.
// Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив
let users_skills = [];
for (const i of arrey_users) {
  for (const k of i.skills) {
    users_skills.push(k);
  }
}
console.log(users_skills);

// - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
let users = [
  { name: "vasya", age: 31, status: false, skills: ["java", "js"] },
  { name: "petya", age: 30, status: true, skills: ["java", "js", "html"] },
  { name: "kolya", age: 29, status: true, skills: ["mysql", ",mongo"] },
  { name: "olya", age: 28, status: false, skills: ["java", "js"] },
  { name: "max", age: 30, status: true, skills: ["mysql", ",mongo"] },
];

for (const i of users) {
  console.log(i);
  for (const k of i.skills) {
    console.log(k);
  }
}

let users_new = [
  {
    name: "vasya",
    age: 31,
    status: false,
    address: {
      city: "Lviv",
      country: "Ukraine",
      street: "Shevchenko",
      houseNumber: 1,
    },
  },
  {
    name: "petya",
    age: 30,
    status: true,
    address: {
      city: "New York",
      country: "USA",
      street: "East str",
      houseNumber: 21,
    },
  },
  {
    name: "kolya",
    age: 29,
    status: true,
    address: {
      city: "Budapest",
      country: "Hungary",
      street: "Kuraku",
      houseNumber: 78,
    },
  },
  {
    name: "olya",
    age: 28,
    status: false,
    address: {
      city: "Prague",
      country: "Czech",
      street: "Paster",
      houseNumber: 56,
    },
  },
  {
    name: "max",
    age: 30,
    status: true,
    address: {
      city: "Istanbul",
      country: "Turkey",
      street: "Mikar",
      houseNumber: 39,
    },
  },
  {
    name: "anya",
    age: 31,
    status: false,
    address: {
      city: "Rio",
      country: "Brasil",
      street: "Ronaldi",
      houseNumber: 5,
    },
  },
  {
    name: "oleg",
    age: 28,
    status: false,
    address: {
      city: "Montreal",
      country: "Canada",
      street: "Acusto",
      houseNumber: 90,
    },
  },
  {
    name: "andrey",
    age: 29,
    status: true,
    address: {
      city: "Quebeck",
      country: "Canada",
      street: "Binaro",
      houseNumber: 33,
    },
  },
  {
    name: "masha",
    age: 30,
    status: true,
    address: {
      city: "Moscow",
      country: "Russia",
      street: "Gogolia",
      houseNumber: 1,
    },
  },
  {
    name: "olya",
    age: 31,
    status: false,
    address: {
      city: "Portland",
      country: "USA",
      street: "Forest str",
      houseNumber: 4,
    },
  },
  {
    name: "max",
    age: 31,
    status: true,
    address: {
      city: "Cairo",
      country: "Egypt",
      street: "Seashore",
      houseNumber: 45,
    },
  },
];

// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
console.log("_______________________________________________________________");

let users_address = [];
for (i of users_new) {
  users_address = users_address.concat(i.address);
}
console.log(users_address);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
// Всі данні в одному блоці.
let div = document.createElement("div");
document.body.append(div);
for (const i of users_new) {
  div.textContent += i.name + " ";
}
console.log("___________________");
console.log(div);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам (div>div*4)
let main_div = document.createElement("div");
document.body.append(main_div);
for (const i of users_new) {
  let div_user = document.createElement("div");
  let div_name = document.createElement("div");
  let div_age = document.createElement("div");
  let div_status = document.createElement("div");
  let div_address = document.createElement("div");
  div_name.textContent = i.name;
  div_age.textContent = i.age;
  div_status.textContent = i.status;
  div_address.textContent = JSON.stringify(i.address);
  main_div.append(div_user);
  div_user.append(div_name);
  div_user.append(div_age);
  div_user.append(div_status);
  div_user.append(div_address);
}

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

let main_div_1 = document.createElement("div");
document.body.append(main_div_1);
for (const i of users_new) {
  let div_user_1 = document.createElement("div");
  let div_name_1 = document.createElement("div");
  let div_age_1 = document.createElement("div");
  let div_status_1 = document.createElement("div");
  let div_address_1 = document.createElement("div");
  let div_city = document.createElement("div");
  let div_country = document.createElement("div");
  let div_street = document.createElement("div");
  let div_houseNumber = document.createElement("div");
  div_name_1.textContent = i.name;
  div_age_1.textContent = i.age;
  div_status_1.textContent = i.status;
  div_city.textContent = i.address.city;
  div_country.textContent = i.address.country;
  div_street.textContent = i.address.street;
  div_houseNumber.textContent = i.address.houseNumber;
  main_div_1.append(div_user_1);
  div_user_1.append(div_name_1);
  div_user_1.append(div_age_1);
  div_user_1.append(div_status_1);
  div_user_1.append(div_address_1);
  div_address_1.append(div_city);
  div_address_1.append(div_country);
  div_address_1.append(div_street);
  div_address_1.append(div_houseNumber);
}

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
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

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Частковий приклад реультату:
// let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]
let usersWithCities = [];
for (let i = 0; i < usersWithId.length; i++) {
  usersWithCities[i] = usersWithId[i];
  for (let j = 0; j < citiesWithId.length; j++) {
    if (usersWithId[i].id === citiesWithId[j].user_id) {
      usersWithCities[i]["address"] = citiesWithId[j];
    }
  }
}
console.log(usersWithCities);

// - створити розмітці блок з id, class та текстом в середені.
let div_1 = document.createElement("div");
div_1.id = "myId";
div_1.classList.add("myClass");
div_1.innerText = "та текстом в середені )";
document.body.append(div_1);
// document.body.
// Зчитати окремо цей текст з селекторів по id , class та тегу
console.log("___Зчитати окремо текст з селекторa по id____ ");
let div_1_id = document.getElementById("myId").textContent;
console.log(div_1_id);

console.log("___Зчитати окремо текст з селекторa по class____ ");
let div_1_Class = document.getElementsByClassName("myClass")[0].textContent;
console.log(div_1_Class);

console.log("___Зчитати окремо текст з селекторa по тегу____ ");
let div_1_tag = document.getElementsByTagName("div");
console.log(div_1_tag[div_1_tag.length - 1].textContent);
console.log(div_1_tag);

// - змінити цей текст використовуючи селектори id, class,  tag
div_1_id = "змінити цей текст використовуючи селектори id";
console.log(div_1_id);
div_1_Class = "змінити цей текст використовуючи селектори class";
console.log(div_1_Class);

div_1_tag[div_1_tag.length - 1].textContent =
  "змінити цей текст використовуючи селектори tag";
console.log(div_1_tag[div_1_tag.length - 1].textContent);

// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag
document.getElementById("myId").style.width = "300px";
document.getElementsByClassName("myClass")[0].style.height = "50px";

// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
// let table = document.createElement('table');
// let td1 = document.createElement('td');
// let td2 = document.createElement('td');
// let td3 = document.createElement('td');

// document.body.append(table);
// table.appendChild(td1);
// table.appendChild(td2);
// table.appendChild(td3);

function createTable(tag, col, row) {
  let table = document.createElement("table");
  for (let r = 0; r < row; r++) {
    let tr = document.createElement("tr");
    table.append(tr);
    for (let d = 0; d < col; d++) {
      let td = document.createElement("td");
      tr.append(td);
    }
  }
  tag.appendChild(table);
}
let table1 = document.createElement("div");
table1.classList.add("class_table");
document.body.append(table1);

createTable(table1, 3, 1);

// - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
let table2 = document.createElement("div");
table2.classList.add("class_table");
document.body.append(table2);

createTable(table2, 3, 10);
// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
let table3 = document.createElement("div");
table3.classList.add("class_table");
document.body.append(table3);

createTable(table3, 5, 10);
// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt

// --Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
//  - знайти всі елементі, які мають class
//  - знайти всі параграфи ,та змінити текст на hello oktenweb!
//  - знайти всі div та змінити ім колір на червоний

// ============
// ====class===
// ============

// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
// створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
// Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

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

// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі users. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт в свій блок (блок в блоці).
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі posts. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі comments. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
// ****** при помощи fetch (как в примере) получить от jsonplaceholder все posts. Внутри последнего then() сделать еще один fetch который сделает запрос и получит все comments. Объеденить соответсвующий post с соответсвующими comment и вывести в браузер. Подсказка : в каждом comment есть поле postId которое определяет какой комментарий принадлежит какому посту
