
const { ServiceBroker } = require("moleculer");
const ApiGateWayService = require("moleculer-web");
const USERS = require('../mock-data/users')

//error wrapper
const E = require("moleculer-web").Errors;

const broker = new ServiceBroker();

//users services


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
                authorization: true,
                autoAliases: true
            }
        ]
    },
    //method for authorization
    methods: {
        authorize(ctx, route, req, res) {
            //read auth info
            const auth = req.headers["authorization"];
            //wether token is available or not
            if (auth && auth.startsWith("Bearer")) {
                const token = auth.slice(7);
                //verifi the token
                if (token === '123456') {
                    ctx.meta.user = { id: 1, name: 'Subramanian' }
                    //return result
                    return Promise.resolve(ctx);
                }
                else {
                    return this.Promise.reject(new E.UnAuthorizedError(E.ERR_INVALID_TOKEN))
                }

            } else {
                return this.Promise.reject(new E.UnAuthorizedError(E.ERR_NO_TOKEN))
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