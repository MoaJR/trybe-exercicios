//1
let body = document.querySelector('body');

let h1 = document.createElement('h1');

h1.innerText = "Exercício 5.2 - JavaScript DOM";

body.appendChild(h1);

//2
let mainCreate = document.createElement('main');

mainCreate.className = 'main-content';

body.appendChild(mainCreate);

//3 
let sectionCreate = document.createElement('section');

sectionCreate.classList = 'center-content';

let main = document.querySelector('.main-content');
main.appendChild(sectionCreate)

//4
let pCreate = document.createElement('p');
pCreate.innerText = 'dont try. Be'
pCreate.style.textAlign = 'center'

let section = document.querySelector('.center-content')

section.appendChild(pCreate)

//5
let sectionCreate2 = document.createElement("section");

sectionCreate2.classList = 'left-content';
main.appendChild(sectionCreate2)

//6
let sectionCreate3 = document.createElement("section");

sectionCreate3.classList = 'right-content';
main.appendChild(sectionCreate3)

