

function sayHello(name) {
    console.log(`Hello ! ${name}`)
}

/**
 * callback /listner /handler :
 *   It is a function gets registered for listening events
 * 
 */

function delay(callback) {
    //non blocking api :register handler with timer
    setTimeout(callback, 5000, "Hello,I am because of timer event")
}

sayHello('subramanian'); // block until function gets closed
delay(function (data) {
    console.log(data)
});
sayHello('foo'); // block until function gets closed
