function displayEnemyBoard(arr) {
    const secondBoard = document.querySelector(".second-board");
    secondBoard.innerHTML = "";

    for (let i = 0; i < 10; i++){
        for (let j = 0; j < 10; j++){
            let temp = document.createElement("div");
            if (arr[i][j] === "0"){ 
                temp.className = "enemy-empty-field";    
            } else if (arr[i][j] == 1){  
                temp.className = "enemy-taken-by-carrier";   
            } else if (arr[i][j] == 2){   
                temp.className = "enemy-taken-by-battleship";   
            } else if (arr[i][j] == 3){    
                temp.className = "enemy-taken-by-cruiser";   
            } else if (arr[i][j] == 4){    
                temp.className = "enemy-taken-by-submarine";   
            } else if (arr[i][j] == 5){    
                temp.className = "enemy-taken-by-destroyer";
            }
            temp.id = `enemyBoard-${i * 10 + j}`
            secondBoard.appendChild(temp);
        }
    }

}

export default displayEnemyBoard;