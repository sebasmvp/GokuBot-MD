const handler = async (m) => {
  global.db.data.chats[m.chat].isBanned = true;
  m.reply('✅️ *Chat Baneado Con Exito, Ya No Podran Usar GokuBot-MD*');
};
handler.help = ['banchat'];
handler.tags = ['owner'];
handler.command = /^prohibirchat$/i;
handler.rowner = true;
export default handler;
