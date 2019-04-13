/*
//----------------------------Blocks and IIFE's------------------------------
//The {}'s create a block
{
    const a = 1;
    let b = 2;
    var c = 3;
}
//Won't work cause it's not excessable outside the block
console.log(a + b);
console.log(c);

//ES5 IIFE - Old way took a lot more work
(function (){
    var c = 3;
})();
//---------------Strings in ES6---------------------------
let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1996;
function calcAge(year){
    return 2016 - year;
}
//ES5
console.log('This is ' + firstName + lastName + ' Born  ' + calcAge(yearOfBirth) + ' years ago.');
//ES6 Template Literals (we use back ticks ``) and ${} to use an variable
console.log(`This is ${firstName} ${lastName}. Born ${calcAge(yearOfBirth)} years ago.`);
const n = `${firstName} ${lastName}`
console.log(n.startsWith('j'));
console.log(n.endsWith('Sm'));
console.log(n.includes('oh'));
console.log(`{firstName} `.repeat(5));

//--------------------------Arrow functions-------------------------------

const years = [1990, 1965, 1982, 1937];

//ES5
var ages5 = years.map(function(element){
    return 2019 - element;
});
console.log(ages5);
//ES6
let ages6 = years.map(element => 2019 - element);
console.log(ages6);
let ages6 = years.map((element, index) => `Age element ${index + 1}: ${2019-element}.`);
console.log(ages6);
let age6 = years.map((el, index) => {
   const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}.`;
});
//------------more on arrow functions
//ES5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function(){
        var self = this;
        document.querySelector('.green').addEventListener('click', function(){
        //Dont have access to the object variable because it's not a method but a normal function
           var str = 'This is box number ' + self.position + ' and it is ' + self.color;
            alert(str);
        });
    }
}
box5.clickMe();
//ES6
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function(){
        //The arrow function allows us to use the this keyword
        document.querySelector('.green').addEventListener('click', () => {
            var str = `This is box number ${this.position} and it is ${this.color}`;
            alert(str);
        });
    }
}
box6.clickMe();
const box66 = {
    color: 'green',
    position: 1,
    //shares the global this keyword
    clickMe: () => {
        document.querySelector('.green').addEventListener('click', () => {
            var str = `This is box number ${this.position} and it is ${this.color}`;
            alert(str);
        });
    }
}
box66.clickMe();

function Person(name){
    this.name = name;
}
//ES5
Person.prototype.myFriends5 = function(friends){
    var arr = friends.map(function(el){
       return this.name + ' is friends with ' + el; 
    }.bind(this));
    console.log(arr);
};
var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);
//ES6
Person.prototype.myFriends6 = function(friends){
    var arr = friends.map(el => `${this.name} is friends with ${el}`);
    console.log(arr);
};
new Person('Mike').myFriends6(friends);
//------------------------------Destructuring-----------------
//ES5
var john = ['John', 26];
var name = john[0];
var age = john[1];
//ES6
const [name, age] = ['John', 26];
console.log(name);
console.log(age);

const obj = {
    firstName: 'John',
    lastName: 'Smith'
};
const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);
//Can use different names
const {firstName: a , lastName: b} = obj;
console.log(a);
console.log(b);

function calcAgeRetirement(year){
    const age = new Date().getFullYear() - year;
    return {age, 65 - age};
}
const [age2, retirement] = calcAgeRetirement(1990);
console.log(age2);
console.log(retirement);
//---------------------------Arrays in ES6
const boxes = document.querySelectorAll('.box');
//ES5
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur){
   cur.style.backgroundColor = 'dodgerblue'; 
});
//ES6
const boxesArr6 = Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');

//ES5
for(var i = 0; i < boxesArr5.length; i++){
    if(boxesArr5[i].className === 'box blue'){
       continue;
       }
    boxesArr5[i].textContent = 'I changed to blue!';
}
//ES6
for(const cur of boxedArr6){
    if(cur.className.includes('blue')){
        continue;
    }
    cur.textContent = 'I changed to blue!';
}

//Es5
var ages = [12, 17, 8, 21, 14, 11];
var full = ages.map(function(cur){
   return cur >= 18; 
});
console.log(full.lastIndexOf(true));
console.log(ages[full.indexOf(true)]);
//ES6
console.log(ages.findIndex(cur => cur >= 18);)
console.log(ages.find(cur => cur >= 18));
//-------------------------Spread Operator------------------------------
function addForAges (a, b, c, d){
    return a + b + c + d;
}
var sum1 = addForAges(18, 30, 12, 21);
console.log(sum1);
//ES5
var ages = [18, 30, 12, 21];
//Uses ages to apply them as the four arguements in out function
var sum2 = addForAges.apply(null, ages);
console.log(sum2);
//ES6
//... is the spread operator uses the ages as the arguements
const max3 = addForAges(...ages);
const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];
const bigFamily = [...familySmith, 'Lily' ,...familyMiller];

const h = document.querySelector('h1');
const boxes = document.querySelectorAll(.box);
const all = [h, ...boxes];
Array.from(all).forEach(cur => cur.style.color = 'purple');
//--------------------Rest Parameters---------------------------------------
//ES5
function isFullAge5(){
    var argsArr = Array.prototype.slice.call(arguments);
    argsArr.forEach(function(cur){
        console.log((2019 - cur) >= 18)
    })
}
isFullAge5(1990, 1999, 1990, 1985, 1966);
//ES6
function isFullAge6(...years){
    years.forEach(cur => console.log((2019 - cur) >= 18));
}
isFullAge6(1990, 1999, 2004, 1985, 1966);
//------------Default Parameters-----------------------
function SmithPerson(firstName, yearOfBirth, lastName, nationality){
    //Creates a default parameter in ES5
    lastName === undefined ? lastName = 'Smith' : lastName = lastName;
    nationality === undefined ? lastName = 'American' : nationality = nationality;
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
}
var john = new SmithPerson('John', 1990);
//ES6
//Creates a default parameter
function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'American'){
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
}
var john = new SmithPerson('John', 1990);
//--------------------------------------Maps-------------------------------------
const question = new Map();
question.set('question', 'What is the offical name of the latest major Javascript Version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer!');
question.set(false, 'Wrong, please try again!');

console.log(question.get('question'));
console.log(question.size);
if(question.has(4)){
    question.delete(4);
}
//Clears everything
//question.clear();
question.forEach((value, key) => console.log(`This is ${key}, and it's set to ${value}`));

for(let [key, value] of question.entries()){
    if(typeof(key) === 'number'){
        console.log(`Answer ${key}: ${value}.`);
    }
}
const ans = parseInt(prompt('Write the correct answer'));
console.log(question.get(ans === question.get('correct')));
//---------------------------Classes------------------------------
//ES5
var Person5 = function(name, yearOFBirth, job){
    this.name = name;
    this.yearOfBirth = yearOFBirth;
    this.job = job;
}
Person5.prototype.calculateAge = function (){
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}
var john5 = new Person5('John', 1990, 'teacher');
//ES6
class Person6{
    constructor(name, yearOfBirth, job){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    calculateAge(){
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
}
cosnt john6 = new Person6('John', 1990, 'teacher');
//------------------Classses with subclasses---------------------------
var Person5 = function(name, yearOFBirth, job){
    this.name = name;
    this.yearOfBirth = yearOFBirth;
    this.job = job;
}
Person5.prototype.calculateAge = function (){
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}
var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals){
    Person.call(this, name, yearOfBirth, job);
    this.olympicGames = olypicGames;
    this.medals = medals;
    
}
Athlete5.prototype = Object.create(Person5.prototype);
//Has to be after copying the Person5 object
Athlete5.prototype.wonMedal = function(){
    this.medals++;
    console.log(this.medals);
}
JohnAthelete5.calculateAge();
JohnAthelete5.wonMedal();
var JohnAthelete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);
//ES6
class Person6{
    constructor(name, yearOfBirth, job){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    calculateAge(){
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
}
class Athelete6 extends Person5{
    constructor(name, yearOfBirth, job, olympicGames, medals){
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }
    wonMedal(){
        this.medals++;
        console.log(this.medals);
    }
}
var JohnAthelete6 = new Athlete6('John', 1990, 'swimmer', 3, 10);
JohnAthelete6.wonMedal();
JohnAthelete6.calculateAge();
*/

