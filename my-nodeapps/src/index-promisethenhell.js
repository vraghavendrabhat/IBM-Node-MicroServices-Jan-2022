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


// getUser((user) => {
//     console.log('user is found', user)
//     //call login
//     login(user, status => {
//         console.log(status)
//         //call show page
//         showPage(status, page => {
//             console.log(page)
//         }, error => {
//             console.log(error);
//         })
//     }, error => {
//         console.log('error', error);
//     })
// }, (error) => {
//     console.log('error', error);
// });

// getUser().then(user => {
//     login(user)
//         .then(status => {
//             showPage(status).then(page => {
//                 console.log(page);
//             }).catch(err => {
//                 console.log(err);
//             })
//         })
//         .catch(err => {
//             console.log(err);
//         })
// }).catch(err => {
//     console.log(err);
// })



// getUser().then(user => {
//     return login(user)
// })
// .then(status => {
//         return showPage(status);
//     })
// .then(page => {
//         console.log(page);
// })
// .catch(err => {
//         console.log(err);
// })

// getUser()
//     .then(user => login(user))
//     .then(status => showPage(status))
//     .then(page => console.log(page))
//     .catch(err => {
//         console.log(err);
//     })

//
const { log } = console;

getUser()
    .then(login)
    .then(showPage)
    .then(log)
    .catch(log)