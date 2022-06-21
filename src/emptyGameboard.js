function emptyGameboard(){
    //make a new board
    let arr = [...Array(10)].map(e => Array(10).fill("0"));
    return arr;
}

module.exports = emptyGameboard;