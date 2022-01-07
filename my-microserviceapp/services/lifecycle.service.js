const { ServiceBroker } = require("moleculer")

const broker = new ServiceBroker({
    //broker life cycle api
    async created() {
        console.log('broker is created')
    },
    async started() {
        console.log('broker is started')
        //await this.db.connect();
    },
    async stopped() {
        console.log('broker has been stopped');
        //await this.db.disconnect()
    },
    //merged call for modififying service information before publish
    merged(schema) {
        console.log('broker merge process');
        console.log(schema)
        // Modify the service settings
        //schema.settings.myProp = "myValue";
        // Modify the param validation schema in an action schema
        // schema.actions.find.params.offset = "number";
    }

});

broker.createService({
    name: 'hello',
    //api
    actions: {
        sayHello() {
            return 'Hello Moleculer!'
        }
    },
    //Service life cycles
    created() {
        // Fired when the service instance created (with `broker.loadService` or `broker.createService`)
        console.log('Service is created')
    },

    merged() {
        // Fired after the service schemas merged and before the service instance created
        console.log('Service is merged')

    },

    async started() {
        // Fired when broker starts this service (in `broker.start()`)
        console.log('Service is started')

    },
    async stopped() {
        // Fired when broker stops this service (in `broker.stop()`)
        console.log('Service is Stopped')

    }
})



//start the service broker
async function main() {
    try {
        await broker.start()
        broker.repl();

    } catch (error) {
        console.log(error)
    }
}
main();