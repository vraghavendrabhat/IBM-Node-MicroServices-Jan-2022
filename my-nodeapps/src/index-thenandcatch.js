//Promise Object creation : Factory api

function sayHello(name) {
    console.log(`Hello ${name}`)
}

//Promise by default is async
function delay(message) {
    if (message === 'hello') {
        return Promise.resolve(message)
    } else {
        return Promise.reject('Sorry!')
    }
}

sayHello('foo')
delay('hello')
    .then(message => console.log(message))
    .catch(err => console.log(err))
sayHello('bar')