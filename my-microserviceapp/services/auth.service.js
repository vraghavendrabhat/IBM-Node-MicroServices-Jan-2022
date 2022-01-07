const { ServiceBroker } = require("moleculer");
const ApiGateWayService = require("moleculer-web");
const USERS = require('../mock-data/users')

const broker = new ServiceBroker();


broker.createService({
    name: "users",
    actions: {
        whoami: {
            handler(ctx) {
                if (ctx.meta.user) {
                    return `Hello ${ctx.meta.user.name}`
                } else {
                    return "Who are you?- Invalid User"
                }
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
                //enable authentication
                authentication: true,
                aliases: {
                    "GET whoami" : "users.whoami"
                },
            }
        ]
    },
    methods: {
        authenticate(ctx, route, req, res) {
            //Get acess token
            let accessToken = req.query['access_token'];
            if (accessToken) {
                if (accessToken === "12345") {
                    const user = { id: 1, name: "Subramanian", username: "Subramanian" }
                    return this.Promise.resolve(user)
                } else {

                }
            } else {
                return this.Promise.resolve(null);
            }
        }
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