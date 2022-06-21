import { enemyShips } from "./shipFactory";
import { myShips} from "./shipFactory";
import startNewGame from "./index";

//let informationField = document.querySelector(".information");

let playAgainBtn = document.querySelector(".play-again");
playAgainBtn.addEventListener("click", function(){
    startNewGame();
});



function startGame(){
    //informationField.innerHTML = ``;
    //informationField.style = `animation: none;`;
    if (isItOver()){
        ;
    } else {
    let secondBoard = document.querySelector(".second-board");
    let fields = secondBoard.childNodes;
        for (let i = 0; i < 100; i++){
            fields[i].addEventListener("click", playerFire);
        }
    }
}

// function delay(time) {
//     return new Promise(resolve => setTimeout(resolve, time));
// }
  

function isItOver(){
    let modal = document.querySelector(".modal-win");
    let modalContent = document.querySelector(".winning")
    let playAgainBtn = document.querySelector(".win-btn");
    
    if (myShips[0].life === 0 &&
        myShips[1].life === 0 &&
        myShips[2].life === 0 && 
        myShips[3].life === 0 &&
        myShips[4].life === 0){

            let secondBoard = document.querySelector(".second-board");
            let fields = secondBoard.childNodes;
            for (let i = 0; i < 100; i++){
                fields[i].removeEventListener("click", playerFire);
            }

            modal.style.display = "block";
            modalContent.innerHTML = "Computer WON!";
            playAgainBtn.addEventListener("click", function(){
                modal.style.display = "none";
                startNewGame();
            });            
        }
    if (enemyShips[0].life === 0 &&
        enemyShips[1].life === 0 &&
        enemyShips[2].life === 0 &&
        enemyShips[3].life === 0 &&
        enemyShips[4].life === 0){

            let secondBoard = document.querySelector(".second-board");
            let fields = secondBoard.childNodes;
            for (let i = 0; i < 100; i++){
                fields[i].removeEventListener("click", playerFire);
            }

            modal.style.display = "block";
            modalContent.innerHTML = "You WON!";
            playAgainBtn.addEventListener("click", function(){
                modal.style.display = "none";
                startNewGame();
            });
        }
    return 0;
}

