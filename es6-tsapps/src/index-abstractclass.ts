//base class
abstract class Account {
    public getAccountInfo() {
        return 'AccountInfo'
    }
    abstract deposit();
    abstract withdraw();
}
class SavingsAccount extends Account {
    constructor() {
        super()
    }
    //overriding
    public deposit() {
        return 1000
    }
    withdraw() {
        return 300;
    }
}
let sb = new SavingsAccount()
console.log(sb.deposit(),sb.withdraw(),sb.getAccountInfo())