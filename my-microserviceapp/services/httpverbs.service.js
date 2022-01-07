const { ServiceBroker } = require("moleculer");
const ApiGateWayService = require("moleculer-web");
const USERS = require('../mock-data/users')

const broker = new ServiceBroker();

//CURD service : 

broker.createService({
    name: 'user',
    actions: {
        //GET ALL users
        list: {
            handler(ctx) {
                return USERS;
            }
        },
        get: {
            handler(ctx) {
                console.log(ctx.params)
                return USERS.filter(user => user.id == ctx.params.id)
            }
        },
        create(ctx) {
            console.log(ctx.params)
            return 'User Created'
        },
        update(ctx) {
            return 'User updated'
        },
        remove(ctx) {
            return 'User removed'
        }
    }
})


broker.createService({
    name: 'APIGateWay',
    mixins: [ApiGateWayService],
    settings: {
        routes: [{
            path: '/api',
            aliases: {
                "GET users": "user.list",  //GET list is default method
                "GET users/:id": "user.get", //users/1 users/2 users/3
                "POST users": "user.create",
                "PUT users/:id": "user.update",
                "DELETE users/:id": "user.remove"
            }
        }]
    }
})


async function init() {
    try {
        await broker.start();
    }
    catch (e) {
        log(e);
    }
}
init();