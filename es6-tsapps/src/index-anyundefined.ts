// i want to declare variable that should hold any type of value, which is not restricted with particular type
let myvar: any = 10
myvar = "hello"

//implicit undefined
let myvar2;
console.log(myvar2)
myvar2 = 90
console.log(myvar2)
myvar2 = "hello"
console.log(myvar2)

//expliit undefined type : cant have any value other undefined
let myvar3:undefined = undefined
//myvar3 =90