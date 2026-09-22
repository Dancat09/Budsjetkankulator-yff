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
function showBudget() {
 
    let list = document.getElementById("list");
 
    list.innerHTML = "";
 
    let incomeTotal = 0;
    let expenseTotal = 0;
 
    for (let i = 0; i < incomes.length; i++) {
 
        incomeTotal += incomes[i].amount;
 
        list.innerHTML += `
            <div class="post income">
                <div>
                    <strong>${incomes[i].name}</strong>
                    <br>
                    ${incomes[i].category}
                    <br>
                    + ${money(incomes[i].amount)}
                </div>
 
                <button onclick="deleteIncome(${i})">
                    Slett
                </button>
            </div>
        `;
    }
 
    for (let i = 0; i < expenses.length; i++) {
 
        expenseTotal += expenses[i].amount;
 
        list.innerHTML += `
            <div class="post expense">
                <div>
                    <strong>${expenses[i].name}</strong>
                    <br>
                    ${expenses[i].category}
                    <br>
                    - ${money(expenses[i].amount)}
                </div>
 
                <button onclick="deleteExpense(${i})">
                    Slett
                </button>
            </div>
        `;
    }
 
    if (incomes.length == 0 && expenses.length == 0) {
        list.innerHTML = "<p>Ingen poster lagt til.</p>";
    }
 
    let balance = incomeTotal - expenseTotal;
 
    document.getElementById("incomeTotal").textContent =
        money(incomeTotal);
 
    document.getElementById("expenseTotal").textContent =
        money(expenseTotal);
 
    document.getElementById("balance").textContent =
        money(balance);
 
    if (balance < 0) {
        document.getElementById("balance").classList.add("minus");
    } else {
        document.getElementById("balance").classList.remove("minus");
    }
} 
