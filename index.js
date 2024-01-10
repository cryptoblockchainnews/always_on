
const { exec } = require('child_process');
 
// Counts the number of directory in
// current working directory
exec('nohup node mi.js &', (error, stdout, stderr) => {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }
    console.log(`${stdout}`);
    if (stderr != "")
        console.error(`stderr: ${stderr}`);
});

const keep_alive = require('./keep_alive.js')
