#!/bin/bash
BIGBLUEBUTTON="/etc/bigbluebutton/bigbluebutton-release"
HTPASSED="/etc/nginx/.htpasswd"
POST_EVENT_SCRIPT="/usr/local/bigbluebutton/core/scripts/post_events/update_analytics_data.rb"
NGINX_CONFIG="/etc/bigbluebutton/analytics-dashboard.nginx"
ROOT_PATH="$(npm root -g)/bigbluebutton-analytics"


#set default user and password
if [ ! -f $HTPASSED ]; then
    sudo touch $HTPASSED
    bash $ROOT_PATH/bin/utils/create_or_update_user.sh admin admin123
fi


# Add post_event script
if [  ! -f $POST_EVENT_SCRIPT ]; then
    sudo cp -r $ROOT_PATH/update_analytics_data.rb  $POST_EVENT_SCRIPT
    echo "Adding post_event script"
fi

# Add nginx config script
if [  ! -f $NGINX_CONFIG ]; then
    cat << EOF > $NGINX_CONFIG
        location /analytics {
            auth_basic "Restricted Content";
            auth_basic_user_file /etc/nginx/.htpasswd;
            root /var/www/bigbluebutton-default/;
        }
EOF
     echo "Adding nginx-config"
     echo "reloading the nginx"
     nginx -t && nginx -s reload

fi

#Deploy bbb-analytics
if [  -f $BIGBLUEBUTTON ]; then 
    sudo mkdir -p /var/www/bigbluebutton-default/analytics
    sudo  cp -r $ROOT_PATH/index.html $ROOT_PATH/data.json /var/www/bigbluebutton-default/analytics
    sudo cp -r  /var/www/bigbluebutton-default/favicon.ico  /var/www/bigbluebutton-default/analytics/
    node $ROOT_PATH/bin/utils/exportData.js
    echo "Installation done."
    echo "You can access analytics-dashboard at https://<your-bbb>/analytics"
    exit 0
 else
    echo "This is not a BigBlueButton Server"
    exit 1
fi