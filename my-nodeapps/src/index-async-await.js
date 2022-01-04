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

//output of getuser will be input to the login
const login = user => {
    //biz
    return new Promise((resolve, reject) => {
        if (user.name === 'admin') {
            setTimeout(resolve, 1000, 'login success')
        }
        else {
            setTimeout(reject, 1000, 'login failed')
        }
    })
}

const showPage = status => {
    return new Promise((resolve, reject) => {
        //biz
        if (status === 'login success') {
            setTimeout(resolve, 1000, 'You are admin')
        }
        else {
            setTimeout(reject, 1000, 'You are guest')
        }
    })
}

////////////////


//using thenables
// function init() {
//     getUser()
//         .then(user => login(user))
//         .then(status => showPage(status))
//         .then(page => console.log(page))
//         .catch(err => {
//             console.log(err);
//         })
// }

//async ...await keywords

async function init() {
    try {
        let user = await getUser();
        let status = await login(user);
        let page = await showPage(status)
        console.log(user, status, page);
    }
    catch (err) {
        console.log(err)
    }
}

init();