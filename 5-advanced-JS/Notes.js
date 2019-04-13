/*
Object Inheritances and the prototype
    Primitive types are Numbers, Strings, Booleans, Undefined, Null
    Everything else is an object. (Ex: Arrays, Functions, Objects, Dates. Wrappers for Numbers, Strings, and Booleans)

    Object-Oriented Programming
        Objects interacting with one another through methods and properties.
        Used to store data, structure applications into modules and keeping code clean.
    Constructors/Prototype(Refered to class in other programming languages) and Instances
        An Example of a Constructor(Blue Print) would be A Person Object(Has a name, yearOfBirth, job, age).
        Then an Instance would be making a Object called John based on the Constructor. (John, 1990, teacher, age)
    Inheritance - is when one object is based on another object. It's when one object gets access on it's variables and methods.
        The object inheriting will have the same methods and variables plus whatever own code the new Object has.
        Inheritance is possible with the PROTOTYPE property.
        All Objects are prototypes of the OBJECT Object.
        Null has no prototype, in which it will return undefined.
    Summary:
        Every Javascript object has a prototype property, which makes inheritance possible in Javascript.
        The Prototype property of an object is where we put methods and properties that we want other objects to inherit.
        The Constructor's prototype property is NOT the prototype of the Constructor itself, it's the prototype of ALL instances that are created through it.
        When a certain method (or property) is called, the search starts in the object itself, and if it cannot be found, the search moves on to the object's prototype. This continues until the method is found this is called the Prototype Chain.
    Functions are objects, so they act like an object.
        A function is an instance of the Object type
        A function behaves like any other object
        We can store functions in a variable
        We can pass a function as an argument to another function
        We can return a function from a function
        Because of all this we have First-Class Functions
        
*/