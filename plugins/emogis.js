let handler = async(m, { conn, text, usedPrefix, command }) => {
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = conn.getName(who)
      const sms = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: sms});
const pp = './storage/logos/Menu2.jpg'

let love = `> Mensaje: ${text} 🐒\n\n*El puto de ${name} busca marido. ⭐️*`

conn.sendMessage(m.chat, {text: love, mentions: [m.sender]}, {quoted: sms})

//conn.reply(m.chat, `*🚩 Ocurrió un fallo*`)

}
handler.help = ['decir']
handler.tags = ['penelope']
handler.command = /^(decir|emogis|di)$/i

//handler.register = true

export default handler

//handler.register = true

//export default handler


/*let handler = async(m, { conn, text, usedPrefix, command }) => {
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = conn.getName(who)
const pp = './storage/logos/Menu2.jpg'

let love = `🚩 𝗨𝗡 𝗣𝗢𝗥𝗖𝗘𝗡𝗧𝗔𝗝𝗘 𝗗𝗘 𝗔𝗠𝗢𝗥

╭◈ ━━━━━━━ ⸙ ━━━━━━━ ◈╮
┋➸ 💖𝖤𝗅 𝖠𝗆𝗈𝗋 𝖣𝖾: 
┋➸ ${name}
┋➸ 🚩𝖲𝗂𝖾𝗇𝗍𝖾 𝖯𝗈𝗋 𝖳𝗂 𝖤𝗌 𝖴𝗇: 
┋➸ *${Math.floor(Math.random() * 100)}%* 𝖣𝖾 𝖴𝗇 *100%*
╰◈ ━━━━━━━ ⸙ ━━━━━━━ ◈╯

🎌 𝐇𝐚𝐲 𝐀𝐦𝐨𝐫,𝐃𝐞𝐛𝐞𝐬 𝐏𝐞𝐝𝐢𝐫𝐥𝐞 𝐌𝐚𝐭𝐫𝐢𝐦𝐨𝐧𝐢𝐨?`

conn.sendMessage(m.chat, {text: love, mentions: [m.sender]}, {quoted: m})

//conn.reply(m.chat, `*🚩 Ocurrió un fallo*`)

}
handler.help = ['love']
handler.tags = ['juegos']
handler.command = /^(love|amor|Love)$/i

handler.register = true

export default handler*/