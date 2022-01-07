const { ServiceBroker } = require('moleculer');

const broker = new ServiceBroker({
    transporter: "TCP",
    circuitBreaker: {
        enabled: true,
        threshold: 0.1,
        minRequestCount: 1,
        windowTime: 60, // in seconds
        halfOpenTime: 5 * 1000, // in milliseconds
        check: err => {
            console.log('check function -Main')
            console.log(err)
            return err && err.code >= 500
        }
    }
});

broker.createService({
    name: 'remotecb',
    actions: {
        async calculate(ctx) {
            const { a, b, invocationNumber } = ctx.params
            return new Promise((resolve, reject) => {
                if (invocationNumber >= 10) {
                    setTimeout(reject, 100, `Something went wrong`)
                } else {
                    setTimeout(resolve, 100, `${a + b} - ${broker.nodeID} `)
                }
            })
        }
    }
})

async function init() {
    await broker.start()
    broker.repl()
}
init();