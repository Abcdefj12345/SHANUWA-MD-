const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
const pdfUrl = 'https://i.ibb.co/FbG8tM5t/9-FLp8dz-Kr-R.jpg';
const ooo = "```"

cmd({
    pattern: "menu",
    desc: "To get the menu.",
    react: "📜",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let menu = {
main: '',
download: '',
group: '',
owner: '',
convert: '',
search: '',
fun: '',
other: '',
fun: '',
ai: ''
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `*៚❍* ${commands[i].pattern}\n`;
 }
}

let menumsg = `
👋 HELLO ${pushname},

function getGreetingLK() {
  const now = new Date().toLocaleString('en-US', { timeZone: 'Asia/Colombo' });
  const hour = new Date(now).getHours();

  if (hour >= 5 && hour < 11) return 'සුභ උදෑසනක්!';
  else if (hour >= 11 && hour < 14) return 'සුභ දවසක්!';
  else if (hour >= 14 && hour < 18) return 'සුභ සන්ධ්‍යා වේලාවක්!';
  else return 'සුභ රාත්‍රියක්!';
}

const menu = 
╭━━━〔 *ꜱʜᴀɴᴜᴡᴀ_ᴍᴅ* 〕━━━┈⊷
┃❄️┋🙋 *User:* User
┃❄️┋⏰ *Local Time (LK):* ${new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Colombo' })}
┃❄️┋💬 *Greeting:* ${getGreetingLK()}
╰━━━━━━━━━━━━━━━┈⊷
╭━━━━━━━━━━━━━━━━┈⊷
┃❄️┋⚙️ *Bot Info*
┃❄️┋├ Owner: *ꜱʜᴀɴᴜᴡᴀ*
┃❄️┋├ Baileys: *Multi Device*
┃❄️┋├ Type: *NodeJs*
┃❄️┋├ Platform:*HEROKU*
┃❄️┋├ Mode: *[public]*
┃❄️┋├ Prefix: *[.]* 
┃❄️┋└ Version:*1.0.0* 
╰━━━━━━━━━━━━━━━┈⊷

❒ *ᴛʜᴇ ꜱʜᴀɴᴜᴡᴀ_ᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ*
❒ *24 ʜᴏᴜʀꜱ ᴏɴʟɪɴᴇ ᴡᴏʀᴋɪɴɢ*

  *╭━━〔 ꜱʜᴀɴᴜᴡᴀ_ᴍᴅ ᴍᴇɴᴜ 🥷🇱🇰 〕━━○●➣*
  *╭───━━───━━─●◎➣*
  *┃🍃┋➊.➣ ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ 📥* 
  *┃🍃┋❷.➣ ɢʀᴏᴜᴩ ᴍᴇɴᴜ 👥* 
  *┃🍃┋❸.➣ ᴏᴡɴᴇʀ ᴍᴇɴᴜ 👨‍💻*
  *┃🍃┋❹.➣ ᴄᴏɴᴠᴇʀᴛ ᴍᴇɴᴜ 🔃*
  *┃🍃┋➎.➣ ᴏᴛʜᴇʀ ᴍᴇɴᴜ 😉*
  *┃🍃┋❻.➣ ꜱᴇᴀʀᴄʜ ᴍᴇɴᴜ 🔍*
  *┃🍃┋➐.➣ ꜰᴜɴ ᴍᴇɴᴜ 🤖*
  *╰─────●◎➣*
  *╰─━──━─━────●◎➣*

> *ᴩᴏᴡᴇʀᴇᴅ ʙʏ ꜱʜᴀɴᴜᴡᴀ ᴍᴅ* 🥷🇱🇰
╰━━━━━━━━━━━━━━━┈⊷

*ꜱᴇʟᴇᴄᴛ ᴀ ᴄᴀᴛᴀɢᴀʀʏ ɪɴ ʀᴇᴘʟʏ ᴛʜᴇ ɴᴜᴍᴇʀ✅*`

let downloadmenu = `
📥 ${ooo}ᴅᴏᴡɴʟᴏᴀᴅ ᴄᴏᴍᴍᴀɴᴅꜱ${ooo} 📥\n\n${menu.download}
`
 let groupmenu = `
👥 ${ooo}ɢʀᴏᴜᴘ ᴄᴏᴍᴍᴀɴᴅꜱ${ooo} 👥\n\n${menu.group}
`
let ownermenu = `
👨‍💻 ${ooo}ᴏᴡɴᴇʀ ᴄᴏᴍᴍᴀɴᴅꜱ${ooo} 👨‍💻\n\n${menu.owner}
`
let convertmenu = `
🔃 ${ooo}ᴄᴏɴᴠᴇʀᴛ ᴄᴏᴍᴍᴀɴᴅꜱ${ooo} 🔃\n\n${menu.convert}
`
 let othermenu = `
😉 ${ooo}ᴏᴛʜᴇʀ ᴄᴏᴍᴍᴀɴᴅꜱ${ooo} 😉\n\n${menu.other}
`
let searchmenu = `
🔍 ${ooo}ꜱᴇᴀʀᴄʜ ᴄᴏᴍᴍᴀɴᴅꜱ${ooo} 🔍\n\n${menu.search}
`  
let funmenu = `
🤖 ${ooo}ꜰᴜɴ ᴄᴏᴍᴍᴀɴᴅꜱ${ooo} 🤖\n\n${menu.fun}
`     
// Send the initial message and store the message ID
const sentMsg = await conn.sendMessage(from, {image: {url: config.BOT_IMG },caption: menumsg },{quoted: mek})
const messageID = sentMsg.key.id; // Save the message ID for later reference


// Listen for the user's response
conn.ev.on('messages.upsert', async (messageUpdate) => {
    const mek = messageUpdate.messages[0];
    if (!mek.message) return;
    const messageType = mek.message.conversation || mek.message.extendedTextMessage?.text;
    const from = mek.key.remoteJid;
    const sender = mek.key.participant || mek.key.remoteJid;

    // Check if the message is a reply to the previously sent message
    const isReplyToSentMsg = mek.message.extendedTextMessage && mek.message.extendedTextMessage.contextInfo.stanzaId === messageID;

    if (isReplyToSentMsg) {
        // React to the user's reply (the "1" or "2" message)
        await conn.sendMessage(from, { react: { text: '👾', key: mek.key } });


        if (messageType === '1') {
            // Handle option 1 (Audio File
  const sentMsg = await conn.sendMessage(from, {
    document: { url: pdfUrl }, // Path to your PDF file
    fileName: config.FILENAME, // Filename for the document
    mimetype: "application/pdf",
    fileLength: 99999999999999,
    caption: downloadmenu,
    contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterName: config.CHANNEL_NAME,
            newsletterJid: config.NEWSLETTER_ID,
        },
        externalAdReply: {
            title: config.TITLE,
            body: config.BODY,
            thumbnailUrl: config.BOT_IMG, // Use the URL directly here
            sourceUrl: config.WEBURL,
            mediaType: 1,
            renderLargerThumbnail: true
        }
    }
});
        }
            }
})
// Listen for the user's response
conn.ev.on('messages.upsert', async (messageUpdate) => {
    const mek = messageUpdate.messages[0];
    if (!mek.message) return;
    const messageType = mek.message.conversation || mek.message.extendedTextMessage?.text;
    const from = mek.key.remoteJid;
    const sender = mek.key.participant || mek.key.remoteJid;

    // Check if the message is a reply to the previously sent message
    const isReplyToSentMsg = mek.message.extendedTextMessage && mek.message.extendedTextMessage.contextInfo.stanzaId === messageID;

    if (isReplyToSentMsg) {
        // React to the user's reply (the "1" or "2" message)
        await conn.sendMessage(from, { react: { text: '👾', key: mek.key } });


        if (messageType === '2') {
            // Handle option 1 (Audio File)
const sentMsg = await conn.sendMessage(from, {
document: { url: pdfUrl }, // Path to your PDF file
    fileName: config.FILENAME, // Filename for the document
    mimetype: "application/pdf",
    fileLength: 99999999999999,
    caption: groupmenu,
    contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterName: config.CHANNEL_NAME,
            newsletterJid: config.NEWSLETTER_ID,
        },
        externalAdReply: {
            title: config.TITLE,
            body: config.BODY,
            thumbnailUrl: config.BOT_IMG, // Use the URL directly here
            sourceUrl: config.WEBURL,
            mediaType: 1,
            renderLargerThumbnail: true
        }
    }
});
        }
            }
})
// Listen for the user's response
conn.ev.on('messages.upsert', async (messageUpdate) => {
    const mek = messageUpdate.messages[0];
    if (!mek.message) return;
    const messageType = mek.message.conversation || mek.message.extendedTextMessage?.text;
    const from = mek.key.remoteJid;
    const sender = mek.key.participant || mek.key.remoteJid;

    // Check if the message is a reply to the previously sent message
    const isReplyToSentMsg = mek.message.extendedTextMessage && mek.message.extendedTextMessage.contextInfo.stanzaId === messageID;

    if (isReplyToSentMsg) {
        // React to the user's reply (the "1" or "2" message)
        await conn.sendMessage(from, { react: { text: '👾', key: mek.key } });


        if (messageType === '3') {
            // Handle option 1 (Audio File)
const sentMsg = await conn.sendMessage(from, {
document: { url: pdfUrl }, // Path to your PDF file
    fileName: config.FILENAME, // Filename for the document
    mimetype: "application/pdf",
    fileLength: 99999999999999,
    caption: ownermenu,
    contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterName: config.CHANNEL_NAME,
            newsletterJid: config.NEWSLETTER_ID,
        },
        externalAdReply: {
            title: config.TITLE,
            body: config.BODY,
            thumbnailUrl: config.BOT_IMG, // Use the URL directly here
            sourceUrl: config.WEBURL,
            mediaType: 1,
            renderLargerThumbnail: true
        }
    }
});
        }
            }
})
// Listen for the user's response
conn.ev.on('messages.upsert', async (messageUpdate) => {
    const mek = messageUpdate.messages[0];
    if (!mek.message) return;
    const messageType = mek.message.conversation || mek.message.extendedTextMessage?.text;
    const from = mek.key.remoteJid;
    const sender = mek.key.participant || mek.key.remoteJid;

    // Check if the message is a reply to the previously sent message
    const isReplyToSentMsg = mek.message.extendedTextMessage && mek.message.extendedTextMessage.contextInfo.stanzaId === messageID;

    if (isReplyToSentMsg) {
        // React to the user's reply (the "1" or "2" message)
        await conn.sendMessage(from, { react: { text: '👾', key: mek.key } });


        if (messageType === '4') {
            // Handle option 1 (Audio File)
const sentMsg = await conn.sendMessage(from, {
document: { url: pdfUrl }, // Path to your PDF file
    fileName: config.FILENAME, // Filename for the document
    mimetype: "application/pdf",
    fileLength: 99999999999999,
    caption: convertmenu,
    contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterName: config.CHANNEL_NAME,
            newsletterJid: config.NEWSLETTER_ID,
        },
        externalAdReply: {
            title: config.TITLE,
            body: config.BODY,
            thumbnailUrl: config.BOT_IMG, // Use the URL directly here
            sourceUrl: config.WEBURL,
            mediaType: 1,
            renderLargerThumbnail: true
        }
    }
});
            }
    }
            })
 // Listen for the user's response
