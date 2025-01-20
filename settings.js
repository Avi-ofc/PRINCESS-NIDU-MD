

const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernomer = "94787672517"
global.ownername = "REAL KING AVI"
global.ytname = "YT: AVI-NET-HUNTER"
global.socialm = "GitHub: avishka33"
global.location = "srilanka , southern ,galle"

global.ownernumber = '94787672517'  //creator number
global.ownername = 'AVISHKA SHAVINDA' //owner name
global.botname = 'AVI-CRASH' //name of the bot

//sticker details
global.packname = 'Sticker By'
global.author = 'AVI\n\nContact: +94772836332'

//console view/theme
global.themeemoji = '⚠'
global.wm = "AVI-CRASH."

//theme link
global.link = 'https://whatsapp.com/channel/0029VaGisHDFHWq5jpuEmC2t'

//custom prefix
global.prefa = ['','!','.','#','A']

//false=disable and true=enable
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = true //auto update bio
global.anti92 = true //auto block +92 
global.autoswview = true //auto view status/story

//menu type 
//v1 is image menu, 
//v2 is link + image menu,
//v3 is video menu,
//v4 is call end menu
global.typemenu = 'v1'

//text bug
global.xbugtex = {
xtxt: 'AVI',
}
global.bimg = ''

global.listv = ['💖','😉','🤬','👌','🗡']

//reply messages
global.mess = {
    done: 'Done !',
    prem: 'This feature can be used by premium user only',
    admin: 'This feature can be used by admin only',
    botAdmin: 'This feature can only be used when the bot is a group admin ',
    owner: 'This feature can be used by owner only',
    group: 'This feature is only for groups',
    private: 'This feature is only for private chats',
    wait: 'In process... ',    
    error: 'Error!',
}

global.thumb = fs.readFileSync('./AMedia/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})