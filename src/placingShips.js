import {Ships} from "./shipFactory";
import { myShips } from "./shipFactory";
import startGame from "./startGame";

export let j = 0;

function placingShips(myBoard){
    
    let firstBoard = document.querySelector(".first-board");
    let fields = firstBoard.childNodes;

    for (let i = 0; i < 100; i++){
        
        fields[i].addEventListener("mouseover", hoverShips);
        //fields[i].removeEventListener("mouseover", hoverShips);
        fields[i].addEventListener("mouseleave", unhoverShips);
        //fields[i].removeEventListener("mouseout", unhoverShips);
    }

    for (let i = 0; i < 100; i++){
        //fields[i].addEventListener("click", checkField);
        

    }

    myShips.forEach(element => {
        (function(element){
            element.direction = "X";

        const directionBtn = document.querySelector(".direction-btn");
        directionBtn.addEventListener("click", function(){
            if (element.direction == "X"){
                element.direction = "Y";
            } else element.direction = "X";
        }); 
        })(element)
    });
}

function checkField(){
    if (temp.className !== "empty-field" || temp.className !== "hovered-field"){
        if (j < 5 && shipPlacement(this, j)){
            j++;
        }
        if (j == 5){ 
            let firstBoardTemp = document.querySelector(".first-board");
            let fieldsTemp = firstBoardTemp.childNodes;
            for (let k = 0; k < 100; k++){
                fieldsTemp[k].removeEventListener("click", checkField);
            } 
            startGame();
        return true;     
        }
        
    } else {
        //alert("this field is already taken!");
    }
}

function hoverShips(){
    console.log("!!!" + j);
    let tempId = this.id.slice(8, );
    let tempIdInt = parseInt(tempId);
    let tempIdInt2 = tempIdInt;
    
    if (myShips[j].direction == "X"){
    
        if (tempId < 10) {
            if ((myShips[j].length + tempIdInt) > 10){
                return false;
            } else {
                for (let i = 0; i < myShips[j].length; i++){
                    let temp = document.getElementById(`myBoard-${tempIdInt2}`);
                    if (temp.className !== "empty-field"){
                        return false;
                    }
                    tempIdInt2++;
                }
//hover
                for (let i = 0; i < myShips[j].length; i++){ 
                    let temp = document.getElementById(`myBoard-${tempIdInt}`);
                    temp.className = `hovered-field`;
                    tempIdInt ++;
                }
                this.addEventListener("click", placeShip);
            }
        } else {
            //make coordinates
            let first = parseInt(tempId[0]);
            let second = parseInt(tempId[1]);
            let secondTemp = second + first * 10;
            let secondTemp2 = secondTemp;
            if ((myShips[j].length + second) > 10){
                return false;
            } else {
                for (let i = 0; i < myShips[j].length; i++){
                    let temp = document.getElementById(`myBoard-${secondTemp2}`);
                    if (temp.className !== "empty-field"){
                        return false;
                    }
                    secondTemp2++;
                }
//hover
                for (let i = 0; i < myShips[j].length; i++){
                    let temp = document.getElementById(`myBoard-${secondTemp}`);
                    temp.className = `hovered-field`;
                    secondTemp ++;
                }
                this.addEventListener("click", placeShip);
            }
        }
    } else if (myShips[j].direction == "Y"){
        if (tempId < 10) {
            let first = 0;
            let first2 = first;
            let second = parseInt(tempId);
            let secondTemp = second + first * 10;
            let secondTemp2 = secondTemp;

            for (let i = 0; i < myShips[j].length; i++){
                let temp = document.getElementById(`myBoard-${secondTemp2}`);
                if (temp.className !== "empty-field"){
                    return false;
                }
                first2 ++;
                secondTemp2 = first2 * 10 + second;
            }
//hover
            for (let i = 0; i < myShips[j].length; i++){
                let temp = document.getElementById(`myBoard-${secondTemp}`);
                temp.className = `hovered-field`;
                first ++;
                secondTemp = first * 10 + second;
            }
            this.addEventListener("click", placeShip);

        } else {
            let first = parseInt(tempId[0]);
            let first2 = first;
            let second = parseInt(tempId[1]);

            let secondTemp = first * 10 + second;
            let secondTemp2 = secondTemp;

            if ((myShips[j].length + first) > 10){
                return false;
            } else {
                for (let i = 0; i < myShips[j].length; i++){
                    let temp = document.getElementById(`myBoard-${secondTemp2}`);
                    if (temp.className !== "empty-field"){
                        return false;
                    }
                    first2 ++;
                    secondTemp2 = first2 * 10 + second;
                }
//hover
                for (let i = 0; i < myShips[j].length; i++){
                    let temp = document.getElementById(`myBoard-${secondTemp}`);
                    temp.className = `hovered-field`;
                    first ++;
                    secondTemp = first * 10 + second;
                }
                this.addEventListener("click", placeShip);
            }
        }

    }
    


    return true;  

}

