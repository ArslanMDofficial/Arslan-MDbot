const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "script",
    alias: ["sc","repo","info"],
    desc: "bot repo",
    react: "🤖",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let repo =`
*╭──────────────●●►*
> *BOT OWNER:*
*|* *ArslanMD*

> *Arslan-MD REPO:*
*|* *https://github.com/https://whatsapp.com/channel/0029VarfjW04tRrmwfb8x306*

> *SUPPORT GROUP:*
*|* *https://whatsapp.com/channel/0029VarfjW04tRrmwfb8x306*
*╰──────────────●●►*

> *POWERED BY ArslanMD Official*
`
await conn.sendMessage(from, { text: repo ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: false,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363232588171807@newsletter',
      newsletterName: "ArslanMD",
      serverMessageId: 999
    },
externalAdReply: { 
title: 'Arslan-MD',
body: `${pushname}`,
mediaType: 1,
sourceUrl: "https://github.com/Arslan-MD-Official/Arslan-Md" ,
thumbnailUrl: "https://telegra.ph/file/2a06381b260c3f096a612.jpg" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})}catch(e){
console.log(e)
reply(`${e}`)
}
});
