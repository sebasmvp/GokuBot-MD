import {watchFile, unwatchFile} from 'fs';
import chalk from 'chalk';
import {fileURLToPath} from 'url';
import fs from 'fs'; 
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone';

global.botnumber = ""
global.confirmCode = ""

global.owner = [
['593939005387', '👑 𝗖𝗿𝗲𝗮𝗱𝗼𝗿 ✨️', true],
['50558124470', '𝗦𝘂𝗽𝗽𝗼𝗿𝘁 𝗧𝗮𝗹𝗹𝘆💻', true],
['573012482597', '𝗗𝗶𝗲𝗴𝗼.𝗢𝗳𝗰 ☄️', true],
['595981477001'],
['5491130182250', '𝗘𝗻𝘇𝗶𝘁𝗼𝗩𝗮𝘀𝗲', true]]

global.suittag = ['593939005387'];
global.prems = ['593939005387'];

global.packname = '𝙂𝙤𝙠𝙪𝘽𝙤𝙩-𝙈𝘿 💖🌻';
global.author = '𝗝𝗼𝘀𝘁𝗶𝗻 🥀';
global.wm = 'Goku : Bot 🌹';
global.sk = '𝗚oku : 𝗕𝗈𝗍';
global.titulowm = '𝐆𝐨𝐤𝐮 - 𝐁𝐨𝐭';
global.titulowm2 = `𝙹𝚘𝚜𝚝𝚒𝚗 𝙾𝚏𝚒𝚌𝚒𝚊𝚕`
global.igfg = '𝐉𝐨𝐬𝐭𝐢𝐧';
global.wait = '*⏳ 𝐄𝐬𝐩𝐞𝐫𝐞 𝐔𝐧 𝐌𝐨𝐦𝐞𝐧𝐭𝐨.....*';
global.vs = '1.0 (beta)';

global.imagen1 = fs.readFileSync('./Menu2.jpg');
global.imagen2 = fs.readFileSync('./src/nuevobot.jpg');
global.imagen3 = fs.readFileSync('./src/Pre Bot Publi.png');
global.imagen4 = fs.readFileSync('./Menu.png');
global.imagen5 = fs.readFileSync('./src/+18.jpg');
global.imagen6 = fs.readFileSync('./Menu3.png');
global.imagen7 = fs.readFileSync('./AhoraQue.png');
global.imagen8 = fs.readFileSync('./Que.jpg');

//• ↳ ◜𝑳𝑰𝑵𝑲𝑺◞ • 🌿
global.gp1 = '' //Grupo Oficial De Goku

global.gp2 = '' 

global.gp3 = '' 

global.channel = '' //Canal Oficial

global.yt = '' //Canal De Youtube

global.md = '' //Github Oficial

global.fb = '' //Facebook Del Propietario

//saludo user, buen dia
var ase = new Date(); var hour = ase.getHours(); switch(hour){ case 0: hour = 'Linda Mañana'; break; case 1: hour = 'Linda Mañana'; break; case 2: hour = 'Linda Mañana'; break; case 3: hour = 'Linda Mañana'; break; case 4: hour = 'linda mañana'; break; case 5: hour = 'Linda Mañana'; break; case 6: hour = 'Linda Mañana'; break; case 7: hour = 'Linda Mañana'; break; case 8: hour = 'Linda Mañana'; break; case 9: hour = 'Linda Mañana'; break; case 10: hour = 'Lindo Dia'; break; case 11: hour = 'Lindo Dia'; break; case 12: hour = 'Lindo Dia'; break; case 13: hour = 'Lindo Dia'; break; case 14: hour = 'Linda Tarde'; break; case 15: hour = 'Linda Tarde'; break; case 16: hour = 'Linda Tarde'; break; case 17: hour = 'Linda Tarde'; break; case 18: hour = 'Linda Noche'; break; case 19: hour = 'Linda Noche'; break; case 20: hour = 'Linda Noche'; break; case 21: hour = 'Linda Noche'; break; case 22: hour = 'Linda Noche'; break; case 23: hour = 'Linda Noche'; break;}
global.saludo = '🌹' + hour;

global.mods = [];


//* *******Tiempo***************
global.d = new Date(new Date + 3600000);
global.locale = 'es';
global.dia = d.toLocaleDateString(locale, {weekday: 'long'});
global.fecha = d.toLocaleDateString('es', {day: 'numeric', month: 'numeric', year: 'numeric'});
global.mes = d.toLocaleDateString('es', {month: 'long'});
global.año = d.toLocaleDateString('es', {year: 'numeric'});
global.tiempo = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true});
//* ****************************
global.wm2 = `${dia} ${fecha}\nGokuBot`;
global.gt = 'GokuBot';
global.mysticbot = 'GokuBot';
global.mysticbot = 'https://github.com/Jostin207';
global.waitt = '*⏳ 𝐄𝐬𝐩𝐞𝐫𝐞 𝐔𝐧 𝐌𝐨𝐦𝐞𝐧𝐭𝐨...*';
global.waittt = '*⏳ 𝐄𝐬𝐩𝐞𝐫𝐞 𝐔𝐧 𝐌𝐨𝐦𝐞𝐧𝐭𝐨 ...*';
global.waitttt = '*⏳ 𝐄𝐬𝐩𝐞𝐫𝐞 𝐔𝐧 𝐌𝐨𝐦𝐞𝐧𝐭𝐨 ...*';
global.nomorown = '573012482694';
global.pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf'];
global.cmenut = '❖––––––『';
global.cmenub = '┊✦ ';
global.cmenuf = '╰━═┅═━––––––๑\n';
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ';
global.dmenut = '*❖─┅──┅〈*';
global.dmenub = '*┊»*';
global.dmenub2 = '*┊*';
global.dmenuf = '*╰┅────────┅✦*';
global.htjava = '⫹⫺';
global.htki = '*⭑•̩̩͙⊱•••• ☪*';
global.htka = '*☪ ••••̩̩͙⊰•⭑*';
global.comienzo = '• • ◕◕════';
global.fin = '════◕◕ • •';
global.botdate = `*📅 Fecha:*  ${moment.tz('America/Mexico_City').format('DD/MM/YY')}`;
global.bottime = `*⏰️ Hora:* ${moment.tz('America/Mexico_City').format('HH:mm:ss')}`;
global.fgif = {key: {participant: '0@s.whatsapp.net'}, message: {'videoMessage': {'title': wm, 'h': `Hmm`, 'seconds': '999999999', 'gifPlayback': 'true', 'caption': bottime, 'jpegThumbnail': fs.readFileSync('./Menu.png')}}};
global.multiplier = 99;
global.flaaa = [
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=',
];
//* ************************

const file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright('Update \'config.js\''));
  import(`${file}?update=${Date.now()}`);
});
