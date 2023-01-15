let remainingBalance = 0;
let entertainmentTotal = 0;
let foodTotal = 0;
let clothsTotal = 0;
let billsTotal = 0;

const userName = document.getElementById("username");
const budget = document.getElementById("weekly-budget");
const btn1 = document.getElementById("form1-btn");

let pmtAmt = document.getElementById("pmt-amt");
let pmtType = document.getElementById("pmt-type");
let pmtDay = document.getElementById("pmt-day");
const btn2 = document.getElementById("form2-btn");

const userLi = document.getElementById("userList");
const expList = document.getElementById("expenseList");
const entertainment = document.getElementById("entTotal");
const food = document.getElementById("foodTotal");
const cloths = document.getElementById("clothTotal");
const bills = document.getElementById("billsTotal");
const remaining = document.getElementById("remaining");
const welcomePage = document.getElementById("welcome-page");
const restOfPage = document.getElementById("rest-of-page");

//*********Accessed variables above*********//

//*****Form 1 Button Event*****//

btn1.addEventListener("click", (event) => {
  event.preventDefault();

  if (budget.value === "") {
    window.alert("Please input weekly budget.");
    return;
  }

  const userObject = document.createElement("p");
  userObject.innerText = `Hi ${userName.value}, your budget is $${budget.value} for the week.`;
  remainingBalance = budget.value;
  userLi.append(userObject);
  remaining.innerText = `$${remainingBalance}`;
  btn1.style.display = "none";
  restOfPage.style.display = "flex";
  welcomePage.style.display = "none";
});

//*****Form 2 Button Event*****//

btn2.addEventListener("click", (event) => {
  event.preventDefault();

  if (pmtType.value === "Entertainment") {
    entertainmentTotal += Number(pmtAmt.value);
    entertainment.innerText = `Entertainment total: $${entertainmentTotal}.`;
  } else if (pmtType.value === "Food") {
    foodTotal += Number(pmtAmt.value);
    food.innerText = `Food total: $${foodTotal}.`;
  } else if (pmtType.value === "Clothing") {
    clothsTotal += Number(pmtAmt.value);
    cloths.innerText = `Clothing total: $${clothsTotal}.`;
  } else if (pmtType.value === "Bills") {
    billsTotal += Number(pmtAmt.value);
    bills.innerText = `Bills total: $${billsTotal}.`;
  }

  remainingBalance -= pmtAmt.value;

  if (remainingBalance >= 0) {
    remaining.innerText = `$${remainingBalance}`;
  } else if (remainingBalance < 0) {
    remaining.innerText = `$${remainingBalance}. You're in debt.`;
  }
});
