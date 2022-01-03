//null : the variable is not going to hold any object.

//typescript and null handling Without runtime error

class Employee {
    id: number = 8888;
}

let emp = null;

// emp = new Employee();

//cause null runtime error
//console.log(emp.id)

//ts brought new operator to avoid runtime error : safe navigation operator
//which converts null into undefined
console.log(emp?.id)

//how to display undefined in meaningfull value

//using tenary operator
console.log(emp?.id ? emp.id : 0)

//using elvish operator :short cut of tenary operator
console.log(emp?.id ?? 0)
