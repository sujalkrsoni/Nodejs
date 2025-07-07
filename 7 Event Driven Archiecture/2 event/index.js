import eventEmitter from "events"

const emiter = new eventEmitter;

// console.log(emiter) // this is an object 
// console.log(emiter._events) // there will be all events inside this 



emiter.on("click", ()=> {
    console.log("event perfomed ! ") // click is event name , through on , we try to listen an event
})

// to perform event 
emiter.emit("click") // event performed ! 


// to perform an event only one time then we use once 
emiter.once("abc" ,(a, b) => {
    console.log("only one time this event perform", a, b)
})

emiter.emit("abc", 10,20) // after calling 1 time , this event will delete ! 
emiter.emit("abc", 10,20) // this time event is not performed ! 
emiter.emit("click") // this will work 



// we can also use mutliple same event 
emiter.on("y", ()=> {
    console.log("y event is fired ! ")
})
emiter.on("y", ()=> {
    console.log("y event is fired ! ")
})
emiter.on("y", ()=> {
    console.log("y event is fired ! ")
})

emiter.emit("y")

console.log(emiter._events) // prints all events as an array, but once event has deleted 
