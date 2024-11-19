const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')


cmd({
    pattern: "song",
    desc: "download songs",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("please send me url or title")
const search = await yts(q)
const data = search.videos[0];
const url = data.url

let desc = `
🔥 *Arslan-Md SONG DOWNLOADER* 🔥

tittle: ${data.title}
description: ${data.description}
time: ${data.timestamp}
ago: ${dara.ago}
views: ${data.views}

MADE BY ArslanMD ❤️
`
await conn.sendMassage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});
//download audio

let down = await fg.yta(url)
let downloadUrl = down.dl_url


// send audio massage 
await conn.sendMassage(from,{audio: {url:downloadUrl},mimetype:"audio/mpeg"},{quoted:mek})




  
}catch(e){
comsole.log(e)
reply(`$(e)`)
}
})
  
