const connectSSH = require ('./connect')
const {spawn} = require("child_process");

const getSshDBStats = async (dbName) =>{
    try {
        const child = spawn('./ssh/sshCMD/getdbsize.sh', [dbName]);
        // Log the output of the shell script
        child.stdout.on('data', (data) => {
            console.log(`stdout: ${data}`);
        });
        child.stderr.on('data', (data) => {
            console.error(`stderr: ${data}`);
        });

        child.on('close', (code) => {
            console.log(`child process exited with code ${code}`);
        });

    } catch (err) {
        console.log(`Error: ${err}`);
    }
}

const getSshVolumeStats = async (volumeName, username) => {
    try {
        const child = spawn('/sshCMD/getprojectsize.sh', [volumeName, username]);
        // Log the output of the shell script
        child.stdout.on('data', (data) => {
            console.log(`stdout: ${data}`);
        });
        child.stderr.on('data', (data) => {
            console.error(`stderr: ${data}`);
        });

        child.on('close', (code) => {
            console.log(`child process exited with code ${code}`);
        });

    } catch (err) {
        console.log(`Error: ${err}`);
    }
}

module.exports = {
    getSshDBStats,
    getSshVolumeStats,
};

