// Bismillahirrahmanirrahim
// thank you to ALLAH Swt
// thank you to Nurutomo as wabot-aq
// thank you to ariffb as stikerinbot
// thank you to botstylee
// thank you to bochilgaming as games-wabot
// thank you to zerochanBot
// thank you to fernazer
// thank you to MikeBot Dev Team
// thank you to ALL Bot creator
// and thanks you to who support my Bot
let fs = require('fs')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let d = new Date(new Date + 3600000)
let locale = 'id'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})

let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let wktu = moment.tz('Asia/Jakarta').format('HH:mm:ss')

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}


global.DeveloperMode = 'false' //Buat Mode True False Moderator
global.linkGC = ['https://chat.whatsapp.com/Hjr3H7l9iC8F2deP0cv6GT'] // ganti jadi group lu
global.owner = ['6285828764046', '6285828764046' ,'6285828764046','6285828764046','6285828764046', '6285828764046', '6285828764046'] // Put your number here
global.mods = ['6285231651905'] // Want some help?
global.prems = JSON.parse(fs.readFileSync('./src/premium.json')) // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  dhnjing: 'https://dhnjing.xyz',
  neoxr: 'https://neoxr-api.herokuapp.com',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  ana: 'https://anabotofc.herokuapp.com/',
  amel: 'https://melcanz.com',
  hardianto: 'https://hardianto.xyz',
  botstyle: 'https://botstyle-api.herokuapp.com',
adiisus: 'https://adiixyzapi.herokuapp.com',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey' (apikey kalian)
  'https://api.xteam.xyz': 'APIKEY',
  'https://anabotofc.herokuapp.com/': 'AnaBot',
  'https://api.lolhuman.xyz': 'APIKEY',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://melcanz.com': 'wEDTUsWj',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://botstyle-api.herokuapp.com': 'Eyar749L',
  'https://hardianto.xyz': 'hardianto',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

// Sticker WM
global.packname = '🙇‍♂️Zifabotz\nwa.me/6285828764046\n\n\n𝙱𝚢 rozi\n\n\nFollow IG: @zalfapontianak\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.'
global.author = '۰ ⸼'

// silakan di ganti klo mau
global.botwm = `©️Zifabotz`//UBAH JADI NAMAMU
global.wm = `꒷︶꒷꒥꒷ ‧₊˚ ꒰ฅ˘Zifabotz˘ฅ ꒱ ‧₊˚꒷︶꒷꒥꒷`
global.botdate = `❏ ${wktu}\n❏ ${week} ${date}`
global.imagebot = `https://telegra.ph/file/9ef8ade167ea676b80e51.jpg`
global.logo = fs.readFileSync('./src/logo3.jpg')
global.thumb1 = 'https://telegra.ph/file/9ef8ade167ea676b80e51.jpg'
global.thumb2 = 'https://telegra.ph/file/9ef8ade167ea676b80e51.jpg'
global.thumb3 = 'https://telegra.ph/file/9ef8ade167ea676b80e51.jpg'
global.thumb4 = 'https://telegra.ph/file/9ef8ade167ea676b80e51.jpg'
global.logoowner = fs.readFileSync('./src/owner.jpg')
global.wait = '```[ ! ] wait...```'
global.rpg = '[ ! ] Fitur Rpg Dimatikan\nKetik *!enable* *rpg* untuk menggunakan fitur ini!\nKalo Mau main Disini aja\nhttps://chat.whatsapp.com/Hjr3H7l9iC8F2deP0cv6GT'
global.nsfw = '[ ! ] Fitur NSFW Dimatikan\nKetik *!enable* *nsfw* untuk menggunakan fitur ini!\n“Katakanlah kepada orang laki-laki yang beriman: Hendaklah mereka menahan pandanganya, dan memelihara kemaluannya; … Katakanlah kepada wanita yang beriman: Hendaklah mereka menahan pandangannya, dan kemaluannya, dan janganlah mereka Menampakkan perhiasannya, kecuali yang (biasa) nampak dari padany,” \n(TQS. Al-Nur [24]: 30-31).'
global.eror = '```404 error```'
global.pref = '( # . ! /)'
global.CanvasAPI = '';
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text='

// tingkat kesulitan, semakin tinggi semakin susah
global.multiplier = 38 // The higher, The harder levelup

//*****************PEMBATAS*********************
// JANGAN DI GANTI NTAR KLO GABISA JAN TANYA GW

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
