let handler = async(m, { conn, command, text }) => {

  let users = m.sender.split`@`[0]
  if ( users == 593939005387 || users == 58124470) try {
  if (!text) return m.reply(` ¡𝗖𝘂𝗮𝗹 𝗲𝘀 𝗲𝗹 𝗠𝗼𝘁𝗶𝘃𝗼 𝗽𝗮𝗿𝗮 𝗹𝗮 𝗿𝗲𝘂𝗻𝗶𝗼𝗻 𝗱𝗲𝗹 𝘀𝘁𝗮𝗳𝗳!`)
    if (text.length < 10) return m.reply(`¡𝗠𝗼𝘁𝗶𝘃𝗼 𝗺𝘂𝘆 𝗰𝗼𝗿𝘁𝗼 , 𝗺𝗶𝗻𝗶𝗺𝗼 10 𝗰𝗮𝗿𝗮𝗰𝘁𝗲𝗿𝗲𝘀!`)

    let texto = `✨ @${m.sender.split`@`[0]} 𝐀 𝐒𝐨𝐥𝐢𝐜𝐢𝐭𝐚𝐝𝐨 𝐋𝐚 𝐏𝐫𝐞𝐬𝐞𝐧𝐜𝐢𝐚 𝐃𝐞 𝐋𝐨𝐬 𝐎𝐰𝐧𝐞𝐫 𝐏𝐨𝐫 𝐌𝐨𝐭𝐢𝐯𝐨: 
¡${text}
Staff GokuBot - Jostin 🌹`
m.reply('✨ Se Le Ah Enviado El Mensaje Ah Los Propietarios Del Bot')
for (let [jid] of global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)) {
                        let data = (await conn.onWhatsApp(jid))[0] || {}
                        if (data.exists)
                        conn.sendPayment(data.jid, '99', texto, m)}
  } catch (e) { await conn.reply(m.chat, '𝗖𝗼𝗺𝗮𝗻𝗱𝗼 𝗻𝗼 𝗳𝘂𝗻𝗰𝗶𝗼𝗻𝗮𝗹', m)
               console.log(e)
               } else {
    await m.reply('¡𝗧𝘂 𝗻𝗼 𝘁𝗶𝗲𝗻𝗲𝘀 𝗽𝗲𝗿𝗺𝗶𝘀𝗼 𝗽𝗮𝗿𝗮 𝘂𝘀𝗮𝗿 𝗲𝘀𝘁𝗲 𝗰𝗼𝗺𝗮𝗻𝗱𝗼!')}

                           // conn.reply(data.jid, text, m, { mentions: [m.sender] })


}
handler.tags = ['owner']
handler.command = handler.help =['reunion']
handler.rowner = true

export default handler