#!/usr/bin/env node

const fs = require('fs-extra')
const ANALYTICS_FOLDER_PATH = '/var/bigbluebutton/learning-dashboard'

const data = {
    analytics: []
}

fs.readdirSync(ANALYTICS_FOLDER_PATH).filter(function (meetingId) {
    let token
    if (meetingId.length > 40) {
        token = fs.readdirSync(`${ANALYTICS_FOLDER_PATH}/${meetingId}`)
        if (token) {
            const name = fs.readJsonSync(`${ANALYTICS_FOLDER_PATH}/${meetingId}/${token[0]}/learning_dashboard_data.json`).name
            data.analytics.push({ name, meetingId, token: token[0] })
        }
    }
})
fs.writeJsonSync('/var/www/bigbluebutton-default/analytics/data.json', data)
