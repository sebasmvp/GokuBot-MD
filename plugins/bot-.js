//Total funciones

let handler = async (m, { conn }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
            const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
conn.reply(m.chat, `📍 𝘛𝘰𝘵𝘢𝘭 𝘍𝘶𝘯𝘤𝘪𝘰𝘯𝘦𝘴: ${totalf}`, fkontak2)
}

handler.help = ['totalf']
handler.tags = ['info']
handler.command = ['totalf']
//handler.register = true
export default handler