import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*「 Owner Intro 」*

 *Name*

               *MUBASHIR👑🇵🇰🤍*


*From*

           *KARACHI, Pakistan 🇵🇰*


*Age*

       *160000*







*Owner Number*


*wa.me/923051038557*


*Save Owner Number For Whatsapp Status Views And Say Done🍫🤍*


`.trim()
  m.reply(caption)
}
handler.help = ['ownerintro']
handler.tags = ['intro']
handler.command = /^(ownerintro)$/i


export default handler
