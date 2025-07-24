const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
MONGODB: process.env.MONGODB || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority", //add your mongodb url        
MODE: process.env.MODE || "private",  // Add Your Bot Mode (groups/privet/public)
PREFIX: process.env.PREFIX || ".",   // Add Your Custom Prefix 
OWNER_REACT: process.env.OWNER_REACT || "true", // true or false
BOT_NAME: process.env.BOT_NAME || "𝚂𝙷𝙰𝙽𝚄𝚆𝙰 𝙼𝙳",
AUTO_VOICE: process.env.AUTO_VOICE || "true", // true or false
AUTO_STICKER: process.env.AUTO_STICKER || "true", // true or false
AUTO_REPLY: process.env.AUTO_REPLY || "true", // true or false
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true", // true or false
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true", // true or false
ANTI_LINK: process.env.ANTI_LINK || "true", // true or false
ANTI_BAD: process.env.ANTI_BAD || "true",// true or false
FAKE_RECORDING: process.env.FAKE_RECORDING || "true", // true or false
AUTO_REACT: process.env.AUTO_REACT || "true", // true or false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true", // true or false
FILENAME: process.env.FILENAME || "SHANUWA-MD",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/FbG8tM5t/9-FLp8dz-Kr-R.jpg", 
CHANNEL_NAME: process.env.CHANNEL_NAME || "SHANUWA-MD",
NEWSLETTER_ID: process.env.NEWSLETTER_ID || "120363420907749813@newsletter",
TITLE: process.env.TITLE || "SHANUWA-MD",
BODY: process.env.BODY || "CREATED BY SHANUKA SHAMEEN",
WEBURL: process.env.WEBURL|| "https://github.com/",
BOT_IMG: process.env.BOT_IMG || "https://i.ibb.co/FbG8tM5t/9-FLp8dz-Kr-R.jpg" 
};
