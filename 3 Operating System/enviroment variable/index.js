// To create an environment variable :
const { exec } = require('child_process');
// exec(`powershell -command "setx a 'sujal' " `) 
exec(`powershell -command "[Environment]::SetEnvironmentVariable('a', $null, 'User')"`);
