exports.red1 = async (ctx) => {
    await ctx.deleteMessage()
    await ctx.reply("txt", {
        reply_markup: {
            inline_keyboard: [
                [{ text: "Так", callback_data: "!!!" }],
                [{ text: "Ні", callback_data: "!!!" }]
            ]
        }
    });
}

exports.red2 = async (ctx) => {
    await ctx.deleteMessage()
    await ctx.reply("txt", {
        reply_markup: {
            inline_keyboard: [
                [{ text: "Так", callback_data: "!!!" }],
                [{ text: "Ні", callback_data: "!!!" }]
            ]
        }
    });
}

exports.red3 = async (ctx) => {
    await ctx.deleteMessage()
    await ctx.reply("txt", {
        reply_markup: {
            inline_keyboard: [
                [{ text: "Так", callback_data: "!!!" }],
                [{ text: "Ні", callback_data: "!!!" }]
            ]
        }
    });
}

exports.red4 = async (ctx) => {
    await ctx.deleteMessage()
    await ctx.reply("txt", {
        reply_markup: {
            inline_keyboard: [
                [{ text: "Так", callback_data: "!!!" }],
                [{ text: "Ні", callback_data: "!!!" }]
            ]
        }
    });
}