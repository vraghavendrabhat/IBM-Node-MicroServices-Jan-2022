//link file
// const myresult = require('./mylib')
// console.log(myresult)

// console.log(myresult.firstName ,myresult.lastName,myresult.address.city)

const { firstName, lastName, address: { city } } = require('./mylib');
const Employee = require('./employee')

console.log(firstName, lastName, city)

let emp = new Employee();
console.log(emp.getEmployeeInfo())