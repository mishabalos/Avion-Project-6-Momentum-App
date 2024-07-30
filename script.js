// DATE AND TIME
let date = document.getElementById("divDate")
var today = new Date();

var months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

var month = months[today.getMonth()];
var day = today.getDate();
var year = today.getFullYear();

var today = `${month} ${day}, ${year}`;
date.textContent = today;

let time = document.getElementById("divTime")
var now = new Date();

var hour = now.getHours();
var minute = now.getMinutes();

minute = minute < 10 ? '0' + minute : minute;

var ampm = hour >= 12 ? 'PM' : 'AM';
hour = hour % 12;
hour = hour ? hour : 12;

var now = `${hour}:${minute} ${ampm}`;
    time.textContent = now;


// UPDATE NAME 
let form = document.getElementById("updateName")

function editName(event) {
    event.preventDefault();
    let name = document.querySelector("#name")
    let focus = document.querySelector(".focus")
    focus.innerHTML = `What is your main goal for today, ${name.value}?`

    form.style.display = "none";
    document.getElementById("askName").style.display = "none";
    document.getElementById("divGoal").style.display = "block";
}

form.addEventListener("submit", editName)

// UPDATE GOAL 
let goals = document.getElementById('updateGoal')

function updateGoal(event) {
    event.preventDefault();
    let focusInput = document.getElementById("focus").value; 
    let displayGoal = document.getElementById("displayGoal");  
    displayGoal.textContent = `Today, I will ${focusInput}!`; 

    // Add main goal to to-do list
    addToDoItem(focusInput);

    document.getElementById("focus").value = ''; 
    document.getElementById("divGoal").style.display = "none";

    // Show the to-do section
    document.getElementById("divToDo").style.display = "block";
    document.getElementById("divToDo").style.textAlign = "center";
}

goals.addEventListener('submit', updateGoal);


// TO DO LIST

let toDoForm = document.getElementById("toDoForm");
let listBox = document.getElementById("listBox");
let list = document.getElementById("list");
let numberOfToDo = 0;

function addToDoItem(item) {
    let toDoItem = document.createElement("div");
    toDoItem.classList.add("to-do-item");

    let toDo = document.createElement("input");
    toDo.setAttribute("type", "checkbox");
    toDo.setAttribute("id", `id${list.children.length}`);

    let label = document.createElement("label");
    label.innerHTML = item;
    label.setAttribute("for",`id${list.children.length}`);

    toDo.addEventListener("change", function(event) {
        let checkbox = event.target
        let label = document.querySelector(`label[for=${checkbox.id}]`)
        if (checkbox.checked) {
            label.style.textDecoration = "line-through"
        } else {
            label.style.textDecoration = "none"
        }
    }); 

    toDoItem.append(toDo, label);
    list.appendChild(toDoItem);
}
function addToDo(event) {
    event.preventDefault();

    addToDoItem(listBox.value);
    listBox.value = "";
}

toDoForm.addEventListener("submit", addToDo);

// RANDOM QUOTES
let randomQuotes = document.getElementById('randomQuotes');
let changeQuote = document.getElementById('changeQuote')
let addQuoteForm = document.getElementById('addQuoteForm')

let quotes = [
    `“The flower that blooms in adversity is the most rare and beautiful of all.” - Mulan`,
    `“Carpe diem. Seize the day, boys. Make your lives extraordinary.” - Dead Poets Society`,
    `“Our lives are defined by opportunities, even the ones we miss." - The Curious Case of Benjamin Button`,
    `“Great men are not born great, they grow great.” - The Godfather`,
    `“I’m not afraid of storms, for I’m learning how to sail my ship.” - Little Women`,
    `“Happiness can be found even in the darkest of times if only one remembers to turn on the light.” - Harry Potter`,
    `“Do, or do not. There is no try.” - Star Wars`,
    `“Every man dies, but not every man really lives.” - Braveheart`,
    `“If you focus on what you left behind, you will never be able to see what lies ahead.” - Ratatouille`,
    `“Just keep swimming. Just keep swimming. Just keep swimming, swimming, swimming.” - Finding Nemo`,
];

function selectRandomQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    randomQuotes.textContent = quotes[randomIndex];
}

// ADD QUOTE
function addNewQuote(event) {
    event.preventDefault();
    let newQuote = document.getElementById('newQuote').value;
    quotes.push(newQuote);
    document.getElementById('newQuote').value = '';
    randomQuotes.textContent = newQuote;
}

changeQuote.addEventListener("click", selectRandomQuote);
addQuoteForm.addEventListener("submit", addNewQuote);



