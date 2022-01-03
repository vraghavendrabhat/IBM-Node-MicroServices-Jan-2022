//functions

function sayHello() {
    console.log("Hello")
}
sayHello();

//parameterss and args

//name is arg
function sayHai(name: string) {
    console.log(`name ${name}`)
}
//subramanian - parameter
sayHai('Subramanian');
// sayHai(100);

//return value
function getName(): string {
    return 'Subramaian';
}
console.log(getName())

//default args : es 6 features
function add(a: number = 0, b: number = 0): number {
    console.log(`a ${a} b ${b}`)
    return a + b;
}

console.log(add(10, 10))
console.log(add())
console.log(add(5))
console.log(add(undefined, 5))

//optional parameters : ts feature
function multiply(a?: number, b?: number): number {
    console.log(`a ${a} b ${b}`)
    return a * b;
}
console.log(multiply(10, 10))
console.log(multiply())

//void
function doStuff(): void {
    console.log("doStuff")
}
//any
function transform(a: any, b: any): any {
    console.log("doStuff")
}
transform("a", "b")
transform("a", "b")
/////////////////////////////////////////////////////////////////////////////////

//Arrow functions : es 6 feature
//Arrow funciton is short cut for function literals

//anonmous functions
let sayGreet = function (name: string = "foo") {
    return `Hello ${name}`;
}
console.log(sayGreet('bar'))
//anonmous functions in es 6 :Arrow function
sayGreet = (name: string = "foo") => {
    return `Hello ${name}`;
}
console.log(sayGreet('bar'))

//function has only one line of body : we can remove {} and return statement
sayGreet = (name: string = "foo"):string => `Hello ${name}`;
console.log(sayGreet('bar'))














