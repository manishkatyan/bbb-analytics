#!/usr/bin/env node

const { spawn, exec } = require("child_process");
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers');
const { exit } = require("process");
const argv = yargs(hideBin(process.argv)).argv
let PATH = '/usr/lib/node_modules/bigbluebutton-analytics'


try {
    if (!argv.deploy && !argv.username && !argv.password && !argv["add-user"]) {
        console.log("Please provide atleast one argument")
        process.exit()
    }
    if (argv.deploy) {
        excuteCmd([`${PATH}/bin/utils/post_install.sh`])
    }

    if (argv["add-user"]) {
        if (argv.username && argv.password) {
            excuteCmd(['./bin/utils/create_or_update_user.sh', argv.username, argv.password])

        }
        else {
            console.log("Please provide both username and password")
            process.exit()
        }
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

