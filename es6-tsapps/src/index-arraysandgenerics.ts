
//arrays without strong type
let list = [1, "hello", true];

//numerical array : without generics
let newList: number[] = [1, 2, 3, 4, 5];
//generics 
let newnumList: Array<number> = [1, 2, 3, 4, 5, 6, 7];

class Employee {
    id: number;
    name: string;
}
let empList: Array<Employee> = [{ id: 1, name: 'a' }, { id: 1, name: 'b' }];