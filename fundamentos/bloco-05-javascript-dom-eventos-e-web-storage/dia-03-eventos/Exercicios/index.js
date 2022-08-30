function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

function createDaysOfTheMonth() {
  let decemberDaysList = [
    29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  const weekDaysList = document.querySelector("#days");

  for (let index = 0; index < decemberDaysList.length; index += 1) {
    const days = decemberDaysList[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;
    dayListItem.classList = 'days'
    if([4, 11, 18, 25].includes(index-1)){
        dayListItem.classList += ' friday';
    }
    if([24, 25, 31].includes(index-1)){
        dayListItem.classList += ' holiday';
    }
    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheMonth();

function createButton(name, id) {
    let button = document.createElement('button');
    const container = document.querySelector('.buttons-container');

    button.id = id;
    button.innerText = name;
    
    container.appendChild(button);
}

createButton('Feriados', 'btn-holiday');
createButton('Sextas', 'btn-friday');

function changeButtonColor(classe, color, BGColor) {
    let button = document.querySelector(classe);
    button.addEventListener('click', () => {
        let feriados = document.querySelectorAll("." + classe.slice(5));
        for (const iterator of feriados) {
            if(iterator.style.color !== color){
                iterator.style.color = color;
                iterator.style.backgroundColor = BGColor;
            }else{
                iterator.style.color = '#777';
                iterator.style.backgroundColor = 'transparent';

            }
        }
    })
}

changeButtonColor('#btn-holiday','white', 'red')

function changeButtonText(classe, text) {
    let button = document.querySelector(classe);
    let sextas = document.querySelectorAll("." + classe.slice(5));

    let bkp = [];
    for (const iterator of sextas) {
        bkp.push(iterator.innerText);
    }

    button.addEventListener("click", () => {
        for (const iterator in sextas) {
            if (sextas[iterator].innerText === text) {
                sextas[iterator].innerText = bkp[iterator];
            } else {
                sextas[iterator].innerText = text;
            }
        }
    });
}

changeButtonText("#btn-friday", "Sextou!");

function zoomTextIn() {
    let days = document.getElementsByClassName('days');
    
    for (const day of days) {
        day.addEventListener('mouseenter', ({target}) => {
            target.style.fontSize = '160%';
            target.style.fontWeight = '600'
        })
    }
}

zoomTextIn();

function zoomTextOut() {
  let days = document.getElementsByClassName("days");

  for (const day of days) {
    day.addEventListener("mouseleave", ({ target }) => {
        target.style.fontSize = "130%";
        target.style.fontWeight = "500";
    });
  }
}

zoomTextOut();

function createTask(name) {
  let task = document.createElement("span");
  const container = document.querySelector(".my-tasks");

  task.innerText = name;

  container.appendChild(task);
}
createTask("sextar em bh");
