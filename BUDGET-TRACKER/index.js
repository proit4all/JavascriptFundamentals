
const formAdd = document.querySelector(".add");
const incomeList = document.querySelector("ul.income-list");
const expenseList = document.querySelector("ul.expense-list");
const balance = document.getElementById("balance");
const income = document.getElementById("income");
const expense = document.getElementById("expense");
//mang transactions
let transactions = localStorage.getItem("transactions") !== null ? JSON.parse(localStorage.getItem("transactions")):[];

function updateStatistics() {
    const updateIncome = transactions
                            .filter(transaction => transaction.amount > 0)
                            .reduce((total, transaction)=>total += transaction.amount, 0);

    const updateExpense = transactions
                            .filter(transaction => transaction.amount < 0)
                            .reduce((total,transaction) => total += Math.abs(transaction.amount),0);
    let updateBalance = updateIncome - updateExpense;
    balance.textContent = updateBalance;
    income.textContent = updateIncome;
    expense.textContent = updateExpense;
}


function getItemHTML(id, source, amount, time) {
    return `<li data-id = "${id}">
                <p>
                    <span>${source}</span>
                    <span id="time">${time}</span>
                </p>
                <span>${amount}</span>đ
                <i class="bi bi-trash delete"></i>
            </li>`;
}
function addTransactionDOM(id,source,amount,time) {
    if(amount > 0){
        //add income
        incomeList.innerHTML += getItemHTML(id, source,amount,time);
    }else{
        //add expense
        expenseList.innerHTML += getItemHTML(id, source,amount,time);
    }
}
function addTransaction(source, amount) {
    const time = new Date();
    const transaction = {
        id: Math.floor(Math.random()*100000),
        source: source,
        amount: amount,
        time: `${time.toLocaleTimeString()} ${time.toLocaleDateString()}`
    };
    transactions.push(transaction);// add vao mang
    addTransactionDOM(transaction.id, source, amount, transaction.time);
    localStorage.setItem("transactions",JSON.stringify(transactions));
}

formAdd.addEventListener("submit", event=>{
    event.preventDefault();
    if (formAdd.source.value.trim()===""||formAdd.amount.value ==="") {
        return alert("Please add proper values!");
    }
    addTransaction(formAdd.source.value.trim(), Number(formAdd.amount.value));
    formAdd.reset();
    updateStatistics();
})

function deleteTransaction(id) {
    transactions = transactions.filter(transaction =>{
        return transaction.id !== id;
    });
    localStorage.setItem("transactions",JSON.stringify(transactions));
}

incomeList.addEventListener("click", event=>{
    if (event.target.classList.contains("delete")) {
        // alert("Hi");
        event.target.parentElement.remove();
        deleteTransaction(Number(event.target.parentElement.dataset.id));
        console.log(transactions);
        updateStatistics();
    }
})

expenseList.addEventListener("click", event=>{
    if (event.target.classList.contains("delete")) {
        // alert("Hi");
        event.target.parentElement.remove();
        deleteTransaction(Number(event.target.parentElement.dataset.id));
        console.log(transactions);
        updateStatistics();
    }
})

function getTransactionLocalStoreage() {
    transactions.forEach(transaction => {
        if (transaction.amount > 0) {
            incomeList.innerHTML += getItemHTML(transaction.id, transaction.source, transaction.amount, transaction.time);
        }else{
            expenseList.innerHTML += getItemHTML(transaction.id, transaction.source, transaction.amount, transaction.time);
        }
    });
}
function init() {
    getTransactionLocalStoreage();
    updateStatistics();
}
init();
