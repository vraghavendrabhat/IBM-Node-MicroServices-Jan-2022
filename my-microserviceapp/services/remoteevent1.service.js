const { ServiceBroker } = require("moleculer")

const broker = new ServiceBroker({
    // nodeID:'mathServer',
    transporter: "TCP"
    // transporter: "nats://localhost:4222"
});

//caller
broker.createService({
    name: 'math',
    actions: {
        add: {
            params: {
                a: { type: 'number' },
                b: 'number'
            },
            handler(ctx) {
                const { a, b } = ctx.params
                //service communication via events
                return ctx.emit('adder.add', { a, b })
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