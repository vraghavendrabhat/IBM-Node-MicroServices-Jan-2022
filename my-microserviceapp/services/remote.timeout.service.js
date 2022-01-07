const { ServiceBroker } = require('moleculer');

const broker = new ServiceBroker({
    transporter: "TCP",
    requestTimeout: 5 * 1000 // in milliseconds
});

broker.createService({
    name: 'remotetimeout',
    actions: {
        async calculate(ctx) {
            const { a, b } = ctx.params
            return new Promise((resolve, reject) => {
                setTimeout(resolve, 3000, `${a + b} - ${broker.nodeID} `)
            })
        }
    }
})

async function init() {
    await broker.start()
    broker.repl()
}
init();
