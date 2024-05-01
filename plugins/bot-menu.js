import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {

try {

let user = conn.getName(m.sender)

let pp = 'https://telegra.ph/file/24fa902ead26340f3df2c.png'

//m.react('🏷️')

let menu = `*👋 Hola, ${}*

_${}_

*País*: ${} 
*Ciudad*: ${}

!allmenu
_(Para ver el menú completo)_

!menu2
_(Para ver el menu audios)_`

//await conn.reply(m.chat, menu, m, { contextInfo: { externalAdReply: {title: '👋 ¡Hola!', body: wm, sourceUrl: global.channel, thumbnail: pp }}})

await conn.reply(m.chat, menu, m, { contextInfo: { externalAdReply: {title: '👋 ¡Hola!', body: wm, sourceUrl: global.channel, thumbnail: pp }}})

//} catch {
conn.reply(m.chat, `*🚩 Ocurrió un fallo*`, m, )
//console.log(e)
}}
//handler.help = ['menu']
//handler.tags = ['bot']
handler.command = /^(mamon)$/i
//handler.register = true

export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}