
//resolve - hanlding success
//reject -handling failures
const getUser = (resolve, reject) => {
    //biz 
    let user = {
        id: 1,
        name: 'admin'
    }
    //user = null;
    if (user) {
        setTimeout(resolve, 1000, user);
    } else {
        setTimeout(reject, 1000, { error: 'User not found!' });
    }
}
//output of getuser will be input to the login
const login = (user, resolve, reject) => {
    //biz
    if (user.name === 'admin') {
        setTimeout(resolve, 1000, 'login success')
    }
    else {
        setTimeout(reject, 1000, 'login failed')
    }
}

const showPage = (status, resolve, reject) => {
    //biz
    if (status === 'login success') {
        setTimeout(resolve, 1000, 'You are admin')
    }
    else {
        setTimeout(reject, 1000, 'You are guest')
    }
}
//two callbacks
getUser((user) => {
    console.log('user is found', user)
    //call login
    login(user, status => {
        console.log(status)
        //call show page
        showPage(status, page => {
            console.log(page)
        }, error => {
            console.log(error);
        })
    }, error => {
        console.log('error', error);
    })
}, (error) => {
    console.log('error', error);
});