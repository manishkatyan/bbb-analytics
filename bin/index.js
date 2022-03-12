#!/usr/bin/env node

const { spawn } = require("child_process");
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers');
const { exit } = require("process");
const argv = yargs(hideBin(process.argv)).argv
try {
    if (!argv.deploy && !argv.username && !argv.password) {
        console.log("Please provide atleast one argument")
        process.exit()
    }
    if (argv.deploy) {
        excuteCmd(['./bin/utils/post_install.sh'])
        console.log(`Succussfully deployed analytics at /var/www/bigbluebutton-default/analytics.\nYou can access it by visiting https://<your bbb domain>/analytics`)
        console.log(`Default credentials are: \nusername: admin\npassword: admin123`)
        process.exit()
    }

    if (argv.username && argv.password) {
        excuteCmd(['./bin/utils/create_or_update_user.sh', argv.username, argv.password])

    }
    else {
        console.log("Please provide both username and password")
        process.exit()
    }
} catch (error) {
    console.log(error.message)

}

function excuteCmd(cmd) {
    const ls = spawn("bash", cmd);
    ls.stdout.on("data", data => {
        console.log(`${data}`);
    });
    ls.stderr.on("data", data => {
        console.log(`${data}`);
    });
    ls.on('error', (error) => {
        console.log(`error: ${error.message}`);
    });
}

