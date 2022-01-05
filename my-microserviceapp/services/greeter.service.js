const { ServiceBroker } = require("moleculer")

const broker = new ServiceBroker();

broker.createService({
    name: 'greeter',
    //multiple apis
    actions: {
        sayHello() {
            return 'Hello Moleculer!'
        },
        sayHai() {
            return 'Hai Moleculer!'
        },
        sayGreet() {
            return 'Greet Moleculer!'
        }
    }
})


//start the service broker
async function main() {

    try {
        await broker.start()
        console.log('Service Broker is ready')
        //invoke service api
        const hello = await broker.call('greeter.sayHello');
        const hai = await broker.call('greeter.sayHai');
        const greet = await broker.call('greeter.sayGreet');
        console.log(hello, hai, greet);

    } catch (error) {
        console.log(error)
    }
}
main();