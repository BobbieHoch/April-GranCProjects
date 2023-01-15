const form = document.querySelector(".form");
// Construct a submit event handler for the form
form.addEventListener("submit", (event) => {
  // Prevent the page from reloading by preventing the default submit event behavior.
  event.preventDefault();
  // Create our form data object.
  const formData = new FormData(form);
  // Store the form data values in variables.
  const number = formData.get("number");
  const coin = formData.get("coin");
  // Call our add coin function with the number and coin arguments
  createCoins(number, coin);
});
// Create a function to add the coins to the DOM.
function createCoins(number, coin) {
  // Create a for loop to create our elements.
  for (let i = 0; i < number; i++) {
    // Select our coin elements container.
    const coinElementsContainer = document.querySelector(".coins-container");
    // Create a new coin element div.
    const coinElement = document.createElement("div");
    // Give our coin element a class name of coin.
    coinElement.classList.add("coin");
    // Add the coin text to the coin element.
    coinElement.textContent = coin;
    // Add an event listener to the coin element to remove the coin from the DOM.
    coinElement.addEventListener("click", (event) =>
      event.target.removeEventListener()
    );
    // Append the coin element to the coin elements container.
    coinElementsContainer.appendChild(coinElement);
  }
}
