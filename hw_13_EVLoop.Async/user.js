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
        this.balance -= money;
    }
    
    function setTransactionLimit(limit) {
        transactionLimit = limit;
    }
    
    function transferCredits(money, card) {
        
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

    }

}

function dateTime() {
    
}

const card3 = userCard(3); // returns an object with methods
console.log(card3);
card3.getCardOptions(); // returns options object with card info
console.log(card3.getCardOptions())
