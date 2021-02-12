"use strict";
let age = 50;
let club = 'Real Madrid';
const isFamous = true;
let Famous;
//function
function add(num1, num2) {
    return num1 + num2;
}
add(3, 76);
add('adam', 'sand');
add(3, "sand");
function add(num1, num2) {
    return num1 + num2;
}
add(3, 76);
add('adam', 'sand');
add(3, "sand");
function fullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
const user = fullName('martin', 'rock');
function doubleItAndConsole(num) {
    const result = num * 2;
    console.log(result);
}
const outPut = doubleItAndConsole(10);
console.log('outPut', outPut);
const multiply = (x, y) => x * y;
console.log(multiply(25, 6));
let multiply2;
multiply2 = (x, y) => x * y;
//Array
const numbers = [2, 3, 4, 8, 12, 91, 34];
numbers.push(22);
const friends = ['george', 'jeff', 'bill', 'abdul'];
let megaName = '';
for (let i = 0; i < friends.length; i++) {
    const friend = friends[i];
    if (friend.length > megaName.length) {
        megaName = friend;
    }
}
console.log('Friend with the largest name', megaName);
//object
let player;
player = {
    club: 'real madrid',
    salary: 454000,
};
//or
let player = {
    club: 'real madrid',
    salary: 454000,
};
const messay = {
    club: 'real madrid',
    name: 'messay',
    salary: 450000,
    wife: 'some name',
    isPlaying: true
};
const Ronaldo = {
    club: 'livepool',
    name: 'Ronaldo',
    salary: 510000,
    isPlaying: true
};
function getBonus(player) {
    return player.age * 0.1;
}
const poorPlayer = { age: 50, salary: 1000 };
getBonus(poorPlayer);
function getBonus(player) {
    return player.age * 0.1;
}
const poorPlayer = { age: 50, salary: 1000 };
getBonus(Ronaldo);
//class
class Person {
    constructor(name, father) {
        this.name = name;
        this._partner = name;
        this.fatherName = father;
    }
    getName() {
        return this.name + '' + this._partner;
    }
}
const sam = new Person('samuel', 'david');
console.log('name', sam.name, sam.fatherName);
const samName = sam.getName();
