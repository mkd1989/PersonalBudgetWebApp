let user = {
    'Michael Davis':{
        Jan:{
            checkingBal:742.74,
            savingsBal:8370.71,
            expctInc: 0,
            actualInc: 2000.00,
            remainderInc:0,
            expctExp: 0,
            actualExp: 0,

        },
        Feb:{
            checkingBal:700,
            savingsBal:10000,
            expctInc: 2000,
            actualInc: 1800,
            remainderInc:500,
            expctExp: 550,
            actualExp: 600,
        },
        Mar:{
            checkingBal:700,
            savingsBal:10000,
            expctInc: 3000,
            actualInc: 1800,
            remainderInc:500,
            expctExp: 550,
            actualExp: 600,
        },
        Apr:{
            checkingBal:700,
            savingsBal:10000,
            expctInc: 4000,
            actualInc: 1800,
            remainderInc:500,
            expctExp: 550,
            actualExp: 600,
        },
        May:{
            checkingBal:700,
            savingsBal:10000,
            expctInc: 5000,
            actualInc: 1800,
            remainderInc:500,
            expctExp: 550,
            actualExp: 600,
        },
        Jun:{
            checkingBal:700,
            savingsBal:10000,
            expctInc: 6000,
            actualInc: 1800,
            remainderInc:500,
            expctExp: 550,
            actualExp: 600,
        },
        Jul:{
            checkingBal:700,
            savingsBal:10000,
            expctInc: 7000,
            actualInc: 1800,
            remainderInc:500,
            expctExp: 550,
            actualExp: 600,
        },
        Aug:{
            checkingBal:700,
            savingsBal:10000,
            expctInc: 8000,
            actualInc: 1800,
            remainderInc:500,
            expctExp: 550,
            actualExp: 600,
        },
        Sep:{
            checkingBal:700,
            savingsBal:10000,
            expctInc: 9000,
            actualInc: 1800,
            remainderInc:500,
            expctExp: 550,
            actualExp: 600,
        },
        Oct:{
            checkingBal:700,
            savingsBal:10000,
            expctInc: 10000,
            actualInc: 1800,
            remainderInc:500,
            expctExp: 550,
            actualExp: 600,
        },
        Nov:{
            checkingBal:700,
            savingsBal:10000,
            expctInc: 11000,
            actualInc: 1800,
            remainderInc:500,
            expctExp: 550,
            actualExp: 600,
        },
        Dec:{
            checkingBal:700,
            savingsBal:10000,
            expctInc: 12000,
            actualInc: 1800,
            remainderInc:500,
            expctExp: 550,
            actualExp: 600,
        }
    }

};
let incomeBody = {
    Jan:[],
    Feb:[],
    Mar:[],
    Apr:[],
    May:[],
    Jun:[],
    Jul:[],
    Aug:[],
    Sep:[],
    Oct:[],
    Nov:[],
    Dec:[],

};
let expenseBody = {
    Jan:[],
    Feb:[],
    Mar:[],
    Apr:[],
    May:[],
    Jun:[],
    Jul:[],
    Aug:[],
    Sep:[],
    Oct:[],
    Nov:[],
    Dec:[],

};
let calendarDB = {
    Jan:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    Feb:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    Mar:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    Apr:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    May:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    Jun:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    Jul:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    Aug:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    Sep:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    Oct:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    Nov:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    Dec:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

};
// Initial Declaration of Global Variables
const indexPlaceholder = document.getElementById('placeholder');
let incomeIndexCounter = 0;
let expenseIndexCounter = 0;
let monthCounter = 1;
let month = '';
const dollar = "$";
let leftOver = user["Michael Davis"].Jan.expctInc - user["Michael Davis"].Jan.expctExp+ ".00";
const expectedIncome = document.getElementById('expectedIncome');
const expectedExpenses = document.getElementById('expectedExpenses');
const remainder = document.getElementById('leftOverIncome');
const newIncomeType = document.getElementById('addIncomeType');
const newIncomeAmt = document.getElementById('addIncomeAmt');
const addIncomeBtn = document.getElementById('addIncomeBtn');
const incomeData = document.getElementById('incomeData');
const newExpenseType = document.getElementById('addExpenseType');
const newExpenseAmt = document.getElementById('addExpenseAmt');
const addExpenseBtn = document.getElementById('addExpenseBtn');
const expenseData = document.getElementById('expenseData');
const newIncVal = document.getElementById('addIncomeAmt').value;
const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');
const calenderMonth = document.getElementById('calTitle');
const checkingBalance = document.getElementById('checkingBalance');
const savingsBalance = document.getElementById('savingsBalance');
const calenderBody = document.getElementById('calBody');
const calenderFooter = document.getElementById('calFooter');
const daySquares = document.getElementsByClassName('day');
const regex = /^\d*\.?\d{0,2}$/;
const weekdayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]



