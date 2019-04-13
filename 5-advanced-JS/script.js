/*var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'Teacher'
};
//Function Constructor
var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}
Person.prototype.calculateAge = function(){
    console.log(2019 - this.yearOfBirth);
};

Person.prototype.lastname = 'Smith';
//New Operator creates an empty object which makes the this keyword no the window object. Go back to Section Lecturn 61 for a better understanding
var robert = new Person('Robert', 1996, 'Developer');
robert.calculateAge();  //Outputs 23
var jane = new Person('Jane', 1990, 'Web Designer');

//Object.Create - good for complex objects
var personProto = {
    calculateAge: function(){
        console.log(2019 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'Teacher';

var jane = Object.create(personProto, {
    name: {value: 'Jane'},
    yearOfBirth: {value: 1959},
    job: {value: 'designer'}
});

//Primitives vs Objects
//Primitives
var a = 23;
var b = a;
a = 46;

console.log('A: ' + a + ', B: ' + b);
//Objects
var obj1 = {
    name: 'John',
    age: 26
};
var obj2 = obj1;
obj2.age = 30; //Changes both to 30 cause obj2 just refernce to obj1
console.log(obj1.age);
console.log(obj2.age);
//Functions
var age = 27;
var obj = {
    name: 'Jones',
    city: 'Lisbon'
};
//Passing a object passes the reference so it changes the object outside of the function. While the primitive isn't changed since it's outside the function
function change(a, b){
    a = 30;
    b.city = 'San Francisco';
}

change(age, obj);
console.log(age);
console.log(obj.city);

//Passing functions as arguments
var years = [1990, 1965, 1937, 2005, 1998];
function arrayCalc(arr, fn){
    var arrRes = [];
    for(var i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}
//Call back function
function calcAge(el){
    return 2019 - el;
}
function isFullAge(el){
    return el >= 18;
}
function maxHeartRate(el){
    if(el >= 18 &&  el <= 81){
        return Math.round(206.9 - (0.67 * el));   
    }else{
        return -1;
    }
}
var ages = arrayCalc(years, calcAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);
console.log(ages);
console.log(fullAges);
console.log(rates);

//Function returning functions
function interviewQuestion(job){
    if(job === 'designer'){
        return function(name){
            console.log(name + ', can you please explain what UX design is?:');
        }
    }else if(job === 'teacher'){
        return function(name){
            console.log('What subject do you teach, ' + name + '?');
        }
    }else{
        return function(name){
            console.log('Hello ' + name + ' what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');

teacherQuestion('John');

var designerQuestion = interviewQuestion('designer');
designerQuestion('Robert');

interviewQuestion('teacher')('Mark'); //Second () calls the function returned.

//IIFE (Immediately Invoked Function Expression)

(function () {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck;)
})(5);

//Closures - An inner function has always access to the variables and parameters of its outer function, even after the outer function has returned(completed).
function retirement(retirementAge){
    var a = ' years left until retirement.';
    return function(yearOfBirth){
        var age = 2019- yearOfBirth
        console.log((retirementAge - age) + a);
    } 
}
 
console.log(retirement(66)(1996));
//Closure way of doing the one interview function above, cleaner code.
function interviewQuestion(job){
    return function(name){
        if(job === 'designer'){
            console.log(name + ', can you please explain what UX design is?:');
        }
        else if(job === 'teacher'){
            console.log('What subject do you teach, ' + name + '?');
        }
        else{
            console.log('Hello ' + name + ' what do you do?');
        }
    }
}
interviewQuestion('teacher')('John');

//Bind, Call, and Apply

var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay){
        if(style === 'formal'){
            console.log('Good ' + timeOfDay + ' Ladies and Gentlemen! I\'m ' + this.name + '. I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        }else if(style === 'friendly'){
            console.log('Hey! What\'s up? I\'m ' + this.name + ' I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
};
var emily = {
    name:'Emily',
    age: 35,
    job: 'designer'
};
john.presentation('formal', 'morning');
//Call Method
john.presentation.call(emily, 'friendly', 'afternoon');//This is method barrowing using the Call method
//Apply Method
//john.presentation.apply(emily, ['friendly', 'afternoon']); //Wont work because our function expects an normal varable not an array.
//Bind Method (Returns a function that you have to store)
var johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('afternoon');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');*/

//Coding Challenge 7
//We put it in a imeditate invoked function, allows people to copy code and not mess up their code. (Makes it a private function)
(function (){
    var game, score, questionArray, answer;
    game = true;
    score = 0;
    function Question (question, options, correctAnswer){
        this.question = question;
        this.options = options;
        this.correctAnswer = correctAnswer;
    }
    Question.prototype.displayQuestion = function() {
        console.log(this.question);
        for(var i = 0; i < this.options.length; i++){
            console.log(i + ': ' + this.options[i]);
        }
    }
    Question.prototype.checkAnswer = function(ans){
        if(ans === this.correctAnswer){
            score += 1;
            console.log('Correct! You gain one point! You\'re score is now: ' + score);
        console.log('=================================================');
        }else{
            console.log('Sorry, maybe better luck next time! Score: ' + score);
            console.log('=================================');
        }
    }
    var question1 = new Question('Is javascript the best coding language?: ', ['Yes', 'No', 'I don\'t know.'], 0);
    var question2 = new Question('Who\'s the best coder in the world?: ', ['You', 'Me', 'There is no best coder in the world.'], 1);
    var question3 = new Question('My favorite color is?: ', ['Orange', 'Blue', 'Green.'], 2);
    questionArray = [question1, question2, question3];
    function nextQuestion(){
         var questionpicker = Math.floor(Math.random() * questionArray.length);
        questionArray[questionpicker].displayQuestion();
        answer = prompt('Please select the correct answer: ');
        if(answer !== 'exit'){
            questionArray[questionpicker].checkAnswer(parseInt(answer));
            nextQuestion();
        }
    }
    nextQuestion();
})();