function playerFire(){
    if (isItOver()){
        ;
    } else {
    // informationField.innerHTML = ``;
    // informationField.style = `animation: none;`;
    if (this.className === "enemy-empty-field"){
        this.className = "missed-field";
        this.innerText = "•";
        // informationField.innerHTML = `PLAYER MISSED !`;
        // informationField.style = `animation: typewriter 2s steps(44) 1s 1 normal both;`;
        // delay(1000).then(() => enemyFire());
        enemyFire();
    } else
    if (this.className === "enemy-taken-by-carrier"){
        this.className = "enemy-carrier-hit";
        this.innerText = "×";
        enemyShips[0].life--;
        if (enemyShips[0].life === 0){
            let secondBoard = document.querySelector(".second-board");
            let fields = secondBoard.childNodes;
            for (let i = 0; i < 100; i++){
                if (fields[i].className === "enemy-carrier-hit"){
                    fields[i].className = "enemy-carrier-sunk";
                }
            }
        }
        enemyFire();
        // if (enemyShips[0].life === 0){
        //     informationField.innerHTML = `HIT ! COMPUTER'S CARRIER SUNK !`;
        //     informationField.style = `animation: typewriter 2s steps(44) 1s 1 normal both;`;
        //     delay(1000).then(() => enemyFire());
        // } else {
        //     informationField.innerHTML = `HIT !`;
        //     informationField.style = `animation: typewriter 2s steps(44) 1s 1 normal both;`;
        //     delay(1000).then(() => enemyFire());
        // }
    } else
    if (this.className === "enemy-taken-by-battleship"){
        this.className = "enemy-battleship-hit";
        this.innerText = "×";
        enemyShips[1].life--;
        if (enemyShips[1].life === 0){
            let secondBoard = document.querySelector(".second-board");
            let fields = secondBoard.childNodes;
            for (let i = 0; i < 100; i++){
                if (fields[i].className === "enemy-battleship-hit"){
                    fields[i].className = "enemy-battleship-sunk";
                }
            }
        }
        enemyFire();
        // if (enemyShips[1].life === 0){
        //     informationField.innerHTML = `HIT ! COMPUTER'S BATTLESHIP SUNK !`;
        //     informationField.style = `animation: typewriter 2s steps(44) 1s 1 normal both;`;
        //     delay(1000).then(() => enemyFire());
        // } else {
        //     informationField.innerHTML = `HIT !`;
        //     informationField.style = `animation: typewriter 2s steps(44) 1s 1 normal both;`;
        //     delay(1000).then(() => enemyFire());
        // }
    } else
    if (this.className === "enemy-taken-by-cruiser"){
        this.className = "enemy-cruiser-hit";
        this.innerText = "×";
        enemyShips[2].life--;
        if (enemyShips[2].life === 0){
            let secondBoard = document.querySelector(".second-board");
            let fields = secondBoard.childNodes;
            for (let i = 0; i < 100; i++){
                if (fields[i].className === "enemy-cruiser-hit"){
                    fields[i].className = "enemy-cruiser-sunk";
                }
            }
        }
        enemyFire();
        // if (enemyShips[2].life === 0){
        //     informationField.innerHTML = `HIT ! COMPUTER'S CRUISER SUNK !`;
        //     informationField.style = `animation: typewriter 2s steps(44) 1s 1 normal both;`;
        //     delay(1000).then(() => enemyFire());
        // } else {
        //     informationField.innerHTML = `HIT !`;
        //     informationField.style = `animation: typewriter 2s steps(44) 1s 1 normal both;`;
        //     delay(1000).then(() => enemyFire());
        // }
    } else
    if (this.className === "enemy-taken-by-submarine"){
        this.className = "enemy-submarine-hit";
        this.innerText = "×";
        enemyShips[3].life--;
        if (enemyShips[3].life === 0){
            let secondBoard = document.querySelector(".second-board");
            let fields = secondBoard.childNodes;
            for (let i = 0; i < 100; i++){
                if (fields[i].className === "enemy-submarine-hit"){
                    fields[i].className = "enemy-submarine-sunk";
                }
            }
        }
        enemyFire();
        // if (enemyShips[3].life === 0){
        //     informationField.innerHTML = `HIT ! COMPUTER'S SUBMARINE SUNK !`;
        //     informationField.style = `animation: typewriter 2s steps(44) 1s 1 normal both;`;
        //     delay(1000).then(() => enemyFire());
        // } else {
        //     informationField.innerHTML = `HIT !`;
        //     informationField.style = `animation: typewriter 2s steps(44) 1s 1 normal both;`;
        //     delay(1000).then(() => enemyFire());
        // }
    } else
    if (this.className === "enemy-taken-by-destroyer"){
        this.className = "enemy-destroyer-hit";
        this.innerText = "×";
        enemyShips[4].life--;
        if (enemyShips[4].life === 0){
            let secondBoard = document.querySelector(".second-board");
            let fields = secondBoard.childNodes;
            for (let i = 0; i < 100; i++){
                if (fields[i].className === "enemy-destroyer-hit"){
                    fields[i].className = "enemy-destroyer-sunk";
                }
            }
        }
        enemyFire();
        // if (enemyShips[4].life === 0){
        //     informationField.innerHTML = `HIT ! COMPUTER'S DESTROYER SUNK !`;
        //     informationField.style = `animation: typewriter 2s steps(44) 1s 1 normal both;`;
        //     delay(1000).then(() => enemyFire());
        // } else {
        //     informationField.innerHTML = `HIT !`;
        //     informationField.style = `animation: typewriter 2s steps(44) 1s 1 normal both;`;
        //     delay(1000).then(() => enemyFire());
        // }
    } else {
        startGame();
    }
    }
    
}

