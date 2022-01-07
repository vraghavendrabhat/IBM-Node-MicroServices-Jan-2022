const { ServiceBroker } = require('moleculer');
const ApiGateWay = require('moleculer-web')

const broker = new ServiceBroker();

//Back end Service, to be called by HTTP protocal
broker.createService({
    name: 'greeter',
    actions: {
        sayHello() {
            return 'Hello,REST service'
        }
    }
})

//RESTfull web service
//api gateway : Service
// broker.createService({
//     name: 'ApiGateWay',
//     mixins: [ApiGateWay]
// })
broker.createService(ApiGateWay)

async function main() {
    await broker.start();
}
main();