// Changes the Global Month Variable, calls functions to reset the data and calendar GUI accordingly
function changeMonth(){
    if (monthCounter == 1){
        month = "Jan";
        calenderMonth.innerText = "January";
    }
    else if (monthCounter == 2){
        month = "Feb";
        calenderMonth.innerText = "February";
    }
    else if (monthCounter == 3){
        month = "Mar";
        calenderMonth.innerText = "March";
    }
    else if (monthCounter == 4){
        month = "Apr";
        calenderMonth.innerText = "April";
    }
    else if (monthCounter == 5){
        month = "May";
        calenderMonth.innerText = "May";
    }
    else if (monthCounter == 6){
        month = "Jun";
        calenderMonth.innerText = "June";
    }
    else if (monthCounter == 7){
        month = "Jul";
        calenderMonth.innerText = "July";
    }
    else if (monthCounter == 8){
        month = "Aug";
        calenderMonth.innerText = "August";
    }
    else if (monthCounter == 9){
        month = "Sep";
        calenderMonth.innerText = "September";
    }
    else if (monthCounter == 10){
        month = "Oct";
        calenderMonth.innerText = "October";
    }
    else if (monthCounter == 11){
        month = "Nov";
        calenderMonth.innerText = "November";
    }
    else if (monthCounter == 12){
        month = "Dec";
        calenderMonth.innerText = "December";
    };
    changeData();
    changeCalendar();
};

//Changes the data in each header to correspond with the month that is being displayed
function changeData(){
    let username = user["Michael Davis"];
    let userMonth = username[month];
    expectedIncome.innerText = "$"+parseFloat(userMonth["expctInc"],10).toFixed(2); ;
    userMonth["remainderInc"] = parseFloat(userMonth["expctInc"],10).toFixed(2) - parseFloat(userMonth["expctExp"],10).toFixed(2) ;
    remainder.innerText = "$" +parseFloat(userMonth["remainderInc"],10).toFixed(2);
    checkingBalance.innerText = "$"+parseFloat(userMonth["checkingBal"],10).toFixed(2);
    savingsBalance.innerText = "$"+parseFloat(userMonth["savingsBal"],10).toFixed(2);
    expectedExpenses.innerText = "$"+parseFloat(userMonth["expctExp"],10).toFixed(2);

    //Handles display logic for the income body
    incomeData.innerText = "";
    incomeBody[month].forEach(function(entry){
        incomeData.insertAdjacentHTML('beforeend',entry);
    });

    //Handles display logic for the expense body
    expenseData.innerText = "";
    expenseBody[month].forEach(function(entry){
        expenseData.insertAdjacentHTML('beforeend',entry);
    });
};

// Updates the Calendar GUI based on the monthCounter variable
function changeCalendar(){

    calenderBody.innerHTML = "";
    let dateObj = new Date(2021,monthCounter - 1,1);
    let currentDate = dateObj.getDate();
    let currentMonth = dateObj.getMonth();
    let currentYear = dateObj.getFullYear();
    let firstDayOfMonth = new Date(currentYear,currentMonth,1);
    let daysInMonth = new Date(currentYear,currentMonth + 1, 0).getDate();
    
    let dateString = firstDayOfMonth.toLocaleDateString('en-us',{
      weekday:'long',
      year:'numeric',
      month: 'numeric',
      day: 'numeric',
    });

    let padding = weekdayNames.indexOf(dateString.split(', ')[0]);

    for(let i =1, index = 0;i <= daysInMonth+padding; i++,index++){
        if(i < 8 && i <= padding){
           calenderBody.insertAdjacentHTML('beforeend',`<div class="padding"><div>${weekdayNames[index]}</div></div>`);
        }
        else if(i < 8){
           calenderBody.insertAdjacentHTML('beforeend',`<div class="day" value = "${i - padding}"><div>${weekdayNames[index]}</div>${i - padding}</div>`);
        }
        else if (i > 7){
           calenderBody.insertAdjacentHTML('beforeend',`<div class="day" value = "${i - padding}">${i - padding}</div>`);
        }
    };
};

