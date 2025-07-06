const { exec } = require('child_process');
// exec(`powershell -command "setx variable_name 'sujal' /M" `) // for system varibale env
// exec(`powershell -command "setx variable_name 'sujal' " `) // for user variable env

// to unset variale => env -u PS1 node --inspect env.js ( here unseting ps1 value. )
// we can do multiple unset => env -u PS1 -u PS2 , THEN RUN 

const environmentVariable = process.env
setInterval(() => {
    console.log(environmentVariable)
}, 5000);