conn.ev.on('messages.upsert', async (messageUpdate) => {
    const mek = messageUpdate.messages[0];
    if (!mek.message) return;
    const messageType = mek.message.conversation || mek.message.extendedTextMessage?.text;
    const from = mek.key.remoteJid;
    const sender = mek.key.participant || mek.key.remoteJid;

    // Check if the message is a reply to the previously sent message
    const isReplyToSentMsg = mek.message.extendedTextMessage && mek.message.extendedTextMessage.contextInfo.stanzaId === messageID;

    if (isReplyToSentMsg) {
        // React to the user's reply (the "1" or "2" message)
        await conn.sendMessage(from, { react: { text: '👾', key: mek.key } });


        if (messageType === '5') {
            // Handle option 1 (Audio File)
const sentMsg = await conn.sendMessage(from, {
document: { url: pdfUrl }, // Path to your PDF file
    fileName: config.FILENAME, // Filename for the document
    mimetype: "application/pdf",
    fileLength: 99999999999999,
    caption: othermenu,
    contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterName: config.CHANNEL_NAME,
            newsletterJid: config.NEWSLETTER_ID,
        },
        externalAdReply: {
            title: config.TITLE,
            body: config.BODY,
            thumbnailUrl: config.BOT_IMG, // Use the URL directly here
            sourceUrl: config.WEBURL,
            mediaType: 1,
            renderLargerThumbnail: true
        }
    }
});
    }
    }
        })
 // Listen for the user's response
