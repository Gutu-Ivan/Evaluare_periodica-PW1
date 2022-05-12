// Nr 1
window.addEventListener('DOMContentLoaded', evt => {
    document.body.style.backgroundColor = 'yellow';
    document.body.innerHTML += `<div>START</div>`
})

// Nr 2
let maxBtn = document.getElementById('input__max')
let result = document.getElementById('result')
maxBtn.addEventListener('click', () => {
    let xValue = parseInt(document.getElementById('input__x').value, 10);
    let yValue = parseInt(document.getElementById('input__y').value, 10);
    result.innerText = 'The max value is:' + Math.max(xValue,yValue)
})

//Nr 3
let changeBtn = document.getElementById('input__change')
changeBtn.addEventListener('click', () => {
    let xValue = document.getElementById('input__x');
    let yValue = document.getElementById('input__y');
    let newX = yValue.value;
    let newY = xValue.value;
    xValue.setAttribute("value", newX)
    yValue.setAttribute("value", newY)
})

//Nr 4
let containter = document.getElementById('container');
container.onmouseover = () => {
    containter.style.backgroundColor = 'red';
}

//Nr 5
function changeParagraphColor(id) {
    let pElement = document.getElementById(`${id}`)
    if (id % 2 == 0) {
        pElement.style.backgroundColor = 'blue';
    } else {
        pElement.style.backgroundColor = 'green';
    }
}

// Nr 6,7
function createListOfElements() {
    for (let i = 1; i <= 10; i++) {
        let liElement = document.createElement('li');
        liElement.setAttribute('id', `list__${i}`)
        liElement.setAttribute('style', `text-align: center`)
        let text = document.createTextNode(`Element NR ${i}`)
        liElement.appendChild(text)
        document.body.appendChild(liElement)
        if (i == 1) {
            liElement.style.backgroundColor = 'gray';
        }
    }
}
setTimeout(createListOfElements, 3000)

//Nr 8
function createAndSetPurple() {
    for (let i = 1; i <= 10; i++) {
        let pElement = document.createElement('p');
        pElement.setAttribute('class', `square`)
        pElement.innerText = 'Square'
        document.body.appendChild(pElement)
    }
}
createAndSetPurple()

// Nr 9
function getStudents() {
    let students = [
        {name: 'Ivan', media: 9.5},
        {name: 'Andrei', media: 7.15},
        {name: 'Victor', media: 8.35},
        {name: 'Maxim', media: 6.2},
        {name: 'Denis', media: 4.81}];
    let studentsDebtors = [];
    let goodStudents = [];
    students.filter(student => {
        if (student.media < 5) {
            studentsDebtors.push(student)
        } else if (student.media >= 9) {
            goodStudents.push(student)
        }
    })
    let debtorsEl = document.getElementById('debtors')
    let goodStudentsEl = document.getElementById('good_students')
    studentsDebtors.forEach( student => {debtorsEl.innerText += student.name})
    goodStudents.forEach( student => {goodStudentsEl.innerText += student.name})
}
getStudents()

// Nr 10
setTimeout(() => {
    document.body.style.backgroundColor = 'gray';
}, 5000);

// Nr 11
function increaseValue() {
    let counter = document.getElementById('counter')
    counter.value++;
}
let increaseBtn = document.getElementById('input__increase')
increaseBtn.onclick = increaseValue

// Nr 12
function showNumbers() {
    let numbers = [0, 1, 2, 3, 4, 5 , 6, 7, 8, 9]
    let numbersEl = document.getElementById('numbers')
    numbers.forEach((number, i) => {
        setTimeout(() => {
            numbersEl.innerHTML += `<li>${number}</li>`
            }, i*1000);
    });
}
showNumbers()

//Nr 13
function showCity() {
    let cities = document.getElementById('cities');
    let output = document.getElementById('element');
    output.innerText = cities.options[cities.selectedIndex].text
}
let submitBtn = document.getElementById('submit__form')
submitBtn.onclick = showCity
