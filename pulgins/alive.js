const { cmd } = require('../command')
const fs = require('fs')
const path = require('path')

cmd({
    pattern: "alive",
    alias: ["hi", "bot"],
    desc: "Check bot status",
    category: "main",
    filename: __filename
},
async (conn, m, msgInfo) => {
    const { from, pushname } = msgInfo

    // 🖼️ Optional image or GIF
    const imagePath = path.join(__dirname, 'https://i.ibb.co/FbG8tM5t/9-FLp8dz-Kr-R.jpg') // or .gif
    const imageBuffer = fs.existsSync(imagePath) ? fs.readFileSync(imagePath) : null

    const caption = `💦 *𝗦𝗛𝗔𝗡𝗨𝗪𝗔 𝗠𝗗 𝗔𝗟𝗜𝗩𝗘 𝗡𝗢𝗪* 🐰

👋 Hello, *${pushname}*.
I am active and running smoothly ✅

╭───────────────◉
│ ⚙️ *Uptime* : ${process.uptime().toFixed(0)}s
│ 🔋 *Status* : Online
│ 👑 *Owner* : Shanuka
╰───────────────◉

Powerd by Shanuwa Md

📌 Type *.menu* to see available commands.`

    const buttons = [
        { buttonId: ".menu", buttonText: { displayText: "💡 MENU" }, type: 1 },
        { buttonId: ".owner", buttonText: { displayText: "👑 OWNER" }, type: 1 },
        { buttonId: ".support", buttonText: { displayText: "🌐 SUPPORT" }, type: 1 },
    ]

    const buttonMessage = {
        caption,
        footer: "✨ Alive Check by SHANUWA-MD",
        buttons,
        headerType: imageBuffer ? 4 : 1
    }

    if (imageBuffer) {
        buttonMessage.image = imageBuffer
    }

    await conn.sendMessage(from, buttonMessage, { quoted: m })
})