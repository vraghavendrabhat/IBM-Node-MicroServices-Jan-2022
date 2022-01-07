const { ServiceBroker } = require("moleculer");
const ApiGateWayService = require("moleculer-web");
const USERS = require('../mock-data/users')

const broker = new ServiceBroker();

broker.createService({
    name: "users",
    actions: {
        list: {
            rest: "GET /",
            handler(ctx) {
                return USERS;
            }
        },
        get: {
            rest: "GET /:id",
            handler(ctx) {
                return USERS.filter(user => user.id == ctx.params.id)
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
                whiteList: [],
                aliases: {
                    //other mappings if you want
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