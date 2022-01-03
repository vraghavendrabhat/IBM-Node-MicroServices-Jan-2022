class Employee {
    id: number
    name: string
    //constructor
    constructor(id: number = 0, name: string = "") {
        this.id = id;
        this.name = name;
    }
    //methods
    calculate(): number {
        return 100;
    }

}
//new Employee() -constructor call
let emp: Employee = new Employee();

console.log(emp.id, emp.name, emp.calculate())

//constructor parameters
emp = new Employee(12, "Ram");

console.log(emp.id, emp.name, emp.calculate())