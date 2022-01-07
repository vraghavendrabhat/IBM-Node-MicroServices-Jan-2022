const { ServiceBroker } = require('moleculer');

const broker = new ServiceBroker({
    transporter: "TCP",
    requestTimeout: 5 * 1000 // in milliseconds

});
broker.createService({
    name: 'main',
    actions: {

        begin: {
            // Call the 'getCachedResult' method when error occurred
            fallback: "getCachedResult",
            async handler(ctx) {
                const { a, b, timeout } = ctx.params
                let res = await ctx.call('remotetimeout.calculate', { a, b }, {
                    timeout: timeout
                })
                console.log(`Result Got From Remote Services ${res}`)
            }
        }

    },
    methods: {
        getCachedResult() {
            return `From the Cache 0`
        }
    }
})
async function init() {
    await broker.start()
    broker.repl()
}
init();