const { msg } = require('./allMessages')
const { getLastMessage, genT } = require('../utils/utils')

exports.red1 = async (ctx) => {
    await getLastMessage(ctx)
    // 'Тебе турбує щось інше?
    await ctx.reply(await genT(msg.red1, ctx), {
        reply_markup: {
            inline_keyboard: [
                [{text: "Тиць!", callback_data: "red2/red1"}]
            ]
        }
    });
}

exports.red2 = async (ctx) => {
    await getLastMessage(ctx)
    // "Маєш думки про самогубство чи шкоду собі?",
    await ctx.reply(await genT(msg.red2, ctx), {
        reply_markup: {
            inline_keyboard: [
                [{text: "Так", callback_data: "red5/red2"}],
                [{text: "Ні", callback_data: "red6/red2"}]
            ]
        }
    });
}

exports.red3 = async (ctx) => {
    await getLastMessage(ctx)
    await ctx.reply(await genT(msg.red3, ctx), {
        parse_mode: "HTML",
        disable_web_page_preview: true,
        reply_markup: {
            inline_keyboard: [
                [{text: "Тиць", callback_data: "red4/red3"}]
            ]
        }
    });
}

exports.red4 = async (ctx) => {
    await getLastMessage(ctx)

    await ctx.reply(await genT(msg.red4, ctx), {
        reply_markup: {
            inline_keyboard: [
                [{text: "Тиць!", callback_data: "restartBot/red4"}], // ToDo: green link
            ]
        }
    });
}

exports.red5 = async (ctx) => {
    await getLastMessage(ctx)
    // "Терміново телефонуй 7333"
    await ctx.reply(await genT(msg.red5, ctx), {
        reply_markup: {
            inline_keyboard: [
                [{text: "Так", callback_data: "red3/red5"}],
                [{text: "Ні", callback_data: "red7/red5"}],
            ]
        }
    });
}

exports.red6 = async (ctx) => {
    await getLastMessage(ctx)
    // "Це дуже добре. Ти - найдорожче, що у тебе є."
    await ctx.reply(await genT(msg.red6, ctx), {
        reply_markup: {
            inline_keyboard: [
                [{text: "Скажи мені щось хороше", callback_data: "green23/red6"}],
            ]
        }
    });
}

exports.red7 = async (ctx) => {
    await getLastMessage(ctx)
    // І все ж, я наполягатиму. Натисни кнопку 👇
    await ctx.reply(await genT(msg.red7, ctx), {
        reply_markup: {
            inline_keyboard: [
                [{text: "Тиць!", callback_data: "green23/red7"}],
            ]
        }
    });
}