function placeShip(){
    
    if (j < 5 && shipPlacement(this, j)){
        j++;
    }
    if (j == 5){ 
        let firstBoardTemp = document.querySelector(".first-board");
        let fieldsTemp = firstBoardTemp.childNodes;
        for (let k = 0; k < 100; k++){
            fieldsTemp[k].removeEventListener("click", checkField);
        } 
        startGame();
    return true;     
    }

}

function unhoverShips(){
    
    let firstBoard = document.querySelector(".first-board");
    let fields = firstBoard.childNodes;
    
    for (let i = 0; i < 100; i++){
        if (fields[i].className === "hovered-field"){
            fields[i].className = "empty-field";
        }
    }
}

function shipPlacement(tile, key){
    //length
    //direction
    
    let tempId = tile.id.slice(8, );
    console.log("???" + tempId);
    let tempIdInt = parseInt(tempId);
    let tempIdInt2 = tempIdInt;
    
    if (myShips[key].direction == "X"){
    
        if (tempId < 10) {
            // console.log(length + tempIdInt);
            if ((myShips[key].length + tempIdInt) > 10){
                //alert("You can not place your boat here!");
                return false;
            } else {
                for (let i = 0; i < myShips[key].length; i++){
                    let temp = document.getElementById(`myBoard-${tempIdInt2}`);
                    if (temp.className !== "hovered-field"){
                        //alert("your boat wont fit... choose another field!");
                        return false;
                    }
                    tempIdInt2++;
                }
                for (let i = 0; i < myShips[key].length; i++){ 
                    let temp = document.getElementById(`myBoard-${tempIdInt}`);
                    temp.className = `taken-by-${myShips[key].name}`;
                    tempIdInt ++;
                }
            }
        } else {
            //make coordinates
            let first = parseInt(tempId[0]);
            let second = parseInt(tempId[1]);
            let secondTemp = second + first * 10;
            let secondTemp2 = secondTemp;
            if ((myShips[key].length + second) > 10){
                //alert("You can not place your boat here!");
                return false;
            } else {
                for (let i = 0; i < myShips[key].length; i++){
                    let temp = document.getElementById(`myBoard-${secondTemp2}`);
                    if (temp.className !== "hovered-field"){
                        //alert("your boat wont fit... choose another field!");
                        return false;
                    }
                    secondTemp2++;
                }

                for (let i = 0; i < myShips[key].length; i++){
                    let temp = document.getElementById(`myBoard-${secondTemp}`);
                    temp.className = `taken-by-${myShips[key].name}`;
                    secondTemp ++;
                }
            }
        }
    } else if (myShips[key].direction == "Y"){
        if (tempId < 10) {
            let first = 0;
            let first2 = first;
            let second = parseInt(tempId);
            let secondTemp = second + first * 10;
            let secondTemp2 = secondTemp;

            for (let i = 0; i < myShips[key].length; i++){
                let temp = document.getElementById(`myBoard-${secondTemp2}`);
                if (temp.className !== "hovered-field"){
                    //alert("your boat wont fit... choose another field!");
                    return false;
                }
                first2 ++;
                secondTemp2 = first2 * 10 + second;
            }

            for (let i = 0; i < myShips[key].length; i++){
                let temp = document.getElementById(`myBoard-${secondTemp}`);
                temp.className = `taken-by-${myShips[key].name}`;
                first ++;
                secondTemp = first * 10 + second;
            }

        } else {
            let first = parseInt(tempId[0]);
            let first2 = first;
            let second = parseInt(tempId[1]);

            let secondTemp = first * 10 + second;
            let secondTemp2 = secondTemp;

            if ((myShips[key].length + first) > 10){
                //alert("You can not place your boat here!");
                return false;
            } else {
                for (let i = 0; i < myShips[key].length; i++){
                    let temp = document.getElementById(`myBoard-${secondTemp2}`);
                    if (temp.className !== "hovered-field"){
                        //alert("your boat wont fit... choose another field!");
                        return false;
                    }
                    first2 ++;
                    secondTemp2 = first2 * 10 + second;
                }

                for (let i = 0; i < myShips[key].length; i++){
                    let temp = document.getElementById(`myBoard-${secondTemp}`);
                    temp.className = `taken-by-${myShips[key].name}`;
                    first ++;
                    secondTemp = first * 10 + second;
                }
            }
        }

    }
    return true;  
}

export default placingShips;