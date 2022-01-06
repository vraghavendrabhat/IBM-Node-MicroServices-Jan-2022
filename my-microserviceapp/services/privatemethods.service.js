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
                const { a, b } = ctx.params;
                return this.add(a,b)
            }
        }
    },
    //private methods cant be called outside
    methods: {
        add(a, b) {
            return a + b;
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