console.log("working");

// deposit for checking 
function depositChecking() {
    // deposit checking amount = available balance
    let depositCheckingAmount = Number(document.getElementById("inputChecking").value);
    // balance after adding deposit
    checkingBalance += depositCheckingAmount;
    // add "$" in front of number
    document.getElementById("checkingBalance").innerHTML = `$${checkingBalance}`;
    console.log(checkingBalance);
}
// fire => add deposit amount to balance after clicking deposit button
document.getElementById("depositChecking").addEventListener("click", function (event) {
    depositChecking();
    // if balance <= 0, turn red, else leave black
    if (checkingBalance <= 0) {
        document.getElementById("checkingBalance").style.color = "red";
    } else {
        document.getElementById("checkingBalance").style.color = "black";
    }
    
});

// withdrawal for checking
function withdrawalChecking() {
    // withdrawal checking amount = available balance
    let withdrawalCheckingAmount = Number(document.getElementById("inputChecking").value);
    // balance after adding withdrawal
    checkingBalance -= withdrawalCheckingAmount;
    // add "$" in front of number
    document.getElementById("checkingBalance").innerHTML = `$${checkingBalance}`;
    console.log(checkingBalance);
}
// fire => add withdrawal amount to balance after clicking withdrawal button
document.getElementById("withdrawChecking").addEventListener("click", function (event) {
    withdrawalChecking();
    // if balance <= 0, turn red, else leave black
    if (checkingBalance <= 0) {
        document.getElementById("checkingBalance").style.color = "red";
    } else {
        document.getElementById("checkingBalance").style.color = "black";
    }
});


// ***********************************************************************
var h1 = document.getElementsByTagName('h1')[0],
    start = document.getElementById('start'),
    stop = document.getElementById('stop'),
    clear = document.getElementById('clear'),
    seconds = 0, minutes = 0, hours = 0,
    t;

function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    
    h1.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

    timer();
}
function timer() {
    t = setTimeout(add, 1000);
}
timer();


/* Start button */
start.onclick = timer;

/* Stop button */
stop.onclick = function() {
    clearTimeout(t);
}

/* Clear button */
clear.onclick = function() {
    h1.textContent = "00:00:00";
    seconds = 0; minutes = 0; hours = 0;
}