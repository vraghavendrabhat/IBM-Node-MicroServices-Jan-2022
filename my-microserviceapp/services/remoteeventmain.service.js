const { ServiceBroker } = require("moleculer")

const broker = new ServiceBroker({
    transporter: "TCP"
});

//caller
broker.createService({
    name: 'remotemain',
    actions: {
        add: {
            params: {
                a: { type: 'number' },
                b: 'number'
            },
            handler(ctx) {
                const { a, b } = ctx.params
                ctx.call('math.add', { a, b })
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