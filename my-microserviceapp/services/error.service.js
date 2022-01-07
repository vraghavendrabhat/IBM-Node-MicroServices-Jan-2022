
const { ServiceBroker } = require("moleculer");
const ApiGateWayService = require("moleculer-web");
const USERS = require('../mock-data/users')
const cookieParser = require('cookie-parser')
const compression = require('compression')
const broker = new ServiceBroker();
const { MoleculerError } = require("moleculer").Errors;

class MyBusinessError extends MoleculerError {
    constructor(msg, data) {
        super(msg || `This is my business error.`, 500, "MY_BUSINESS_ERROR", data);
    }
}

broker.createService({
    name: "users",
    actions: {
        list: {
            rest: "GET /",
            handler(ctx) {
                let isError = true;
                if (isError) throw new MyBusinessError();
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
        //cors
        cors: {
            methods: ["GET", "POST", "DELETE", "PUT", "PATCH", "HEAD"],
            origin: "*"
        },
        //global middlewares
        use: [
            cookieParser()
        ],
        // Global error handler
        onError(req, res, err) {
            res.setHeader("Content-Type", "text/plain");
            res.writeHead(501);
            res.end("Global error: " + err.message);
        },
        routes: [
            {
                path: "/api",
                //router middelware 
                use: [
                    compression(),
                    //error handler : middleware error handler              
                ],
                // Route error handler
                onError(req, res, err) {
                    res.setHeader("Content-Type", "application/json; charset=utf-8");
                    res.writeHead(500);
                    res.end(JSON.stringify({ err: err}));
                },
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