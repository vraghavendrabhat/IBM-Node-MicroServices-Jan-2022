const { ServiceBroker } = require("moleculer")

const broker = new ServiceBroker();

broker.createService({
    name: 'greeter',
    actions: {
        sayGreet() {
            return 'Greet Moleculer!'
        }
    }
})
broker.createService({
    name: 'hello',
    actions: {
        sayHello() {
            return 'Hello Moleculer!'
        }
    }
})
broker.createService({
    name: 'hai',
    actions: {
        sayHai() {
            return 'Hai Moleculer!'
        }
    }
})


//start the service broker
async function main() {

    try {
        await broker.start()
        console.log('Service Broker is ready')
        //invoke service api
        const hello = await broker.call('hello.sayHello');
        const hai = await broker.call('hai.sayHai');
        const greet = await broker.call('greeter.sayGreet');
        console.log(hello, hai, greet);

    } catch (error) {
        console.log(error)
    }
}
main();