//Recalculates and updates display of total monthly income each time a new income stream is added    
function calculateIncome(newincome){
    let username = user["Michael Davis"];
    let userMonth = username[month];
    userMonth["expctInc"] += parseFloat(newincome,10);
    expectedIncome.innerText ="$" +parseFloat(userMonth["expctInc"],10).toFixed(2);
    userMonth["remainderInc"] = parseFloat(userMonth["expctInc"],10) - parseFloat(userMonth["expctExp"],10);
    remainder.innerText = "$" +parseFloat(userMonth["remainderInc"],10).toFixed(2);

};

//Recalculates and updates display of total monthly expenses each time a new expense is added 
function calculateExpenses(newexpense){
    let username = user["Michael Davis"];
    let userMonth = username[month];
    userMonth["expctExp"] += parseFloat(newexpense,10);
    userMonth["remainderInc"] = parseFloat(userMonth["expctInc"],10) - parseFloat(userMonth["expctExp"],10);
    remainder.innerText = "$" +parseFloat(userMonth["remainderInc"],10).toFixed(2);
    expectedExpenses.innerText ="$" +parseFloat(userMonth["expctExp"],10).toFixed(2);
};

// Decrements monthCounter variable when the left navigational arrow is clicked, calls changeMonth function
leftArrow.onclick = function(){
    monthCounter -= 1;
    if(monthCounter == 0){
        monthCounter = 12
    };
    changeMonth();
    
};

// Increments monthCounter variable when the right navigational arrow is clicked, calls changeMonth function
rightArrow.onclick = function(){
    monthCounter += 1;
    if(monthCounter == 13){
        monthCounter = 1
    };
    changeMonth();
};

//Input Validation for Enter Income Amount text box, allows only digits and only the formats 000 or 000.00
newIncomeAmt.addEventListener('input',function(e){
    if (regex.test(e.target.value)|| e.target.value == ""){
        newIncomeAmt.style.border = "none";
    }
    else{
        newIncomeAmt.style.border = "solid";
        newIncomeAmt.style.borderColor = "red";
        
    }    
});

//Input Validation for Enter Expense Amount text box, allows only digits and only the formats 000 or 000.00
newExpenseAmt.addEventListener('input',function(e){
    if (regex.test(e.target.value)|| e.target.value == ""){
        newExpenseAmt.style.border = "none";
    }
    else{
        newExpenseAmt.style.border = "solid";
        newExpenseAmt.style.borderColor = "red";
        
    }    
});

// Submit Income Button Event Listener
addIncomeBtn.addEventListener('click',function(){
    // Checks that both input fields are not empty
    if(newIncomeAmt.value == "" || newIncomeType.value == ""){
        alert('Please fill out both fields!');
        newIncomeType.focus();
        return;
    }
    
    // Creates an LI and stores input information inside as text node, adds on trashcan icon as <img>, stores 
    // the completed element as outerHTML in the incomeBody array
    let newElement = document.createElement('LI');
    let newTrashcan = document.createElement('IMG');
    newTrashcan.src = "./images/trashcan.png";
    newTrashcan.className = "trashcan";
    let newNode1 = document.createTextNode(newIncomeType.value+ " $" +parseFloat(newIncomeAmt.value,10).toFixed(2));
    newElement.appendChild(newNode1);
    newElement.appendChild(newTrashcan);
    newElement.setAttribute('value',parseFloat(newIncomeAmt.value,10).toFixed(2));
    newElement.setAttribute('data-index',incomeIndexCounter);
    incomeIndexCounter += 1;
    incomeData.appendChild(newElement);
    incomeBody[month].push(newElement.outerHTML);
    calculateIncome(newIncomeAmt.value);
    newIncomeType.value = "";
    newIncomeAmt.value = "";
});

