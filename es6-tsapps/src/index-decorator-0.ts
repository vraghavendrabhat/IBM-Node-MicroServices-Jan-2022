
//decorator
//target variable holds the reference on which the decorator is attached
function Course(target: any) {
    //decorator logic
    Object.defineProperty(target.prototype, "subject", { value: 'Node.js' })
}

//attach decoractor
@Course
class Student {
    constructor(public name: string) { }
}
//
let student = new Student("Ram") as any;
console.log(`The Student ${student.name} is learning ${student.subject} `)
