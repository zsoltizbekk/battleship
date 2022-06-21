export class Ships {
    constructor(name, length, direction, coordinate, life){
        this.name = name;
        this.length = length;
        this.direction = direction;
        this.coordinate = coordinate;
        this.life = life;
    }
    asd(){
        return `${this.name}, ${this.length}`;
    }
    hit(){

    };
    isSunk(){

    }
}

export let myShips = [];
export let enemyShips = [];


export function shipFactory(){
    myShips[0] = new Ships("carrier", 5, "-", "-", 5);
    myShips[1] = new Ships("battleship", 4, "-", "-", 4);
    myShips[2] = new Ships("cruiser", 3, "-", "-", 3);
    myShips[3] = new Ships("submarine", 3, "-", "-", 3);
    myShips[4] = new Ships("destroyer", 2, "-", "-", 2);

    enemyShips[0] = new Ships("carrier", 5, "-", "-", 5);
    enemyShips[1] = new Ships("battleship", 4, "-", "-", 4);
    enemyShips[2] = new Ships("cruiser", 3, "-", "-", 3);
    enemyShips[3] = new Ships("submarine", 3, "-", "-", 3);
    enemyShips[4] = new Ships("destroyer", 2, "-", "-", 2);
}
