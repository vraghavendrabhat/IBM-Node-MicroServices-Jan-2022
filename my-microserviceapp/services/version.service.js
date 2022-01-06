const { ServiceBroker } = require("moleculer")

const broker = new ServiceBroker();

broker.createService({
    name: 'hello',
    version: 1,
    actions: {
        sayHello() {
            return `Hello V1`
        }
    }
})
broker.createService({
    name: 'hello',
    version: 2,
    actions: {
        sayHello() {
            return `Hello V2`
        }
    }
})


async function main() {

    try {
        await broker.start()
        console.log('Service Broker is ready')
        //invoke service api
        //versionNo.serviceName.serviceMethod
        const helloV1 = await broker.call('v1.hello.sayHello');
        const helloV2 = await broker.call('v2.hello.sayHello');
        console.log(helloV1,helloV2)

    } catch (error) {
        console.log(error)
    }
}
main();