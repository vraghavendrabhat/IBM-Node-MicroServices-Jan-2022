
const { ServiceBroker } = require("moleculer")

const broker = new ServiceBroker({
    // transporter: "TCP"
    transporter: "nats://localhost:4222"
});

//callee 
broker.createService({
    name: 'adder',
    actions: {
        add: {
            params: {
                a: "number",
                b: "number"
            },
            handler(ctx) {
                const { a, b } = ctx.params;
                return `${broker.nodeID} => ${a + b}`;
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