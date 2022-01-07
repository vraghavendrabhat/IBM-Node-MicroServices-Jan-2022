const { ServiceBroker } = require("moleculer");
const ApiGateWayService = require("moleculer-web");
const USERS = require('../mock-data/users')
const cookieParser = require('cookie-parser')
const compression = require('compression')
const helmet = require("helmet");




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

//Frond End Service
//entry url configuration and action configuration - frond to back end configuration

broker.createService({
    name: 'ApiGateWayService',
    mixins: [ApiGateWayService],
    settings: {

        //global middlewares
        use: [
            cookieParser(),
            helmet()
        ],

        routes: [
            {
                path: "/api",
                //router middelware 
                use: [
                    compression()
                ],

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