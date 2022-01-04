// const UserService = require("./services/user.service");
const { findAll } = require("./services/user.service");

async function main() {
    // let userService = new UserService();
    // let users = await userService.findAll();
    let users = await findAll();

    console.log(users);
}
main();