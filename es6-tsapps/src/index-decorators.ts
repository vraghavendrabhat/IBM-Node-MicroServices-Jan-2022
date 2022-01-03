
function Course(input: any) {
    return function (target:any) {
        //decorator logic
        Object.defineProperty(target.prototype, "subject", { value: input })
    }

}

//attach decoractor
@Course('Node.js with MicroService')
class Student {
    constructor(public name: string) { }
}
//
let student = new Student("Ram") as any;
console.log(`The Student ${student.name} is learning ${student.subject} `)


@Course('Node.js with MicroService')
class Teacher {
    constructor(public name: string) { }
}
//
let teacher = new Teacher("Subramanian") as any;
console.log(`The Teacher ${teacher.name} is teaching ${teacher.subject} `)