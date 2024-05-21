const {msg} = require('./allMessages')
const {getLastMessage, genT} = require('../utils/utils')
// byeThen


exports.pink1 = async (ctx) => {
    await getLastMessage(ctx)
    //  "Дякую за твою відвертість..."
    await ctx.reply(await genT(msg.pink1, ctx), {
        reply_markup: {
            inline_keyboard: [
                [{text: "Так!", callback_data: "pink1b/pink1"}],
                [{text: "Ні", callback_data: "byeThen/pink1"}],
            ]
        }
    });
}

exports.pink1b = async (ctx) => {
    await getLastMessage(ctx)
    // "Люди часто цькують не через те..."
    await ctx.reply(await genT(msg.pink1b, ctx), {
        reply_markup: {
            inline_keyboard: [
                [{text: "Тиць!", callback_data: "pink2/pink1b"}]
            ]
        }
    });
}

exports.pink2 = async (ctx) => {
    await getLastMessage(ctx)
    // "Скажу трохи банальну річ...тобі не здається?"
    await ctx.reply(await genT(msg.pink2, ctx), {
        reply_markup: {
            inline_keyboard: [
                [{text: "Здається!", callback_data: "pink3/pink2"}]
            ]
        }
    });
}

exports.pink3 = async (ctx) => {
    await getLastMessage(ctx)
    // 'Булінг - дуже шкідлива штука для ментального здоровʼя.'
    //let txt = await genT(msg.pink3, ctx)
    await ctx.reply(await genT(msg.pink3, ctx),
        {
            reply_markup: {
                inline_keyboard: [
                    [{text: "Тиць", callback_data: "pink4/pink3"}]
                ]
            }
        });
}

exports.pink4 = async (ctx) => {
    await getLastMessage(ctx)
    // 'Тому наш план дій такий...'
    await ctx.reply(await genT(msg.pink4, ctx),
        {
            reply_markup: {
                inline_keyboard: [
                    [{text: "Тиць!", callback_data: "restartBot/pink4"}],
                ]
            }
        });
}