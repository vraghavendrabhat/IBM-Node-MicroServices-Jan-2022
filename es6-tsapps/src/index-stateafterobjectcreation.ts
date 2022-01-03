class Employee {
    //direct hardcoded: inside class 
    id: number = 1
    name: string = "Subramanian"
    //methods
    calculate(): number {
        return 100;
    }

}
//emp is just reference variable
let emp: Employee = new Employee();
//after object creation
emp.id =900;
emp.name = "Ram"
console.log(emp.id,emp.name,emp.calculate())