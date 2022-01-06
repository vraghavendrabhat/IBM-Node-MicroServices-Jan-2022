const { ServiceBroker } = require("moleculer")

const broker = new ServiceBroker();

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
                //service communication
                // ctx.call('adder.add',{a:a,b:b})
                return ctx.call('adder.add', { a, b })
            }
        }
    }

})

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
                return `Adder => ${a + b}`;
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