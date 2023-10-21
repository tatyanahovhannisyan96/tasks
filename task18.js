function updateBalance(amount, action) {
    if (typeof amount !== "number" || isNaN(amount) || amount <= 0) {
        return "Invalid deposit amount. Please deposit a positive amount.";
    }

    if (action === "deposit") {
        bankAccount.balance += amount;
        return `Deposited $${amount}. New balance: $${bankAccount.balance}`;
    } else if (action === "withdraw") {
        if (amount > bankAccount.balance) {
            return "Insufficient balance or invalid withdrawal amount.";
        } else {
            bankAccount.balance -= amount;
            return `Withdrew $${amount}. New balance: $${bankAccount.balance}`;
        }
    } else {
        return "Invalid action. Please use 'deposit' or 'withdraw'.";
    }
}

const bankAccount = {
    accountNumber: "123456789",
    balance: 1000,
    accountHolder: "John Doe",
};

console.log(updateBalance(-3000, 'deposit'));