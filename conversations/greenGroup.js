const {msg} = require('./allMessages')
const {getLastMessage, genT} = require('../utils/utils')

exports.green1 = async (ctx) => {
    await getLastMessage(ctx)
    // "Це було понад один раз? "
    await ctx.reply(await genT(msg.green1, ctx), {
        reply_markup: {
            inline_keyboard: [
                [{text: "Так", callback_data: "green2/green1"}],
                [{text: "Ні", callback_data: "green4/green1"}],
            ]
        }
    });
}

exports.green2 = async (ctx) => {
    await getLastMessage(ctx)
    // "Тобі було боляче фізично чи на душі, страшно, неприємно? "
    await ctx.reply(await genT(msg.green2, ctx), {
        reply_markup: {
            inline_keyboard: [
                [{text: "Так", callback_data: "green3/green2"}],
                [{text: "Ні", callback_data: "green4/green2"}],
            ]
        }
    });
}

exports.green3 = async (ctx) => {
    await getLastMessage(ctx)
    // "Чи тобі б вдалося припинити ці нападки, якби захотілося?"
    await ctx.reply(await genT(msg.green3, ctx), {
        reply_markup: {
            inline_keyboard: [
                [{text: "Так", callback_data: "green4/green3"}],
                [{text: "Ні", callback_data: "green5/green3"}],
                [{text: "Не знаю", callback_data: "green5/green3"}],

            ]
        }
    });
}

exports.green4 = async (ctx) => {
    await getLastMessage(ctx)
    // "Якщо ситуація трапилася з тобою один раз або..."
    await ctx.reply(await genT(msg.green4, ctx), {
        reply_markup: {
            inline_keyboard: [
                [{text: "Так", callback_data: "whatsUp/green4"}],
                [{text: "Ні", callback_data: "wannaTalk/green4"}],
            ]
        }
    });
}


exports.green5 = async (ctx) => {
    await getLastMessage(ctx)
    // "Тобто щось стоїть на заваді, ..."
    await ctx.reply(await genT(msg.green5, ctx), {
        reply_markup: {
            inline_keyboard: [
                [{text: "Так", callback_data: "green7/green5"}],
                [{text: "Ні", callback_data: "green6/green5"}],
            ]
        }
    });
}

exports.green6 = async (ctx) => {
    await getLastMessage(ctx)
    // "Чудово, я радію, що ти можеш себе захистити 🩷 ..."
    await ctx.reply(await genT(msg.green6, ctx), {
        reply_markup: {
            inline_keyboard: [
                [{text: "Так", callback_data: "green12/green6"}],
                [{text: "Ні", callback_data: "green9/green6"}],
            ]
        }
    });
}

exports.green7 = async (ctx) => {
    await getLastMessage(ctx)
    // "Чи повідомляв/-ла ти про ситуацію комусь з дорослих?"
    await ctx.reply(await genT(msg.green7, ctx), { // ToDo: add gender
        reply_markup: {
            inline_keyboard: [
                [{text: "Так", callback_data: "green8/green7"}],
                [{text: "Ні", callback_data: "green9/green7"}],
            ]
        }
    });
}

exports.green8 = async (ctx) => {
    await getLastMessage(ctx)
    // "Це чудово! Сподіваюся, тобі допомогли?"
    await ctx.reply(await genT(msg.green8, ctx), {
        reply_markup: {
            inline_keyboard: [
                [{text: "Так", callback_data: "green15/green8"}],
                [{text: "Ні", callback_data: "green10/green8"}],
            ]
        }
    });
}

exports.green9 = async (ctx) => {
    await getLastMessage(ctx)
    // "Дивися: у 46% після втручання дорослих ситуація... "
    await ctx.reply(await genT(msg.green9, ctx), {
        reply_markup: {
            inline_keyboard: [
                [{text: "Так", callback_data: "green12/green9"}],
                [{text: "Ні", callback_data: "green11/green9"}],
            ]
        }
    });
}

exports.green10 = async (ctx) => {
    await getLastMessage(ctx)
    // "От халепа! 😔 ..."
    await ctx.reply(await genT(msg.green10, ctx), {
        reply_markup: {
            inline_keyboard: [
                [{text: "Так", callback_data: "green11/green10"}],
            ]
        }
    });
}

exports.green11 = async (ctx) => {
    await getLastMessage(ctx)
    // "Те, з чим ти стикаєшся, дуже жахливо і ..."
    await ctx.reply(await genT(msg.green11, ctx), {
        reply_markup: {
            inline_keyboard: [
                [{text: "Так", callback_data: "green12/green11"}],
                [{text: "Ні", callback_data: "green13/green11"}],
            ]
        }
    });
}


exports.green12 = async (ctx) => {
    await getLastMessage(ctx)
    // "Чудово! Ти знаєш, що ти молодець? 🤩"
    await ctx.reply(await genT(msg.green12, ctx), {
        reply_markup: {
            inline_keyboard: [
                [{text: "Так", callback_data: "green15/green12"}],
                [{text: "Ні", callback_data: "green14/green12"}],
            ]
        }
    });
}

