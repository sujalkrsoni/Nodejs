class MyEventEmitter {
  constructor() {
    this._events = {};
  }
  on(eventName, handler) {
    if (this._events[eventName]) {
      this._events[eventName].push(handler);
    } else {
      this._events[eventName] = [handler];
    }
  }

  once(eventName, handler){
    if (!(this._events[eventName])) {
      this._events[eventName] = [handler];
    } 
  }

  emitt(eventName,...args){
    if(this._events[eventName]){
        this._events[eventName]?.forEach((event) => {
            event(...args);
        })
    }
  }  
}

const emitter = new MyEventEmitter();

emitter.on("click",(a,b)=> {
    console.log("Event fired ! ",a,b)
})
emitter.on("click",(a,b)=> {
    console.log("Event fired ! ",a,b)
})
emitter.on("click",(a,b)=> {
    console.log("Event fired ! ",a,b)
})

emitter.once("abc", (a,b)=> {
    console.log("once fired ! ",a,b)
})

emitter.emitt("click",20,5);
emitter.emitt("click",8,19);

// emitter.emitt("abc",20,5);
// emitter.emitt("abc",8,19);

