const { ServiceBroker } = require("moleculer")

//create broker object
const broker = new ServiceBroker();

broker.createService({
    name: 'hello',
    //api
    actions: {
        sayHello() {
            return 'Hello Moleculer!'
        }
    }
})



//start the service broker
async function main() {
    // broker.start()
    //     .then(() => {
    //         console.log('Service Broker is ready')
    //     })
    //     .catch(err => console.log(err))
    try {
        await broker.start()
        console.log('Service Broker is ready')
        //invoke service api
        const res = await broker.call('hello.sayHello');
        console.log(res);

    } catch (error) {
        console.log(error)
    }
}
main();