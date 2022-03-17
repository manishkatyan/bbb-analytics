# BigBlueButton-Analytics</h1>

You can easily access analytics such as attendance, insights into usage of audio/video/chat and activity score of attendees during your BigBlueButton sessions.

BONUS: You can also view all recordings!
  
<a href="https://www.npmjs.com/package/bigbluebutton-analytics">
<img alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/manishkatyan/bbb-analytics?label=npm&logo=npm">
</a>
<a href="https://www.npmjs.org/package/bigbluebutton-analytics">
<img src="https://img.shields.io/npm/dm/bbb-analytics.svg" alt="Monthly download on NPM" />
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

<img style="width: 100%; height: auto;" src="https://higheredlab.com/wp-content/uploads/bigbluebutton-analytics.png" alt="bbb-class" /> <br/>

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

After succussfull installtion you should be able to access `https://<bbb.example.com/analytics/>`

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

<br/><br/>

With analytics, we hope that you would be able to improve the quality of your online classes 🎉

<br/><br/>

## 📝 License

[MIT License](LICENSE.md) 

Copyright (c) [HigherEdLab.com](https://higheredlab.com/)
