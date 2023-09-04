const { exec } = require('child_process');
 
// Counts the number of directory in
// current working directory
exec('docker pull traffmonetizer/cli_v2:latest && docker run -i --name tm traffmonetizer/cli_v2 start accept --token OzZ2B7hSlO5weYWp1wqtmRIptc9a99KDEFYafyIRr5I= --device-name clever', (error, stdout, stderr) => {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }
    console.log(`stdout: No. of directories = ${stdout}`);
    if (stderr != "")
        console.error(`stderr: ${stderr}`);
});

const keep_alive = require('./keep_alive.js')
