const { ServiceBroker } = require('moleculer');
const ApiGateWay = require('moleculer-web');
const USERS = require('../mock-data/users');

const broker = new ServiceBroker();

broker.createService({
    name: 'users',
    actions: {
        list: {
            handler(ctx) {
                return new this.Promise((resolve, reject) => {
                    setTimeout(resolve, 5000, USERS);
                });
            }
        }
    }
})


broker.createService(ApiGateWay);

async function main() {
    await broker.start();
}
main();