// Submit Expense Button Event Listener
addExpenseBtn.addEventListener('click',function(){
    // Checks that both input fields are not empty
    if(newExpenseAmt.value == ""){
        alert('Invalid Entry');
    }

    // Creates an LI and stores input information inside as text node, adds on trashcan icon as <img>, stores 
    // the completed element as outerHTML in the expenseBody array
    let newElement = document.createElement('LI');
    let newTrashcan = document.createElement('IMG');
    newTrashcan.src = "./images/trashcan.png";
    newTrashcan.className = "trashcan";
    let newNode1 = document.createTextNode(newExpenseType.value+ " $" +parseFloat(newExpenseAmt.value,10).toFixed(2));
    newElement.appendChild(newNode1);
    newElement.appendChild(newTrashcan);
    newElement.setAttribute('value',parseFloat(newExpenseAmt.value,10).toFixed(2));
    newElement.setAttribute('data-index',expenseIndexCounter);
    expenseIndexCounter += 1;
    expenseData.appendChild(newElement);
    expenseBody[month].push(newElement.outerHTML);
    calculateExpenses(newExpenseAmt.value);
    newExpenseType.value = "";
    newExpenseAmt.value = "";
});

// Event Listener for each LI element within the income body
incomeData.addEventListener("click", function(e){
    const target = e.target;
    let username = user["Michael Davis"];
    let userMonth = username[month];

// Gets the value of target element and subtracts it from total income, removes the element from view,
// removes element from incomeBody array and replaces with placeholder <div> in order to preserve 
// indexing functionality among remaining LI elements
    if(target.matches('li')){
        console.log(target);
        target.style.display = "none";
        userMonth["expctInc"] -= parseFloat(target.getAttribute('value'),10);
        incomeBody[month].splice(target.getAttribute('data-index'),1,indexPlaceholder.outerHTML);
        changeData();
        console.log(incomeBody[month]);
    }
    else if(target.matches('img')){
        target.parentElement.style.display = "none";
        userMonth["expctInc"] -= parseFloat(target.parentElement.getAttribute('value'),10);
        incomeBody[month].splice(target.parentElement.getAttribute('data-index'),1,indexPlaceholder.outerHTML);
        changeData();
        console.log(incomeBody[month]);
        
    }
});

// Event Listener for each LI element within the Expenses body
expenseData.addEventListener("click", function(e){
    const target = e.target;
    let username = user["Michael Davis"];
    let userMonth = username[month];

// Gets the value of target element and subtracts it from total income, removes the element from view,
// removes element from incomeBody array and replaces with placeholder <div> in order to preserve 
// indexing functionality among remaining LI elements
    if(target.matches('li')){
        console.log(target);
        target.style.display = "none";
        userMonth["expctExp"] -= parseFloat(target.getAttribute('value'),10);
        expenseBody[month].splice(target.getAttribute('data-index'),1,indexPlaceholder.outerHTML);
        changeData();
        console.log(expenseBody[month]);
    }
    else if(target.matches('img')){
        target.parentElement.style.display = "none";
        userMonth["expctExp"] -= parseFloat(target.parentElement.getAttribute('value'),10);
        expenseBody[month].splice(target.parentElement.getAttribute('data-index'),1,indexPlaceholder.outerHTML);
        changeData();
        console.log(expenseBody[month]);
    }
});

calenderBody.addEventListener('click',function(e){
    const target = e.target;
    calMonth = calendarDB[month];
    if(target.className == "padding" || target.id == "calBody"){
        return;
    }
    else if(target.matches('div')){
        target.classList.toggle('daySelected');
        let element = document.createElement('P');
        let node = document.createTextNode('Write Something Here!');
        element.appendChild(node);
        calMonth.splice(target.getAttribute('value')-1,1,element.outerHTML);
        calenderFooter.innerHTML = calMonth[target.getAttribute('value')-1];
        calenderFooter.addEventListener('keyup',function(){
            calMonth.splice(target.getAttribute('value')-1,1,element.outerHTML);
            
        });
    };
});



changeMonth();



