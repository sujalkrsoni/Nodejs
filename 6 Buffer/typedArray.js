let unit8Array = new Uint8Array(1.9 * 1024 * 1024 * 1024) // creating unsigned memory for 2gb 

for(let i = 0 ; i < unit8Array.length ; i++){
    unit8Array[i] = i;
}

console.log(unit8Array)

