let handler = async(m, { conn, text, usedPrefix, command }) => {
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = conn.getName(who)
const pp = './storage/logos/Menu2.jpg'

let love = `🐒\n\n*El puto de ${name} busca marido. ⭐️*`

conn.sendMessage(m.chat, {text: love, mentions: [m.sender]}, {quoted: m})

//conn.reply(m.chat, `*🚩 Ocurrió un fallo*`)

}
handler.help = ['dado']
handler.tags = ['game']
handler.customPrefix = /decir|paja|.|#|/|s/i
handler.command = new RegExp
export default handler

//handler.register = true

//export default handler