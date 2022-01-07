const { ServiceBroker } = require("moleculer");
const ApiGateWayService = require("moleculer-web");
const USERS = require('../mock-data/users')

const broker = new ServiceBroker();

//LIST,GET,UPDATE,CREATE,DELETE
broker.createService({
    name: "users",
    actions: {
        list: {
            handler(ctx) {
                return USERS;
            }
        },
        get: {
            handler(ctx) {
                return USERS.filter(user => user.id == ctx.params.id)
            }
        },
        create: {
            handler(ctx) {
                return 'save';
            }
        },
        update(ctx) {
            return 'User updated'
        },
        remove(ctx) {
            return 'User removed'
        }
    }
})

broker.createService({
    name: "products",
    actions: {
        list: {
            handler(ctx) {
                return 'products'
            }
        },
        get: {
            handler(ctx) {
                return 'products by id'
            }
        },
        create: {
            handler(ctx) {
                return 'products save';
            }
        },
        update(ctx) {
            return 'products updated'
        },
        remove(ctx) {
            return 'products removed'
        }
    }
})
broker.createService({
    name: "comments",
    actions: {
        list: {
            handler(ctx) {
                return 'comments'
            }
        },
        get: {
            handler(ctx) {
                return 'comments by id'
            }
        },
        create: {
            handler(ctx) {
                return 'comments save';
            }
        },
        update(ctx) {
            return 'comments updated'
        },
        remove(ctx) {
            return 'comments removed'
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
                    "REST users": "users",  //api/users
                    "REST products": "products",
                    "REST comments": "comments",
                    // "GET findUserByCity" : "users.findByCity"
                }
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