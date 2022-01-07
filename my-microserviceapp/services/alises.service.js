const { ServiceBroker } = require("moleculer");
const ApiGateWayService = require("moleculer-web");
const USERS = require('../mock-data/users')

const broker = new ServiceBroker();

//back end service
broker.createService({
    name: "greeter",
    actions: {
        sayHello() {
            return "Hello"
        },
        sayWelcome() {
            return 'Welcome'
        },
        sayHai() {
            return 'Hai'
        }

    }
})

broker.createService({
    name: "users",
    actions: {
        list() {
            return USERS
        }
    }
})

//http://localhost:3000/api/hello
//http://localhost:3000/api/hai
//http://localhost:3000/api/welcome
//http://localhost:3000/api/list


broker.createService({
    name: 'ApiGateWayService',
    mixins: [ApiGateWayService],
    settings: {
        routes: [{
            path: '/api',
            aliases: {
                "hello": "greeter.sayHello",
                "hai": "greeter.sayHai",
                "welcome": "greeter.sayWelcome",
                "list": "users.list"
            }
        }]
    }
})


async function main() {
    await broker.start();
}
main();
