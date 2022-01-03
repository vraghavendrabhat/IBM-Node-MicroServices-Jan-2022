// class Employee {
//     //instance variables
//     id: number;
//     name: string;
//     //id,name is local variable
//     constructor(id: number, name: string) {
//         //instancevariable:localvariable
//         this.id = id;
//         this.name = name;
//     }
// }

// class Employee {
//     //id,name is local variable
//     //constructor local variables can be converted into instance variables
//     //by adding public/private keywords
//     constructor(public id: number, public name: string) {
//         //instancevariable:localvariable
//         this.id = id;
//         this.name = name;
//     }
// }

class Employee {
     constructor(public id: number, public name: string) { }
}
let emp = new Employee(1, 'ram');
console.log(`id : ${emp.id} name ${emp.name}`)