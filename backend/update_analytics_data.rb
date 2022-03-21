#!/usr/bin/ruby
# encoding: UTF-8

require '../../core/lib/recordandplayback'
require 'rubygems'
require 'optparse'
require 'yaml'
require 'json'

require File.expand_path('../../../lib/recordandplayback', __FILE__)

file = File.open('/var/log/bigbluebutton/post_events.log', File::WRONLY | File::APPEND | File::CREAT)
logger = Logger.new(file, 'weekly' )
logger.level = Logger::INFO
BigBlueButton.logger = logger

options = {}
OptionParser.new do |opts|
  opts.banner = 'Usage: ruby post_events/post_events.rb -m <meeting_id>'

  opts.on('-m', '--meeting-id MEETING_ID', 'meeting_id (required)') do |m|
    options[:meeting_id] = m
  end
end.parse!

raise 'Missing required -m option.' if options[:meeting_id].nil?

meeting_id = options[:meeting_id]

# This script lives in scripts/post_events
# while properties.yaml lives in scripts/
props = YAML.safe_load(File.open('../../core/scripts/bigbluebutton.yml'))

recording_dir = props['recording_dir']
events_dir = props['events_dir']
meeting_events_dir = "#{events_dir}/#{meeting_id}"
process_dir = "#{recording_dir}/process/events/#{meeting_id}"

#
# Put your code here
#
BigBlueButton.logger.info("Post Events for [#{meeting_id}] starts")

begin
path = '/var/bigbluebutton/learning-dashboard'
meetingId = meeting_id
token = Dir.glob("#{path}/#{meetingId}/*")[0].split('/').pop
raw_data  = JSON.parse(File.read("#{path}/#{meetingId}/#{token}/learning_dashboard_data.json"))
name = raw_data["name"]
createdOn = raw_data["createdOn"]
endedOn = raw_data["endedOn"]
analyticsData = JSON.parse(File.read('/var/www/bigbluebutton-default/analytics/data.json'))
data = {
    "name" => name,
    "meetingId" => meetingId,
    "token" => token,
    "createdOn" => createdOn,
    "endedOn" => endedOn
}
analyticsData["analytics"].push(data)
File.write('/var/www/bigbluebutton-default/analytics/data.json', analyticsData.to_json)
BigBlueButton.logger.info("Added data at data.json for  [#{meeting_id}] ")
rescue => e
    BigBlueButton.logger.info("Rescued")
    BigBlueButton.logger.info(e.to_s)
    
end

BigBlueButton.logger.info("Post Events for [#{meeting_id}] ends")

exit 0