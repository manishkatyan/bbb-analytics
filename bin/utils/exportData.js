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
            const raw_data = fs.readJsonSync(`${ANALYTICS_FOLDER_PATH}/${meetingId}/${token[0]}/learning_dashboard_data.json`)

            const name = raw_data.name

            const createdOn = new Date(raw_data.createdOn).toLocaleString()

            const endedOn = new Date(raw_data.endedOn).toLocaleString()

            data.analytics.push({ name, createdOn, endedOn, token: token[0], meetingId })
        }
    }
})
fs.writeJsonSync('/var/www/bigbluebutton-default/analytics/data.json', data)
