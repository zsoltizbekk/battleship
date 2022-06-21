import { enemyShips } from "./shipFactory";


function placingEnemyShips(enemyBoard) {
    
    for (let i = 0; i < 5;){
        
        let randomDirection = Math.floor(Math.random() * 2);
        if (randomDirection == 0){
            randomDirection = "X";
        } else randomDirection = "Y";
        enemyShips[i].direction = randomDirection;

        let tempId = Math.floor(Math.random() * 100);
        let tempIdString = toString(tempId);
        let first = parseInt(tempIdString[0]);
        let second = parseInt(tempIdString[1]);
        
        if (enemyShipPlacement(tempId, i)){
            i++;
        } else ;
    }
}

function enemyShipPlacement(tile, key){;
    let tempId = tile;
    let tempIdInt = tile;
    let tempIdInt2 = tempIdInt;
    console.log(tempIdInt);
    console.log(enemyShips[key].length);
    console.log(enemyShips[key].direction);
    
    if (enemyShips[key].direction == "X"){
    
        if (tempId < 10) {
            console.log(length + tempIdInt);
            if ((enemyShips[key].length + tempIdInt) > 10){
                //alert("Ai can not place enemy boat here!");
                return false;
            } else {
                for (let i = 0; i < enemyShips[key].length; i++){
                    let temp = document.getElementById(`enemyBoard-${tempIdInt2}`);
                    if (temp.className !== "enemy-empty-field"){
                        //alert("enemy boat wont fit... generating another field!");
                        return false;
                    }
                    tempIdInt2++;
                }
                for (let i = 0; i < enemyShips[key].length; i++){ 
                    let temp = document.getElementById(`enemyBoard-${tempIdInt}`);
                    temp.className = `enemy-taken-by-${enemyShips[key].name}`;
                    tempIdInt ++;
                }
            }
        } else {
            //make coordinates
            let first = parseInt(tempId/10);
            let second = tempId%10;
            let secondTemp = second + first * 10;
            let secondTemp2 = secondTemp;
            if ((enemyShips[key].length + second) > 10){
                //alert("Ai can not place enemy boat here!");
                return false;
            } else {
                for (let i = 0; i < enemyShips[key].length; i++){
                    let temp = document.getElementById(`enemyBoard-${secondTemp2}`); //error
                    if (temp.className !== "enemy-empty-field"){
                        //alert("enemy boat wont fit... generating another field!");
                        return false;
                    }
                    secondTemp2++;
                }

                for (let i = 0; i < enemyShips[key].length; i++){
                    let temp = document.getElementById(`enemyBoard-${secondTemp}`);
                    temp.className = `enemy-taken-by-${enemyShips[key].name}`;
                    secondTemp ++;
                }
            }
        }
    } else if (enemyShips[key].direction == "Y"){
        if (tempId < 10) {
            let first = parseInt(tempId/10);
            
            let first2 = first;
            let second = tempId%10;
            let secondTemp = second + first * 10;
            let secondTemp2 = secondTemp;

            for (let i = 0; i < enemyShips[key].length; i++){
                let temp = document.getElementById(`enemyBoard-${secondTemp2}`);
                if (temp.className !== "enemy-empty-field"){
                    //alert("enemy boat wont fit... generating another field!");
                    return false;
                }
                first2 ++;
                secondTemp2 = first2 * 10 + second;
            }

            for (let i = 0; i < enemyShips[key].length; i++){
                let temp = document.getElementById(`enemyBoard-${secondTemp}`);
                temp.className = `enemy-taken-by-${enemyShips[key].name}`;
                first ++;
                secondTemp = first * 10 + second;
            }

        } else {
            let first = parseInt(tempId/10);
            
            let first2 = first;
            let second = tempId%10;

            let secondTemp = first * 10 + second;
            let secondTemp2 = secondTemp;

            if ((enemyShips[key].length + first) > 10){
                //alert("Ai can not place enemy boat here!");
                return false;
            } else {
                for (let i = 0; i < enemyShips[key].length; i++){
                    let temp = document.getElementById(`enemyBoard-${secondTemp2}`); //error
                    if (temp.className !== "enemy-empty-field"){
                        //alert("enemy boat wont fit... generating another field!");
                        return false;
                    }
                    first2 ++;
                    secondTemp2 = first2 * 10 + second;
                }

                for (let i = 0; i < enemyShips[key].length; i++){
                    let temp = document.getElementById(`enemyBoard-${secondTemp}`);
                    temp.className = `enemy-taken-by-${enemyShips[key].name}`;
                    first ++;
                    secondTemp = first * 10 + second;
                }
            }
        }

    }
    return true;      
}

export default placingEnemyShips;