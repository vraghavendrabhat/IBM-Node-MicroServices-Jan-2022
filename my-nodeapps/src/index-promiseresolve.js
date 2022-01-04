//Promise Object creation : Factory api

function sayHello(name){
  console.log(`Hello ${name}`)
}

//Promise by default is async
function delay() {
    return Promise.resolve('success') // Promise Object is returned
}

sayHello('foo')
delay().then(res=>console.log(res))
sayHello('bar')