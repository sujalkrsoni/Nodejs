#!/usr/bin/env node

import fs from "fs/promises"


setInterval(()=>{
    let time = new Date();
    time = time.toLocaleTimeString()
    fs.writeFile("./time.txt",time)
},1000)
