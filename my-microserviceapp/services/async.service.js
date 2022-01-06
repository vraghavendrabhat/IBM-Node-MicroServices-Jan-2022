const { ServiceBroker } = require("moleculer");

const broker = new ServiceBroker();


//async service
broker.createService({
    name: 'math',
    actions: {
        add: {
            params: {
                a: 'number',
                b: 'number'
            },
            handler(ctx) {
                //return promise
                const { a, b } = ctx.params;
                return new this.Promise((resolve, reject) => {
                    setTimeout(resolve, 5000, (a + b))
                })
            }
        }
    }
})






async function main() {
    //start the broker and deploy the service
    try {
        await broker.start()
        //pass parameters
        let response;
        response = await broker.call('math.add', { a: 80, b: 10 });
        console.log(response);

    }
    catch (err) {
        console.log(err);
    }

}


main();