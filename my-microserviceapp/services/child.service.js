
const { ServiceBroker } = require('moleculer');
const HelloService = require("./parent1.service")
const HaiService = require("./parent2.service")

const broker = new ServiceBroker();

broker.createService({
    name: "greeter",
    mixins: [HelloService, HaiService], //inheritance
    actions: {
        sayGreet() {
            return 'Greet,From child'
        }
    }
})


async function main() {
    try {
        await broker.start()
        broker.repl();
    }
    catch (err) {
        console.log(err);
    }

}
main();