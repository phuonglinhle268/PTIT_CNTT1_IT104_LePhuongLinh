class Account {
    public accountNumber: string;   
    protected balance: number;   //so du   
    protected history: string[];    
    protected status: string;      

    constructor(accountNumber: string, balance: number, status: string) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.status = status;
        this.history = [];
    }
//deposit: nap tien
//withdraw:rut tien
    public deposit(value: number): void {       
    this.balance += value;
        this.history.push(`Nap ${value} VND. So du: ${this.balance} VND`);
        console.log(`Da nap ${value} VND`);
    }

    public withdraw(value: number): void {
        if (value > this.balance) {
            console.log("So du khong kha dung");
            return;
        }
        this.balance -= value;
        this.history.push(`Rut ${value} VND. So du: ${this.balance} VND`);
        console.log(`Da rut ${value} VND`);
    }

    public showHistory(): void {
        console.log(`\nLich su giao dich`);
        this.history.forEach((h, i) => {
            console.log(`${i + 1}. ${h}`);
        });
    }
}
class SavingAccount extends Account {
    private interestRate: number; //tien lai

    constructor(accountNumber: string, balance: number, status: string, interestRate: number) {
        super(accountNumber, balance, status);
        this.interestRate = interestRate;
    }

    public withdraw(amount: number): void {
        if (amount > this.balance) {
            console.log(`Con lai ${this.balance} VND co the rut`);
            amount = this.balance; // Rut hien tien con lai
        }
        this.balance -= amount;
        this.history.push(`Rut ${amount} VND. So du con lai: ${this.balance}₫`);
        console.log(`Da rut ${amount} VND tu savingAccount`);
    }
}

//bai 8
class CheckingAccount extends Account {
    private overdraftLimit: number;

    constructor(accountNumber: string, balance: number, status: string, overdraftLimit: number) {
        super(accountNumber, balance, status);
        this.overdraftLimit = overdraftLimit;
    }

    public withdraw(amount: number): void {
        //cho phep rut neu so du sau rut ko nho hon (-overdraftLimit)
        if (this.balance - amount < -this.overdraftLimit) {
            console.log(`Vuot muc thu chi. Chi co the rut toi da ${this.balance + this.overdraftLimit} VND`);
            return;
        }
        this.balance -= amount;
        this.history.push(`Rut ${amount} VND. So du con lai: ${this.balance} VND`);
        console.log(`Rut ${amount} VND tu checkingAccount`);
    }
}

const savingAcc = new SavingAccount("7654345", 10000, "active", 4);
savingAcc.deposit(2000);
savingAcc.withdraw(4000);
savingAcc.withdraw(20000);  //ktra khi rut qua so du
savingAcc.showHistory();

const checkingAcc = new CheckingAccount("456575643", 2000, "active", 1000);
checkingAcc.deposit(500);
checkingAcc.withdraw(1000);  //rut trong so du
checkingAcc.withdraw(2000);  //rut vuot so du nhung trong han muc
checkingAcc.withdraw(1000);  //khi rut vuot muc
checkingAcc.showHistory();
