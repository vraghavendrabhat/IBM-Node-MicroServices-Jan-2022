const USERS = require("../mock-data/users");

class UserService {

    findAll() {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 5000, USERS);
        })
    }
}

// module.exports = UserService;
module.exports = new UserService()