function enemyFire(){
    if (isItOver()){
        
    } else {
    // informationField.innerHTML = ``;
    // informationField.style = `animation: none;`;
    let rand = Math.floor(Math.random() * 100);
    if (document.getElementById(`myBoard-${rand}`).className === "empty-field"){
        document.getElementById(`myBoard-${rand}`).className = "missed-field";
        document.getElementById(`myBoard-${rand}`).innerText = "•";

        // informationField.innerHTML = `COMPUTER MISSED !`;
        // informationField.style = `animation: typewriter 2s steps(44) 1s 1 normal both;`;
        // delay(1000).then(() => startGame());
        startGame();
    } else
    if (document.getElementById(`myBoard-${rand}`).className === "taken-by-carrier"){
        document.getElementById(`myBoard-${rand}`).className = "carrier-hit";
        document.getElementById(`myBoard-${rand}`).innerText = "×";
        myShips[0].life--;
        startGame();
        // if (myShips[0].life === 0){
        //     informationField.innerHTML = `COMPUTER HIT ! PLAYER'S CARRIER SUNK !`;
        //     informationField.style = `animation: typewriter 2s steps(44) 1s 1 normal both;`;
        //     delay(1000).then(() => startGame());
        // } else {
        //     informationField.innerHTML = `COMPUTER HIT !`;
        //     informationField.style = `animation: typewriter 2s steps(44) 1s 1 normal both;`;
        //     delay(1000).then(() => startGame());
        // }
    } else
    if (document.getElementById(`myBoard-${rand}`).className === "taken-by-battleship"){
        document.getElementById(`myBoard-${rand}`).className = "battleship-hit";
        document.getElementById(`myBoard-${rand}`).innerText = "×";
        myShips[1].life--;
        startGame();
        // if (myShips[1].life === 0){
        //     informationField.innerHTML = `COMPUTER HIT ! PLAYER'S BATTLESHIP SUNK !`;
        //     informationField.style = `animation: typewriter 2s steps(44) 1s 1 normal both;`;
        //     delay(1000).then(() => startGame());
        // } else {
        //     informationField.innerHTML = `COMPUTER HIT !`;
        //     informationField.style = `animation: typewriter 2s steps(44) 1s 1 normal both;`;
        //     delay(1000).then(() => startGame());
        // }
    } else
    if (document.getElementById(`myBoard-${rand}`).className === "taken-by-cruiser"){
        document.getElementById(`myBoard-${rand}`).className = "cruiser-hit";
        document.getElementById(`myBoard-${rand}`).innerText = "×";
        myShips[2].life--;
        startGame();
        // if (myShips[2].life === 0){
        //     informationField.innerHTML = `COMPUTER HIT ! PLAYER'S CRUISER SUNK !`;
        //     informationField.style = `animation: typewriter 2s steps(44) 1s 1 normal both;`;
        //     delay(1000).then(() => startGame());
        // } else {
        //     informationField.innerHTML = `COMPUTER HIT !`;
        //     informationField.style = `animation: typewriter 2s steps(44) 1s 1 normal both;`;
        //     delay(1000).then(() => startGame());
        // }
    } else 
    if (document.getElementById(`myBoard-${rand}`).className === "taken-by-submarine"){
        document.getElementById(`myBoard-${rand}`).className = "submarine-hit";
        document.getElementById(`myBoard-${rand}`).innerText = "×";
        myShips[3].life--;
        startGame();
        // if (myShips[3].life === 0){
        //     informationField.innerHTML = `COMPUTER HIT ! PLAYER'S SUBMARINE SUNK !`;
        //     informationField.style = `animation: typewriter 2s steps(44) 1s 1 normal both;`;
        //     delay(1000).then(() => startGame());
        // } else {
        //     informationField.innerHTML = `COMPUTER HIT !`;
        //     informationField.style = `animation: typewriter 2s steps(44) 1s 1 normal both;`;
        //     delay(1000).then(() => startGame());
        // }
    } else
    if (document.getElementById(`myBoard-${rand}`).className === "taken-by-destroyer"){
        document.getElementById(`myBoard-${rand}`).className = "destroyer-hit";
        document.getElementById(`myBoard-${rand}`).innerText = "×";
        myShips[4].life--;
        startGame();
        // if (myShips[4].life === 0){
        //     informationField.innerHTML = `COMPUTER HIT ! PLAYER'S DESTROYER SUNK !`;
        //     informationField.style = `animation: typewriter 2s steps(44) 1s 1 normal both;`;
        //     delay(1000).then(() => startGame());
        // } else {
        //     informationField.innerHTML = `COMPUTER HIT !`;
        //     informationField.style = `animation: typewriter 2s steps(44) 1s 1 normal both;`;
        //     delay(1000).then(() => startGame());
        // }
    } else {
        enemyFire();
    }
    }
    
}

export default startGame;