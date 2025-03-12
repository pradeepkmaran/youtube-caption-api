const { GoogleGenerativeAI } = require('@google/generative-ai');
const { json, response } = require('express');

require('dotenv').config();

// const HOST = process.env.HOST;
// const API_KEY = process.env.API_KEY;
// const HOST_END_POINT = process.env.END_POINT;

const genAI = new GoogleGenerativeAI("AIzaSyC3c1fpAsMRS04oAiFxfzbs4-izG-luyOw");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function translate(json, lang) {
    try {
        const prompt = `You are a great translator. You know all languages of the world. From the json provided to you, select the text and translate it into "${lang}" in local slang. Return the result in the similar json format without any changes in the remaining content. I don't want any other text from you apart from the json. \n\n "${JSON.stringify(json)}. Dont return any additional extra non-white space characters"`;

        const result = await model.generateContent(prompt);
        let responseText = result.response.candidates[0].content.parts[0].text.trim();
        responseText = responseText.replace(/^```json|```$/g, "").trim();

        console.log("Gemini Result:", responseText);

        try {
            return JSON.parse(responseText);
        } catch (error) {
            console.error("Error parsing translated response:", error);
            return json;
        }
    } catch (error) {
        console.error("Error during translation:", error);
        return "Error";
    }
}

const languageController = async (req, res) => {
    try {
        const jsonData = req.body;
        const lang = req.query.lang;

        if (!jsonData || !lang) {
            return res.status(400).json({ error: "Invalid request: Missing JSON data or language parameter." });
        }

        console.log(`Translating video ID: ${videoId} to language: ${lang}`);
        const translatedJson = await translate(jsonData, lang);

        res.status(200).json({
            success: true,
            videoId,
            translatedData: translatedJson,
        });
    } catch (error) {
        console.error("Error in languageController:", error);
        res.status(500).json({ error: "Internal server error." });
    }
};

module.exports = languageController;
