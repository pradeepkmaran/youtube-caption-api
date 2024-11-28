const { GoogleGenerativeAI } = require('@google/generative-ai');
const { json } = require('express');

require('dotenv').config();

const HOST = process.env.HOST;
const API_KEY = process.env.API_KEY;
const HOST_END_POINT = process.env.END_POINT;

const genAI = new GoogleGenerativeAI({ apiKey: process.env.AI_API_KEY });
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function translate(json, lang) {
    try {
        const prompt = `You are a great translator. You know all languages of the world. From the json provided to you, select the text and translate it into "${lang}" in local slang. Return the result in the similar json format without any changes in the remaining content. I don't want any other text from you apart from the json \n\n "${JSON.stringify(json)}"`;

        const result = await model.generateContent(prompt);

        if (result && result.response && result.response.text) {
            return result.response.text.trim();
        } else {
            console.error("No translation found in the response.");
            return JSON.stringify(json);
        }
    } catch (error) {
        console.error("Error during translation:", error);
        return JSON.stringify(json);
    }
}

const languageController = async (req, res) => {
    const json = req.body;
    const lang = req.params.lang;
    const videoId = req.params.videoId;

    return res.send(`Woops! Still under development :(`);

    // Check if the language is available in caption API
    // This is done because the caption API is cheaper than AI API
    // If there's no caption in the language required, use AI to translate
};

module.exports = languageController;
