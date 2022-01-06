const { ServiceBroker } = require("moleculer")

const broker = new ServiceBroker();

broker.createService({
    name: 'math',
    actions: {
        add: {
            params: {
                a: { type: 'number' },
                b: 'number'
            },
            handler(ctx) {
                console.log(ctx.params);
                return ctx.params.a + ctx.params.b
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