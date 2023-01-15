// const fruitlist = ["apple", "banana", "tomato" ];

// const list = document.querySelector ("ul");

// fruitlist.forEach(fruit => {

//     const listItem = document.createElement{ "li"};

//     const listItemText =  document. createTextNode(fruit);
// listItem.appendChild(listItemText);
// \list.appendChild(listItem);

// })
const form = document.getElementById('form');

form.addEvenListener('submit', e => {
    e.preventDefault();

const data = new FormDataEvent(form);
let firstName =  data.get('firstName');
let lastName = data.get('lastName');

console.log(firstName);
console.log(lastName);

if ((firstName === 'Jane' || firstName === 'John') && lastName ==='Doe') {
    const paragraph = document.createElement('p');
    paragraph.innerTex = `Yay ${firstName}  ${lastName}has won an award!!!`;

    document.body.appendChild(paragraph);

if (firstName === John) {
    paragraph.style.color = 'blue';
} else {
    paragraph.style.color = 'red';
}}

    