conn.ev.on('messages.upsert', async (messageUpdate) => {
    const mek = messageUpdate.messages[0];
    if (!mek.message) return;
    const messageType = mek.message.conversation || mek.message.extendedTextMessage?.text;
    const from = mek.key.remoteJid;
    const sender = mek.key.participant || mek.key.remoteJid;

    // Check if the message is a reply to the previously sent message
    const isReplyToSentMsg = mek.message.extendedTextMessage && mek.message.extendedTextMessage.contextInfo.stanzaId === messageID;

    if (isReplyToSentMsg) {
        // React to the user's reply (the "1" or "2" message)
        await conn.sendMessage(from, { react: { text: '👾', key: mek.key } });


        if (messageType === '6') {
            // Handle option 1 (Audio File)
const sentMsg = await conn.sendMessage(from, {
document: { url: pdfUrl }, // Path to your PDF file
    fileName: config.FILENAME, // Filename for the document
    mimetype: "application/pdf",
    fileLength: 99999999999999,
    caption: searchmenu,
    contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterName: config.CHANNEL_NAME,
            newsletterJid: config.NEWSLETTER_ID,
        },
        externalAdReply: {
            title: config.TITLE,
            body: config.BODY,
            thumbnailUrl: config.BOT_IMG, // Use the URL directly here
            sourceUrl: config.WEBURL,
            mediaType: 1,
            renderLargerThumbnail: true
        }
    }
});
            }
    }
           })
 // Listen for the user's response
