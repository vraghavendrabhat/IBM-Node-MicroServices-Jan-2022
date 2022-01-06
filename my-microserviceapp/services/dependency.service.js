const { ServiceBroker } = require("moleculer")


const broker = new ServiceBroker();

broker.createService({
    name: 'likes',
    actions: {
        findAll() {
            return 'likes'
        }
    },
    async started() {
        console.log('likes started')
    },
    created() {
        console.log('likes is created')
    },
})

broker.createService({
    name: 'posts',
    dependencies: ["likes"],
    actions: {
        findAll() {
            return 'posts'
        }
    },
    async started() {
        console.log('posts started')
    },
    async created() {
        console.log('posts created')
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