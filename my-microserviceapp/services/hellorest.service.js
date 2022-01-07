const { ServiceBroker } = require('moleculer');
const ApiGateWay = require('moleculer-web')

const broker = new ServiceBroker();

//Back end Service, to be called by HTTP protocal
//http://localhost:3000/greeter/sayHello
broker.createService({
    name: 'greeter',
    actions: {
        sayHello() {
            return 'Hello,REST service'
        }
    }
})
//http://localhost:3000/welcome/sayHello

broker.createService({
    name: 'welcome',
    actions: {
        sayHello() {
            return 'Weclome,REST service'
        }
    }
})

broker.createService(ApiGateWay)

async function main() {
    await broker.start();
}
main();