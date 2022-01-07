const { ServiceBroker } = require("moleculer")

//create broker object
const broker = new ServiceBroker({
    registry: {
        //discoverer:'Redis'
         discoverer: "redis://localhost:6379"
    }
});

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

    try {
        await broker.start()
        broker.repl();

    } catch (error) {
        console.log(error)
    }
}
main();