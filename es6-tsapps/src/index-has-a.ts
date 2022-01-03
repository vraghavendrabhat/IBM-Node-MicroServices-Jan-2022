//has -a 
class OrderService {
    constructor() {

    }
    public findAllOrders(): string {
        return "List of Orders"
    }
}

class OrderController {
    //has-a
    constructor(private orderService: OrderService) { }
    
    findAll(){
        return this.orderService.findAllOrders();
    }
}

class UserService {
    
}
let orderCtrl = new OrderController(new OrderService());

//let orderCtrl = new OrderController(new UserService());

console.log(orderCtrl.findAll())

