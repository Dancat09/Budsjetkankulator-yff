let incomes = [];
let expenses = [];
 
// Henter lagret budsjett
loadBudget();
 
function addIncome() {
 
    let name = document.getElementById("incomeName").value;
    let category = document.getElementById("incomeCategory").value;
    let amount = Number(document.getElementById("incomeAmount").value);
 
    if (name == "" || amount <= 0) {
        alert("Skriv inn navn og beløp.");
        return;
    }
 
    incomes.push({
        name: name,
        category: category,
        amount: amount
    });
 
    document.getElementById("incomeName").value = "";
    document.getElementById("incomeAmount").value = "";
 
    saveBudget();
    showBudget();
}
 
function addExpense() {
 
    let name = document.getElementById("expenseName").value;
    let category = document.getElementById("expenseCategory").value;
    let amount = Number(document.getElementById("expenseAmount").value);
 
    if (name == "" || amount <= 0) {
        alert("Skriv inn navn og beløp.");
        return;
    }
 
    expenses.push({
        name: name,
        category: category,
        amount: amount
    });
 
    document.getElementById("expenseName").value = "";
    document.getElementById("expenseAmount").value = "";
 
    saveBudget();
    showBudget();
} 
