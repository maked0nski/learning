// function clearHouse(isJobdone, cb) {
//     setTimeout(()=>{
//         if(isJobdone) {
//             console.log('Cleaning is progress ...')
//             cb(null, 500);
//         }else{
//             cb('No money, no honey', null)
//         }
//     }, 2000)
// }
//
// function buyJeans(money, cb){
//     setTimeout(() => {
//         if (money>200){
//             console.log('Купив джисси');
//             money = money - 200;

//             cb(null, money);
//         } else {
//             cb('error', null)
//         }
//     }, 1000)
// }
//
// function goEat(reward, (err, resta)=>{
//     if(err){
//         console.error('Нема грощей')
//         console.log(err)
//     } else {
//         console.log('')
//
//     }
// })
//
// clearHouse(true, (err,reward)=>{
//     if (err){
//         console.error(err)
//     }else{
//         console.log('*****************************')
//         console.log(reward)
//         console.log('*****************************')
//
//         buyJeans(reward, (err, resta) => {
//             if(err) {
//                 console.log(err)
//             } else {
//                 console.log('Пысля покупки в мене залишилось ' + resta)
//             }
//         })
//     }
// });

// function goToTyrkey(isCovidPresent, cb) {
//     setTimeout(()=>{
//         if(isCovidPresent){
//             cb('Ковід в країні', null)
//         }else {
//             cb(null, 'Летимо выдпочивати')
//         }
//     }, 2000)
// }
//
//
// goToTyrkey(true, (err, resoult)=>{
//     if(err){
//         console.error('сиди дома')
//         console.error(err)
//     }else {
//     console.log('Где мои плавки?')
//     console.log(resoult)
//
//     }
// })


function clearHouse(isJobdone) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(isJobdone) {
                console.log('Cleaning is progress ...')
                resolve(500);
            }else{
                reject('No money, no honey')
            }
        }, 2000)

    })
}

function buyJeans(money){
    return  new Promise((resolve, reject) => {
        setTimeout(() => {
            if (money>200){
                console.log('Купив джисси');
                money = money - 200;
                resolve(money);
            } else {
                reject('error');
            }
        }, 1000);
    })
}


//
// clearHouse(true)
//     .then(value => {
//         console.log(value);
//
//     return buyJeans(value);
//
// })
// .then(jeans => {
//     console.log(jeans)
// })
//
//
// let cheerfulness = 100;


let money = 0
function myDay(awoke) {
    let cheerfulness = 100;

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (awoke) {
                resolve(cheerfulness += 10)
                console.log('Прокинувся вчасно: 6:00. Молодець.')
            }else{
                console.log('Ти простав! тебе розстріляти мало!.')
                reject(cheerfulness -= 10)
            }
        }, getRandom())
    })
}

function brushTeeth(overslept){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (overslept > 100){
                console.log('Чистимо зуби, отримуємо позитивний настрій')
                resolve(overslept += 10)
            } else {
                console.log('Нема часу на чистку зубів. Я Проспав!')
                reject(overslept -= 10)
            }
        }, getRandom())
    })
}

function eat(cheerfulness){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (cheerfulness > 110){
                console.log('Нажерся, як свиня. Гусь товарищу не сытый')
                resolve(cheerfulness += 10)
            } else {
                console.log('Чого голодний? бо виспаний! Чого виспаний? Бо ПРОСПАВ!')
                reject(cheerfulness -= 50)
            }
        }, getRandom())
    })
}

function goToWork(cheerfulness) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (cheerfulness >= 120){
                money += 1000;
                console.log('попрацювали та заробили грошненят')
                cheerfulness -= 10
                resolve([cheerfulness, money])
            }else {
                console.log('Нема ні сил, ні бажання працювати')
                reject(cheerfulness -= 50)
            }
        }, getRandom())
    })
}

function goBear (cheerfulness, money){
    return new  Promise((resolve, reject) => {
        setTimeout(()=>{
            if(cheerfulness > 100 && money > 500){
                console.log('Обожнюю холодне крафтове пиво ;) ');
                cheerfulness += 10;
                money -= 300;
                resolve([cheerfulness, money])
            }else {
                console.log('No money, no Bear! Да и сил нету');
                cheerfulness -= 10;
                console.log(cheerfulness)
                console.log(money)
                reject ([cheerfulness, money])
            }
        }, getRandom())
    })
}