//---------------------------------------Coding Challenge 8----------------
class Town{
    constructor(name, buildYear){
        this.name = name;
        this.buildYear = buildYear;
    }
}
class Park extends Town{
    constructor(name, buildYear, trees, parkArea){
        super(name, buildYear);
        this.trees = trees;
        this.parkArea = parkArea;
    }
    treeDensity(){
        const density= this.trees/this.parkArea;
        console.log(`${this.name} has a tree density of ${density} trees per square km.`);
    }
}

class Street extends Town{
    constructor(name, buildYear, streetLength, streetSize = 3){
        super(name, buildYear);
        this.streetSize = streetSize;
        this.streetLength = streetLength;
    }
    classifyStreet() {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        console.log(`${this.name}, build in ${this.buildYear}, is a ${classification.get(this.streetSize)}.`);
    }
}

const parks = [new Park('Green Park', 1990, 900, 4),
              new Park('Orange Park', 1985, 600, 80),
              new Park('Blue Park', 1945, 1200, 120)];

const streets = [new Street('Green St.', 1956, 6500, 4),
              new Street('Orange St.', 1995, 4200, 5),
              new Street('Blue St.', 2004, 2000, 2),
              new Street('Purple St.', 1980, 500)];
function calc(arr){
     const sum = arr.reduce((prev, cur, index) => prev + cur, 0);
    return [sum, sum / arr.length];
}
function reportParks(p){
    console.log('-------------Parks Report-------------');
    //Density
    p.forEach(el => el.treeDensity());
    //Average Age
    const ages = p.map(el => new Date().getFullYear() - el.buildYear);
    const [totalAge, avgAge] = calc(ages);
    console.log(`Our ${p.length} parks have an average of ${avgAge} years.`)
    //Which park has more than 1000 trees.
    const i = p.map(el => el.trees).findIndex(el => el >= 1000);
    console.log(`${p[i].name} has at least 1000 trees with ${p[i].trees} trees.`);
}
function reportStreets(s){
    console.log('------------Streets Report------------');
    //Total and average length of the town's streets
    const[totalLength, avgLength] = calc(s.map(el => el.streetLength));
    console.log(`Our ${s.length} streeets have a total length of ${totalLength} km, with an average of ${avgLength} km.`);
    //Classify sizes
    s.forEach(el => el.classifyStreet());
}
reportParks(parks);
reportStreets(streets);