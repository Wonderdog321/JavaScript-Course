/*var firstName = 'Robert';
var lastName = 'Young';
console.log(firstName + ' ' + lastName);
var age = 22;

var fullAge = false;
console.log(fullAge);

var job = 'Wood-mizer';
console.log(job);
//--------------Type Coerction and Variable Mutation--------------
//Type Coerction converts the type of variable to make it compatible, javascript does this automatically.

//Variable Mutation - You just change the variable type. EX:
var age = 28; //First an interager
age = 'twenty eight';//now a string

//Typeof Operator - Check what variable it is.

//-----------------Operator precedence----------------------
//Multiple Operators
var now = 2018;
var birthYear = 1996;
var fullAge = 18;
var isFullAge = now - birthYear >= fullAge;
console.log(isFullAge);
//Grouping
var ageJohn = now - birthYear;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);
//Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; //Starts from right to left
console.log(x, y); //(26, 26)
//Check out the resource page for operator order
//Coding Challenge 1
var markMass, markHeight, johnMass, johnHeight, markBMI, johnBMI;
markHeight = 1.69;
markMass = 78;
markBMI = markMass / (markHeight * markHeight);
johnHeight = 1.95;
johnMass = 92;
johnBMI = johnMass / (johnHeight * johnHeight);
console.log('Is Mark\'s BMI higher than John\'s BMI?: ' + (markBMI > johnBMI));

//Ternary Operator and Switch Statements
var firstName, age;
firstName = 'John';
age = 22;
//Ternary Operator has three parts
age >= 18 ? console.log(firstName + ' drinks beer.')
    : console.log(firstName + ' drinks juice.');
var drink = age >= 18 ? 'beer' : 'juice'; //Assigns true or false if john is older than 18;
console.log(drink);
//---------------If/Else equilvant
if(age >= 18){
    var drink = 'beer';
}else{
    var drink = 'juice';
}
//Switch Statment
var job = 'designer'
switch(job){
    case 'teacher':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber.');
        break;
    case 'designer':
        console.log(firstName + ' designs Web sites professionally.');
        break;
    default:
        console.log(firstName + ' does something else.');
}

//Truthy and Falsy Values and equality operators
//Falsy values are: undefined, null, 0, '', NaN(Not a number)
//Truthy values: NOT falsy values
//The == Operator does type coerction, so if you want to check an number and a string are the same to use that otherwise use the === Operator which is strict.
var height;
height || height === 0 ? console.log('Variable is defined') : console.log('Variable is not defined.');
//----------------Coding Challenge 2 ------------------
var john, mike, mary;
john = (89 + 128 + 183)/3;
mike = (116 + 94 + 123)/3;
mary = (97 + 134 + 185)/3;
if(john > mike && john > mary){
    console.log('John has the highest average at: ' + john);
}else if(mike > john && mike > mary){
    console.log('Mike has the highest average at: ' + mike);
}else if(mary > mike && mary > john){
    console.log('Mary has the highest average at: ' + mary);
}else{
    console.log('It\'s a draw!');
}
//-------------Functions!!-------------------
function calculateAge(birthYear){
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1996);
var ageSuzzy = calculateAge(1950);
console.log(ageJohn + " " + ageMike + " " + ageSuzzy);

//-------------Function statements and expressions

//----------function declaration - Does not produce imediate results.
function whatDoYouDooo (job, firstName){}
//-------------function expression - Expression: peaces of code that always produce a value. Statements: Just perform actions (Ex: Whilte loop, etc).
var whatDoYouDo = function(job, firstName){
    switch(job){
        case 'teacher':
            return firstName + ' teaches kids how to code.';
        case 'driver':
            return firstName + ' drives people home.';
        case 'designer':
            return firstName + ' designs websites.';
        default:
            return firstName + ' does something else.';
    }
}
console.log(whatDoYouDo('designer', 'Robert'));
console.log(whatDoYouDo('driver', 'Robert'));
console.log(whatDoYouDo('retired', 'Robert'));

//----------------------Arrays----------------
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[0] + ' ' + years[0]);

names[1] = 'Ben';
names[names.length] = 'Mary'; //Will be the last array
console.log(names);

var john = ['John', 'Smith', 1990, 'teacher', false];
john.push['blue']; //Adds element to end of the array (Push is a method)
console.log(john);
john.unshift('Mr.'); //Adds to first element
john.pop(); //Removes last element
john.shift(); // Removes first element
console.log(john.indexOf(1990)); //Find what part in the array -1 means it's not in the array

//---------------Coding challenge 2---------------
var johnBill = [124, 48, 268];
var johnNewBill = [];

function calcTip(bill, newBill){
    var x = 0;
    while(x < bill.length){
        if(bill[x] <= 50){
            newBill[x] = (bill[x] * .20) + bill[x];
        }else if(bill[x] > 50 && bill[x] < 200){
            newBill[x] = (bill[x] * .15) + bill[x];
        }else{
            newBill[x] = (bill[x] * .10) + bill[x];
        }
        x++;
    }
    return newBill;
}
calcTip(johnBill, johnNewBill);
console.log(johnNewBill);

//----------Objects and properties--------
// Just like arrays have [] Objects use {}'s
//Object literal
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};
console.log(john);
console.log(john.firstName);//Use dot notation to call stuff in object
console.log(john['lastName']); //Looks for variable can call this way too.
//New Object syntax
var jane = new Object();
jane.name = 'Jane'
jane.birthYear = 1960;
jane['lastName'] = 'Smith';

//-------------Methods (They're objects with functions in them)---------
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    //Method of John
    calcAge: function(){
        //Uses the birthYear inside the object.
        this.age = 2019 - this.birthYear;
    }
};
john.calcAge();
console.log(john);

//------------------------Coding Challenge 3-------------
var john = {
    fullName: 'John Smith',
    mass: 90,
    height: 1.56,
    BMI: function(){
        return this.mass / (this.height * this.height);
    }
}
var mark = {
    fullName: 'Mark Millar',
    mass: 100,
    height: .6,
    BMI: function(){
        return this.mass / (this.height * this.height);
    }
}
if(john.BMI() > mark.BMI()){
    console.log(john.fullName + ' has the higher BMI: ' + john.BMI());
}else if(mark.BMI() > john.BMI()){
    console.log(mark.fullName + ' has the higher BMI: ' + mark.BMI());
}else{
    console.log('it\'s a draw!');
}

//--------------------Loops and iteration------------------
//For loop
for(var x = 1; x <= 10; x++){
    console.log(x);
}
//While loop
var i = 0;
while(i < 10){
    console.log(i);
    i++;
}

//Continue and break statements
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for(var i = 0; i < john.length; i++){
    if(typeof john[i] !== 'string') continue; //Checks if its not a string value
    console.log(john[i]);   
}
for(var i = 0; i < john.length; i++){
    if(typeof john[i] !== 'string') break; //Breaks after no string value
    console.log(john[i]);   
}
//Starting from the end -- Semi Coding Challenge
for(var i = john.length - 1; i >=  0; i--){
    console.log(john[i]);
}
*/
//------------------Coding Challenge 4 -----------------
var john = {
    bill: [124, 48, 268, 180, 42],
    tip: [],
    finalBill: [],
    calcTip: function (){
        for(var i = 0; i < this.bill.length; i++){
            if(this.bill[i] < 50){
                this.tip[i] = this.bill[i] * .20;
            }else if(this.bill[i] >= 50 && this.bill[i] < 200){
                this.tip[i] = this.bill[i] * .15;
            }else{
                this.tip[i] = this.bill[i] * .10;
            }
            this.finalBill[i] = this.bill[i] + this.tip[i];
        }
    }
}
john.calcTip();
//Just got done changing the tip values
var mark = {
    bill: [77, 375, 110, 45],
    tip: [],
    finalBill: [],
    calcTip: function (){
        for(var i = 0; i < this.bill.length; i++){
            if(this.bill[i] < 100){
                this.tip[i] = this.bill[i] * .20;
            }else if(this.bill[i] >= 100 && this.bill[i] <= 300){
                this.tip[i] = this.bill[i] * .10;
            }else{
                this.tip[i] = this.bill[i] * .25;
            }
            this.finalBill[i] = this.bill[i] + this.tip[i];
        }
    }
}
mark.calcTip();
function average(tips){
    var averageTip = 0;
    for(var i = 0; i < tips.length; i++){
        averageTip += tips[i];
    }
    averageTip = averageTip / tips.length;
    return averageTip;
}
if(average(john.tip) > average(mark.tip)){
    console.log('John\'s family has the highest tips on average: ' + average(john.tip));
}else{
    console.log('Mark\'s family has the highest tips on average: ' + average(mark.tip));
}