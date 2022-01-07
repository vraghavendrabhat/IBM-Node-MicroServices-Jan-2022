const { ServiceBroker } = require('moleculer');
const ApiGateWay = require('moleculer-web');

const broker = new ServiceBroker();

broker.createService({
    name: 'greeter',
    actions: {
        sayHello() {
            return 'Hello!';
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
            path: '/api'
        }, {
            path: '/admin'
        }]
    }
})
async function main() {
    await broker.start();
}
main();