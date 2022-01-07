const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker({
    //nodeID: - machineName-processId
    transporter: 'TCP',
    //load balancer configuration
    registry: {
        discoverer: 'LOCAL', //type of registry
        strategy: 'RoundRobin' //load balancer algorthim
    }
})
//back end service
broker.createService({
    name: 'math',
    actions: {
        calculate: {
            handler(ctx) {
                const { a,b } = ctx.params;
                return `${a + b} from ${broker.nodeID}`;
            }
        }
    }
})

async function main() {
    try {
        await broker.start()
        broker.repl();
    }
    catch (err) {
        console.log(err);
    }

}
main();