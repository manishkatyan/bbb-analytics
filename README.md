# BigBlueButton-Analytics</h1>

You can easily access analytics such as attendance, insights into usage of audio/video/chat and activity score of attendees during your BigBlueButton sessions.

BONUS: You can also view all recordings!

With analytics, we hope that you would be able to improve the quality of your online classes 🎉
  
<a href="https://www.npmjs.com/package/bigbluebutton-analytics">
<img alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/manishkatyan/bbb-analytics?label=npm&logo=npm">
</a>
<a href="https://www.npmjs.org/package/bigbluebutton-analytics">
<img src="https://img.shields.io/npm/dm/bigbluebutton-analytics.svg" alt="Monthly download on NPM" />
</a>

<br/><br/>

## ✨ Features

- **Analytics**: Detailed insights into attendance, audio/video/chat usage and activity scores of attendees
- **On-demand access**: Unlike the default BigBlueButton install, analytics is available even after the classes end
- **Recordings**: View the recordings of all your BigBlueButton online classes as well
- **Quick installation**:  Simply install BBB-Analytics npm package on your BigBlueButton sever
- **Easy & Convenient**: Easily sort and search through records with paginations
- **Secured**: password-protected page to prevent unauthorized access

<br/><br/>

<img style="width: 100%; height: auto;" src="https://higheredlab.com/wp-content/uploads/bigbluebutton-analytics.gif" alt="bbb-class" /> <br/>

<br/><br/>

## 🖐 Requirements

To view analytics, you would need a BigBlueButton 2.4.4 server.

<br/><br/>

## ⏳ Installation

```bash
# Install bbb-analytics CLI globally
npm i -g bigbluebutton-analytics

#Install dependecies
bbb-analytics --deploy

```

After successful installtion you should be able to access `https://<bbb.example.com/analytics/>`

### How to login

When you visit the analytics URL - `https://<bbb.example.com/analytics/>` - you would be asked to enter username and password. Please use the default username and password mentioned below. 

```bash
username: admin
password: admin123
```

> **Don't forget to change your password** using the command below:

```bash
#To create or update username/password

bbb-analytics --add-user --username=<username> --password=<password>
```

## Artificial Intelligence powered Online Classes on BigBlueButton
Use live transcription, speech-to-speech translation and class notes with topics, summaries and sentiment analysis to guarantee the success of your online classes

### Transcription [DEMO](https://higheredlab.com/)
Help your students understand better by providing automated class notes
1. MP4 class recordings with subtitles
2. Full transcription of the class with topics, summary and sentiments

### Translation [DEMO](https://higheredlab.com/)
Speech-to-speech translate your classes in real-time into 100+ languages
1. Hear real-time translation of the class in any of 100+ language such as French, Spanish and German
2. View the captions in translated languages

## BigBlueButton-as-a-Service

Everything you need for online classes at scale on BigBlueButton, starting at $12 / month:
1. HD video
2. View attendance
3. Stream on YouTube
4. Integrate with Moodle
5. Upgrade/cancel anytime

[Click here to get started](https://higheredlab.com/pricing/)

<br/><br/>
## 📝 License

[MIT License](LICENSE.md) 

Copyright (c) [HigherEdLab.com](https://higheredlab.com/)
