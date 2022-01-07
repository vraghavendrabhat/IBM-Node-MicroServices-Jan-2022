const { ServiceBroker } = require('moleculer');
const ApiGateWay = require('moleculer-web');

const broker = new ServiceBroker();

broker.createService({
    name: 'greeter',
    actions: {
        sayHello() {
            return 'Hello!';
        },
        sayHai() {
            return 'Hai!';
        },
        sayGreet() {
            return 'Greeter!';
        }
    }
})

broker.createService({
    name: 'admin',
    actions: {
        getAdmin() {
            return 'Admin!';
        }
    }
})

//http://localhost:3000/api/greeter/sayHello

//rest server with configuration
broker.createService({
    name: 'ApiGateServer',
    mixins: [ApiGateWay],
    //overriding the default Server settings
    settings: {
        routes: [{
            path: '/api',
            whitelist: [
                // Access any actions in 'greeter' service
                "greeter.*",
                //Access only sayHello in greeter service
                // "greeter.sayHello"
            ]

        },
        {
            path: '/admin'
        }]
    }
})


async function main() {
    await broker.start();
}
main();