/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

require('./config')
const { BufferJSON, Mimetype, WA_DEFAULT_EPHEMERAL, MessageType, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const { color, bgcolor } = require('./lib/color')

// read database
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []

module.exports = raisa = async (raisa, rara, chatUpdate, store) => {
    try {
		//const location = MessageType;
        var body = (rara.mtype === 'conversation') ? rara.message.conversation : (rara.mtype == 'imageMessage') ? rara.message.imageMessage.caption : (rara.mtype == 'videoMessage') ? rara.message.videoMessage.caption : (rara.mtype == 'extendedTextMessage') ? rara.message.extendedTextMessage.text : (rara.mtype == 'buttonsResponseMessage') ? rara.message.buttonsResponseMessage.selectedButtonId : (rara.mtype == 'listResponseMessage') ? rara.message.listResponseMessage.singleSelectReply.selectedRowId : (rara.mtype == 'templateButtonReplyMessage') ? rara.message.templateButtonReplyMessage.selectedId : (rara.mtype === 'messageContextInfo') ? (rara.message.buttonsResponseMessage?.selectedButtonId || rara.message.listResponseMessage?.singleSelectReply.selectedRowId || rara.text) : ''
        var budy = (typeof rara.text == 'string' ? rara.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = rara.pushName || "No Name"
        const botNumber = await raisa.decodeJid(raisa.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(rara.sender)
        const itsMe = rara.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = rara.quoted ? rara.quoted : rara
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	const hour_now = moment().format('HH:mm:ss')
        // Group
        const groupMetadata = rara.isGroup ? await raisa.groupMetadata(rara.chat).catch(e => {}) : ''
        const groupName = rara.isGroup ? groupMetadata.subject : ''
        const participants = rara.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = rara.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = rara.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = rara.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = rara.isGroup ? groupAdmins.includes(rara.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(rara.sender) || false
	
	
	
	try {
		
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[rara.sender]
            if (typeof user !== 'object') global.db.data.users[rara.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[rara.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = global.db.data.chats[rara.chat]
            if (typeof chats !== 'object') global.db.data.chats[rara.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[rara.chat] = {
                mute: false,
                antilink: false,
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
	    
        // Public & Self
        if (!raisa.public) {
            if (!rara.key.fromMe) return
        }

        // Push Message To Console && Auto Read
        if (rara.message) {
            raisa.sendReadReceipt(rara.chat, rara.sender, [rara.key.id])
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || rara.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(rara.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(rara.isGroup ? pushname : 'Private Chat', rara.chat))
        }
	
	// reset limit every 12 hours
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
     /* if (!isCmd && !isPremium) {
		  let pesan = rara.budy
		  let resnya = await axios.get(`https://api.simsimi.net/v2/?text=${pesan}&lc=id&cf=test`)
		  return rara.reply(`resnya.data.succes`)
	  }
	  if (!isCmd && isPremium) {
		  let pesan = rara.budy
		  let resnya = await axios.get(`https://api.simsimi.net/v2/?text=${pesan}&lc=id&cf=test`)
		  return rara.reply(`resSnya.data.succes`)
	  }*/
	 /* let meksimi = {
		  pesan = budy
		  res = await axios.get(`https://api.simsimi.net/v2/?text=${pesan}&lc=id&cf=test`)
		  return res
		  if (rara.msg.contextInfo?.participant === botNumber && isCmd){
			  return meksimi(budy)
		  }
	  }*/
	   let senderr = rara.key.fromMe
	  const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await raisa.prepareMessage(rara.chat, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
raisa.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

	// auto set bio
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await raisa.setStatus(`Lord-Bot telah aktif selama : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
	    
	  // Anti Link
        if (db.data.chats[rara.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        rara.reply(`「 ANTI LINK 」\n\nKamu terdeteksi mengirim link group, maaf kamu akan di kick !`)
        if (!isBotAdmins) return rara.reply(`Ehh bot gak admin T_T`)
        let gclink = (`https://chat.whatsapp.com/`+await raisa.groupInviteCode(rara.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(rara.text)
        if (isgclink) return rara.reply(`Ehh maaf gak jadi, karena kamu ngirim link group ini`)
        if (isAdmins) return rara.reply(`Ehh maaf kamu admin`)
        if (isCreator) return rara.reply(`Ehh maaf kamu owner bot ku`)
        raisa.groupParticipantsUpdate(rara.chat, [rara.sender], 'remove')
        }
        }
        
      // Mute Chat
      if (db.data.chats[rara.chat].mute && !isAdmins && !isCreator) {
      return
      }

        // Respon Cmd with media
        if (isMedia && rara.msg.fileSha256 && (rara.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[rara.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(rara.chat, { text: text, mentions: mentionedJid }, {
            userJid: raisa.user.id,
            quoted: rara.quoted && rara.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(rara.sender, raisa.user.id)
        messages.key.id = rara.key.id
        messages.pushName = rara.pushName
        if (rara.isGroup) messages.participant = rara.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        raisa.ev.emit('messages.upsert', msg)
        }
	    
	if (('family100'+rara.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+rara.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(rara.text)
            if (!isSurender) {
                let index = roorara.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (roorara.terjawab[index]) return !0
                roorara.terjawab[index] = rara.sender
            }
            let isWin = roorara.terjawab.length === roorara.terjawab.filter(v => v).length
            let caption = `
Jawablah Pertanyaan Berikut :\n${roorara.soal}\n\n\nTerdapat ${roorara.jawaban.length} Jawaban ${roorara.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(roorara.jawaban, (jawaban, index) => {
        return isSurender || roorara.terjawab[index] ? `(${index + 1}) ${jawaban} ${roorara.terjawab[index] ? '@' + roorara.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            raisa.sendText(rara.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+rara.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+rara.chat]
        }

        if (tebaklagu.hasOwnProperty(rara.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[rara.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await raisa.sendButtonText(rara.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, raisa.user.name, m)
                delete tebaklagu[rara.sender.split('@')[0]]
            } else rara.reply('*Jawaban Salah!*')
        }

        if (kuismath.hasOwnProperty(rara.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[rara.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await rara.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[rara.sender.split('@')[0]]
            } else rara.reply('*Jawaban Salah!*')
        }

        if (tebakgambar.hasOwnProperty(rara.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[rara.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await raisa.sendButtonText(rara.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, raisa.user.name, m)
                delete tebakgambar[rara.sender.split('@')[0]]
            } else rara.reply('*Jawaban Salah!*')
        }

        if (tebakkata.hasOwnProperty(rara.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[rara.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await raisa.sendButtonText(rara.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, raisa.user.name, m)
                delete tebakkata[rara.sender.split('@')[0]]
            } else rara.reply('*Jawaban Salah!*')
        }

        if (caklontong.hasOwnProperty(rara.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[rara.sender.split('@')[0]]
	    deskripsi = caklontong_desk[rara.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await raisa.sendButtonText(rara.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, raisa.user.name, m)
                delete caklontong[rara.sender.split('@')[0]]
		delete caklontong_desk[rara.sender.split('@')[0]]
            } else rara.reply('*Jawaban Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(rara.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[rara.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await raisa.sendButtonText(rara.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, raisa.user.name, m)
                delete tebakkalimat[rara.sender.split('@')[0]]
            } else rara.reply('*Jawaban Salah!*')
        }

        if (tebaklirik.hasOwnProperty(rara.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[rara.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await raisa.sendButtonText(rara.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, raisa.user.name, m)
                delete tebaklirik[rara.sender.split('@')[0]]
            } else rara.reply('*Jawaban Salah!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(rara.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[rara.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await raisa.sendButtonText(rara.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, raisa.user.name, m)
                delete tebaktebakan[rara.sender.split('@')[0]]
            } else rara.reply('*Jawaban Salah!*')
        }
        
        //TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => roorara.id && roorara.game && roorara.state && roorara.id.startsWith('tictactoe') && [roorara.game.playerX, roorara.game.playerO].includes(rara.sender) && roorara.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // rara.reply(`[DEBUG]\n${parseInt(rara.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(rara.text)) return
	    isSurrender = !/^[1-9]$/.test(rara.text)
	    if (rara.sender !== roorara.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = roorara.game.turn(rara.sender === roorara.game.playerO, parseInt(rara.text) - 1))) {
	    rara.reply({
	    '-3': 'Game telah berakhir',
	    '-2': 'Invalid',
	    '-1': 'Posisi Invalid',
	    0: 'Posisi Invalid',
	    }[ok])
	    return !0
	    }
	    if (rara.sender === roorara.game.winner) isWin = true
	    else if (roorara.game.board === 511) isTie = true
	    let arr = roorara.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    roorara.game._currentTurn = rara.sender === roorara.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? roorara.game.currentTurn : roorara.game.winner
	    let str = `Room ID: ${roorara.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * roorara.game._currentTurn]} (@${roorara.game.currentTurn.split('@')[0]})`}
❌: @${roorara.game.playerX.split('@')[0]}
⭕: @${roorara.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
	    if ((roorara.game._currentTurn ^ isSurrender ? roorara.x : roorara.o) !== rara.chat)
	    room[roorara.game._currentTurn ^ isSurrender ? 'x' : 'o'] = rara.chat
	    if (roorara.x !== roorara.o) await raisa.sendText(roorara.x, str, m, { mentions: parseMention(str) } )
	    await raisa.sendText(roorara.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[roorara.id]
	    }
	    }

        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(rara.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (rara.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(rara.text) && rara.isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(rara.text)) {
	    raisa.sendTextWithMentions(rara.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = rara.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    raisa.sendText(rara.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) raisa.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) raisa.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) raisa.sendText(rara.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    raisa.sendTextWithMentions(rara.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = rara.sender == roof.p
	    let jwb2 = rara.sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(rara.text) && !roof.pilih && !rara.isGroup) {
	    roof.pilih = reg.exec(rara.text.toLowerCase())[0]
	    roof.text = rara.text
	    rara.reply(`Kamu telah memilih ${rara.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih2) raisa.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(rara.text) && !roof.pilih2 && !rara.isGroup) {
	    roof.pilih2 = reg.exec(rara.text.toLowerCase())[0]
	    roof.text2 = rara.text
	    rara.reply(`Kamu telah memilih ${rara.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) raisa.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    raisa.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(rara.mentionedJid || []), ...(rara.quoted ? [rara.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            rara.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[rara.sender].afkTime > -1) {
            let user = global.db.data.users[rara.sender]
            rara.reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
	    
        switch(command) {
	    case 'afk': {
                let user = global.db.data.users[rara.sender]
                user.afkTime = + new Date
                user.afkReason = text
                rara.reply(`${rara.pushName} Telah Afk${text ? ': ' + text : ''}`)
            }
            break	
        case 'ttc': case 'ttt': case 'tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => roorara.id.startsWith('tictactoe') && [roorara.game.playerX, roorara.game.playerO].includes(rara.sender))) throw 'Kamu masih didalam game'
            let room = Object.values(this.game).find(room => roorara.state === 'WAITING' && (text ? roorara.name === text : true))
            if (room) {
            rara.reply('Partner ditemukan!')
            roorara.o = rara.chat
            roorara.game.playerO = rara.sender
            roorara.state = 'PLAYING'
            let arr = roorara.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${roorara.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${roorara.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
            if (roorara.x !== roorara.o) await raisa.sendText(roorara.x, str, m, { mentions: parseMention(str) } )
            await raisa.sendText(roorara.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: rara.chat,
            o: '',
            game: new TicTacToe(rara.sender, 'o'),
            state: 'WAITING'
            }
            if (text) roorara.name = text
            rara.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
            this.game[roorara.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            raisa.sendText(rara.chat, `Berhasil delete session TicTacToe`, m)
            } else if (!this.game) {
            rara.reply(`Session TicTacToe🎮 tidak ada`)
            } else throw '?'
            } catch (e) {
            rara.reply('rusak')
            }
            }
            break
            case 'suitpvp': case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(rara.sender))) rara.reply(`Selesaikan suit mu yang sebelumnya`)
	    if (rara.mentionedJid[0] === rara.sender) return rara.reply(`Tidak bisa bermain dengan diri sendiri !`)
            if (!rara.mentionedJid[0]) return rara.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, rara.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(rara.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${rara.sender.split`@`[0]} menantang @${rara.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${rara.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
            this.suit[id] = {
            chat: await raisa.sendText(rara.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: rara.sender,
            p2: rara.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) raisa.sendText(rara.chat, `_Waktu suit habis_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
	    case 'donasi': case 'sewabot': case 'sewa': case 'buypremium': case 'donate': {
                raisa.sendMessage(rara.chat, { image: { url: 'https://telegra.ph/file/74fd634010128be37972c.jpg' }, caption: `*Hai Kak ${rara.pushName}*\n\n Bot Rental Prices\n⭔ 13k Per Group via E-Walet 1 Month\n⭔ 18k via pulsa 1 Month\n\n Premium Price Bot\n⭔ 8k per User 1 bulan\n\nPayment can be via Paypal/link aja/pulsa\n\nFor more details, you can chat with the owner\nhttps://wa.me/6288292024190 (Owner)\n\nDonate For Me : \n\n⭔ Paypal : https://www.paypal.me/Cakhaho\n⭔ Saweria : https://saweria.co/DikaArdnt` }, { quoted: m })
            }
            break
            case 'sc': {
                rara.reply('Script : Di github banyak\n\n Dont Forget Give Star\n\nDonate\n\n Dana : 6282132156123\nSaweria : https://saweria.co/\n\n Dont Forget Donate')
            }
            break
            case 'chat': {
                if (!isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    raisa.chatModify({ mute: 'Infinity' }, rara.chat, []).then((res) => rara.reply(jsonformat(res))).catch((err) => rara.reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    raisa.chatModify({ mute: null }, rara.chat, []).then((res) => rara.reply(jsonformat(res))).catch((err) => rara.reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    raisa.chatModify({  archive: true }, rara.chat, []).then((res) => rara.reply(jsonformat(res))).catch((err) => rara.reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    raisa.chatModify({ archive: false }, rara.chat, []).then((res) => rara.reply(jsonformat(res))).catch((err) => rara.reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    raisa.chatModify({ markRead: true }, rara.chat, []).then((res) => rara.reply(jsonformat(res))).catch((err) => rara.reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    raisa.chatModify({ markRead: false }, rara.chat, []).then((res) => rara.reply(jsonformat(res))).catch((err) => rara.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    raisa.chatModify({ clear: { message: { id: rara.quoted.id, fromMe: true }} }, rara.chat, []).then((res) => rara.reply(jsonformat(res))).catch((err) => rara.reply(jsonformat(err)))
                }
            }
            break
	    case 'family100': {
                if ('family100'+rara.chat in _family100) {
                    rara.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
                    throw false
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Jawablah Pertanyaan Berikut :*\n${randorara.soal}\n\nTerdapat *${randorara.jawaban.length}* Jawaban ${randorara.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
                _family100['family100'+rara.chat] = {
                    id: 'family100'+rara.chat,
                    pesan: await raisa.sendText(rara.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(randorara.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
            case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (!rara.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            ter = command[1].toLowerCase()
            tex = rara.quoted ? rara.quoted.text ? rara.quoted.text : q ? q : rara.text : q ? q : rara.text
            rara.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            case 'tebak': {
                if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
                if (args[0] === "lagu") {
                    if (tebaklagu.hasOwnProperty(rara.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await raisa.sendMessage(rara.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    raisa.sendText(rara.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
                    tebaklagu[rara.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(rara.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    raisa.sendButtonText(rara.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[rara.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, raisa.user.name, m)
                    delete tebaklagu[rara.sender.split('@')[0]]
                    }
                } else if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(rara.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    raisa.sendImage(rara.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
                    tebakgambar[rara.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(rara.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    raisa.sendButtonText(rara.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[rara.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, raisa.user.name, m)
                    delete tebakgambar[rara.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(rara.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    raisa.sendText(rara.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkata[rara.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(rara.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    raisa.sendButtonText(rara.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[rara.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, raisa.user.name, m)
                    delete tebakkata[rara.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(rara.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    raisa.sendText(rara.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkalimat[rara.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(rara.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    raisa.sendButtonText(rara.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[rara.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, raisa.user.name, m)
                    delete tebakkalimat[rara.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(rara.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    raisa.sendText(rara.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
                    tebaklirik[rara.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(rara.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    raisa.sendButtonText(rara.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[rara.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, raisa.user.name, m)
                    delete tebaklirik[rara.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lontong') {
                    if (caklontong.hasOwnProperty(rara.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    raisa.sendText(rara.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
                    caklontong[rara.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[rara.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(rara.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    raisa.sendButtonText(rara.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[rara.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[rara.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, raisa.user.name, m)
                    delete caklontong[rara.sender.split('@')[0]]
		    delete caklontong_desk[rara.sender.split('@')[0]]
                    }
                }
            }
            break
            case 'kuismath': case 'math': {
                if (kuismath.hasOwnProperty(rara.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                let { genMath, modes } = require('./src/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                raisa.sendText(rara.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                    kuismath[rara.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(rara.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    rara.reply("Waktu Habis\nJawaban: " + kuismath[rara.sender.split('@')[0]])
                    delete kuismath[rara.sender.split('@')[0]]
                }
            }
            break
            case 'jodohku': {
            if (!rara.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = rara.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: 'jodohku', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await raisa.sendButtonText(rara.chat, buttons, jawab, raisa.user.name, m, {mentions: ments})
            }
            break
            case 'jadian': {
            if (!rara.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `Ciee yang Jadian💖 Jangan lupa pajak jadiannya🐤

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: 'jadian', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await raisa.sendButtonText(rara.chat, buttons, jawab, raisa.user.name, m, {mentions: menst})
            }
            break
            case 'react': {
                if (!isCreator) throw mess.owner
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: rara.chat, fromMe: true, id: quoted.id }
                    }
                }
                raisa.sendMessage(rara.chat, reactionMessage)
            }
            break  
           /* case 'join': {
                if (!isCreator) throw mess.owner
                if (!text) throw 'Masukkan Link Group!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                rara.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await raisa.groupAcceptInvite(result).then((res) => rara.reply(jsonformat(res))).catch((err) => rara.reply(jsonformat(err)))
            }
            break*/
            case 'leave': {
                if (!isCreator) throw mess.owner
                await raisa.groupLeave(rara.chat).then((res) => rara.reply(jsonformat(res))).catch((err) => rara.reply(jsonformat(err)))
            }
            break
            case 'setexif': {
               if (!isCreator) throw mess.owner
               if (!text) throw `Example : ${prefix + command} packname|author`
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          rara.reply(`Exif berhasil diubah menjadi\n\n⭔ Packname : ${global.packname}\n⭔ Author : ${global.author}`)
            }
            break
	case 'kick': {
		if (!rara.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = rara.mentionedJid[0] ? rara.mentionedJid[0] : rara.quoted ? rara.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await raisa.groupParticipantsUpdate(rara.chat, [users], 'remove').then((res) => rara.reply(jsonformat(res))).catch((err) => rara.reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (!rara.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = rara.quoted ? rara.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await raisa.groupParticipantsUpdate(rara.chat, [users], 'add').then((res) => rara.reply(jsonformat(res))).catch((err) => rara.reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (!rara.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = rara.mentionedJid[0] ? rara.mentionedJid[0] : rara.quoted ? rara.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await raisa.groupParticipantsUpdate(rara.chat, [users], 'promote').then((res) => rara.reply(jsonformat(res))).catch((err) => rara.reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!rara.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = rara.mentionedJid[0] ? rara.mentionedJid[0] : rara.quoted ? rara.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await raisa.groupParticipantsUpdate(rara.chat, [users], 'demote').then((res) => rara.reply(jsonformat(res))).catch((err) => rara.reply(jsonformat(err)))
	}
	break
        case 'block': {
		if (!isCreator) throw mess.owner
		let users = rara.mentionedJid[0] ? rara.mentionedJid[0] : rara.quoted ? rara.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await raisa.updateBlockStatus(users, 'block').then((res) => rara.reply(jsonformat(res))).catch((err) => rara.reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isCreator) throw mess.owner
		let users = rara.mentionedJid[0] ? rara.mentionedJid[0] : rara.quoted ? rara.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await raisa.updateBlockStatus(users, 'unblock').then((res) => rara.reply(jsonformat(res))).catch((err) => rara.reply(jsonformat(err)))
	}
	break
	    case 'setname': case 'setsubject': {
                if (!rara.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await raisa.groupUpdateSubject(rara.chat, text).then((res) => rara.reply(mess.success)).catch((err) => rara.reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!rara.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await raisa.groupUpdateDescription(rara.chat, text).then((res) => rara.reply(mess.success)).catch((err) => rara.reply(jsonformat(err)))
            }
            break
          case 'setppbot': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await raisa.downloadAndSaveMediaMessage(quoted)
                await raisa.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                rara.reply(mess.success)
                }
                break
           case 'setppgroup': case 'setppgrup': case 'setppgc': {
                if (!rara.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await raisa.downloadAndSaveMediaMessage(quoted)
                await raisa.updateProfilePicture(rara.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                rara.reply(mess.success)
                }
                break
            case 'tagall': {
                if (!rara.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
let teks = `══✪〘 *👥 Tag All* 〙✪══
 
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
                for (let mem of participants) {
                teks += `⭔ @${merara.id.split('@')[0]}\n`
                }
                raisa.sendMessage(rara.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case 'hidetag': {
            if (!rara.isGroup) throw mess.group
            if (!isBotAdmins) throw mess.botAdmin
            if (!isAdmins) throw mess.admin
            raisa.sendMessage(rara.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
	    case 'style': case 'styletext': {
	        if (!isPremium && global.db.data.users[rara.sender].limit < 1) return rara.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[rara.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) throw 'Masukkan Query text!'
                let anu = await styletext(text)
                let teks = `Srtle Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `⭔ *${i.name}* : ${i.result}\n\n`
                }
                rara.reply(teks)
	    }
	    break
               case 'vote': {
            if (!rara.isGroup) throw mess.group
            if (rara.chat in vote) throw `_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`
            if (!text) throw `Masukkan Alasan Melakukan Vote, Example: *${prefix + command} Owner Ganteng*`
            rara.reply(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
            vote[rara.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[rara.chat][1]
            devote = vote[rara.chat][2]
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[rara.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[rara.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[rara.chat][2].length}
│
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: raisa.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            raisa.sendMessage(rara.chat, buttonMessageVote)
	    }
            break
               case 'upvote': {
            if (!rara.isGroup) throw mess.group
            if (!(rara.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[rara.chat][1].concat(vote[rara.chat][2])
            wasVote = isVote.includes(rara.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[rara.chat][1].push(rara.sender)
            menvote = vote[rara.chat][1].concat(vote[rara.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[rara.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[rara.chat][1].length}
${vote[rara.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[rara.chat][2].length}
${vote[rara.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: raisa.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            raisa.sendMessage(rara.chat, buttonMessageUpvote)
	    }
             break
                case 'devote': {
            if (!rara.isGroup) throw mess.group
            if (!(rara.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[rara.chat][1].concat(vote[rara.chat][2])
            wasVote = isVote.includes(rara.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[rara.chat][2].push(rara.sender)
            menvote = vote[rara.chat][1].concat(vote[rara.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[rara.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[rara.chat][1].length}
${vote[rara.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[rara.chat][2].length}
${vote[rara.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: raisa.user.name,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            raisa.sendMessage(rara.chat, buttonMessageDevote)
	}
            break
                 
case 'cekvote':
if (!rara.isGroup) throw mess.group
if (!(rara.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[rara.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[rara.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${devote.length}
${vote[rara.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote


©${raisa.user.id}
`
raisa.sendTextWithMentions(rara.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!rara.isGroup) throw mess.group
            if (!(rara.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            delete vote[rara.chat]
            rara.reply('Berhasil Menghapus Sesi Vote Di Grup Ini')
	    }
            break
               case 'group': case 'grup': {
                if (!rara.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'close'){
                    await raisa.groupSettingUpdate(rara.chat, 'announcement').then((res) => rara.reply(`Sukses Menutup Group`)).catch((err) => rara.reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await raisa.groupSettingUpdate(rara.chat, 'not_announcement').then((res) => rara.reply(`Sukses Membuka Group`)).catch((err) => rara.reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await raisa.sendButtonText(rara.chat, buttons, `Mode Group`, raisa.user.name, m)

             }
            }
            break
            case 'editinfo': {
                if (!rara.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
             if (args[0] === 'open'){
                await raisa.groupSettingUpdate(rara.chat, 'unlocked').then((res) => rara.reply(`Sukses Membuka Edit Info Group`)).catch((err) => rara.reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await raisa.groupSettingUpdate(rara.chat, 'locked').then((res) => rara.reply(`Sukses Menutup Edit Info Group`)).catch((err) => rara.reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await raisa.sendButtonText(rara.chat, buttons, `Mode Edit Info`, raisa.user.name, m)

            }
            }
            break
            case 'antilink': {
                if (!rara.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[rara.chat].antilink) return rara.reply(`Sudah Aktif Sebelumnya`)
                db.data.chats[rara.chat].antilink = true
                rara.reply(`Antilink Aktif !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[rara.chat].antilink) return rara.reply(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[rara.chat].antilink = false
                rara.reply(`Antilink Tidak Aktif !`)
                } else {
                 let buttons = [
                        { buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await raisa.sendButtonText(rara.chat, buttons, `Mode Antilink`, raisa.user.name, m)
                }
             }
             break
             case 'mute': {
                if (!rara.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[rara.chat].mute) return rara.reply(`Sudah Aktif Sebelumnya`)
                db.data.chats[rara.chat].mute = true
                rara.reply(`${raisa.user.name} telah di mute di group ini !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[rara.chat].mute) return rara.reply(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[rara.chat].mute = false
                rara.reply(`${raisa.user.name} telah di unmute di group ini !`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await raisa.sendButtonText(rara.chat, buttons, `Mute Bot`, raisa.user.name, m)
                }
             }
             break
            case 'linkgroup': case 'linkgc': {
                if (!rara.isGroup) throw mess.group
                let response = await raisa.groupInviteCode(rara.chat)
                raisa.sendText(rara.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
                if (!rara.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Masukkan value enable/disable'
                if (args[0] === 'enable') {
                    await raisa.sendMessage(rara.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => rara.reply(jsonformat(res))).catch((err) => rara.reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await raisa.sendMessage(rara.chat, { disappearingMessagesInChat: false }).then((res) => rara.reply(jsonformat(res))).catch((err) => rara.reply(jsonformat(err)))
                }
            }
            break
            case 'delete': case 'del': {
                if (!rara.quoted) throw false
                let { chat, fromMe, id, isBaileys } = rara.quoted
                if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                raisa.sendMessage(rara.chat, { delete: { remoteJid: rara.chat, fromMe: true, id: rara.quoted.id, participant: rara.quoted.sender } })
            }
            break
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let getGroups = await raisa.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                rara.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: 'Source Code',
                                    url: 'https://github.com/DikaArdnt/Hisoka-Morou'
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: '+62 821-3215-6123'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Status Bot',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Contact Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Script',
                                    id: 'sc'
                                }
                            }]
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      raisa.send5ButImg(i, txt, raisa.user.name, global.thumb, btn)
                    }
                rara.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let anu = await store.chats.all().map(v => v.id)
                rara.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		for (let yoi of anu) {
		    await sleep(1500)
		    let btn = [{
                                urlButton: {
                                    displayText: 'Source Code',
                                    url: 'https://github.com/DikaArdnt/Hisoka-Morou'
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: '+62 821-3215-6123'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Status Bot',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Contact Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Script',
                                    id: 'sc'
                                }
                            }]
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      raisa.send5ButImg(yoi, txt, raisa.user.name, global.thumb, btn)
		}
		rara.reply('Sukses Broadcast')
            }
            break
            case 'infochat': {
                if (!rara.quoted) rara.reply('Reply Pesan')
                let msg = await rara.getQuotedObj()
                if (!rara.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `⭔ @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━⭔ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ⭔ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
                }
                raisa.sendTextWithMentions(rara.chat, teks, m)
            }
            break
            case 'q': case 'quoted': {
		if (!rara.quoted) return rara.reply('Reply Pesannya!!')
		let wokwol = await raisa.serializeM(await rara.getQuotedObj())
		if (!wokwol.quoted) return rara.reply('Pesan Yang anda reply tidak mengandung reply')
		await wokwol.quoted.copyNForward(rara.chat, true)
            }
	    break
            case 'listpc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 raisa.sendTextWithMentions(rara.chat, teks, m)
             }
             break
                case 'listgc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await raisa.groupMetadata(i)
                     teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* @${metadata.owner.split('@')[0]}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 raisa.sendTextWithMentions(rara.chat, teks, m)
             }
             break
             case 'listonline': case 'liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : rara.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    raisa.sendText(rara.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
            case 'sticker': case 's': case 'stickergif': case 'sgif': {
           // if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
            rara.reply(`Belum install ffmpeg gua bang jadi gabisa buat stiker`)
                 /*   if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await raisa.sendImageAsSticker(rara.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return rara.reply('Maksimal 10 detik!')
                let media = await quoted.download()
                let encmedia = await raisa.sendVideoAsSticker(rara.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
                }*/
            }
            break
            case 'ebinary': {
            if (!rara.quoted.text && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            let { eBinary } = require('./lib/binary')
            let teks = text ? text : rara.quoted && rara.quoted.text ? rara.quoted.text : rara.text
            let eb = await eBinary(teks)
            rara.reply(eb)
        }
        break
            case 'dbinary': {
            if (!rara.quoted.text && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            let { dBinary } = require('./lib/binary')
            let teks = text ? text : rara.quoted && rara.quoted.text ? rara.quoted.text : rara.text
            let db = await dBinary(teks)
            rara.reply(db)
        }
        break
            case 'emojimix': {
	        if (!text) throw `Example : ${prefix + command} 😅+🤔`
		let [emoji1, emoji2] = text.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await raisa.sendImageAsSticker(rara.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
            case 'toimage': case 'toimg': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                rara.reply(mess.wait)
                let media = await raisa.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    raisa.sendMessage(rara.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'tomp4': case 'tovideo': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                rara.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await raisa.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await raisa.sendMessage(rara.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            rara.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            raisa.sendMessage(rara.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
            if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            rara.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            raisa.sendMessage(rara.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${raisa.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            rara.reply(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            raisa.sendMessage(rara.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                rara.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await raisa.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await raisa.sendMessage(rara.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case 'tourl': {
                rara.reply(mess.wait)
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await raisa.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    rara.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    rara.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case 'imagenobg': case 'removebg': case 'remove-bg': {
	    if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await raisa.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    rara.reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    raisa.sendMessage(rara.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
	    case 'yts': case 'ytsearch': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Author : ${i.author.name}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
                }
                raisa.sendMessage(rara.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
        case 'google': {
                if (!text) throw `Example : ${prefix + command} fatih arridho`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `⭔ *Title* : ${g.title}\n`
                teks += `⭔ *Description* : ${g.snippet}\n`
                teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                rara.reply(teks)
                })
                }
                break
        case 'gimage': {
        if (!text) throw `Example : ${prefix + command} kaori cicak`
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*-------「 GIMAGE SEARCH 」-------*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`,
                    footer: raisa.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                raisa.sendMessage(rara.chat, buttonMessage, { quoted: m })
        })
        }
        break
	    case 'play': case 'ytplay': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: '♫ Audio'}, type: 1},
                    {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `
⭔ Title : ${anu.title}
⭔ Ext : Search
⭔ ID : ${anu.videoId}
⭔ Duration : ${anu.timestamp}
⭔ Viewers : ${anu.views}
⭔ Upload At : ${anu.ago}
⭔ Author : ${anu.author.name}
⭔ Channel : ${anu.author.url}
⭔ Description : ${anu.description}
⭔ Url : ${anu.url}`,
                    footer: raisa.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                raisa.sendMessage(rara.chat, buttonMessage, { quoted: m })
            }
            break
	    case 'ytmp3': case 'ytaudio': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return rara.reply('File Melebihi Batas '+util.format(media))
                raisa.sendImage(rara.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, m)
                raisa.sendMessage(rara.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'ytmp4': case 'ytvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return rara.reply('File Melebihi Batas '+util.format(media))
                raisa.sendMessage(rara.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
	    case 'getmusic': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!rara.quoted) return rara.reply('Reply Pesan')
                if (!rara.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
		let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(urls[text - 1], quality)
                if (media.filesize >= 100000) return rara.reply('File Melebihi Batas '+util.format(media))
                raisa.sendImage(rara.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, m)
                raisa.sendMessage(rara.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'getvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!rara.quoted) return rara.reply('Reply Pesan')
                if (!rara.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return rara.reply('File Melebihi Batas '+util.format(media))
                raisa.sendMessage(rara.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
            case 'pinterest': {
                rara.reply(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                raisa.sendMessage(rara.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
            }
            break
            case 'anime': case 'waifu': case 'husbu': case 'neko': case 'shinobu': case 'megumin': case 'waifus': case 'nekos': case 'trap': case 'blowjob': {
                rara.reply(mess.wait)
                raisa.sendMessage(rara.chat, { image: { url: api('zenz', '/api/random/'+command, {}, 'apikey') }, caption: 'Generate Random ' + command }, { quoted: m })
            }
            break
	    case 'couple': {
                rara.reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                raisa.sendMessage(rara.chat, { image: { url: randorara.male }, caption: `Couple Male` }, { quoted: m })
                raisa.sendMessage(rara.chat, { image: { url: randorara.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break
            case 'coffe': case 'kopi': {
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕ Random Coffe`,
                    footer: raisa.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                raisa.sendMessage(rara.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wallpaper': {
                if (!text) throw 'Masukkan Query Title'
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.type}\n⭔ Detail : ${result.source}\n⭔ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: raisa.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                raisa.sendMessage(rara.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wikimedia': {
                if (!text) throw 'Masukkan Query Title'
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `⭔ Title : ${result.title}\n⭔ Source : ${result.source}\n⭔ Media Url : ${result.image}`,
                    footer: raisa.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                raisa.sendMessage(rara.chat, buttonMessage, { quoted: m })
            }
            break
            case 'quotesanime': case 'quoteanime': {
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                raisa.sendMessage(rara.chat, buttonMessage, { quoted: m })
            }
            break
	        case 'motivasi': case 'dilanquote': case 'bucinquote': case 'katasenja': case 'puisi': {
                let anu = await fetchJson(api('zenz', '/api/'+command, {}, 'apikey'))
                let buttons = [
                    {buttonId: `motivasi`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.result.message,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                raisa.sendMessage(rara.chat, buttonMessage, { quoted: m })
            }
            break
            case '3dchristmas': case '3ddeepsea': case 'americanflag': case '3dscifi': case '3drainbow': case '3dwaterpipe': case 'halloweenskeleton': case 'sketch': case 'bluecircuit': case 'space': case 'metallic': case 'fiction': case 'greenhorror': case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dcrackedstone': case '3dneonlight': case 'impressiveglitch': case 'naturalleaves': case 'fireworksparkle': case 'matrix': case 'dropwater':  case 'harrypotter': case 'foggywindow': case 'neondevils': case 'christmasholiday': case '3dgradient': case 'blackpink': case 'gluetext': {
                if (!text) throw `Example : ${prefix + command} text`
                rara.reply(mess.wait)
                raisa.sendMessage(rara.chat, { image: { url: api('zenz', '/textpro/' + command, { text: text }, 'apikey') }, caption: `Text Pro ${command}` }, { quoted: m})
	    }
            break
	    case 'shadow': case 'romantic': case 'smoke': case 'burnpapper': case 'naruto': case 'lovemsg': case 'grassmsg': case 'lovetext': case 'coffecup': case 'butterfly': case 'harrypotter': case 'retrolol': {
                if (!text) throw 'No Query Text'
                rara.reply(mess.wait)
                raisa.sendMessage(rara.chat, { image: { url: api('zenz', '/photooxy/' + command, { text: text }, 'apikey') }, caption: `Photo Oxy ${command}` }, { quoted: m })
            }
            break
            case 'ffcover': case 'crossfire': case 'galaxy': case 'glass': case 'neon': case 'beach': case 'blackpink': case 'igcertificate': case 'ytcertificate': {
                if (!text) throw 'No Query Text'
                rara.reply(mess.wait)
                raisa.sendMessage(rara.chat, { image: { url: api('zenz', '/ephoto/' + command, { text: text }, 'apikey') }, caption: `Ephoto ${command}` }, { quoted: m })
            }
            break
	    case 'nomerhoki': case 'nomorhoki': {
                if (!Number(text)) throw `Example : ${prefix + command} 6288292024190`
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return rara.reply(anu.message)
                raisa.sendText(rara.chat, `⭔ *Nomor HP :* ${anu.message.nomer_hp}\n⭔ *Angka Shuzi :* ${anu.message.angka_shuzi}\n⭔ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n⭔ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
            case 'artimimpi': case 'tafsirmimpi': {
                if (!text) throw `Example : ${prefix + command} belanja`
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return rara.reply(anu.message)
                raisa.sendText(rara.chat, `⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}`, m)
            }
            break
            case 'ramalanjodoh': case 'ramaljodoh': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return rara.reply(anu.message)
                raisa.sendText(rara.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return rara.reply(anu.message)
                raisa.sendText(rara.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'suamiistri': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return rara.reply(anu.message)
                raisa.sendText(rara.chat, `⭔ *Nama Suami :* ${anu.message.suami.nama}\n⭔ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n⭔ *Nama Istri :* ${anu.message.istri.nama}\n⭔ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalancinta': case 'ramalcinta': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return rara.reply(anu.message)
                raisa.sendText(rara.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artinama': {
                if (!text) throw `Example : ${prefix + command} Dika Ardianta`
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return rara.reply(anu.message)
                raisa.sendText(rara.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'kecocokannama': case 'cocoknama': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return rara.reply(anu.message)
                raisa.sendText(rara.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Life Path :* ${anu.message.life_path}\n⭔ *Destiny :* ${anu.message.destiny}\n⭔ *Destiny Desire :* ${anu.message.destiny_desire}\n⭔ *Personality :* ${anu.message.personality}\n⭔ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
                if (!text) throw `Example : ${prefix + command} Dika|Novia`
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return rara.reply(anu.message)
                raisa.sendImage(rara.chat,  anu.message.gambar, `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case 'jadianpernikahan': case 'jadiannikah': {
                if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return rara.reply(anu.message)
                raisa.sendText(rara.chat, `⭔ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⭔ *karakteristik :* ${anu.message.karakteristik}`, m)
            }
            break
            case 'sifatusaha': {
                if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return rara.reply(anu.message)
                raisa.sendText(rara.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`, m)
            }
            break
            case 'rejeki': case 'rezeki': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return rara.reply(anu.message)
                raisa.sendText(rara.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Rezeki :* ${anu.message.rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'pekerjaan': case 'kerja': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return rara.reply(anu.message)
                raisa.sendText(rara.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
                if (!text) throw `Example : 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return rara.reply(anu.message)
                raisa.sendText(rara.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case 'potensipenyakit': case 'penyakit': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return rara.reply(anu.message)
                raisa.sendText(rara.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artitarot': case 'tarot': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return rara.reply(anu.message)
                raisa.sendImage(rara.chat, anu.message.image, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'fengshui': {
                if (!text) throw `Example : ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return rara.reply(anu.message)
                raisa.sendText(rara.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${anu.message.karakter}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case 'haribaik': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return rara.reply(anu.message)
                raisa.sendText(rara.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harisangar': case 'taliwangke': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return rara.reply(anu.message)
                raisa.sendText(rara.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harinaas': case 'harisial': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return rara.reply(anu.message)
                raisa.sendText(rara.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hari Naas :* ${anu.message.hari_naas}\n⭔ *Info :* ${anu.message.catatan}\n⭔ *Catatan :* ${anu.message.info}`, m)
            }
            break
            case 'nagahari': case 'harinaga': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return rara.reply(anu.message)
                raisa.sendText(rara.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'arahrejeki': case 'arahrezeki': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return rara.reply(anu.message)
                raisa.sendText(rara.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'peruntungan': {
                if (!text) throw `Example : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return rara.reply(anu.message)
                raisa.sendText(rara.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'weton': case 'wetonjawa': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return rara.reply(anu.message)
                raisa.sendText(rara.chat, `⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case 'sifat': case 'karakter': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return rara.reply(anu.message)
                raisa.sendText(rara.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
            }
            break
            case 'keberuntungan': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return rara.reply(anu.message)
                raisa.sendText(rara.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`, m)
            }
            break
            case 'memancing': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return rara.reply(anu.message)
                raisa.sendText(rara.chat, `⭔ *Tanggal :* ${anu.message.tgl_memancing}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'masasubur': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return rara.reply(anu.message)
                raisa.sendText(rara.chat, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'zodiak': case 'zodiac': {
                if (!text) throw `Example : ${prefix+ command} 7 7 2005`
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return rara.reply(anu.message)
                raisa.sendText(rara.chat, `⭔ *Zodiak :* ${anu.message.zodiak}\n⭔ *Nomor :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planet :* ${anu.message.planet_yang_mengitari}\n⭔ *Bunga :* ${anu.message.bunga_keberuntungan}\n⭔ *Warna :* ${anu.message.warna_keberuntungan}\n⭔ *Batu :* ${anu.message.batu_keberuntungan}\n⭔ *Elemen :* ${anu.message.elemen_keberuntungan}\n⭔ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'shio': {
                if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
                let anu = await primbon.shio(text)
                if (anu.status == false) return rara.reply(anu.message)
                raisa.sendText(rara.chat, `⭔ *Hasil :* ${anu.message}`, m)
            }
            break
	    case 'stalker': case 'stalk': {
		if (!isPremium && global.db.data.users[rara.sender].limit < 1) return rara.reply('Limit Harian Anda Telah Habis')
                if (!text) return rara.reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                let [type, id, zone] = args
                if (type.toLowerCase() == 'ff') {
                    if (!id) throw `No Query id, Example ${prefix + command} ff 552992060`
                    let anu = await fetchJson(api('zenz', '/api/nickff', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return rara.reply(anu.result.message)
                    rara.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[rara.sender].limit -= 1
                } else if (type.toLowerCase() == 'ml') {
                    if (!id) throw `No Query id, Example : ${prefix + command} ml 214885010 2253`
                    if (!zone) throw `No Query id, Example : ${prefix + command} ml 214885010 2253`
                    let anu = await fetchJson(api('zenz', '/api/nickml', { apikey: global.APIKeys[global.APIs['zenz']], query: id, query2: zone }))
                    if (anu.status == false) return rara.reply(anu.result.message)
                    rara.reply(`ID : ${anu.result.gameId}\nZone : ${anu.result.zoneId}\nUsername : ${anu.result.userName}`)
		    db.data.users[rara.sender].limit -= 1
                } else if (type.toLowerCase() == 'aov') {
                    if (!id) throw `No Query id, Example ${prefix + command} aov 293306941441181`
                    let anu = await fetchJson(api('zenz', '/api/nickaov', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return rara.reply(anu.result.message)
                    rara.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[rara.sender].limit -= 1
                } else if (type.toLowerCase() == 'cod') {
                    if (!id) throw `No Query id, Example ${prefix + command} cod 6290150021186841472`
                    let anu = await fetchJson(api('zenz', '/api/nickcod', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return rara.reply(anu.result.message)
                    rara.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[rara.sender].limit -= 1
                } else if (type.toLowerCase() == 'pb') {
                    if (!id) throw `No Query id, Example ${prefix + command} pb riio46`
                    let anu = await fetchJson(api('zenz', '/api/nickpb', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return rara.reply(anu.result.message)
                    rara.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[rara.sender].limit -= 1
                } else if (type.toLowerCase() == 'ig') {
                    if (!id) throw `No Query username, Example : ${prefix + command} ig cak_haho`
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/ig', { username: id }, 'apikey'))
                    if (anu.status == false) return rara.reply(anu.result.message)
                    raisa.sendMedia(rara.chat, anu.caption.profile_hd, '', `⭔ Full Name : ${anu.caption.full_name}\n⭔ User Name : ${anu.caption.user_name}\n⭔ ID ${anu.caption.user_id}\n⭔ Followers : ${anu.caption.followers}\n⭔ Following : ${anu.caption.following}\n⭔ Bussines : ${anu.caption.bussines}\n⭔ Profesional : ${anu.caption.profesional}\n⭔ Verified : ${anu.caption.verified}\n⭔ Private : ${anu.caption.private}\n⭔ Bio : ${anu.caption.biography}\n⭔ Bio Url : ${anu.caption.bio_url}`, m)
		    db.data.users[rara.sender].limit -= 1
                } else if (type.toLowerCase() == 'npm') {
                    if (!id) throw `No Query username, Example : ${prefix + command} npm scrape-primbon`
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/npm', { query: id }, 'apikey'))
                    if (anu.status == false) return rara.reply(anu.result.message)
                    rara.reply(`⭔ Name : ${anu.name}\n⭔ Version : ${Object.keys(anu.versions)}\n⭔ Created : ${tanggal(anu.time.created)}\n⭔ Modified : ${tanggal(anu.time.modified)}\n⭔ Maintainers :\n ${anu.maintainers.map(v => `- ${v.name} : ${v.email}`).join('\n')}\n\n⭔ Description : ${anu.description}\n⭔ Homepage : ${anu.homepage}\n⭔ Keywords : ${anu.keywords}\n⭔ Author : ${anu.author.name}\n⭔ License : ${anu.license}\n⭔ Readme : ${anu.readme}`)
		    db.data.users[rara.sender].limit -= 1
                } else {
                    rara.reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                }
            }
            break
	        case 'tiktok': case 'tiktoknowm': {
                if (!text) throw 'Masukkan Query Link!'
                rara.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '► With Watermark'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.nowatermark },
                    caption: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                raisa.sendMessage(rara.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktokwm': case 'tiktokwatermark': {
                if (!text) throw 'Masukkan Query Link!'
                rara.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► No Watermark'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.watermark },
                    caption: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                raisa.sendMessage(rara.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktokmp3': case 'tiktokaudio': {
                if (!text) throw 'Masukkan Query Link!'
                rara.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/musically', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► No Watermark'}, type: 1},
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '► With Watermark'}, type: 1}
                ]
                let buttonMessage = {
                    text: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                let msg = await raisa.sendMessage(rara.chat, buttonMessage, { quoted: m })
                raisa.sendMessage(rara.chat, { audio: { url: anu.result.audio }, mimetype: 'audio/mpeg'}, { quoted: msg })
            }
            break
	        case 'instagram': case 'ig': case 'igdl': {
                if (!text) throw 'No Query Url!'
                rara.reply(mess.wait)
                if (/(?:\/p\/|\/reel\/|\/tv\/)([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instagram2', { url: isUrl(text)[0] }, 'apikey'))
                    for (let media of anu.data) raisa.sendMedia(rara.chat, media, '', `Download Url Instagram From ${isUrl(text)[0]}`, m)
                } else if (/\/stories\/([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instastory', { url: isUrl(text)[0] }, 'apikey'))
                    raisa.sendMedia(rara.chat, anu.media[0].url, '', `Download Url Instagram From ${isUrl(text)[0]}`, m)
                }
            }
            break
		/** Backup misal yg atas ga keluar video **/
		case 'igeh': case 'instagram2': case 'ig2': case 'igdl2': {
                if (!text) throw 'Masukkan Query Link!'
                rara.reply(mess.wait)
                
                let anu = await fetchJson(api('zenz', '/downloader/instagram2', { url:text }, 'apikey'))
                raisa.sendMessage(rara.chat, { video: { url: anu.data[0] } }, { quoted: m })
            }
            break
            case 'joox': case 'jooxdl': {
                if (!text) throw 'No Query Title'
                rara.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/joox', { query: text }, 'apikey'))
                let msg = await raisa.sendImage(rara.chat, anu.result.img, `⭔ Title : ${anu.result.lagu}\n⭔ Album : ${anu.result.album}\n⭔ Singer : ${anu.result.penyanyi}\n⭔ Publish : ${anu.result.publish}\n⭔ Lirik :\n${anu.result.lirik.result}`, m)
                raisa.sendMessage(rara.chat, { audio: { url: anu.result.mp4aLink }, mimetype: 'audio/mpeg', fileName: anu.result.lagu+'.m4a' }, { quoted: msg })
            }
            break
            case 'soundcloud': case 'scdl': {
                if (!text) throw 'No Query Title'
                rara.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/soundcloud', { url: isUrl(text)[0] }, 'apikey'))
                let msg = await raisa.sendImage(rara.chat, anu.result.thumb, `⭔ Title : ${anu.result.title}\n⭔ Url : ${isUrl(text)[0]}`)
                raisa.sendMessage(rara.chat, { audio: { url: anu.result.url }, mimetype: 'audio/mpeg', fileName: anu.result.title+'.m4a' }, { quoted: msg })
            }
            break
	        case 'twitdl': case 'twitter': {
                if (!text) throw 'Masukkan Query Link!'
                rara.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twittermp3 ${text}`, buttonText: {displayText: '► Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.HD || anu.result.SD },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                raisa.sendMessage(rara.chat, buttonMessage, { quoted: m })
            }
            break
            case 'twittermp3': case 'twitteraudio': {
                if (!text) throw 'Masukkan Query Link!'
                rara.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twitter ${text}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
		    image: { url: anu.result.thumb },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 4
                }
                let msg = await raisa.sendMessage(rara.chat, buttonMessage, { quoted: m })
                raisa.sendMessage(rara.chat, { audio: { url: anu.result.audio } }, { quoted: msg })
            }
            break
	        case 'fbdl': case 'fb': case 'facebook': {
                if (!text) throw 'Masukkan Query Link!'
                rara.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/facebook', { url: text }, 'apikey'))
                raisa.sendMessage(rara.chat, { video: { url: anu.result.url }, caption: `⭔ Title : ${anu.result.title}`}, { quoted: m })
            }
            break
	        case 'pindl': case 'pinterestdl': {
                if (!text) throw 'Masukkan Query Link!'
                rara.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/pinterestdl', { url: text }, 'apikey'))
                raisa.sendMessage(rara.chat, { video: { url: anu.result }, caption: `Download From ${text}` }, { quoted: m })
            }
            break
            case 'umma': case 'ummadl': {
	        if (!text) throw `Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`
                let { umma } = require('./lib) scraper')
		let anu = await umma(isUrl(text)[0])
		if (anu.type == 'video') {
		    let buttons = [
                        {buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: '♫ Audio'}, type: 1},
                        {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '► Video'}, type: 1}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
⭔ Title : ${anu.title}
⭔ Author : ${anu.author.name}
⭔ Like : ${anu.like}
⭔ Caption : ${anu.caption}
⭔ Url : ${anu.media[0]}
Untuk Download Media Silahkan Klik salah satu Button dibawah ini atau masukkan command ytmp3/ytmp4 dengan url diatas
`,
			footer: raisa.user.name,
			buttons,
			headerType: 4
		    }
		    raisa.sendMessage(rara.chat, buttonMessage, { quoted: m })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        raisa.sendMessage(rara.chat, { image: { url }, caption: `⭔ Title : ${anu.title}\n⭔ Author : ${anu.author.name}\n⭔ Like : ${anu.like}\n⭔ Caption : ${anu.caption}` }, { quoted: m })
		    })
		}
	    }
	    break
        case 'ringtone': {
		if (!text) throw `Example : ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		raisa.sendMessage(rara.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
		case 'iqra': {
		oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
		if (!text) throw oh
		yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		raisa.sendMessage(rara.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => rara.reply(oh))
		}
		break
		case 'juzamma': {
		if (args[0] === 'pdf') {
		rara.reply(mess.wait)
		raisa.sendMessage(rara.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
		} else if (args[0] === 'docx') {
		rara.reply(mess.wait)
		raisa.sendMessage(rara.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
		} else if (args[0] === 'pptx') {
		rara.reply(mess.wait)
		raisa.sendMessage(rara.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
		} else if (args[0] === 'xlsx') {
		rara.reply(mess.wait)
		raisa.sendMessage(rara.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
		} else {
		rara.reply(`Mau format apa ? Example : ${prefix + command} pdf

Format yang tersedia : pdf, docx, pptx, xlsx`)
		}
		}
		break
		case 'hadis': case 'hadist': {
		if (!args[0]) throw `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
		if (!args[1]) throw `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`
		try {
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
		let { number, arab, id } = res.find(v => v.number == args[1])
		rara.reply(`No. ${number}

${arab}

${id}`)
		} catch (e) {
		rara.reply(`Hadis tidak ditemukan !`)
		}
		}
		break
		case 'alquran': {
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		rara.reply(txt)
		raisa.sendMessage(rara.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
		}
		break
		case 'tafsirsurah': {
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		rara.reply(txt)
		}
		break
		   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                rara.reply(mess.wait)
                let media = await raisa.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return rara.reply(err)
                let buff = fs.readFileSync(ran)
                raisa.sendMessage(rara.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else rara.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                } catch (e) {
                rara.reply(e)
                }
                break
            case 'setcmd': {
                if (!rara.quoted) throw 'Reply Pesan!'
                if (!rara.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `Untuk Command Apa?`
                let hash = rara.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: rara.mentionedJid,
                    creator: rara.sender,
                    at: + new Date,
                    locked: false,
                }
                rara.reply(`Done!`)
            }
            break
            case 'delcmd': {
                let hash = rara.quoted.fileSha256.toString('base64')
                if (!hash) throw `Tidak ada hash`
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete global.db.data.sticker[hash]
                rara.reply(`Done!`)
            }
            break
            case 'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                raisa.sendText(rara.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) throw mess.owner
                if (!rara.quoted) throw 'Reply Pesan!'
                if (!rara.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = rara.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                rara.reply('Done!')
            }
            break
            case 'addmsg': {
                if (!rara.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
                if (!text) throw `Example : ${prefix + command} nama file`
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
rara.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
                raisa.copyNForward(rara.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        rara.reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': case'del': {
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return rara.reply(`'${text}' tidak terdaftar didalam list pesan`)
		delete msgs[text.toLowerCase()]
		rara.reply(`Berhasil menghapus '${text}' dari list pesan`)
            }
	    break
	    case 'anonymous': {
                if (rara.isGroup) return rara.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                ]
                raisa.sendButtonText(rara.chat, buttons, `\`\`\`Hi ${await raisa.getName(rara.sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, raisa.user.name, m)
            }
			break
            case 'keluar': case 'leave': {
                if (rara.isGroup) return rara.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => roorara.check(rara.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await raisa.sendButtonText(rara.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
                    throw false
                }
                rara.reply('Ok')
                let other = roorara.other(rara.sender)
                if (other) await raisa.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[roorara.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
                if (rara.isGroup) return rara.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => roorara.check(rara.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await raisa.sendButtonText(rara.chat, buttons, `\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda\`\`\``, raisa.user.name, m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => roorara.state === 'WAITING' && !roorara.check(rara.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await raisa.sendButtonText(roorara.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, raisa.user.name, m)
                    roorara.b = rara.sender
                    roorara.state = 'CHATTING'
                    await raisa.sendButtonText(roorara.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, raisa.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: rara.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await raisa.sendButtonText(rara.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, raisa.user.name, m)
                }
                break
            }
            case 'next': case 'lanjut': {
                if (rara.isGroup) return rara.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => roorara.check(rara.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await raisa.sendButtonText(rara.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
                    throw false
                }
                let other = romeo.other(rara.sender)
                if (other) await raisa.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => roorara.state === 'WAITING' && !roorara.check(rara.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await raisa.sendButtonText(roorara.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, raisa.user.name, m)
                    roorara.b = rara.sender
                    roorara.state = 'CHATTING'
                    await raisa.sendButtonText(roorara.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, raisa.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: rara.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await raisa.sendButtonText(rara.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, raisa.user.name, m)
                }
                break
            }
            case 'public': {
                if (!isCreator) throw mess.owner
                raisa.public = true
                rara.reply('Sukse Change To Public Usage')
            }
            break
            case 'self': {
                if (!isCreator) throw mess.owner
                raisa.public = false
                rara.reply('Sukses Change To Self Usage')
            }
            break
            case 'ping': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
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
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                rara.reply(respon)
            }
            break
            case 'speedtest': {
            rara.reply('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) rara.reply(stdout)
        if (stderr.trim()) rara.reply(stderr)
            }
            }
            break
            case 'owner': case 'creator': {
                raisa.sendContact(rara.chat, global.owner, m)
            }
            break
			case 'menu1':
			{
				mekk = `┌──⭓ *Group Menu*
│
│⭔ ${prefix}linkgroup
│⭔ ${prefix}ephemeral [option]
│⭔ ${prefix}setppgc [image]
│⭔ ${prefix}setname [text]
│⭔ ${prefix}setdesc [text]
│⭔ ${prefix}group [option]
│⭔ ${prefix}editinfo [option]
│⭔ ${prefix}add @user
│⭔ ${prefix}kick @user
│⭔ ${prefix}hidetag [text]
│⭔ ${prefix}tagall [text]
│⭔ ${prefix}antilink [on/off]
│⭔ ${prefix}mute [on/off]
│⭔ ${prefix}promote @user
│⭔ ${prefix}demote @user
│⭔ ${prefix}vote [text]
│⭔ ${prefix}devote
│⭔ ${prefix}upvote
│⭔ ${prefix}cekvote
│⭔ ${prefix}hapusvote
│
└───────⭓`
let bttn = [{
                                urlButton: {
                                    displayText: 'GRUB WA',
                                    url: 'https://chat.whatsapp.com/KsCSv8SvQ7G8Enu6viEX7m'
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: '+62 821-3215-6123'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'PING',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'OWNER',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'SC',
                                    id: 'sc'
                                }
                            }]
                        raisa.send5ButImg(rara.chat, mekk, raisa.user.name, global.thumb, bttn)
                     
            
			}
			break
			case 'menu2': {
				crott = `┌──⭓ *Downloader Menu*
│
│⭔ ${prefix}tiktoknowm [url]
│⭔ ${prefix}tiktokwm [url]
│⭔ ${prefix}tiktokmp3 [url]
│⭔ ${prefix}instagram [url]
│⭔ ${prefix}twitter [url]
│⭔ ${prefix}twittermp3 [url]
│⭔ ${prefix}facebook [url]
│⭔ ${prefix}pinterestdl [url]
│⭔ ${prefix}ytmp3 [url]
│⭔ ${prefix}ytmp4 [url]
│⭔ ${prefix}getmusic [query]
│⭔ ${prefix}getvideo [query]
│⭔ ${prefix}umma [url]
│⭔ ${prefix}joox [query]
│⭔ ${prefix}soundcloud [url]
│
└───────⭓`
let bttn = [{
                                urlButton: {
                                    displayText: 'GRUB WA',
                                    url: 'https://chat.whatsapp.com/KsCSv8SvQ7G8Enu6viEX7m'
                                }
                            }, {
                                urlButton: {
                                    displayText: 'ISNTAGRAM',
                                    url: 'https://instagram.com/kevinafsar_'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'PING',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'OWNER',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'SC',
                                    id: 'sc'
                                }
                            }]
                        raisa.send5ButImg(rara.chat, crott, raisa.user.name, global.thumb, bttn)
                     }
            
			
			break
			case 'menu3': {
				dd = `┌──⭓ *Search Menu*
│
│⭔ ${prefix}play [query]
│⭔ ${prefix}yts [query]
│⭔ ${prefix}google [query]
│⭔ ${prefix}gimage [query]
│⭔ ${prefix}pinterest [query]
│⭔ ${prefix}wallpaper [query]
│⭔ ${prefix}wikimedia [query]
│⭔ ${prefix}ytsearch [query]
│⭔ ${prefix}ringtone [query]
│⭔ ${prefix}stalk [option] [query]
│
└───────⭓`
let bttn = [{
                                urlButton: {
                                    displayText: 'GRUB WA',
                                    url: 'https://chat.whatsapp.com/KsCSv8SvQ7G8Enu6viEX7m'
                                }
                            }, {
                                urlButton: {
                                    displayText: 'GITHUB',
                                    url: '-'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'PING',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'OWNER',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'SC',
                                    id: 'sc'
                                }
                            }]
                        raisa.send5ButImg(rara.chat, dd, raisa.user.name, global.thumb, bttn)
                     }
			
			break
			case 'menu4':{
				dd = `┌──⭓ *Random Menu*
│
│⭔ ${prefix}coffe
│⭔ ${prefix}quotesanime
│⭔ ${prefix}motivasi
│⭔ ${prefix}dilanquote
│⭔ ${prefix}bucinquote
│⭔ ${prefix}katasenja
│⭔ ${prefix}puisi
│⭔ ${prefix}couple
│⭔ ${prefix}anime
│⭔ ${prefix}waifu
│⭔ ${prefix}husbu
│⭔ ${prefix}neko
│⭔ ${prefix}shinobu
│⭔ ${prefix}waifus (nsfw)
│⭔ ${prefix}nekos (nsfw)
│⭔ ${prefix}trap (nsfw)
│⭔ ${prefix}blowjob (nsfw)
│
└───────⭓`
let bttn = [{
                                urlButton: {
                                    displayText: 'GRUB WA',
                                    url: 'https://chat.whatsapp.com/KsCSv8SvQ7G8Enu6viEX7m'
                                }
                            }, {
                                urlButton: {
                                    displayText: 'GITHUB',
                                    url: '-'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'PING',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'OWNER',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'SC',
                                    id: 'sc'
                                }
                            }]
                        raisa.send5ButImg(rara.chat, dd, raisa.user.name, global.thumb, bttn)
                     }
			
			break
			case 'menu5':{
				dd = `┌──⭓ *Text Pro Menu*
│
│⭔ ${prefix}3dchristmas
│⭔ ${prefix}3ddeepsea
│⭔ ${prefix}americanflag
│⭔ ${prefix}3dscifi
│⭔ ${prefix}3drainbow
│⭔ ${prefix}3dwaterpipe
│⭔ ${prefix}halloweenskeleton
│⭔ ${prefix}sketch
│⭔ ${prefix}bluecircuit
│⭔ ${prefix}space
│⭔ ${prefix}metallic
│⭔ ${prefix}fiction
│⭔ ${prefix}greenhorror
│⭔ ${prefix}transformer
│⭔ ${prefix}berry
│⭔ ${prefix}thunder
│⭔ ${prefix}magma
│⭔ ${prefix}3dcrackedstone
│⭔ ${prefix}3dneonlight
│⭔ ${prefix}impressiveglitch
│⭔ ${prefix}naturalleaves
│⭔ ${prefix}fireworksparkle
│⭔ ${prefix}matrix
│⭔ ${prefix}dropwater
│⭔ ${prefix}harrypotter
│⭔ ${prefix}foggywindow
│⭔ ${prefix}neondevils
│⭔ ${prefix}christmasholiday
│⭔ ${prefix}3dgradient
│⭔ ${prefix}blackpink
│⭔ ${prefix}gluetext
│
└───────⭓`
let bttn = [{
                                urlButton: {
                                    displayText: 'GRUB WA',
                                    url: 'https://chat.whatsapp.com/KsCSv8SvQ7G8Enu6viEX7m'
                                }
                            }, {
                                urlButton: {
                                    displayText: 'GITHUB',
                                    url: '-'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'PING',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'OWNER',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'SC',
                                    id: 'sc'
                                }
                            }]
                        raisa.send5ButImg(rara.chat, dd, raisa.user.name, global.thumb, bttn)
                     }
			
			break
			case 'menu6':{
				dd = `┌──⭓ *Photo Oxy Menu*
│
│⭔ ${prefix}shadow
│⭔ ${prefix}romantic
│⭔ ${prefix}smoke
│⭔ ${prefix}burnpapper
│⭔ ${prefix}naruto
│⭔ ${prefix}lovemsg
│⭔ ${prefix}grassmsg
│⭔ ${prefix}lovetext
│⭔ ${prefix}coffecup
│⭔ ${prefix}butterfly
│⭔ ${prefix}harrypotter
│⭔ ${prefix}retrolol
│
└───────⭓`
let bttn = [{
                                urlButton: {
                                    displayText: 'GRUB WA',
                                    url: 'https://chat.whatsapp.com/KsCSv8SvQ7G8Enu6viEX7m'
                                }
                            }, {
                                urlButton: {
                                    displayText: 'GITHUB',
                                    url: '-'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'PING',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'OWNER',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'SC',
                                    id: 'sc'
                                }
                            }]
                        raisa.send5ButImg(rara.chat, dd, raisa.user.name, global.thumb, bttn)
                     }
			
			break
			
			case 'menu7': {
				dd = `┌──⭓ *Ephoto Menu*
│
│⭔ ${prefix}ffcover
│⭔ ${prefix}crossfire
│⭔ ${prefix}galaxy
│⭔ ${prefix}glass
│⭔ ${prefix}neon
│⭔ ${prefix}beach
│⭔ ${prefix}blackpink
│⭔ ${prefix}igcertificate
│⭔ ${prefix}ytcertificate
│
└───────⭓`
let bttn = [{
                                urlButton: {
                                    displayText: 'GRUB WA',
                                    url: 'https://chat.whatsapp.com/KsCSv8SvQ7G8Enu6viEX7m'
                                }
                            }, {
                                urlButton: {
                                    displayText: 'GITHUB',
                                    url: '-'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'PING',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'OWNER',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'SC',
                                    id: 'sc'
                                }
                            }]
                        raisa.send5ButImg(rara.chat, dd, raisa.user.name, global.thumb, bttn)
                     }
			
			break
			case 'menu8': {
				dd = `
┌──⭓ *Fun Menu*
│
│⭔ ${prefix}halah
│⭔ ${prefix}hilih
│⭔ ${prefix}huluh
│⭔ ${prefix}heleh
│⭔ ${prefix}holoh
│⭔ ${prefix}jadian
│⭔ ${prefix}jodohku
│⭔ ${prefix}delttt
│⭔ ${prefix}tictactoe
│⭔ ${prefix}family100
│⭔ ${prefix}tebak [option]
│⭔ ${prefix}math [mode]
│⭔ ${prefix}suitpvp [@tag]
│
└───────⭓`
let bttn = [{
                                urlButton: {
                                    displayText: 'GRUB WA',
                                    url: 'https://chat.whatsapp.com/KsCSv8SvQ7G8Enu6viEX7m'
                                }
                            }, {
                                urlButton: {
                                    displayText: 'GITHUB',
                                    url: '-'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'PING',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'OWNER',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'SC',
                                    id: 'sc'
                                }
                            }]
                        raisa.send5ButImg(rara.chat, dd, raisa.user.name, global.thumb, bttn)
                     }
			
			break
			case 'menu9': {
				dd = `┌──⭓ *Primbon Menu*
│
│⭔ ${prefix}nomorhoki
│⭔ ${prefix}artimimpi
│⭔ ${prefix}artinama
│⭔ ${prefix}ramaljodoh
│⭔ ${prefix}ramaljodohbali
│⭔ ${prefix}suamiistri
│⭔ ${prefix}ramalcinta
│⭔ ${prefix}cocoknama
│⭔ ${prefix}pasangan
│⭔ ${prefix}jadiannikah
│⭔ ${prefix}sifatusaha
│⭔ ${prefix}rezeki
│⭔ ${prefix}pekerjaan
│⭔ ${prefix}nasib
│⭔ ${prefix}penyakit
│⭔ ${prefix}tarot
│⭔ ${prefix}fengshui
│⭔ ${prefix}haribaik
│⭔ ${prefix}harisangar
│⭔ ${prefix}harisial
│⭔ ${prefix}nagahari
│⭔ ${prefix}arahrezeki
│⭔ ${prefix}peruntungan
│⭔ ${prefix}weton
│⭔ ${prefix}karakter
│⭔ ${prefix}keberuntungan
│⭔ ${prefix}memancing
│⭔ ${prefix}masasubur
│⭔ ${prefix}zodiak
│⭔ ${prefix}shio
│
└───────⭓`
let bttn = [{
                                urlButton: {
                                    displayText: 'GRUB WA',
                                    url: 'https://chat.whatsapp.com/KsCSv8SvQ7G8Enu6viEX7m'
                                }
                            }, {
                                urlButton: {
                                    displayText: 'GITHUB',
                                    url: '-'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'PING',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'OWNER',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'SC',
                                    id: 'sc'
                                }
                            }]
                        raisa.send5ButImg(rara.chat, dd, raisa.user.name, global.thumb, bttn)
                     }
			
			break
			case 'menu9': {
				dd = `┌──⭓ *Convert Menu*
│
│⭔ ${prefix}toimage
│⭔ ${prefix}removebg
│⭔ ${prefix}sticker
│⭔ ${prefix}emojimix
│⭔ ${prefix}tovideo
│⭔ ${prefix}togif
│⭔ ${prefix}tourl
│⭔ ${prefix}tovn
│⭔ ${prefix}tomp3
│⭔ ${prefix}toaudio
│⭔ ${prefix}ebinary
│⭔ ${prefix}dbinary
│⭔ ${prefix}styletext
│
└───────⭓`
let bttn = [{
                                urlButton: {
                                    displayText: 'GRUB WA',
                                    url: 'https://chat.whatsapp.com/KsCSv8SvQ7G8Enu6viEX7m'
                                }
                            }, {
                                urlButton: {
                                    displayText: 'GITHUB',
                                    url: '-'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'PING',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'OWNER',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'SC',
                                    id: 'sc'
                                }
                            }]
                        raisa.send5ButImg(rara.chat, dd, raisa.user.name, global.thumb, bttn)
                     }
			
			break
			case 'menu11': {
				dd = `┌──⭓ *Main Menu*
│
│⭔ ${prefix}ping
│⭔ ${prefix}owner
│⭔ ${prefix}menu / ${prefix}help / ${prefix}?
│⭔ ${prefix}delete
│⭔ ${prefix}infochat
│⭔ ${prefix}quoted
│⭔ ${prefix}listpc
│⭔ ${prefix}listgc
│⭔ ${prefix}listonline
│⭔ ${prefix}speedtest
│
└───────⭓`
let bttn = [{
                                urlButton: {
                                    displayText: 'GRUB WA',
                                    url: 'https://chat.whatsapp.com/KsCSv8SvQ7G8Enu6viEX7m'
                                }
                            }, {
                                urlButton: {
                                    displayText: 'GITHUB',
                                    url: '-'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'PING',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'OWNER',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'SC',
                                    id: 'sc'
                                }
                            }]
                        raisa.send5ButImg(rara.chat, dd, raisa.user.name, global.thumb, bttn)
                     }
			
			
			break
			case 'menu12':{
				dd = `┌──⭓ *Database Menu*
│
│⭔ ${prefix}setcmd
│⭔ ${prefix}listcmd
│⭔ ${prefix}delcmd
│⭔ ${prefix}lockcmd
│⭔ ${prefix}addmsg
│⭔ ${prefix}listmsg
│⭔ ${prefix}getmsg
│⭔ ${prefix}delmsg
│
└───────⭓`
let bttn = [{
                                urlButton: {
                                    displayText: 'GRUB WA',
                                    url: 'https://chat.whatsapp.com/KsCSv8SvQ7G8Enu6viEX7m'
                                }
                            }, {
                                urlButton: {
                                    displayText: 'GITHUB',
                                    url: '-'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'PING',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'OWNER',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'SC',
                                    id: 'sc'
                                }
                            }]
                        raisa.send5ButImg(rara.chat, dd, raisa.user.name, global.thumb, bttn)
                     }
			
			
			
			break
			case 'menu13': {
				dd = `┌──⭓ *Anonymous Menu*
│
│⭔ ${prefix}anonymous
│⭔ ${prefix}start
│⭔ ${prefix}next
│⭔ ${prefix}keluar
│⭔ ${prefix}sendkontak
│
└───────⭓`
let bttn = [{
                                urlButton: {
                                    displayText: 'GRUB WA',
                                    url: 'https://chat.whatsapp.com/KsCSv8SvQ7G8Enu6viEX7m'
                                }
                            }, {
                                urlButton: {
                                    displayText: 'GITHUB',
                                    url: '-'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'PING',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'OWNER',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'SC',
                                    id: 'sc'
                                }
                            }]
                        raisa.send5ButImg(rara.chat, dd, raisa.user.name, global.thumb, bttn)
                     }
			
			break
			case 'menu14':{
				dd = `┌──⭓ *Islamic Menu*
│
│⭔ ${prefix}iqra
│⭔ ${prefix}hadist
│⭔ ${prefix}alquran
│⭔ ${prefix}juzamma
│⭔ ${prefix}tafsirsurah
│
└───────⭓`
let bttn = [{
                                urlButton: {
                                    displayText: 'GRUB WA',
                                    url: 'https://chat.whatsapp.com/KsCSv8SvQ7G8Enu6viEX7m'
                                }
                            }, {
                                urlButton: {
                                    displayText: 'GITHUB',
                                    url: '-'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'PING',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'OWNER',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'SC',
                                    id: 'sc'
                                }
                            }]
                        raisa.send5ButImg(rara.chat, dd, raisa.user.name, global.thumb, bttn)
                     }
			
			break
			case 'menu15':{
				dd = `┌──⭓ *Voice Changer*
│
│⭔ ${prefix}bass
│⭔ ${prefix}blown
│⭔ ${prefix}deep
│⭔ ${prefix}earrape
│⭔ ${prefix}fast
│⭔ ${prefix}fat
│⭔ ${prefix}nightcore
│⭔ ${prefix}reverse
│⭔ ${prefix}robot
│⭔ ${prefix}slow
│⭔ ${prefix}tupai
│
└───────⭓`
let bttn = [{
                                urlButton: {
                                    displayText: 'GRUB WA',
                                    url: 'https://chat.whatsapp.com/KsCSv8SvQ7G8Enu6viEX7m'
                                }
                            }, {
                                urlButton: {
                                    displayText: 'GITHUB',
                                    url: '-'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'PING',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'OWNER',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'SC',
                                    id: 'sc'
                                }
                            }]
                        raisa.send5ButImg(rara.chat, dd, raisa.user.name, global.thumb, bttn)
                     }
			
			break
			case 'ownermenu': case 'omenu':{
				dd = `┌──⭓ *Owner Menu*
│
│⭔ ${prefix}react [emoji]
│⭔ ${prefix}chat [option]
│⭔ ${prefix}join [link]
│⭔ ${prefix}leave
│⭔ ${prefix}block @user
│⭔ ${prefix}unblock @user
│⭔ ${prefix}bcgroup [text]
│⭔ ${prefix}bcall [text]
│⭔ ${prefix}setppbot [image]
│⭔ ${prefix}setexif
│
└───────⭓`
raisa.reply(dd)
			}
			break
            case 'list': case 'menu': case 'help': case '?': {
                anu = `
Hallo, *${pushname}* 👋
Bot ini masih dalam tahap pengembangan!!

Name: NINJABOT
Version: 1.0.1
Tipe: Typescript
Module: CommonJs
Database: Postgre
				
╭─ꕥ LIST MENU ꕥ──
├ ⟡ _*menu1*_
├ ⟡-> Grub menu
├ ⟡ _*menu2*_
├ ⟡-> Download Menu
├ ⟡ _*menu3*_
├ ⟡->  Search Menu
├ ⟡ _*menu4*_
├ ⟡-> Random menu
├ ⟡ _*menu5*_
├ ⟡-> Text Pro Menu
├ ⟡ _*menu6*_
├ ⟡-> Photo Oxy Menu
├ ⟡ _*menu7*_
├ ⟡-> Lupa anying
├ ⟡ _*menu8*_
├ ⟡-> Fun Menu
├ ⟡ _*menu9*_
├ ⟡-> Primbon Menu
├ ⟡ _*menu10*_
├ ⟡-> ConVert Menu
├ ⟡ _*menu11*_
├ ⟡-> Main Menu
├ ⟡ _*menu12*_
├ ⟡-> Database Menu
├ ⟡ _*menu13*_
├ ⟡-> Anonymous Menu
├ ⟡ _*menu14*_
├ ⟡-> Islamic Menu
├ ⟡ _*menu15*_
├ ⟡-> Voice Changer Menu
╰───── *Z!D@N* ──────
`
footer = 'Follow ig @_zidanfadilaharsa'
                let btn = [{
                                urlButton: {
                                    displayText: 'Source Code',
                                    url: '-'
                                }
                            }, {
                                urlButton: {
                                    displayText: 'GRUB WA',
                                    url: 'https://chat.whatsapp.com/KsCSv8SvQ7G8Enu6viEX7m'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'PING',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'OWNER',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'SC',
                                    id: 'sc'
                                }
                            }]
                        raisa.send5ButImg(rara.chat, anu, footer, global.thumb, btn)
                     }
            break
/*case 'menu': {
	rara.reply(`Menampilkan daftar menu, Mohon tunggu sebentar...`)
    await sleep(3000)
listnya = `
Halo ${pushname} 👋, Berikut daftar menu yang tersedia.
Ketik perintah (text tebal) untuk memilih menu.

╭─ꕥ LIST MENU ꕥ──
├ ⟡ *listvip*
├ ⟡-> List harga all cheat
├ ⟡ *gantiserial*
├ ⟡-> cara ganti serial/cek durasi
├ ⟡ *tutor*
├ ⟡-> cara pemasangan all cheat
├ ⟡ *status*
├ ⟡-> informasi status all cheat
├ ⟡ *download*
├ ⟡-> link download all cheat
├ ⟡ *gbpb*
├ ⟡-> list harga gb PointBlank
├ ⟡ *script*
├ ⟡-> harga script gb PointBlank
├ ⟡ *prem*
├ ⟡-> harga aplikasi premium
├ ⟡ *dmml*
├ ⟡-> harga top up Mobile Legends
├ ⟡ *cashpb*
├ ⟡-> harga top up PointBlank
├ ⟡ *giveaway*
├ ⟡-> informasi Give Away
├ ⟡ *seller*
├ ⟡-> Nomor seller (YANG ASLI)
╰───── *ENJOY* ──────
`
let tombol =  [{
                                quickReplyButton: {
                                    displayText: 'SELLER',
                                    id: 'seller'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'PAY',
                                    id: 'pay'
                                }
                            }]
                        raisa.send5ButImg(rara.chat, listnya, 'Chatt seller jika minat', global.thumb, tombol)
						//raisa.sendMessage(rara.chat, { audio: { url: './audio/audio1.mp3' }, mimetype: 'audio/mpeg', ptt : true}) // ini code buat audio/lagu
                     }
break*/
case 'seller':
const vcard = 'BEGIN:VCARD\n' // 
            + 'VERSION:3.0\n' 
            + 'FN:ENJOY`Daffa+OT\n' // Nama yang ditampilkan
            + 'ORG:VIP ENJOYERS;\n' // organisasi
            + 'TEL;type=CELL;type=VOICE;waid=6282311717972:+62 823 1171 7972\n' // Nomor whatsapp + whatsapp id
            + 'END:VCARD'
raisa.sendMessage(
    rara.chat,
    { 
        contacts: { 
            displayName: 'ENJOY`Daffa+OT', 
            contacts: [{ vcard }] 
        }
    }
)
//raisa.sendContact(rara.chat, global.seller, rara)
raisa.sendMessage(rara.chat, { audio: { url: './audio/seller.mp3' }, mimetype: 'audio/mpeg', ptt : true})
break
case 'listvip':
 raisa.sendMessage(rara.chat, { text: `
Hallo ${pushname} Berikut adalah daftar cheat yang tersedia:

✴️ *VIP ENJOYERS NET* ✴️
 Menyediakan Cheat Game Online :
 • Mobile Legend ✅ Ready
 • PUBG Android 🚫 Maintenance  
 • Free Fire Android ✅ Ready 
 • Free Fire Nox ✅ Ready
 • Free Fire MAX  🚫 Maintenance
 • PointBlank Zepetto  ✅ Ready
 • PointBlank Private ✅ Ready
 • Call Of Duty Android 🚫 Maintenance
 • SauSage Man Android 🚫 Maintenance
 • Lost Saga All Private VIP✅ Ready
 • Lost Saga Taiwan VIP✅ Ready
 • Lost Saga Origin VIP✅ Ready
 • Lost Saga Origin VVIP ✅ Ready

 ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
 ☑️ *Paket Personal : Point Blank Zepetto/Philipine*
 ⏩1 Hari : Rp. 10.000,-
 ⏩2 Hari : Rp. 15.000,-
 ⏩3+1+1 Hari  : Rp. 25.000,-
 ⏩7+2+1 Hari: Rp. 50.000,-
 ⏩14+3+1 Hari  : Rp. 70.000,-
 ⏩21+4+1 Hari  : Rp. 90.000,-
 ⏩30+5+1 Hari  : Rp. 100.000,-
 ⏩60+6+1 Hari  : Rp. 180.000,-
 ⏩90+7+1 Hari  : Rp. 250.000,-
 ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
 ☑️ *Paket Personal : Point Blank Private Server*
 ⏩1 Hari : Rp. 10.000,-
 ⏩2 Hari : Rp. 15.000,-
 ⏩3+1+1 Hari  : Rp. 25.000,-
 ⏩7+2+1 Hari: Rp. 50.000,-
 ⏩14+3+1 Hari  : Rp. 70.000,-
 ⏩21+4+1 Hari  : Rp. 90.000,-
 ⏩30+5+1 Hari  : Rp. 100.000,-
 ⏩60+6+1 Hari  : Rp. 180.000,-
 ⏩90+7+1 Hari  : Rp. 250.000,-
 ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
 ☑️ *Harga Personal Mobile Legends*
 ➡️ 30 Days : Rp 100.000
 ➡️ 60 Days : Rp 200.000
 ➡️ 90 Days : Rp 300.000
 ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
 ☑️ *Harga Personal PUBG Mobile Android*
 ➡️ 30 Days : Rp 150.000
 ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
 ☑️ *Harga Personal PUBG Emulator*
 ➡️ 1 Days : Rp 20.000
 ➡️ 3 Days : Rp 35.000
 ➡️ 7 Days : Rp 75.000
 ➡️ 14 Day : RP 100.000
 ➡️ 30 Days : Rp 150.000
 ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
 ☑️ *Paket Personal Free Fire & Max*
 ➡️ 30 Days : Rp 100.000
 ➡️ 60 Days : Rp 200.000
 ➡️ 90 Days : Rp 300.000
 ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
 ☑️ *Paket Personal Call Of Duty Garena,Global & Vietnam*
 ➡️30 DAYS: Rp,.150.000
 ➡️60 DAYS: Rp,.300.000
 ➡️90 DAYS: Rp,.450.000
 ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
 ☑️ *Harga Personal : Sausage Man*
 ➡️ 30 Days : Rp 100.000
 ➡️ 60 Days : Rp 200.000
 ➡️ 90 Days : Rp 300.000
 ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
 ☑️ *Paket Personal LS Origin VIP*
 ➡️ 1 Day : Rp.30.000
 ➡️ 3 Day : Rp.50.000
 ➡️ 7 Day : Rp.100.000
 ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
 ☑️ *Paket Personal LS Origin VVIP*
 ➡️ 14 Day : Rp.150.000
 ➡️ 30 DAYS: Rp,.250.000
 
 
 Chatt @6282132156123 Jika ${pushname} minat`, mentions: ['6282311717972@s.whatsapp.net'] })
 break
case 'qris': {

teks = `

Scan QR tersebut Bisa melalui :
• *OVO* 
• *GOPAY* 
• *DANA* 
• *LINK AJA*
• *SHOPEEPAY*
atau Ewallet Lainnya.
Ewallet yang *Belum Premium* Bisa Scan QR tersebut ya 😁✌️  
`

footer = 'Klik tombol dibawah untuk mendapatkan nomor seller yang asli'
let tombol =  [{
                                quickReplyButton: {
                                    displayText: 'SELLER',
                                    id: 'seller'
                                }  
                            }]
                        raisa.send5ButImg(rara.chat, teks, footer, global.qris, tombol)	
						await sleep(5000)
   raisa.sendMessage(rara.chat, { audio: { url: './audio/pay.mp3' }, mimetype: 'audio/mpeg', ptt : true})
}
break
case 'giveaway':
rara.reply(`
⚔️====*GIVEAWAY*====⚔️
═══════════════════
            *Infomasi:* 
Tanggal : *24 April 2022*
Pukul : *20.00 WIB*
Tempat : *Live Discord*
https://discord.gg/ZTRDShV5tw
═══════════════════
*Pengundian akan dilakukan sebanyak 3x*
▶️ Pemenang Pertama : 7 Hari Durasi Cheat
▶️ Pemenang Kedua    : 5 Hari Durasi Cheat
▶️ Pemenang Ketiga   : 2 Hari Durasi Cheat
*Note :*
- *Bebas Memilih Game*

*Hadiah Tambahan !!!*
▶️ Pemenang Pertama : Saldo Dana Rp.30.000 + Cheat 5 Day
▶️ Pemenang Kedua    : Saldo Dana Rp.20.000 + Cheat 3 Day
▶️ Pemenang Ketiga   : Saldo Dana Rp.10.000 + Cheat 1 Day

*Note :*
- *Hadiah bisa ditukar ke Durasi Cheat Sesuai Harga*
- *Bebas Memilih Game*
═══════════════════
*Syarat & Ketentuan Berlaku*
═══════════════════
- Hanya order di Saya *Admin*
- *Gimana cara Dapet Code Giveaway??* Order dulu yaa
- Pemenang WAJIB memiliki CODE GIVEAWAY dan masuk ke dalam grup *Member VIP ENJOYERS*
- Jika tidak memenuhi syarat akan Hangus
- Code Giveaway EXPIRED ketika sudah di Undi tiap Bulannya
- Pemenang *HANYA DAPAT 1X* (Kecuali ada Hadiah Tambahan)
- Ketika Terjadi kecurangan akan di *BLACKLIST*
- Peserta Wajib Nonton LIVE Discord
- Hadiah Sewaktu-waktu dapat berubah tanpa pemberitahuan
====TERIMA KASIH ATAS PARTISIPASINYA====`)
raisa.sendMessage(rara.chat, { text: 'Yang lupa Code Giveaway PC @6282132156123 aja ya ', mentions: ['6282132156123@s.whatsapp.net'] })

// Jika pakai gambar
/*teks = `
Teks nya disini bang` // Teks utama
footer = `
Teks2` // Teks kecil abu abu (wajib ada, jika dihapus akan error)
gambarnya = fs.readFileSync('./lib/giveaway.jpg') // Alamat gambar
let tombol =  [{ /* Tombol 

                  urlButton  = Tombol Link
				  callButton = Tommbol panggilan, {
					  callButton: {displayText: 'Call me!', phoneNumber: '+62 821-3215-6123'}
					  },
				  quickReplyButton = Tombol yang konek dengan case 
				  displayText =  Teks yang di tampil kan
				  id =  case yang ingin di konekan
*/
                            /*    urlButton: {
                                    displayText: 'JAMU',
                                    url: 'https://drive.google.com/file/d/1QL8fcdMLbVXrCr1wUUHIHZjfZ4PhY0n1/view?usp=sharing'
                                }
                            }, {
                                urlButton: {
                                    displayText: 'GRUB WA',
                                    url: 'https://chat.whatsapp.com/KsCSv8SvQ7G8Enu6viEX7m'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'PING',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'SELLER',
                                    id: 'seller'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'MENU',
                                    id: 'menu'
                                }
                            }]
 raisa.send5ButImg(rara.chat, teks, footer, gambarnya, tombol)*/
break
case 'join': {

    
 teksnya = `
🔰Pendaftaran Reseller  VVIP Enjoyers:🔰
    
💰 *PriceList Reseller Saldo Unlimited* 💰
Promo Bulan Ramadhan
~Rp,.500.000 /Bulan~
Rp,.350.000 /Bulan
Get Saldo Unlimited/Bulan
        
⭐ *Fasilitas Reseller Unlimited* ⭐
    ✅ Saldo Unlimited/Bulan
    ✅ Unlimited Key Input
    ✅ Recuite Member
    ✅ Perpanjang Durasi Member
    ✅ Web Control
    ✅ Akses All Cheat Game
    ✅ Sell ​​All Cheats
    ✅ Keuntungan sendiri
    ✅ Dijamin Profit 100%
        
💰PriceList Reseller Bersaldo💰
➣ Rp,.500.000
        Get Saldo 800.000
➣ Rp,.700.000
        Get Saldo 1.100.000
        
⭐ *Fasilitas Reseller Balance* ⭐
    ✅ Saldo terbatas
    ✅ Limited Key Input
    ✅ Recuite Member
    ✅ Web Control 
    ✅ Perpanjang Durasi Member
    ✅ Sell ​​All Cheats
    ✅ Keuntungan sendiri
    ✅ Dijamin Profit 100%
`
footer = 'Hubungi admin jika minat, klik tombol dibawah untuk mendapatkan nomor admin'
const gambarnya = fs.readFileSync('./lib/reseller.jpg')
let tombol =  [{ // Tombol 
                                quickReplyButton: {
                                    displayText: 'NOMOR ADMIN',
                                    id: 'seller'
                                }  
                            }]
 raisa.send5ButImg(rara.chat, teksnya, footer, gambarnya, tombol)    
await sleep(3000)
raisa.sendMessage(rara.chat, { text: `Hubungi Admin @6282132156123 jika *${pushname}* berminat menjadi Reseller😁✌️`, mentions: ['6282311717972@s.whatsapp.net'] })
}
    break
	case 'dmml':
    rara.reply(`
⚔️ *DIAMOND MOBILE LEGENDS* ⚔

💎   86   Rp     20.000	💎 1050  Rp    236.000
💎   172  Rp     40.000 💎 1220  Rp    270.000
💎   257  Rp     60.000 💎 1412  Rp    313.000
💎   344  Rp     80.000 💎 2195  Rp    460.000
💎   430  Rp    100.000 💎 3073  Rp    655.000
💎   514  Rp    120.000	💎 3688  Rp    770.000
💎   600  Rp    140.000	💎 4032  Rp    845.000
💎   706  Rp    158.000	💎 5532  Rp 1.125.000
💎   878  Rp    198.000	💎 6238  Rp 1.305.000
💎   963  Rp    215.000	💎 9288  Rp 1.910.000
    
    •Starlight   Rp 135.000
    •Twilight    Rp 135.000
    •Starlight + Rp 295.000\n
*Note :*
*1.* Proses 1-5 Menit.
*2.* 100% LEGAL 
*3.* Tanyakan Stock Terlebih Dahulu Sebelum Transfer`)
await sleep(1000)
raisa.sendMessage(rara.chat, { text: `Hubungi  @6282311717972 jika *${pushname}* minat️`, mentions: ['6282311717972@s.whatsapp.net'] })
    break
	case 'jamu' : 
rara.reply('Jamu\nhttps://drive.google.com/file/d/1QL8fcdMLbVXrCr1wUUHIHZjfZ4PhY0n1/view?usp=sharing')
break
case 'pay' : {
	listpay = `💰  *Payment* 💰

▶️ *DANA/OVO/GOPAY*
0895-3324-32651
An Daffa Fajar

▶️ *Link Aja*
082311717972
An Daffa Fajar

▶️ *ATM BNI*
 0843523771
An Daffa Fajar

▶️ *Qris*
Harap Hubungi Admin
An LORD GAMING STORE

⚠️ *Jika Top up di Alfamart* ⚠️
▶️ Dana Minimal Topup 50k (Free admin)
▶️ Gopay minimal Topup 20k (Biaya admin ± 2500) 

⚠️ *Jika Top up di Indomaret* ⚠️
▶️ OVO Minimal Topup 10k (Biaya Admin ± 1500 )
*Note :* 
- Biaya Admin akan bayar ke kasir Alfamart/Indomaret
- Jika Topup OVO Melalui Indomaret *Wajib Tanyakan Admin Dulu*\n
*Kirim Bukti Transaksinya yaa* 😁✌️ `
	rara.reply(listpay)
	
	raisa.sendMessage(rara.chat, { audio: { url: './audio/pay.mp3' }, mimetype: 'audio/mpeg', ptt : true})
}
break
case 'bot': {
	raisa.sendMessage(rara.chat, { audio: { url: './audio/suaragugel1.mp3' }, mimetype: 'audio/mpeg', ptt : true})
}
break

case 'prem': {
	raisa.sendMessage(rara.chat, { text: `Chatt @6282132156123 Jika *${pushname}* minat
	
*YOUTUBE PREMIUM :*
• 1 Bulan Via Invite Email  = Rp. 5.000
• 4 Bulan Via Invite Email  = Rp. 30.000
Akun Wajib fresh
Akun bisa dari Anda/Buyer.
Akun bisa dari Admin + fee 2k.
==================
*Canva Premium*
• 30 HARI  = Rp 15.000
Akun bisa dari Anda/Buyer.
Akun bisa dari Admin + fee 2k.
==================
*SPORTIFY PREMIUM :*
• 30 HARI INDIVIDU = Rp 25.000
• 60 HARI FAMILY     = Rp 50.000
Akun dari admin.
==================
*NETLIX PREMIUM :*
• 30 HARI SHARING  = Rp 45.000
• 30 HARI PRIVATE    = Rp 180.000
==================
WeTV PREMIUM (VIP) :
• 360 HARI SHARING  = Rp 25.000
Akun dari admin.

• 360 HARI PRIVATE    = Rp 130.000
ID/Akun dari buyer.
==================
DISNEY + HOTSTAR PREMIUM : 
•   30 HARI SHARING = Rp 25.000
•   90 HARI SHARING = Rp 40.000
Akun dari admin.
==================
VIDIO PREMIUM PLATINUM :
• 30 HARI SHARING  = Rp 25.000
Akun dari Admin

• 30 HARI PRIVATE    = Rp 35.000
Akun bisa dari Anda/Buyer.
Akun bisa dari Admin.
==================
⚠️ all apps prem proses ±30 menit, max 24 jam
Note :
1. Tanyakan terlebih dahulu ke admin
2. Legal 100% 
3. Harga sudah pas`, mentions: ['6282311717972@s.whatsapp.net'] })
}
break
case 'gantiserial': {
raisa.sendMessage(rara.chat, {text: `
SETIAP VERSI MEMILIKI SERIAL YANG BERBEDA
CARA GANTI SERIAL/CEK DURASI
1. Masuk ke Web https://enjoyers.xyz/auth/member/login
2. Masukan Member key anda
3. Lalu masukan Serial Barunya

*Note :*
- Ketik *download* Link download Injector
- Download Injectornya di Web Enjoyers ya !
- Khusus Cheat PB VVIP gunakan Memberkey yang VVIP
- Khusus Cheat PB VIP gunakan Memberkey yang VIP
           ====HAVE FUN GUYS====
		   
 Jika *${pushname}* Masih tidak paham tonton video https://youtu.be/SJRunXz6kc0 atau chatt @6282311717972
		   `, mentions: ['6282311717972@s.whatsapp.net'] })
		   raisa.sendMessage(rara.chat, { audio: { url: './audio/tutor.mp3' }, mimetype: 'audio/mpeg', ptt : true})
}
break

case 'cashpb': {
raisa.sendMessage(rara.chat, { text: `⚔ *====Cash PointBlank====* ⚔
*CASH PB VIA ~ID~ LEGAL 100% FAST :*
1.200   💰 Rp     10.000
2.400   💰 Rp   20.000
6.000   💰 Rp   48.000
12.000 💰 Rp   95.000
24.000 💰 Rp 185.000
36.000 💰 Rp 280.000 (12.000 x 2 isi)
60.000 💰 Rp 460.000 (12.000 x 5 isi)

*CASH PB VIA VOUCHER LEGAL 100% FAST :*
1.200   💰 Rp     10.000
2.400   💰 Rp   20.000
6.000   💰 Rp   49.000
12.000 💰 Rp   97.000
24.000 💰 Rp 195.000
36.000 💰 Rp 290.000
60.000 💰 Rp 470.000
*Note:*
*1.* Proses 1-5 Menit.
*2.* 100% *LEGAL*
*3.* *Bisa Berkali-kali* 
*4.* Tanyakan Stock Terlebih Dahulu Sebelum Transfer

Hubungi @6282132156123 jika *${pushname}* berminat untuk memesan
`, mentions: ['6282132156123@s.whatsapp.net']})
}
break
case 'gbpb':
            rara.reply( `
            *GB EXP POINT BLANK :*
▶️ 1 JUTA EXP Rp 20.000
(Proses 3 hari)
▶️ 2 JUTA EXP Rp 35.000
(Proses 6 hari)
▶️ 3 JUTA EXP Rp 40.000
(Proses 9 hari)
▶️ 4 JUTA EXP Rp 60.000
(Proses 12 hari)
▶️ 5 JUTA EXP Rp 70.000
(Proses 15 hari)
▶️ 10 JUTA EXP Rp 100.000
(Proses 30 hari)

🔔 *Wajib sudah bisa masuk server premium/vip (bebas pangkat).*
====================
*GB TITLE POINT BLANK :*
▶️ 1 MASMED Rp 2000
(Min 20 masmed)
▶️ FULL TITLE Rp 30.000
(Inc misi tutor)

🔔 *Untuk paket FT butuh point 700k, proses 2 hari.*
====================
*GB KILL POINT BLANK :*
▶️ 10 RIBU KILL Rp 30.000
(Proses 9 Jam)
▶️ 100 RIBU KILL Rp 150.000
(Proses 3 hari)

🔔 *Bisa request (Badan/HS) minimal pangakat D1.*
====================
GB LOSE CHAR/CLAN :
▶️ 1K LOSE Rp 20.000
(Proses 1 hari)

🔔 *Untuk gb lose char wajib out clan jadi tb 3r (nambah death).*
====================
GB EXP CLAN POINT BLANK :
• 5 JUTA EXP CLAN Rp 80.000
(Proses 5 hari)
• 10 JUTA EXP CLAN Rp 140.000
(Proses 10 hari)
• 50 JUTA EXP CLAN Rp 500.000
(Proses 10 hari)

⚠️ Cuma membutuhkan id pw staf clan.
====================
*GB TAG :*
▶️ 500 TAG Rp 65.000
(Proses 7 hari)

🔔 *Death nambah jadi TB kill, minimal pangakat D1.*

*Note :*
1. Dilarang menabrak saat sedang proses gb, tabrak = stop proses gb, tidak ada negosiasi keputusan sudah final.
2. Dilarang spam menanyakan kapan kelar, jika sudah di beritahu estimasi waktu yang di berikan, tolong jangan spam nanya2 lagi.`)
break

case 'tutor': 
rara.reply(`
Hai ${pushname} 😇 \nBerikut adalah daftar Tutorial Pemasangan Cheat ALL Game :
                    
*1*.Ketik *pb1* Tutorial Cheat *PointBlank Zepetto*
*2*.Ketik *pb2* Tutorial Cheat *PointBlank Private*
*3*.Ketik *ml* Tutorial Cheat *Mobile Legend*
*4*.Ketik *sausage* Tutorial *Cheat SausageMan*
*5*.Ketik *pubg1* Tutorial *Cheat PUBG Mobile*
*6*.Ketik *pubg2* Tutorial *Cheat PUBG Emulator*
*7*.Ketik *ff* Tutorial Cheat *Free Fire*
*8*.Ketik *ffmax* Tutorial Cheat *Free Fire MAX*
*9*.Ketik *vipls* Tutorial Cheat *VIP  Lost Saga Origin*
*10*.Ketik *vvipls* Tutorial Cheat *VVIP Lost Saga Origin*
*11*.Ketik *codm1* Tutorial Cheat *Call OF DUTY Garena*
*12*.Ketik *codm2* Tutorial Cheat *Call OF DUTY Global*
*13*.Ketik *codm3* Tutorial Cheat *Call OF DUTY VIETNAM*
*14*.kETIK *dataml* Tutorial Agar tidak download data ulang
==================================
Ketik *download*  : Link Download All Cheat
Ketik *seller* jika ingin Order atau Perpanjang Cheat`)
break

case 'pb1': 
rara.reply(`
*Berikut Link Tutorial Install Cheat Point Blank Zepetto :*
VIP V.1 SIMPLE :https://youtu.be/Jj3KQBZt4Aw
VIP V.2 SIMPLE : https://youtu.be/pr2dltcxITY
VIP V.3 SIMPLE : https://youtu.be/GWNr0pjgkJM
VVIP V.1 HARD : https://youtu.be/Jj3KQBZt4Aw
VVIP V.2 HARD : https://youtu.be/FlSWj1hGbvs
VVIP V.3 HARD : https://youtu.be/g1vCv2tMA3U
*Note:*
- Ketik *download*  : Link Download All Cheat
- Setiap Versi Memiliki HWID/Serial yang berbeda
- Ketik *gantiserial* untuk mengubah HWID/Serial.
==================================
☑️ *Paket Personal : PB Zepetto*
⏩1 Hari : Rp. 10.000,-
⏩2 Hari : Rp. 15.000,-
⏩3+1+1 Hari  : Rp. 25.000,-
⏩7+2+1 Hari: Rp. 50.000,-
⏩14+3+1 Hari  : Rp. 70.000,-
⏩21+4+1 Hari  : Rp. 90.000,-
⏩30+5+1 Hari  : Rp. 100.000,-
⏩60+6+1 Hari  : Rp. 180.000,-
⏩90+7+1 Hari  : Rp. 250.000,-
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
Ketik *seller* jika ingin Order atau Perpanjang Cheat.
`)
break
case 'pb2': 
rara.reply(`*Berikut Link Tutorial Install Cheat Point Blank Private :*
PB Private : https://youtu.be/LL7vWOMbUy8
*Note:*
- Link Download Ada di Deskripsi
- Setiap Versi Memiliki HWID/Serial yang berbeda
==================================
☑️ *Paket Personal : PB Private*
⏩1 Hari : Rp. 10.000,-
⏩2 Hari : Rp. 15.000,-
⏩3+1+1 Hari  : Rp. 25.000,-
⏩7+2+1 Hari: Rp. 50.000,-
⏩14+3+1 Hari  : Rp. 70.000,-
⏩21+4+1 Hari  : Rp. 90.000,-
⏩30+5+1 Hari  : Rp. 100.000,-
⏩60+6+1 Hari  : Rp. 180.000,-
⏩90+7+1 Hari  : Rp. 250.000,-
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
Ketik *seller* jika ingin Order atau Perpanjang Cheat.
`)
break

case 'ml':
rara.reply(`
*Tutorial Pemasangan Cheat Mobile Legend*\n
*NEW UPDATE PATCH MOD MOBILE LEGEND*
1. Ke Manager Files => Memori Internal => Android => data => cari "com.mobile.legends" lalu rename menjadi "AAAcom.mobile.legends" setelah itu Unnistall Apk ML Sebelumnya.
2. Matikan Google Play Proteksi
3. Link Download Apk MOD Mobile Legend :
Link Apk Mod MLBB Full Feature :
*Silakan inbox Admin*

4. Jika Sudah Download, Rename Kembali seperti semula Data MLnya menjadi "com.mobile.legends" lalu Install Apk MOD Mobile Legendnnya
5. Open Apk dan Klik Serial 
6. Copas Serialnya dan Kirim ke Seller
7. Seller akan memberikan Memberkey
8. Masukan Memberkey dan Login
==================================
Jika masih bingung silahkan Nonton Video Tutorial :
https://www.youtube.com/watch?v=L43_593pXBQ
==================================
☑️ *Harga Personal Mobile Legends*
➡️ 30 Days : Rp 100.000
➡️ 60 Days : Rp 200.000
➡️ 90 Days : Rp 300.000
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
Ketik *seller* jika ingin Order atau Perpanjang Cheat`)
break
case 'sausage': 
rara.reply(`Sedang Maintenance`)
// rara.reply(`SausageMan Mod Apk No Virtual, 
// 1. Unnistall apk SausageMan Sebelumnya
// 2. Matikan Google Play Proteksi
// 3. Link Download Apk MOD SausageMan
// Download : https://apkadmin.com/oymdxkz7ksa6/SAUSAGEMOD.apk.html
// 4. Install Apk MOD SausageMannya
// 5. Open Apk dan Klik Serial 
// 6. Copas Serialnya dan Kirim ke Seller
// 7. Seller akan memberikan Memberkey
// 8. Masukan Memberkey dan Login
// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
// ☑️ Harga Personal : Sausage Man
// ⏩30 Hari  : Rp. 100.000,-
// ==================================
// Ketik *seller* jika ingin Order atau Perpanjang Cheat`)
break
case 'dataml': 
rara.reply(`
*TUTORIAL AGAR TIDAK DOWNLOAD ULANG DATA MOBILE LEGENDS*
Link Youtube :
https://youtu.be/cWPz1aR7Puk`)
break
case 'pubg1': 
rara.reply(`*Coming Soon*`)
break
case 'pubg2': 
rara.reply(`
NEW UPDATE CHEAT P4BJ1 EMULATOR & SMARTGAGA
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
➡️ [NEW] Tutorial Cheat P4BJ1 EMULATOR & SMARTGAGA : https://youtu.be/bBP1jwMJiW0

➡️ [NEW LINK] Injector P4BJ1 EMULATOR & SMARTGAGA : http://enjoyers.xyz/download/496


[WARNING]
Harap ikuti Tutor Di Video Salah Dikit Ban !!!
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
FEATURE : 
- BYPASS DETECT EMULATOR
- ESP LINE
- ESP BOX
- ESP BONE
- ESP HEALTH
- ESP NAME
- ESP WEAPON
- ESP DISTANCE
- ESP VEHICLE
- ESP GRANADE
- MAGIC BULLET
- AIMBOT
- AIM FOV
- NO RECOIL 
- NO SPREAD
- FIRE SPEED
- FAST SWITCH
- INTANT HIT
- NO GRAVITY

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
🎯 Harga P4BJ1 EMULATOR & SMARTGAGA VIP ENJOYERS 🎯
💰 Via Gopay/Dana/Ovo/BNI
✅1 DayS: Rp,.20.000
✅3 DayS: Rp,.35.000
✅7 DayS: Rp,.75.000
✅14 DayS: Rp,.100.000
✅30 DAYS: Rp,.150.000
==================================
Ketik *seller* jika ingin Order atau Perpanjang Cheat`)
break
case 'ff': 
rara.reply(`
Berikut Link Tutorial Install MOD Apk Epep:
[STEP 1] 
Tutorial Epep 32 bit : https://youtu.be/SUd7i63M3pE

[STEP 2]
Tutorial Pemasangan Apk MOD EPEP : https://youtu.be/YBIu-6Sj8AM

Apk Mod FreeFire :
https://safefileku.com/download/ka1DkWc4u4zZnHl

[Notice]
Tidak di sarankan diakun utama

[Fix Stuck]
Onkan Fiture Cheat Pada Saat Di Dalam Permainan, Jika Sudah Menang/Kalah Maka Offkan Semua Fiture nya.
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
*FEATURE* : 
- ESP LINE
- ESP BOX
- ESP DISTANCE
- ESP NAME
- ESP HEALTH
- CAR SKILL
- FLY HEIGHT
- FLY POS
- FLY SPEED
- MEDKIT RUNNING
- WHITE BODY
- SPEED 100x
- UNDERGROUND CAR
- DOUBLE GUN
- STONE HACK
- RESET GUEST
- FIX FC
- FIX STUCK
- FIX ELIMINASI
- FIX MATCHMAKING ERROR
- FIX BLACKLIST
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

🎯 Harga Free Fire Garena VIP ENJOYERS 🎯

💰 Via Gopay/Dana/Ovo/BCA
➡️ 30 Days : Rp 100.000
➡️ 60 Days : Rp 200.000
➡️ 90 Days : Rp 300.000`)
break
case 'ffmax': 
rara.reply(`*Tutor Coming Soon*`)
break
case 'vipls': 
rara.reply(`
Berikut Link Tutorial Install Cheat VIP LS Origin,Exotic,Forever,Fusion :
https://youtu.be/FadPktpmzv4
Note:
- Link Download Ada di Deskripsi/Di WEB Enjoyers
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
☑️ Beli 1 Cheat VIP Dapet 4 Cheat VIP LS : Origin, Exotic, Forever, Fusion.
 ➡️ 1 Day : Rp.30.000
 ➡️ 3 Day : Rp.50.000
 ➡️ 7 Day : Rp.100.000`)
break
case 'vvipls': 
rara.reply(`
Berikut Link Tutorial Install Cheat VVIP LSO :
https://youtu.be/FadPktpmzv4
Note:
- Link Download Ada di Deskripsi/Di WEB Enjoyers
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
☑️ Paket Personal LS Origin VVIP
✅14 DAYS: RP,.150.000
✅30 DAYS: Rp,.200.000
`)
break
case 'codm1': 
rara.reply(`*Tutor Coming Soon*`)
break
case 'codm2': 
rara.reply(`*Tutor Coming Soon*`)
break
case 'codm3': 
rara.reply(`*Tutor Coming Soon*`)
break
case 'status' : 
    rara.reply( `
🔰════ *STATUS CHEAT ALL GAME* ════🔰
⏩ *POINTBLANK* 
• VIP V.1 SIMPLE: ⚠️
• VIP V.2 SIMPLE: ✅ 🌟
• VIP V.3 SIMPLE: ✅
• VIP V.1 HARD: ⚠️
• VIP V.2 HARD: ✅ 🌟
• VIP V.3 HARD: ✅ 
• PB Philipina : ✅ 
• PB Private Server : ⚠️
⏩ *MOBILE LEGEND*
STATUS : ✅
⏩ *PUBG MOBILE*
STATUS : ⚠️
⏩ *PUBG EMULATOR*
STATUS : ✅
⏩ *FREFIRE*
STATUS : ✅
⏩ *SAUSAGEMAN*
STATUS:  ⚠️
⏩ *VIP LOST SAGA ORIGIN*
STATUS:  ✅
⏩ *VVIP LOST SAGA ORIGIN*
STATUS:  ✅
⏩ *CALL OF DUTY MOBILE*
STATUS:  ♻️

KETERANGAN :
🌟 = REKOMENDASI ( *Khusus PointBlank* )
✅ = AMAN
⚪ = BERESIKO
♻️ = Perbaikan
⚠️ = Maintenance
*Bermainlah dengan wajar jangan terlalu Brutal.* 
*Cheat=Paham*
======================
Ketik *listvip* Jika ingin melihat Harga Cheat.
Ketik *tutor* Jika ingin menginstal Cheat.
Ketik *download* Jikan ingin Melihat Link Download.
Ketik *seller* jika ingin Order/perpanjang Cheat.`)
break

case 'script':
raisa.sendMessage(rara.chat, {text: `
🎯  *List Scipt GB Point Blank :* 🎯 
➣ GB Exp Bundir WIN 7 : 30k
➣ GB Exp Bundir WIN 10 : 50k
➣ ~GB Exp Bundir WIN 7,10 PREMIUM : 150k~
➣ GB MISI ASSAULT (VMware) : 30K
➣ GB KILL HEADSHOT/BADAN (VMware) : 30K
➣ GB MISI ASSAULT PREMIUM (VMware) : 150k
➣ GB MISI SPESIAL PREMIUM (VMware) : 150K
➣ GB MISI SEPAKET PREMIUM (VMware) : 300k
➣ Pemasangan Macro Recorder (Berlisensi) + Bonus Script: 30k
➣ Pemasangan VMware Full Bahan (Berlisensi) + Bonus Scipt : 100k
*Note :*
- Jika Bingung, Di ajarin Sampai bisa. 
- Free setting jika PB masih dipegang Zepetto
- Kelebihan Script Biasa : 
  Auto Claim Reward, Auto Ready.
- Kelebihan Script PREMIUM : 
  Auto Login,Auto Masuk Room TB,Auto Setting ingame, Auto Claim Reward, Auto Ready.
- Bonus Script Bebas milih Script Biasa.
- Jika Sciprt tidak work 100% = REFUND

Hubungi @6282132156123 jika *${pushname}* berminat untuk memesan
`, mentions: ['6282311717972@s.whatsapp.net']} )
break
case 'download':
  //  case 'link' :
rara.reply(`
*Berikut Link Download All Game :*
˚ʚ════════・◢◤◥◣・ ════════ʚ˚ 
➣ *PointBlank Zepetto*
• VIP V.1 Simple :https://enjoyers.xyz/download/529
• VIP V.2 Simple : https://enjoyers.xyz/download/489
• VIP V.3 Simple : https://enjoyers.xyz/download/534
• VVIP V.1 Hard : https://enjoyers.xyz/download/529
• VVIP V.2 Hard : https://enjoyers.xyz/download/481
• VVIP V.3 Hard : https://enjoyers.xyz/download/534
➣ *PointBlank Private*
• Link Download : https://enjoyers.xyz/download/494
➣ *PointBlank Philipines*
• Link Download : https://enjoyers.xyz/download/525
ʚ════════・◥◣◢◤・ ════════ʚ
➣ *Mobile Legends*
• Link APK MOD Full Fitur: 
*Silakan inbox Admin*
ʚ════════・◢◤◥◣・ ════════ʚ
➣ *SausageMan*
• Link Download : *Sedang Perbaikan*
ʚ════════・◥◣◢◤・ ════════ʚ
➣ *PUBG MOBILE*
• Link Download : *Sedang Perbaikan*
➣ *PUBG EMULATOR* 
• Injector P4BJ1 EMULATOR & SMARTGAGA : 
http://enjoyers.xyz/download/496
ʚ════════・◢◤◥◣・ ════════ʚ
➣ *FreeFire* 
• Link Download : 
https://safefileku.com/download/qhYtXmUf7AlI1Us
➣ *FreeFire MAX
• Link Download : *Sedang Perbaikan*
ʚ════════・◥◣◢◤・ ════════ʚ
➣ *Lost Saga Origin VIP & VVIP*
• Link Download Injector :
https://enjoyers.xyz/download/506
• Link Download Injector GB ONLY :
https://enjoyers.xyz/download/498
➣ *Lost Saga All Private*
• Link Download Injector :
https://enjoyers.xyz/download/507
➣ *Lost Saga Taiwan*
• Link Download Injector :
https://enjoyers.xyz/download/508
ʚ════════・◢◤◥◣・ ════════ʚ
➣ *Jamu (File Pendukung Cheat)*
• Link Download : 
https://enjoyers.xyz/download/330
➣ *Vmos Pro 32 Bit*
• Link Download : 
https://enjoyers.xyz/download/336
➣ *File Backup Vmos Pro*
• Link Download :
https://apkadmin.com/53wb7zhs8yfw/UFOVMBackup32Bit.zip.html
➣ *ULTRA VIEWER* :
https://www.ultraviewer.net/id/UltraViewer_setup_6.5_id.exe
➣ *TEAM VIEWER* :
https://teamviewer.id.uptodown.com/windows/download
➣ *VPN PSIPHON* :
https://psiphon.ca/psiphon3.exe
˚ʚ════════・◥◣◢◤・ ════════ʚ˚`)
break
case 'bh':
raisa.sendMessage("120363039160190693@g.us", { text: 'Panci Pecah'})
break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return rara.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return rara.reply(bang)
                    }
                    try {
                        rara.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        rara.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return rara.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await rara.reply(evaled)
                    } catch (err) {
                        await rara.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return rara.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return rara.reply(err)
                        if (stdout) return rara.reply(stdout)
                    })
                 }
			
			if (hour_now >= '02:00' && hour_now <= '04:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Waktunya sahur kak, Main botnya buat nanti lagi, Sebelum makan jangan lupa baca Doa ya kak', 'yellow'), color('(ðŸ˜Š)', 'white'))
          }
        if (hour_now === '04:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Udah jam 4 nih kak, Jangan lupa sholat subuh ya kak', 'yellow'), color('(ðŸ˜Š)', 'white'))
          raisa.sendMessage("120363039160190693@g.us", { text: 'Udah jam 4 nih kak, Jangan lupa sholat subuh ya kak'})
		  }
          if (hour_now === '05:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Udah sholat Subuh belum kak', 'yellow'), color('(ðŸ™„)', 'white'))
		  raisa.sendMessage("120363039160190693@g.us", { text: 'Udah sholat Subuh belum kak'})
          }
        if (hour_now === '06:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Pagi kak, Jangan lupa mandi', 'yellow'), color('(ðŸ˜…)', 'white'))
		  raisa.sendMessage("120363039160190693@g.us", { text: 'Pagi kak, Jangan lupa mandi'})
          }
          /*if (hour_now === '11:00' && hour_now <= '12:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Siang kak, Dah mandi blm kak?', 'yellow'), color('(ðŸ™„)', 'white'))
          }*/
          if (hour_now === '12:00') {
           console.log(color('[Pesan Bot]', 'cyan'), color('Dah jam 12 kak, Jangan lupa sholat Dzuhur ya kak', 'yellow'), color('(ðŸ˜Š)', 'white'))
		   raisa.sendMessage("120363039160190693@g.us", { text: 'Dah jam 12 kak, Jangan lupa sholat Dzuhur ya kak'})
           }
        if (hour_now === '16:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Sore kak, Jangan lupa mandi', 'yellow'), color('(ðŸ˜…)', 'white'))
		  raisa.sendMessage("120363039160190693@g.us", { text: 'Sore kak, Jangan lupa mandi'})
          }
        if (hour_now === '15:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Dah jam 3 kak, Jangan lupa sholat Ashar ya kak', 'yellow'), color('(ðŸ˜Š)', 'white'))
		  raisa.sendMessage("120363039160190693@g.us", { text: 'Dah jam 3 kak, Jangan lupa sholat Ashar ya kak'})
          }
        if (hour_now >= '17:00' && hour_now <= '18:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Bentar lagi buka kak, Sabar ya kak', 'yellow'), color('(ðŸ˜†)', 'white'))
          }
        if (hour_now === '18:00') {
        	console.log(color('[Pesan Bot]', 'cyan'), color('Alhamdulillah, Dh magrib jan lupa sholat kak', 'yellow'), color('(ðŸ˜Š)', 'white'))
			raisa.sendMessage("120363039160190693@g.us", { text: 'Alhamdulillah, Dh magrib jan lupa sholat kak'})
        }
        if (hour_now === '19:00') {
           console.log(color('[Pesan Bot]', 'cyan'), color('Bentar lagi jam 8 gak mabar kak?', 'yellow'), color('(ðŸ˜Š)', 'white'))
		   raisa.sendMessage("120363039160190693@g.us", { text: 'Udah jam 7 nih kak, Udah isya jangan lupa sholat ya kak'})
           }
        if (hour_now === '21:00') {
           console.log(color('[Pesan Bot]', 'cyan'), color('Selamat malam kak, Jangan begadang ya kak, Tar sakit loh', 'yellow'), color('(ðŸ˜„)', 'white'))
		   raisa.sendMessage("120363039160190693@g.us", { text: 'Selamat malam kak, Jangan begadang ya kak, Tar sakit loh'})
        }
          if (hour_now >= '00:00' && hour_now <= '02:00') {
           console.log(color('[Pesan Bot]', 'cyan'), color('Bot ngantuk kak, tidur dulu ya kak', 'yellow'), color('(ðŸ˜´)', 'white'))
        }
		if (rara.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [roorara.a, roorara.b].includes(rara.sender) && roorara.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(rara.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(rara.text)) return
                        let other = [roorara.a, roorara.b].find(user => user !== rara.sender)
                        rara.copyNForward(other, true, rara.quoted && rara.quoted.fromMe ? {
                            contextInfo: {
                                ...rara.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (rara.chat.endsWith('broadcast')) return
		    if (rara.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    raisa.copyNForward(rara.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        rara.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
