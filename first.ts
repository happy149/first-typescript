let age:number = 50;
let club: string ='Real Madrid';
const isFamous : boolean = true;
let Famous :boolean;

//function

function add(num1:number, num2:number){
    return num1 + num2;
}
add(3,76);
add ('adam','sand');
add ( 3,"sand");

function add(num1:any, num2:number|string){
    return num1 + num2;
}
add(3,76);
add ('adam','sand');
add ( 3,"sand");



function fullName (firstName:string, lastName:string):string{
    return firstName + ' ' + lastName;
}

const user:string = fullName ('martin','rock');



function doubleItAndConsole (num:number):void{
    const result = num*2;
    console.log(result);

}
const outPut = doubleItAndConsole(10);
console.log ('outPut', outPut);


const multiply = (x:number,y:number):number => x*y ;
console.log(multiply(25,6));



let multiply2 : (x:number, y:number) => number;
multiply2 = (x,y) => x*y;



//Array
const numbers : number [] = [2, 3, 4, 8, 12, 91, 34];
numbers.push(22);


const friends : string[] = ['george', 'jeff', 'bill', 'abdul'];
let megaName:string = '';
for (let i = 0; i < friends.length; i++) {
    const friend:string = friends[i];
    if (friend.length > megaName.length){
        megaName = friend;
    }
    
}
console.log('Friend with the largest name',megaName);



//object
let player:{
    club : string,
    salary : number
}

player = {
    club:'real madrid',
    salary : 454000,
}

//or

let player:{
    club : string,
    salary : number
} = {
    club:'real madrid',
    salary : 454000,
}


//interface

interface Player{
    club : string,
    name : string,
    salary : number,
    wife? : string,
    isPlaying : boolean
}

const messay: Player = {
    club :'real madrid',
    name :'messay',
    salary : 450000,
    wife : 'some name',
    isPlaying : true
}
const Ronaldo: Player = {
    club :'livepool',
    name :'Ronaldo',
    salary : 510000,
    isPlaying : true
}

function getBonus(player : {age:number}){
    return player. age * 0.1;
}
const poorPlayer = {age : 50,salary:1000}
getBonus(poorPlayer);



function getBonus(player : Player){
    return player. age * 0.1;
}
const poorPlayer = {age : 50, salary:1000}
getBonus(Ronaldo);



//class
class Person {
    name:string;
    private _partner:string;
    readonly fatherName : string;
    constructor (name : string, father:string){
        this.name = name;
        this._partner = name;
        this.fatherName = father;
    }
    getName ():string{
        return this.name + '' + this._partner;
    }
}

const sam = new Person ('samuel','david')
console.log('name', sam.name, sam.fatherName)
const samName : string = sam .getName ();
