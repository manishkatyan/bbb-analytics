#!/bin/bash
BIGBLUEBUTTON="/etc/bigbluebutton/bigbluebutton-release"
HTPASSED="/etc/nginx/.htpasswd"
POST_EVENT_SCRIPT="/usr/local/bigbluebutton/core/scripts/post_events/update_analytics_data.rb"


#set default user and password
if [ ! -f $HTPASSED ]; then
    sudo touch $HTPASSED
    bash ./bin/utils/create_or_update_user.sh admin admin123
fi


# Add post_event script
if [ ! -f $POST_EVENT_SCRIPT ]; then
    sudo cp -r ./update_analytics_data.rb  $POST_EVENT_SCRIPT
    echo "Adding post_event script"
fi

#Deploy bbb-analytics
if [ ! -f $BIGBLUEBUTTON ]; then 
    sudo mkdir -p /var/www/bigbluebutton-default/analytics
    sudo  cp -r ./index.html ./data.json /var/www/bigbluebutton-default/analytics
    sudo cp -r  /var/www/bigbluebutton-default/favicon.ico  /var/www/bigbluebutton-default/analytics/
    node ./bin/utils/exportData.js
    exit 0
 else
    echo "This is not a BigBlueButton Server"
    exit 1
fi