exports.green13 = async (ctx) => {
    await getLastMessage(ctx)
    // "Прикро це чути :(\ Але ти ж знаєш, що ти молодець?"
    await ctx.reply(await genT(msg.green13, ctx), {
        reply_markup: {
            inline_keyboard: [
                [{text: "Так", callback_data: "green15/green13"}],
                [{text: "Ні", callback_data: "green14/green13"}],
            ]
        }
    });
}

exports.green14 = async (ctx) => {
    await getLastMessage(ctx)
    // "Ти — твоя найкраща опора. Ти важливий/важлива..."
    await ctx.reply(await genT(msg.green14, ctx), {
        reply_markup: {
            inline_keyboard: [
                [{text: "Тиць!", callback_data: "green15/green14"}],
            ]
        }
    });
}

exports.green15 = async (ctx) => {
    await getLastMessage(ctx)
    // "Прекрасно! Булінг в школі — це дуже..."
    await ctx.reply(await genT(msg.green15, ctx), {
        reply_markup: {
            inline_keyboard: [
                [{text: "Дати здачі", callback_data: "green16/green15"}],
                [{text: "Розповісти батькам", callback_data: "green19/green15"}],
                [{text: "Розповісти вчителям", callback_data: "green19/green15"}],
                [{text: "Нічого не робити/терпіти", callback_data: "green18/green15"}],
                [{text: "Сварити себе", callback_data: "green17/green15"}],

            ]
        }
    });
}

exports.green16 = async (ctx) => {
    await getLastMessage(ctx)
    // "Це погана ідея, бо, за статистикою, саме того, хто бʼється ..."
    await ctx.reply(await genT(msg.green16, ctx), {
        reply_markup: {
            inline_keyboard: [
                [{text: "Тиць!", callback_data: "green19/green16"}],
            ]
        }
    });
}

exports.green17 = async (ctx) => {
    await getLastMessage(ctx)
    // "Дослідження показують, що мішенями булінгу найчастіше стають ..."
    await ctx.reply(await genT(msg.green17, ctx), {
        reply_markup: {
            inline_keyboard: [
                [{text: "Тиць!", callback_data: "green19/green17"}],
            ]
        }
    });
}

exports.green18 = async (ctx) => {
    await getLastMessage(ctx)
    // "Якщо просто терпіти, то у тебе всередині зростатиме ..."
    await ctx.reply(await genT(msg.green18, ctx), {
        reply_markup: {
            inline_keyboard: [
                [{text: "Так", callback_data: "green19/green18"}],
                [{text: "Ні", callback_data: "green24/green18"}]
            ]
        }
    });
}

exports.green19 = async (ctx) => {
    await getLastMessage(ctx)
    // "Давай домовимося про таке: ..."
    await ctx.reply(await genT(msg.green19, ctx), {
        reply_markup: {
            inline_keyboard: [
                [{text: "Так", callback_data: "green20/green19"}],
                [{text: "Ні", callback_data: "green21/green19"}],
            ]
        }
    });
}

exports.green20 = async (ctx) => {
    await getLastMessage(ctx)
    // " Добре, чудово! ..."
    await ctx.reply(await genT(msg.green20, ctx), {
        parse_mode: "HTML",
        disable_web_page_preview: true,
        reply_markup: {
            inline_keyboard: [
                [{text: "Тиць!", callback_data: "green22/green20"}],
            ]
        }
    });
}

exports.green21 = async (ctx) => {
    await getLastMessage(ctx)
    // " Мені дуже прикро, що ти обираєш цю відповідь ..."
    await ctx.reply(await genT(msg.green21, ctx), {
        parse_mode: "HTML",
        disable_web_page_preview: true,
        reply_markup: {
            inline_keyboard: [
                [{text: "Тиць!", callback_data: "green22/green21"}],
            ]
        }
    });
}

exports.green22 = async (ctx) => {
    await getLastMessage(ctx)
    // " Коли тобі роблять боляче, ..."
    await ctx.reply(await genT(msg.green22, ctx), {
        reply_markup: {
            inline_keyboard: [
                [{text: "Тиць!", callback_data: "green23/green22"}],
            ]
        }
    });
}

exports.green23 = async (ctx) => {
    await getLastMessage(ctx)
    // " ти найцінніше, ..."
    await ctx.reply(await genT(msg.green23, ctx), {
        reply_markup: {
            inline_keyboard: [
                [{text: "Тиць!", callback_data: "restartBot/green23"}],
            ]
        }
    });
}

exports.green24 = async (ctx) => {
    await getLastMessage(ctx)
    // "Дорослі справді мають більше досвіду"
    await ctx.reply(await genT(msg.green24, ctx), {
        reply_markup: {
            inline_keyboard: [
                [{text: "Тиць!", callback_data: "green25/green24"}],
            ]
        }
    });
}

exports.green25 = async (ctx) => {
    await getLastMessage(ctx)
    // " Я не можу змусити тебе звернутися по допомогу ..."
    await ctx.reply(await genT(msg.green25, ctx), {
        reply_markup: {
            inline_keyboard: [
                [{text: "Тиць!", callback_data: "green23/green25"}],
            ]
        }
    });
}