//Object destructuring

// function getEmployee(employee) {
//     console.log(employee.id, employee.name)
// }
// function getEmployee(employee) {
//     const { id, name } = employee;
//     console.log(id, name)
// }
// const getEmployee = (employee) => {
//     const { id, name } = employee;
//     console.log(id, name)
// }
const getEmployee = ({ id, name }) => console.log(id, name)
let employee = {
    id: 1,
    name: 'Subramanian'
}
getEmployee(employee);
/////////////////////////////////////////////////////////////////////////////////////

//return value
let getStock = () => {
    return {
        id: 1,
        Symbol: 'google',
        price: 100
    }
}
console.log(getStock())

// let getStocks = (id: number, symbol: string, price: number) => {
//     return {
//         id: id,
//         symbol: symbol,
//         price: price
//     }
// }
// let getStocks = (id: number, symbol: string, price: number) => {
//     return {
//         id,
//         symbol,
//         price
//     }
// }
let getStocks = (id: number, symbol: string, price: number) => ({
    id,
    symbol,
    price
})
console.log(getStocks(1, 'ms', 100))











