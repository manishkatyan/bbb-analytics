const fs = require('fs')
const express = require('express');
require('dotenv').config()
const PORT = 3000;
const BASE_URL = process.env.BASE_URL

const app = express();
app.use(express.json({limit: '1mb'}));
app.use(express.urlencoded({extended: true,limit: '1mb'}));
app.use(express.static('public'));

app.post('/api/v1/analytics/', async (req, res) => {
  let data = {}
  let meetingId, language, token
  meetingId = req.body.meeting_id
  language = req.body.language ? req.body.language : "en"
  try {
     token = await fs.readdirSync(`/usr/src/app/learning-dashboard/${meetingId}`)
     data["analytics_url"] = `${BASE_URL}/learning-dashboard/?meeting=${meetingId}&report=${token}&lang=${language}`
     await  res.json(data);
    } catch (e) {
      res.sendStatus(404);
    }
  });

app.get('/api/v1/check',  (req, res) => {
   res.json({'status': 'ok'})
})

app.listen(PORT, () => {
    console.log("Server running on port 3000");
   });
