let handler = async(m, { conn, text, usedPrefix, command }) => {
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = conn.getName(who)
            const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};

const pp = './Menu.png'

let love = `\t\t*➺ 𝐸𝑙 𝑀𝑒𝑑𝑖𝑑𝑜𝑟 𝐷𝑒𝑙 𝐴𝑚𝑜𝑟💘*

╭• ────── ✾ ────── •╮
┇➺ 𝑬𝒍 𝑨𝒎𝒐𝒓 𝑫𝒆 ${name} 𝑷𝒐𝒓 𝑻𝒊 𝑬𝒔 𝑫𝒆 *${Math.floor(Math.random() * 100)}%* 𝑫𝒆 𝑼𝒏 *100%*
┇
┇➺ 🌻𝑫𝒆𝒃𝒆𝒓𝒊𝒂𝒔 𝑷𝒆𝒅𝒊𝒓𝒍𝒆 𝑴𝒂𝒕𝒓𝒊𝒎𝒐𝒏𝒊𝒐?
╰•–––––––––☆–––––––––•╯`

conn.sendMessage(m.chat,{image: {url: pp}, caption: love, mentions: [m.sender]}, {quoted: m }) 
}

handler.help = ['love  @user']
handler.tags = ['fun']
handler.command = /^(love)$/i
//handler.register = true
export default handler