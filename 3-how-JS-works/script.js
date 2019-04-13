/*
Execution context: The enviorment that javascript runs in.
The default is Global Execution Context and these two things are required to be run Globally:
            Code that is not inside any function
            Associated with the global object
            In the browser, that's the window object
            Ex: var lastname === window.lastname -> true
Each time we run a function you get a new Execution context thata's stacked on top. Once the function has returned something it will remove it's Execution context.

Execution Context Object has three things:
        Variable Object(VO)
        Scope chain
        "This" variable
    It's has two phases:
        1) Creation phase:
            A)Creation of the Variable Object(VO)
            B)Creation of the scope chain
            C)Determin value of the 'this' variable
        2) Exection phase:
            The code of the function that generated the current execution context is ran line by line.
The variable object:
    The argument object is created, containing all the arguments that were passed into the function.
    Hoisting - Avaiable before the execution phase actually starts:
        Code is scanned for function declarations: for each function, a property is created in the Variable Object, pointing to the function.
        Code is scanned for variable declarations: for each variable, a property is created in the Variable Object, and set to undefined.
        Difference with functions and variables is a function already has an value before the execution phase while variables are set to undefined only defined during the execution phase.
Hoisting in Practice
        Hoisting allows Function Declarations to be loaded before execution, unlike function expressions.
    Functions:
        An Example of Function Declarations would be:
        function calcAge(year){} <-- This can be called before it's written in the code.
        An Example of function expression is this:
        var retirement = function(year){} <- This has to go before it is called.
    Variables:
        console.log(age); <-- Prints Undefined due to variable have not been created yet, but knows theres a variable thanks to hoisting.
        var age = 23;

        function foo(){
            var age = 65;
            console.log(age)' <-- Prints 65 due to functions having seperate Execution Context.
        }
        foo();
        console.log(age); <-- Prints 23 because the function execution context is closed and now is using global execution context.
Scoping and the Scope Chain:
    Scoping answers the question "where can we access a certain variable?"
    Each new function creates a scope: the space/environment, in which the variables it defines are accessible.
    Lexical Scoping: a function that is lexically within another function gets access to the scope of the outer(parent) function. (It's about the position within the code.)

The 'This' keyword:
    Regular Function Call: the 'this' keyword points at the global object. (the window object, in the browser)
    Method Call: the this variable points to the object that is calling the method.
    The 'this' keyword is not assigned a value until a function where it is defined is actually called.
    'This' Keyword in Practice:
        console.log(this); <-- Prints the window object.
        
        function calculateAge(year){
            console.log(2018 - year);
            console.log(this); <-- Prints the window object since it's attached to is the global object since there is no method called. (A Method is a function called in a object)
        }
        
        var john = {
            name: 'John',
            yearOfbirth: 1990,
            calculateAge: function(){
                console.log(this); <-- Prints the john object because it refers to what method calls it.
                function innerFunction(){
                    console.log(this); <-- Prints the window object, because the rule of a regular function call happens it's the default object. A default object is the window object. Even though its written inside the object it's a regular function.
                }
                innerFunction();
            }
        };
        john.calculateAge();
        var mike = {
            name: 'Mike',
            yearOfBirth: 1984
        };
        mike.calculateAge = john.calculateAge; <--Method barrowing
        mike.calculateAge(); <-- Calculates mikes age not johns even though it's using the this keyword in the john method. (Shows how the this keyword isn't assigned a value till it's called.)
*/