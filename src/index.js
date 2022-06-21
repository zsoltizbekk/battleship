import _ from 'lodash';
import './style.css';

import {shipFactory} from "./shipFactory";
import gameboard from "./gameboard";
import emptyGameboard from "./emptyGameboard";
import placingShips from "./placingShips";
import displayBoard from "./displayBoard";
import displayEnemyBoard from "./displayEnemyBoard";
import placingEnemyShips from "./placingEnemyShips";
import startGame from './startGame';
import {j} from "./placingShips";


import githubImg from '../src/assets/github.png';
const foot = document.querySelector(".footer");
foot.innerHTML =    `<p>Copyright © 2022 zsoltizbekk</p>
                    <a href="https://github.com/zsoltizbekk" target="_blank"><img class="footer-img" src="${githubImg}" alt="github" width="35px" height="30px"></a>`

startNewGame();

function startNewGame(){
    j = 0;
    let firstBoard = document.querySelector(".first-board");
    let secondBoard = document.querySelector(".second-board");

    firstBoard.innerHTML = "";
    secondBoard.innerHTML = "";

    let myBoard = emptyGameboard();
    let enemyBoard = emptyGameboard();
    //display this arr
    displayBoard(myBoard);
    displayEnemyBoard(enemyBoard);
    //create default ships
    shipFactory();
    placingEnemyShips(enemyBoard);

    //placing the ships

    if (placingShips(myBoard)){
        startGame();
    }
}

export default startNewGame;