function stripClub (cheerfulness, money){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(cheerfulness > 100){
                console.log('Погнали к девочкам !!! ');
                cheerfulness += 20;
                money -= 500;
                resolve([cheerfulness, money])
            } else {
                console.log('В твоем то состоянии ?? Смешно!!  ');
                console.log('Еще и обокрали !!! Денек просто ППЦ! ');
                cheerfulness = 10;
                money = 0;
                resolve([cheerfulness, money])

            }
        }, getRandom());
    })
}

// myDay(true)
//     .then(value => {
//         console.log(`Твоє exp збільшилось до ${value}`)
//         console.log('*______________________________*')
//         return brushTeeth(value)
//     })
//     .then(brushTeeth =>{
//         console.log(`Твоє exp збільшилось до ${brushTeeth}`)
//         console.log('*______________________________*')
//         return eat(brushTeeth)
//     })
//     .then(eat => {
//         console.log(`Твоє exp збільшилось до ${eat}`)
//         console.log('*______________________________*')
//
//     })
//     .catch(reason => {
//         console.log('-------------------------------------------')
//         console.log('Wszystko popierdolone! Весь день на смарку.')
//         console.log('-------------------------------------------')
//     })
//     .finally(()=>{
//         console.log('-------------------------------------------')
//         console.log('-*- А варто було тыльки вчасно прокинутися -*-')
//         console.log('-------------------------------------------')
//
//     })

function getRandom(min=1000, max=3000) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function printExp(exp){
    console.log(`Твоє exp збільшилось до ${exp}`)
    console.log('*______________________________*')
}
async function myDays(){
    try {
        let exp = await myDay(true);
        console.log(`Твоє exp збільшилось до ${exp}`)
        console.log('*______________________________*')

        let zub = await brushTeeth(exp);
        console.log(`Твоє exp збільшилось до ${zub}`)
        console.log('*______________________________*')

        let eats = await eat(zub);
        console.log(`Твоє exp збільшилось до ${eats}`)
        console.log('*______________________________*')

        let work = await goToWork(eats);
        money = work[1]
        cheerfulness = work[0]
        console.log(`Твоє exp збільшилось до ${cheerfulness}`)
        console.log(`Приємно коли в кишені шелестять ${money} гривень`)
        console.log('*______________________________*')

        let bar = await goBear(cheerfulness, money)
        cheerfulness = bar[0]
        money = bar[1]
        console.log(`Після відпочинку твоє exp становить: ${cheerfulness}`)
        console.log(`Після бару в кишені залишилось ${money} гривень`)
        console.log('*______________________________*')

        if (money > 700){
            let strip = await stripClub(cheerfulness, money)
            cheerfulness = strip[0]
            money = strip[1]
            console.log(`Відвідавши стрибклуб exp становить: ${cheerfulness}`)
            console.log(`Після стрибклубу в кишені залишилось ${money} гривень`)
            console.log('*______________________________*')

        }else {
            let work = await goToWork(eats);
            money = work[1]
            cheerfulness = work[0]
            console.log(`Твоє exp збільшилось до ${cheerfulness}`)
            console.log(`Приємно коли в кишені шелестять ${money} гривень`)
            console.log('*______________________________*')

            let strip = await stripClub(cheerfulness, money)
            cheerfulness = strip[0]
            money = strip[1]
            console.log(`Відвідавши стрибклуб exp становить: ${cheerfulness}`)
            console.log(`Після стрибклубу в кишені залишилось ${money} гривень`)
            console.log('*______________________________*')
        }

    }
    catch(e)
    {
        console.log('-------------------------------------------')
        console.log('Wszystko popierdolone! Весь день на смарку.')
        console.log('А варто було тільки вчасно прокинутися')
        console.log('-------------------------------------------')
    }
    finally {
        console.log('-------------------------------------------')
        console.log('-*- The End -*-')
        console.log('-------------------------------------------')
    }
}
myDays()

