const { msg } = require('./allMessages')
const { getLastMessage } = require('../utils/utils')

exports.red1 = async (ctx) => {
    await getLastMessage(ctx)
    // 'Тебе турбує щось інше?
    await ctx.reply(msg.red1, {
        reply_markup: {
            inline_keyboard: [
                [{text: "Тиць!", callback_data: "red2/red1"}]
            ]
        }
    });
}

exports.red2 = async (ctx) => {
    await getLastMessage(ctx)
    await ctx.reply(msg.red2, {
        reply_markup: {
            inline_keyboard: [
                [{text: "Так", callback_data: "notReadyYet/red2"}], // todo: link to greenGroup
                [{text: "Ні", callback_data: "red3/red2"}]
            ]
        }
    });
}

exports.red3 = async (ctx) => {
    await getLastMessage(ctx)
    await ctx.reply(msg.red3, {
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

    await ctx.reply(msg.red4, {
        reply_markup: {
            inline_keyboard: [
                [{text: "Тиць!", callback_data: "notReadyYet/red4"}], // ToDo: green link
            ]
        }
    });
}