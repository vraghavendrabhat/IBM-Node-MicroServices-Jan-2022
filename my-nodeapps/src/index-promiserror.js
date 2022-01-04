//Promise Object creation : Factory api

function sayHello(name) {
    console.log(`Hello ${name}`)
}

//Promise by default is async
function delay() {
    return Promise.reject(new Error('something went wrong')) // Promise Object is returned
}

sayHello('foo')
delay().catch(err => console.log(err))
sayHello('bar')