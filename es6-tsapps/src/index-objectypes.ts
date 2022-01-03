//object types

//class as type
// class User {
//     id: number;
//     name: string;
//     city?:string; 
//     state?:string;
//     country?:string;    
// }

//interface as type
// interface User {
//     id: number;
//     name: string;
//     city?:string; 
//     state?:string;
//     country?:string;    
// }

//type keyword as type
type User = {
    id: number | string;
    name: string;
    city?: string;
    state?: string;
    country?: string;    
}
let user: User = {
    id: 1,
    name: 'Subramanian',
    city: 'Coimbatore'
}