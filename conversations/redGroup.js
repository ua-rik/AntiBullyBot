const { allMessages } = require('./allMessages')

exports.red1 = async (ctx) => {
    await ctx.deleteMessage()
    await ctx.reply(allMessages.red1, {
        reply_markup: {
            inline_keyboard: [
                [{text: "Тиць!", callback_data: "red2"}]
            ]
        }
    });
}

exports.red2 = async (ctx) => {
    await ctx.editMessageText(allMessages.red1);
    await ctx.reply(allMessages.red2, {
        reply_markup: {
            inline_keyboard: [
                [{text: "Так", callback_data: "!!!"}], // todo: link to greenGroup
                [{text: "Ні", callback_data: "red3"}]
            ]
        }
    });
}

exports.red3 = async (ctx) => {
    await ctx.editMessageText(allMessages.red2);
    await ctx.reply(allMessages.red3, {
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
    await ctx.editMessageText(allMessages.red3,
        {
            parse_mode: "HTML",
            disable_web_page_preview: true,
        }
    )
    await ctx.reply(allMessages.red4, {
        reply_markup: {
            inline_keyboard: [
                [{text: "Тиць!", callback_data: "!!!"}], // ToDo: green link
            ]
        }
    });
}