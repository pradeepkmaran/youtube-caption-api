const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT;
const HOST = process.env.HOST;
const API_KEY = process.env.API_KEY;
const END_POINT = process.env.END_POINT;

app.get('/', async(req, res) => {
    return res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>Welcome to Caption Fetcher</title>
          <style>
              body {
                  font-family: Arial, sans-serif;
                  background-color: #f4f4f4;
                  margin: 0;
                  padding: 0;
                  text-align: center;
              }
              header {
                  background-color: #4CAF50;
                  color: white;
                  padding: 20px;
                  font-size: 2rem;
              }
              .container {
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                  margin-top: 50px;
              }
              .content {
                  background-color: white;
                  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                  padding: 30px;
                  border-radius: 10px;
                  width: 80%;
                  max-width: 600px;
              }
              h1 {
                  color: #333;
                  font-size: 2rem;
                  margin-bottom: 20px;
              }
              p {
                  font-size: 1.2rem;
                  color: #666;
                  line-height: 1.5;
              }
              footer {
                  position: absolute;
                  bottom: 20px;
                  width: 100%;
                  font-size: 0.9rem;
                  color: #888;
              }
          </style>
      </head>
      <body>
          <header>
              Welcome to the Caption Fetcher API!
          </header>
          <div class="container">
              <div class="content">
                  <h1>You've landed on the Home Page!</h1>
                  <p>To fetch captions for a YouTube video, please use the following endpoint:</p>
                  <p><code>/captions/:videoID</code></p>
                  <p>Simply replace <code>:videoID</code> with the actual YouTube video ID to retrieve the captions.</p>
              </div>
          </div>
          <footer>
              <p>&copy; 2024 Caption Fetcher API. All rights reserved.</p>
          </footer>
      </body>
      </html>
    `);
});

app.get('/caption/:videoId', async (req, res) => {
    const videoId = req.params.videoId;

    if (!videoId) {
      return res.status(400).json({ message: 'Video ID is required' });
    }
    
    const options = {
      method: 'GET',
      url: `${END_POINT}${videoId}`,
      params: {
        lang: 'en',
        format: 'json'
      },
      headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': HOST
      }
    };
    
    try {
      const response = await axios.request(options);
      res.json(response.data);
    } catch (error) {
      console.error(error);
    }
});

app.listen(PORT, () => {
  console.log(`Server is running...`);
});
