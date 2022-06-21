function displayBoard(arr){
    const firstBoard = document.querySelector(".first-board");
    firstBoard.innerHTML = "";


    for (let i = 0; i < 10; i++){
        for (let j = 0; j < 10; j++){
            let temp = document.createElement("div");
            if (arr[i][j] === "0"){ 
                temp.className = "empty-field";    
            } else if (arr[i][j] == 1){  
                temp.className = "taken-by-carrier";   
            } else if (arr[i][j] == 2){   
                temp.className = "taken-by-battleship";   
            } else if (arr[i][j] == 3){    
                temp.className = "taken-by-cruiser";   
            } else if (arr[i][j] == 4){    
                temp.className = "taken-by-submarine";   
            } else if (arr[i][j] == 5){    
                temp.className = "taken-by-destroyer";
            }
            temp.id = `myBoard-${i * 10 + j}`
            firstBoard.appendChild(temp);
        }
    }
}

export default displayBoard;