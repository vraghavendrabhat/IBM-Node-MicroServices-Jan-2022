//data types

//string
let firstName: string = "Subramanian"
//firstName =100 //compile error
//string concation
console.log("First Name" + firstName);
console.log("FirstName", firstName)
//es 6 template literal : string interpolation
console.log(`First Name ${firstName}`)
let lastName: string = 'Murugan';
console.log(`last Name ${lastName}`)

//back tick notation and multi line 
let doc = `
   <html>
   <body>
     <h1>Hello ${firstName} ${lastName}</h1>
   </body>
   </html>
`;
//numbers : 64 bit double
let age:number =18;
//age ="10"
console.log(`Age ${age}`)
//boolean
let isValid:boolean =true
console.log(`IsVaild ${isValid}`)
