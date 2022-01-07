
const { ServiceBroker } = require("moleculer");
const ApiGateWayService = require("moleculer-web");

const broker = new ServiceBroker({
    //nodeID: - machineName-processId
    transporter: 'TCP',
    //load balancer configuration
    registry: {
        discoverer: 'LOCAL', //type of registry
        strategy: 'RoundRobin' //load balancer algorthim
    }
})

//restmath service
broker.createService({
    name: "mathrest",
    actions: {
        get: {
            rest: "GET /math",
            handler(ctx) {
                return ctx.call('math.calculate', { a: 10, b: 20 })
            }
        }
    }
})


broker.createService({
    name: 'ApiGateWayService',
    mixins: [ApiGateWayService],
    settings: {
        routes: [
            {
                path: "/api",
                aliases: {

                },
                autoAliases: true
            }
        ]
    }
})

async function init() {
    try {
        await broker.start();
    }
    catch (e) {
        log(e);
    }
}
init();