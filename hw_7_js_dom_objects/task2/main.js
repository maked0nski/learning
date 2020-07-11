// - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. 
// (Т.е поле name  должно присутствовать только 1 раз в одном объекте )

let object_users = {
    name : 'Vasil',
    age : 54,
    languages : ['German' , 'English', 'Russian', 'Ukrainian']
};
let object_cars = {
    brend: 'Opel',
    model : "Askona",
    color : 'red',
    engine: {fuel: 'gasoline', volume: 2},
}
let object_dog ={
    dog_breed : 'Saint Bernard',
    country : 'Swiss',
    life_expectancy : 10,
    height : 80,
    weight : 95
}

let object_telefon = {
    brend_telefon : 'Samsung',
    model_telefon : 'Galaxy J7',
    display_telefon : ['5,5"', 'Full HD', 'Super Amoled Plus'],
    memory_telefon : {pzu : '16 Гб', ozu :  ' 1,5 Гб', max : '128 Гб'},
    volule : 3000
}

let object_guitar = {
    brend_guitar : 'Cort',
    model_guitar : 'ad810 op',
    color_guitar : 'Sandbress',
    material_guitar : {
        grif : 'Червоне дерево',
        corps : 'Червоне дерево',
        deka : 'Ялина'
    },
    complectation_guitar : ['струни', 'лад', 'ключ', 'гарантія']
}



// - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. 
// Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
let object_cat = {
    cat_brend : 'Scottish Fold',
    sex : 'male',
    food : {dry_food : 80, wet_food : 120},
    equipment : ['paws', 'tail', 'head', 'body']
}

let object_milk = {
    milk_color : 'White',
    country_milk : 'Ukraine',
    Chemical_warehouse : {beers : 3.5, fat : 3.9 , wuglevodi : 4.7, Organic_Acids : NaN, Ash : 0.7, wather : 87},
    egive_milk : ['cov',  'horse', 'sheep', 'goat']
}

let object_bike = {
    bike_brend : 'Cube',
    frame : "HPC Carbon Monocoque Advanced Twin Mold Technology, Aluminum 6061 T6 Rear Triangle, карбоновая с алюминиевым задним треугольником",
    fork : 'Fox 32 Float FIT4, 15QR, ход 120 мм',
    rear_shock_absorber: 'Fox Float DPS, 184x44 мм',
    bike_wheels : {tires : 'Schwalbe Nobby Nic Kevlar 27,5х2.25", LiteSkin' , wheels : 'Fulcrum Fulcrum Red 44, 28/28 Spokes, 15QR/X12'},
    gear_switch : ['Shimano XT SL-M8000-I, Direct Attach, 22 скорости', 'Shimano XT, FD-M8020-D, Direct Mount', 'Shimano XT, RD-M8000-DGS, ShadowPlus, 11 скоростей' ]
}

let backpacks = {
    backpacks_brend : 'Osprey',
    category : ['Рюкзаки велосипедные', 'туристические', 'городские'], 
    color : 'Серый',
    characteristic : {weight : 2.08, volume: 65, dimensions: "79 x 38 x 39 см"}
}

// - При помощи for in вывести все ключи всех объектов из задания 1 и 2
let temp_arr = [object_users, object_cars, object_dog, object_telefon, object_guitar,  object_cat, object_milk, object_bike, backpacks ]
for (const i of temp_arr) {
    for (const key in i) {
        console.log(key);
    }
}


// - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
for (const i of temp_arr) {
    console.log(Object.keys(i));
    
}


