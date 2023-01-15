let { formatCurrency, getCoins } = require("./money-functions");
const { addItem, calculateTotal, isSufficientPayment, calculateChange, removeItem } = require("./cart-functions");

// temporary formatCurrency function if the real one doesn't exist.
formatCurrency = formatCurrency || (x => x);

const menu = [
  { name: "Candy Bar", price: .95 },
  { name: "Bag of Chips", price: 1.29 },
  { name: "Can of Soda", price: 1.80 },
  { name: "Bottle of Milk", price: 3.00 },
  { name: "Box of Cherries", price: 5.13 }
]
setupUI();

function setupUI() {
  const menuList = document.getElementById("menu");
  const selectedItemsList = document.getElementById("selectedItems");
  const totalOutput = document.getElementById("total");
  const cashInput = document.getElementById("cashInput");
  const cashForm = document.getElementById("cashForm");
  const changeDueOutput = document.getElementById("changeDue");
  const cashInsertedOutput = document.getElementById("cashInserted");
  const paymentInsufficientMessage = document.getElementById("paymentInsufficientMessage");
  const changeSection = document.getElementById("change");
  const changeOutputs = changeSection.querySelectorAll(".change-count");
  const resetButton = document.getElementById("resetButton");

  menu.forEach((item, i) => {
    menuList.insertAdjacentHTML('beforeend',
      `<li>${formatCurrency(item.price)} - ${item.name}
        <button data-index="${i}">Buy</button>
      </li>`);
  });

  let cartArray = [];

  menuList.addEventListener("click", (e) => {
    const itemIndex = parseInt(e.target.getAttribute("data-index"));
    if (!isNaN(itemIndex)) {
      const item = menu[itemIndex];
      addItem(cartArray, item.name, item.price)
      updateBill();
    }
  });

  selectedItemsList.addEventListener("click", (e) => {
    const itemIndex = parseInt(e.target.getAttribute("data-index"));
    if (!isNaN(itemIndex)) {
      removeItem(cartArray, itemIndex);
      updateBill();
    }
  });

  cashForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const cash = Number(cashInput.value) || 0;
    const total = calculateTotal(cartArray);
    let change = 0;
    try {
      change = calculateChange(total, cash);
    } catch (e) {
      console.error(e);
    }
    cashInsertedOutput.innerText = formatCurrency(cash);
    changeDueOutput.innerText = formatCurrency(change);

    if (isSufficientPayment(total, cash)) {
      const coins = getCoins(Math.round(change * 100));
      changeOutputs[0].innerText = coins.quarters;
      changeOutputs[1].innerText = coins.dimes;
      changeOutputs[2].innerText = coins.nickels;
      changeOutputs[3].innerText = coins.pennies;
      changeSection.hidden = false;
      paymentInsufficientMessage.hidden = true;
    } else {
      changeSection.hidden = true;
      paymentInsufficientMessage.hidden = false;
    }
  });

  resetButton.addEventListener("click", () => {
    cartArray = [];
    updateBill();
    cashInput.value = "";
    cashInsertedOutput.innerText = "";
    changeDueOutput.innerText = "";
    changeSection.hidden = true;
    paymentInsufficientMessage.hidden = true;
  });

  function updateBill() {
    selectedItemsList.innerHTML = "";
    cartArray.forEach((item, i) => {
      selectedItemsList.insertAdjacentHTML("beforeend", 
      `<tr>
        <td>${item.name}</td>
        <td>${formatCurrency(item.price)}</td>
        <td><button data-index="${i}">Remove</button></td>
      </tr>`);
    });
    const total = calculateTotal(cartArray);
    totalOutput.innerText = formatCurrency(total);
  }
}