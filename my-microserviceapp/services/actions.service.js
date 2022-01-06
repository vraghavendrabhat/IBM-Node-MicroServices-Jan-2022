const { ServiceBroker } = require("moleculer")

const broker = new ServiceBroker();

//way -1 writing actions

// broker.createService({
//     name: 'hello',
//     version: 1,
//     actions: {
//         sayHello() {
//             return `Hello V1`
//         }
//     }
// })

//way-2
broker.createService({
    name: 'hello',
    version: 1,
    actions: {
        sayHello: {
            //handler method
            handler() {
                return 'Hello'
            }
        },
        sayHai: {
            handler() {
                return 'Hai'
            }
        },
        sayGreet: {
            handler() {
                return 'Greet!'
            }
        }
    }
})

async function main() {

    try {
        await broker.start()
        console.log('Service Broker is ready')
        //invoke service api
        //versionNo.serviceName.serviceMethod
        const hello = await broker.call('v1.hello.sayHello');
        console.log(hello)
        const hai = await broker.call('v1.hello.sayHai');
        console.log(hai)
        const greet = await broker.call('v1.hello.sayGreet');
        console.log(greet)
    } catch (error) {
        console.log(error)
    }
}
main();