// 5 - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)
let object_car = [
    {
        brend_car : 'Volkswagen',
        model_car : 'Passat B7 SE',
        year_car : 2013,
        color_car :  'white',
        volume : 2.5
    },
    {
        brend_car : 'Volkswagen',
        model_car : 'Passat B8',
        year_car : 2016,
        color_car :  'Gray metallic',
        volume : 2
    },
    {
        brend_car : 'Volkswagen',
        model_car : 'Passat B8 2.0TDI 110KW',
        year_car : 2015,
        color_car :  'Black',
        volume : 2
    },
    {
        brend_car : 'Kia',
        model_car : 'Sorento',
        year_car : 2017,
        color_car :  'white',
        volume : 2.4
    },
    {
        brend_car : 'Volkswagen',
        model_car : 'Caddy пасс. MAXI 7',
        year_car : 2017,
        color_car :  'Gray metallic',
        volume : 2
    },
    {
        brend_car : 'Skoda',
        model_car : 'Octavia',
        year_car : 2017,
        color_car :  'Gray metallic',
        volume : 2
    },
    {
        brend_car : 'Ford',
        model_car : 'Mustang',
        year_car : 2016,
        color_car :  'Black',
        volume : 2.3
    },
    {
        brend_car : 'Audi',
        model_car : 'A6',
        year_car : 2015,
        color_car :  'Black',
        volume : 2
    },
    {
        brend_car : 'Opel',
        model_car : 'Insignia',
        year_car : 2015,
        color_car :  'Green',
        volume : 2.3
    },
    {
        brend_car : 'Renault',
        model_car : 'Megane',
        year_car : 2015,
        color_car :  'Gray metallic',
        volume : 1.5
    }
]

// 6 - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)

let cities = [
    {
        citi : 'Тернопіль',
        population : 221820,
        country : 'Україна',
        region : 'Тернопільська область'
    },
    {
        citi : 'Берлін',
        population : 3644826,
        country : 'Німеччина',
        region : 'Столиця'
    },
    {
        citi : 'Париж',
        population : 2148000,
        country : 'Франція',
        region : 'Столиця'
    },
    {
        citi : 'Вашингтон',
        population : 601723,
        country : 'США',
        region : 'Округ Колумбія'
    },
    {
        citi : 'Нью Йорк',
        population : 8175133,
        country : 'США',
        region : 'Нью Йорк'
    },
]

// 7 - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель.
//  Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
let cars = [
    {
        brend : 'Volkswagen',
        model : 'Passat B7 SE',
        year : 2013,
        color :  'white',
        driver : {name : 'Aleksandr', age : 34, experience : 18}
    },
    {
        brend : 'Reno',
        model : 'Logan',
        year : 2014,
        color :  'Black',
        driver : {name : 'Viktor', age : 25, experience : 10}
    },
    {
        brend : 'Reno',
        model : 'Lodgy',
        year : 2019,
        color :  'Red',
        driver : {name : 'Inna', age : 30, experience : 18}
    },
    {
        brend : 'BMV',
        model : 'X5',
        year : 2014,
        color :  'Blue',
        driver : {name : 'Jon', age : 18, experience : 1}
    }
]

function randomElement(arr) {
    let rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}

let models = ['Chevrolet', 'Volkswagen', 'Pegeout','Renault','Lamborgini','Subaru','Kia','Cherry','Mercedes','BMV']
let years = [2000,2001, 2002, 2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2012,2010,2018,2019];
let powers = [1000,1500,2000,2500,3000,3500,4000,4500,5000,5500,6000,6500,7000,7500,8000,8500,9000,9500];
let colors = ['Blue', 'Yellow','Green','Silver','Black','White','Red','Grey'];
// 5 - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)
let cars1 = []
for (let i = 0; i < 10; i++) {
    let car1 = {
        model : randomElement(models), year : randomElement(years), power : randomElement(powers), color : randomElement(colors)
    }
    cars1[i] = car1
}
console.log(cars1);


temp_arr = [object_car, cities, cars, cars1]


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
// }

// - проитерировать каждый массив из задания 5,6,7 при помощи for .
function forIterator(array) {
    console.log('проитерировать каждый массив из задания 5,6,7 при помощи for');
    for (let index = 0; index < array.length; index++) {
        console.log(array[index]);
    }
};

function whileIterator(array) {
    console.log('проитерировать каждый массив из задания 5,6,7 при помощи for');
    let i = 0
    while (i < array.length) {
        console.log(array[i]);
        i++
    }
};

function forOfIterator(array) {
    console.log('- проитерировать каждый массив из задания 5,6,7 при помощи  for of.');
    for (const i of array) {
        console.log(i);
    }
}


console.log('_______________________');

for (const i of temp_arr) {
    forIterator(i);
    whileIterator(i);
    forOfIterator(i);
    
}
// whileIterator(object_car);
