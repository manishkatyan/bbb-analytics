#!/bin/bash
BIGBLUEBUTTON="/etc/bigbluebutton/bigbluebutton-release"
HTPASSED="/etc/nginx/.htpasswd"
POST_EVENT_SCRIPT="/usr/local/bigbluebutton/core/scripts/post_events/update_analytics_data.rb"
NGINX_CONFIG="/etc/bigbluebutton/nginx/analytics-dashboard.nginx"
ROOT_PATH="/usr/lib/node_modules/bigbluebutton-analytics"

if [[ $(id -u) -ne 0 ]] ; then 
    echo "Please run as root" ; exit 1 ;
fi

if  ! which htpasswd > /dev/null; then
    echo "Installing apache2-utils"
    sudo apt-get install -y apache2-utils
fi

#set default user and password
if [ ! -f $HTPASSED ]; then
    sudo touch $HTPASSED
    bash $ROOT_PATH/bin/utils/create_or_update_user.sh admin admin123
else
    bash $ROOT_PATH/bin/utils/create_or_update_user.sh admin admin123
fi


# Add nginx config script
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



#Deploy bbb-analytics
if [  -f $BIGBLUEBUTTON ]; then 
    sudo mkdir -p /var/www/bigbluebutton-default/analytics
    sudo cp -r $ROOT_PATH/static/* /var/www/bigbluebutton-default/analytics
    sudo cp -r $ROOT_PATH/update_analytics_data.rb  $POST_EVENT_SCRIPT
    node $ROOT_PATH/bin/utils/exportData.js
    sudo chown -R bigbluebutton:bigbluebutton /var/www/bigbluebutton-default/analytics
    echo "Installation done."
    echo "You can access analytics-dashboard at https://<your-bbb>/analytics"
    exit 0
 else
    echo "This is not a BigBlueButton Server"
    exit 1
fi