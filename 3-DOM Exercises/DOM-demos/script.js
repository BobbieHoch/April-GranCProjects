"use strict";
{
  document.getElementById("demoButton").addEventListener("click", demo);
  document.getElementById("actionButton").addEventListener("click", main);

  function demo() {
    // step 1 access it
    let demoButton = document.getElementById("demoButton");
    // step 2 modify it
    demoButton.innerText = "Hello <em>World</em>";
    demoButton.innerHTML = "Hello <em>World</em>";

    // step 1 access it
    let shrinkText = document.getElementById("shrink-me");
    // step 2 modify it
    // shrinkText.style.color = "orange";
    shrinkText.classList.add("orange");
  }

  function main() {
    // We'll write code together here...
    let growMe = document.getElementById("grow-me");
    growMe.classList.add("big");
    let shrinkMe = document.getElementById("shrink-me");
    shrinkMe.classList.remove("big");

    let listItems = document.querySelectorAll("li");
    for (const item of listItems) {
      console.log(item.innerText);
    }

    let link = document.querySelector(".link");
    link.setAttribute("href", "https://www.example.com");
    link.innerText = "somewhere";
  }
}
