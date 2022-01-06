
const { ServiceBroker } = require("moleculer")

const broker = new ServiceBroker({
    transporter: "TCP"
});

//callee 
broker.createService({
    name: 'adder',
    events: {
        "adder.add": {
            handler(ctx) {
                console.log("Payload:", ctx.params);
                console.log("Sender:", ctx.nodeID);
                console.log("Metadata:", ctx.meta);
                console.log("The called event name:", ctx.eventName);
            }
        }
    }
})
async function main() {

    try {
        await broker.start()
        console.log('Service Broker is ready')
        //start your application in repl prompt.
        broker.repl();
    } catch (error) {
        console.log(error)
    }
}
main();