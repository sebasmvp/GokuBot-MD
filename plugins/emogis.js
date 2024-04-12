let handler = async(m, { conn, text, usedPrefix, command }) => {
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = conn.getName(who)
const pp = './storage/logos/Menu2.jpg'

let love = `🚀💫`

conn.sendMessage(m.chat, {text: love, mentions: [m.sender]}, {quoted: m})

//conn.reply(m.chat, `*🚩 Ocurrió un fallo*`)

}
handler.help = ['love']
handler.tags = ['juegos']
handler.command = /^(emogis|🚀💫|🤖|jostin|emogis2)$/i

handler.register = true

export default handler