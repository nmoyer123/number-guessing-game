let numLives = 0;
let lives = 0;
let totalNum = 0;

let newGame = document.getElementById("newGame");


newGame.onclick = function() {
    let input1 = document.getElementById("input1").value;
    let out1 = document.getElementById("out1");
    if (input1 < 5 || input1 > 30) {
        out1.innerHTML = "Wrong Input"
    }else {
        numLives = input1;
        found = 0;
        out1.innerHTML = " ";
        createTable(input1);
        scorebaord();
    }
}

function createTable(row) {
    let tableStr = `<table>`;
    let data = 1;

//store function in num variable to get random number 1-100
// Math.random produces 0.0-1.0
let num = () => Math.floor(Math.random()*100) + 1; 
let filledBoxes;
// variable for percentage of filled boxes
if (input1 < 8){
    filledBoxes = 70;
} else if(input1 < 10){
     filledBoxes = 40;
} else if (input1 < 15){
    filledBoxes = 20;
} else if (input1 < 25){
    filledBoxes = 15
}else {
    filledBoxes = 10;
}

//loop to create a table
for (let i = 0; i < row; i++) {
    tableStr += `<tr>`;
    
//second loop to check if a number should be added or left blank
    for (let j = 0; j < row; j++) {
        if(num() < filledBoxes && data <= row){
            tableStr +=`<td class="hiddenBox hasNum" onclick="showBox(this)"> ${data} </td>`;
        data++;} 
        else {
            tableStr +=`<td class="hiddenBox" onclick="showBox(this)"> </td>`;
        }
    }

    tableStr += `</tr>`;
}
tableStr += `</table>`;

totalNum = data - 1;

let tableDiv = document.getElementById("tableDiv");
tableDiv.innerHTML = tableStr;
}

function scorebaord() {
    let num = document.getElementById("num");
    let numFound = document.getElementById("found");
    let lives = document.getElementById("lives");

    num.innerHTML = "Total Numbers: " + totalNum;
    numFound.innerHTML = "Found: " + found;
    lives.innerHTML =  "Lives: " + numLives;
}


function showBox(box) {
    box.classList.remove("hiddenBox");
    if(box.classList.contains('hasNum')){
        found++;
        scorebaord()
    }else{
        numLives--;
        scorebaord()
    }
    if (numLives == 0) {
        let out1 = document.getElementById("out1");
        out1.innerHTML = "<h2 class='loser'>Out of lives!!</h2>";
    }
    if (found == totalNum) {
        let out1 = document.getElementById("out1");
        out1.innerHTML = "<h2 class='winner'>YOU WON!!</h2>";
    }
}

