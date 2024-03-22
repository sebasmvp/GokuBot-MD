let handler = m => m 
handler.all = async function (m) {
let setting = global.db.data.settings[this.user.jid]
        
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) { process.send('uptime')
_muptime = await new Promise(resolve => { process.once('message', resolve) 
setTimeout(resolve, 2000) }) * 1000}
let uptime = clockString(_uptime)
let bio = `${[`ᗴՏTᗴ ᑌՏᑌᗩᖇIO ᗴՏ ᑌᑎ ᗷOT 🟢 𝙰𝚃𝙸𝚅𝙾 𝙳𝚄𝚁𝙰𝙽𝚃𝙴: ${uptime}`, `𝐄𝐬𝐭𝐞 𝐔𝐬𝐮𝐚𝐫𝐢𝐨 𝐔𝐬𝐚 𝐆𝐨𝐤𝐮𝐁𝐨𝐭-𝐌𝐃 🐈💖`, `𝐑𝐞𝐠𝐚𝐥𝐚𝐥𝐞 𝐔𝐧𝐚 𝐄𝐬𝐭𝐫𝐞𝐥𝐥𝐚 𝐀 𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭𝐋𝐢𝐭𝐞-𝐌𝐃`, `𝙲𝚁𝙴𝙳𝙸𝚃𝙾𝚂 𝙰 𝙳𝙸𝙴𝙶𝙾 - 𝚂𝙰𝙺𝚄𝚁𝙰𝙱𝙾𝚃𝙻𝙸𝚃𝙴-𝙼𝙳 😼🌻`, `𝑹𝒆𝒈𝒂𝒍𝒂 𝑼𝒏𝒂 𝑬𝒔𝒕𝒓𝒆𝒍𝒍𝒂 𝑨 𝑮𝒐𝒌𝒖𝑩𝒐𝒕-𝑴𝑫 🌺🚀`, `𝑆𝑜𝑚𝑜𝑠 𝐵𝑜𝑡 𝑂 𝑆𝑢𝑏𝑏𝑜𝑡?, 𝐶𝑜𝑚𝑝𝑟𝑢𝑒𝑏𝑎𝑙𝑜 𝑈𝑠𝑎𝑛𝑑𝑜 #𝑏𝑜𝑡𝑠`, `Asᴛᴇ sᴜʙʙᴏᴛ ᴄᴏɴ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ: #botclone`, `𝗦𝗶𝗴𝘂𝗲𝗻𝗼𝘀 𝗘𝗻 𝗧𝗼𝗱𝗮𝘀 𝗟𝗮𝘀 𝗥𝗲𝗱𝗲𝘀.`, `𝘚𝘰𝘮𝘰𝘴 𝘉𝘰𝘵𝘴 𝘜𝘯𝘪𝘥𝘰𝘴.`, `𝘽𝙮 𝙂𝙤𝙠𝙪𝘽𝙤𝙩 🌹`, `𝘾𝙧𝙚𝙙𝙞𝙩𝙞 𝙎𝙖𝙠𝙪𝙧𝙖𝘽𝙤𝙩 🌻`, `𝕲𝖔𝖐𝖚𝕭𝖔𝖙-𝕸𝕯 - 𝖠𝖼𝗍𝗂𝗏𝗈: ${uptime}`, `𝔼𝕤𝕥𝕖 𝔹𝕠𝕥 𝔼𝕤𝕥𝕒 𝔼𝕟 ℂ𝕠𝕟𝕤𝕥𝕣𝕦𝕔𝕔𝕚𝕠𝕟 🌹🌻`, `ᗪIᖴᖇᑌTᗩ ᗪᗴᒪ ᗷOT🌺🌹`, `𝗛𝗼𝗹𝗮, 𝗡𝗼 𝗘𝘀𝗰𝗿𝗶𝗯𝗮𝘀 𝗔𝗹 𝗣𝗿𝗶𝗯𝗮𝗱𝗼.`].getRandom()}`
await this.updateProfileStatus(bio).catch(_ => _)
//await this.updateProfilePicture(gokuImg.getRandom()).catch(_ => _)
setting.status = new Date() * 1
} 
export default handler

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, ' » ', h, ' ・ ', m, ' ・ ', s].map(v => v.toString().padStart(2, 0)).join('') 
} 