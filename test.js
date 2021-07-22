const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'ravana', fromMe: false, desc: Lang.WP}, (async (message, match) => {

  var image = await axios.get (Config.MENU_LOGO, {responseType: 'arraybuffer'})

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.MENUTEXT})


*╔═▣═══❖⦁⦁⦁💢⦁⦁⦁❖═══▣═╗*\n*RAVANA BOT MENU*\n'+Config.MENUTEXT+'\n*╚═══❖═══▣ ▣════❖═══╝*


※‗‗‗‗‗‗‗*Media commands*‗‗‗‗‗‗‗‗※

🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .song <පෙළow>
🔹𝙐𝙨𝙚➜ ඔබ වෙනුවෙන් ගීතය බාගත කරයි..

🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .video <yt link>
🔹𝙐𝙨𝙚➜ යූ ටියුබ් සබැඳියෙන් වීඩියෝ බාගන්න.

🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .profinsta<පරිශීලක නාමය>
🔹𝙐𝙨𝙚➜ පුද්ගලයාගේ පැතිකඩෙහි දැක්ව පෙන්වයි.

🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  .insta <link>
🔹𝙐𝙨𝙚➜   Instagram වෙතින් අන්තර්ගතය බාගන්න.

🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  .yt<text>
🔹𝙐𝙨𝙚➜   ඔබට yt සබැඳි ලබා දෙයි.

🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  .movie <පෙන්වන්න නම>
🔹𝙐𝙨𝙚➜   movie සම්බන්ධ තොරතුරු ලබා ගන්න.

🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .gif 
🔹𝙐𝙨𝙚➜ වීඩියෝව gif බවට පරිවර්තනය කරයි.

🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .mp3 
🔹𝙐𝙨𝙚➜ වීඩියෝව ශ්රව්ය උපකරණ බවට පරිවර්තනය කරයි.

🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .img <පෙළ>
🔹𝙐𝙨𝙚➜ එය ගූගල් වෙතින් රූපය යවයි.

🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .trt <language code>
🔹𝙐𝙨𝙚➜ ඔබ ටැග් කරන පා text ය පරිවර්තනය කරන්න

🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .wiki <පෙළ>
🔹𝙐𝙨𝙚➜ එය විකිපීඩියාවේ ප්රති .ලය යවයි.

🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .lyric <පෙළ>
🔹𝙐𝙨𝙚➜  ගීතයේ පද රචනා සොයා ගනී.

🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .covid <රටේ කේතය>
🔹𝙐𝙨𝙚➜ ඔබේ රටේ COVID සංඛ්යාලේඛන යවන්න.

💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .weather <නගරය>
🔹𝙐𝙨𝙚➜ ඔබේ ස්ථානයේ කාලගුණය ගැන ඔබට කියයි.

🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .removebg 
🔹𝙐𝙨𝙚➜ රූපයේ පසුබිම ඉවත් කරයි.

💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .ocr
🔹𝙐𝙨𝙚➜ රූපයේ ලියා ඇති පෙළ සොයා ගනී.

🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .wallpaper
🔹𝙐𝙨𝙚➜ එය අහඹු බිතුපත ඔබට යවයි.

💠💠💠💠💠💠💠💠💠💠💠💠
😁 *𝙁𝙪𝙣 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨* 😁

🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .joke 
🔹𝙐𝙨𝙚➜ එය අහඹු විහිළුවක් යවයි.
 
🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .meme <පෙළ>
🔹𝙐𝙨𝙚➜ Cations the image into a meme.

🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .quote 
🔹𝙐𝙨𝙚➜ එය අහඹු උපුටා දැක්වීමක් යවයි.

🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .ss <වෙබ් අඩවි සබැඳිය>
🔹𝙐𝙨𝙚➜ එය වෙබ් අඩවියේ තිර රුව යවයි.

🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .changesay <පෙළ>
🔹𝙐𝙨𝙚➜ Text පෙළ වෙනස් කිරීමේ මතක රූපයක් බවට පරිවර්තනය කරයි.

🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .trumpsay
🔹𝙐𝙨𝙚➜ ට්‍රම්ප්ගේ ට්වීට් එකට පෙළ පරිවර්තනය කරන්න

🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .compliment 
🔹𝙐𝙨𝙚➜ ඔබට ප්‍රශංසාවක් ලබා දෙයි.

🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  .bitly <link>
🔹𝙐𝙨𝙚➜   ඔබේ සබැඳිය කෙටි කරන්න.

🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  .dict 
🔹𝙐𝙨𝙚➜   ශබ්ද කෝෂය [-dict en; anime]

🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  .zodiac <leo> 
🔹𝙐𝙨𝙚➜   ඔබේ කේන්දර සටහන ගැන ඔබට කියයි.

🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  .qr <text>
🔹𝙐𝙨𝙚➜   පෙළ qr කේතයක් බවට පරිවර්තනය කරයි.

🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  .movie 
🔹𝙐𝙨𝙚➜  චිත්‍රපටය පිළිබඳ තොරතුරු ඔබට ලබා දෙයි.

🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  .anime <text>
🔹𝙐𝙨𝙚➜  සජීවිකරණය පිළිබඳ තොරතුරු ඔබට ලබා දෙයි.

💠💠💠💠💠💠💠💠💠💠💠💠

※‗‗‗‗‗‗‗*Sticker commands*‗‗‗‗‗‗‗‗※

🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .sticker 
🔹𝙐𝙨𝙚➜ img / gif ස්ටිකරයක් බවට පරිවර්තනය කරයි.


🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .photo 
🔹𝙐𝙨𝙚➜ ස්ටිකර් රූපයට පරිවර්තනය කරයි.

🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .attp <text>
🔹𝙐𝙨𝙚➜ Text පෙළ දිලිසෙන ස්ටිකරයක් බවට පරිවර්තනය කරයි.

💠💠💠💠💠💠💠💠💠💠💠💠

※‗‗‗‗‗‗‗*Logo packs commands*‗‗‗‗‗‗‗‗※

🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .txttiomg
🔹𝙐𝙨𝙚➜ Logo ලාංඡන විධාන ලබා ගන්න

🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .rpack
🔹𝙐𝙨𝙚➜ Logo ලාංඡන විධාන ලබා ගන්න

🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .rnpack
🔹𝙐𝙨𝙚➜ Logo ලාංඡන විධාන ලබා ගන්න


*╔═▣═══❖⦁⦁⦁💢⦁⦁⦁❖═══▣═╗*\n*RAVANA MENU*\n'+Config.MENUTEXT+'\n*╚═══❖═══▣ ▣════❖═══╝*
🟦🟨🟩🟦🟨🟩🟦🟨🟩🟦🟨🟩

`}) 

}));
