    /*DIPTI GOGOI
    TECH1101
    WHACK-A-DIV*/


let holes = document.querySelectorAll('.hole');
let scoreBoard = document.querySelector('.score');
let moles = document.querySelectorAll('.mole');
let score = 0;
let move = 0;
let lastHole = 0;
let timeUp = false;
let timer;
let hole;
let totalTime = 0;

//For random time
function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
//For random squares/holes
function randomHole(holes) {
    let idx = Math.floor(Math.random() * holes.length);
    hole = holes[idx];
}

//Timer that waits a random time
function peep() {
    let time = randomTime(1000, 5000);
    randomHole(holes);
        
    setTimeout(
        function() {
            timer = GetCurrentTime();
            hole.classList.add("hole-up");        
        }
    ,time);
}
    
function GetCurrentTime() {
    var d = new Date();
    var n = d.getTime();
    return n;
}

//Start
function start() {
    score = 0;
    scoreBoard.textContent = score;
    timeUp = false;
    scoreBoard.classList.remove('add');
    peep();

}
//Time difference between click
function mole(e) {
    if(holes[e] == hole) {
        let timer2 = GetCurrentTime();
        move++;
        totalTime += timer2 - timer;
        scoreBoard.innerHTML = Math.round(totalTime/move);
        hole.classList.remove("hole-up");
        if (move < 10) {
            peep();    
        }
        else {
            //end the game
        }
    }
}


start();