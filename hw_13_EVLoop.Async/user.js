function userCard(number) {

    const historyLogs = [];
    const key = Math.round(1 - 0.5 + Math.random() * (number - 1 + 1));
    let balance = 100;
    let transactionLimit = 100;

    function getCardOptions() {
        return{
            balance,
            transactionLimit,
            key,
            historyLogs
        }
    }
    
    function LogHistory(operationType, money, operationTime) {
        historyLogs.push({
            operationType: operationType,
            money: money,
            operationTime: operationTime
        })
        return historyLogs[historyLogs.length-1]
    }

    function putCredits(money) {
        this.balance += money;
        LogHistory('Received credits', money, dateTime())
    }

    function takeCredits(money) {
        if (!transactionLimit) return console.error('Лимит изчерпан')
        if (balance < money) return console.error('Недостаточно средств')
        transactionLimit--
        this.balance -= money;
        return LogHistory('Withdrawal of credits', money, dateTime())
    }
    
    function setTransactionLimit(limit) {
        transactionLimit = limit;
        LogHistory('Transaction limit change', limit, dateTime())
    }
    
    function transferCredits(money, card) {
        let commission = money
        takeCredits(commission += money*0.05)
        card.putCredits(money)
    }

    return {
        getCardOptions,
        putCredits,
        takeCredits,
        setTransactionLimit,
        transferCredits
    }
}


class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];
    }
    addCard(){
        if (this.cards.length > 3) return console.error('Не більше 3 карт можна мати')
        this.cards.push(userCard(3))
    }
    getCardByKey(number) {
        return this.cards[number]
    }
}

const dateTime = () => {
    const options = {year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'};
    return new Date().toLocaleDateString('en-GB', options)
}

const card3 = userCard(3); // returns an object with methods
console.log(card3);
card3.getCardOptions(); // returns options object with card info
console.log(card3.getCardOptions())
console.log(dateTime())
card3.takeCredits(50);
console.log(card3.getCardOptions())


console.log('Приклад переказу коштів:---------------------------------')

let user = new UserAccount('Bob');
user.addCard()
user.addCard()
let card1 = user.getCardByKey(0);
let card2 = user.getCardByKey(1);
card1.putCredits(500);
card1.setTransactionLimit(800);
card1.transferCredits(300, card2);
card2.takeCredits(50)

console.log('card1',card1.getCardOptions());
console.log('card2',card2.getCardOptions());