console.log(' 1 - створити обєкт (не меньше 5ти властивостей) який описує собаку');
let dog ={
    dog_breed : 'Saint Bernard',
    country : 'Swiss',
    life_expectancy : 10,
    height : 80,
    weight : 95,
    color : 'redhead with white marks',
    foto: 'https://petsi.net/images/dogbreed/big/104.jpg'
}
console.log(dog)


console.log(' 2 - створити обєкт (не меньше 5ти властивостей) який описує людину');
let human = {
    height : 180,
    weight : 80,
    hair : 'long',
    interests: ['music', 'skiing'],
    life_expectancy : 79,
    color : 'white'
}
console.log(human)


console.log(' 3 - створити обєкт (не меньше 5ти властивостей) який описує автомобіль');
let car = {
    brend : 'Volkswagen',
    model : 'Tiguan SEL',
    year : 2015,
    engine: {fuel: 'gasoline', volume: 2},
    mileage : 87000,
    color : 'white'
}
console.log(car)


console.log(' 4 - створити обєкт (не меньше 5ти властивостей) який описує квартиру');
let apartment = {
    rooms : 3,
    area : 98,
    year : 2018,
    wall: 'brick',
    heating : 'individual',
    price : 38500
}
console.log(apartment)


console.log(' 5 - створити обєкт (не меньше 5ти властивостей) який описує книгу');
let book = {
    name : 'Купи собі той довбаний букет: та інші способи зібратися докупи від тієї, котрій вдалось',
    name_eng: 'Buy Yourself the F*cking Lilies: And Other Rituals To Fix Your Life, From Someone Who’s Been There',
    written : 'Tara Schuster',
    year : 2020,
    language: 'Ukrainian',
    pages : 320,
    illustrations : 'No illustrations'
}
console.log(book)


console.log(' 6 - Створити масив з 5 собак та вивести його в консоль');
let dogs  = [
    dog,
    {
        dog_breed : 'Husky',
        country : 'Russia',
        life_expectancy : 13,
        height : 55,
        weight : 25,
        color : 'gray with white',
        foto: 'https://petsi.net/images/dogbreed/big/137.jpg'

    },
    {
        dog_breed : 'Golden Retriever',
        country : 'England',
        life_expectancy : 12,
        height : 60,
        weight : 30,
        color : 'golden',
        foto: 'https://petsi.net/images/dogbreed/big/62.jpg'
    },
    {
        dog_breed : 'Alaskan Malamute',
        country : 'USA',
        life_expectancy : 14,
        height : 60,
        weight : 40,
        color : 'from light gray to black',
        foto: 'https://petsi.net/images/dogbreed/big/21.jpg'
    },
    {
        dog_breed : 'American Staffordshire Terrier, Amstaff',
        country : 'USA',
        life_expectancy : 11,
        height : 46,
        weight : 35,
        color : 'anyone except white',
        foto: 'https://petsi.net/images/dogbreed/big/22.jpg'
    }
];
console.log(dogs)



console.log(' 7 - Створити масив з 5 людей та вивести його в консоль');
let friends = [
    {
        name : 'Aleks',
        age : 55,
        height : 180,
        tel : 80507415241,
        country : 'Ukraine',
        pet : null
    },
    {
        name : 'Inga',
        age : 18,
        height : 160,
        tel : 80507415214,
        country : 'Russia',
        pet : dogs[1]
    },
    {
        name : 'Rita',
        age : 21,
        height : 165,
        tel : 30505515214,
        country : 'Swiss',
        pet : dogs[0]
    },
    {
        name : 'Oleg',
        age : 25,
        height : 195,
        tel : 30503545214,
        country : 'USA',
        pet : dogs[4]
    },
    {
        name : 'Pavel',
        age : 19,
        height : 185,
        tel : 30502145214,
        country : 'Canada',
        pet : dogs[3]
    }
];
console.log(friends);



console.log(' 8 - Створити масив з 5 автомобілів та вивести його в консоль');
let cars = [
    car,
    {
        brend : 'Honda',
        model : 'Civic Sport',
        year : 2014,
        engine: {fuel: 'gasoline', volume: 1.8},
        mileage : 84000,
        color : 'black',
        price : 12500 
    },
    {
        brend : 'Range Rover',
        model : 'Evoque SD4',
        year : 2012,
        engine: {fuel: 'diesel', volume: 2.2},
        mileage : 75000,
        color : 'black',
        price : 24999 
    },
    {
        brend : 'Volkswagen',
        model : 'Golf VII Comfortline',
        year : 2014,
        engine: {fuel: 'diesel', volume: 1.6},
        mileage : 124000,
        color : 'metallic blue',
        price : 12846 
    },
    {
        brend : 'Mazda',
        model : 'CX-5',
        year : 2018,
        engine: {fuel: 'gasoline', volume: 2.5},
        mileage : 12000,
        color : 'white',
        price : 19850 
    }
];
console.log(cars);