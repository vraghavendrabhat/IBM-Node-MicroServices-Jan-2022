const getUser = () => {
    //biz 
    let user = {
        id: 1,
        name: 'admin'
    }
    return new Promise((resolve, reject) => {
        if (user) {
            setTimeout(resolve, 1000, user);
        } else {
            setTimeout(reject, 1000, { error: 'User not found!' });
        }
    })

}

getUser()
    .then(user => {
        console.log(user)
    })
    .catch(error => {
        console.log(error);
    })