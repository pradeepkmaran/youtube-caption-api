const express = require('express');
const axios = require('axios');
const cors = require('cors'); 
const homeController = require('./Controllers/HomeController');
const captionController = require('./Controllers/CaptionController');
const languageController = require('./Controllers/LanguageController');

require('dotenv').config();
const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', homeController);

app.get('/caption/:videoId', captionController);

app.get('/translate', languageController);

app.listen(PORT, () => {
  console.log(`Server is running..`);
});