conn.ev.on('messages.upsert', async (messageUpdate) => {
    const mek = messageUpdate.messages[0];
    if (!mek.message) return;
    const messageType = mek.message.conversation || mek.message.extendedTextMessage?.text;
    const from = mek.key.remoteJid;
    const sender = mek.key.participant || mek.key.remoteJid;

    // Check if the message is a reply to the previously sent message
    const isReplyToSentMsg = mek.message.extendedTextMessage && mek.message.extendedTextMessage.contextInfo.stanzaId === messageID;

    if (isReplyToSentMsg) {
        // React to the user's reply (the "1" or "2" message)
        await conn.sendMessage(from, { react: { text: '👾', key: mek.key } });


        if (messageType === '7') {
            // Handle option 1 (Audio File)
const sentMsg = await conn.sendMessage(from, {
document: { url: pdfUrl }, // Path to your PDF file
    fileName: config.FILENAME, // Filename for the document
    mimetype: "application/pdf",
    fileLength: 99999999999999,
    caption: funmenu,
    contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterName: config.CHANNEL_NAME,
            newsletterJid: config.NEWSLETTER_ID,
        },
        externalAdReply: {
            title: config.TITLE,
            body: config.BODY,
            thumbnailUrl: config.BOT_IMG, // Use the URL directly here
            sourceUrl: config.WEBURL,
            mediaType: 1,
            renderLargerThumbnail: true
        }
    }
});
            }
            }
})


} catch (e) {
console.log(e);
reply(`${e}`);
}
});


