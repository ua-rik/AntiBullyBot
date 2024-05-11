const { msg } = require('./allMessages')
const { getLastMessage } = require('../utils/utils')


exports.pink1 = async (ctx) => {
    await getLastMessage(ctx)
    // "Дякую за твою відвертість..."
    await ctx.reply(msg.pink1_1);
    // пауза
    await ctx.replyWithChatAction('typing');
    await new Promise(resolve => setTimeout(resolve, 3000));
    // "Люди часто цькують не через те..."
    await ctx.reply(msg.pink1_2, {
        reply_markup: {
            inline_keyboard: [
                [{text: "Тиць!", callback_data: "pink2/pink1_2"}]
            ]
        }
    });
}

exports.pink2 = async (ctx) => {
    await getLastMessage(ctx)
    // "Скажу трохи банальну річ...тобі не здається?"
    await ctx.reply(msg.pink2, {
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
    await ctx.reply(msg.pink3, // ToDo: стать
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
    await ctx.reply(msg.pink4,
        {
            reply_markup: {
                inline_keyboard: [
                    [{text: "Тиць!", callback_data: "restartBot/pink4"}],
                ]
            }
        });
}