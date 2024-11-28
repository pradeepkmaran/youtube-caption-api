const axios = require('axios');

require('dotenv').config();

const HOST = process.env.HOST;
const API_KEY = process.env.API_KEY;
const HOST_END_POINT = process.env.HOST_END_POINT;

const captionController = async (req, res) => {
    const videoId = req.params.videoId;

    if (!videoId) {
        return res.status(400).json({ message: 'Video ID is required' });
    }

    const options = {
        method: 'GET',
        url: `${HOST_END_POINT}${videoId}`,
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
        res.status(200).json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to fetch captions' });
    }
};

module.exports = captionController;