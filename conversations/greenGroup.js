const { msg } = require('./allMessages')
const { getLastMessage } = require('../utils/utils')

exports.green1 = async (ctx) => {
    await getLastMessage(ctx)
    // "Це було понад один раз? "
    await ctx.reply(msg.green1, {
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
    await ctx.reply(msg.green2, {
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
    await ctx.reply(msg.green3, {
        reply_markup: {
            inline_keyboard: [
                [{text: "Так", callback_data: "green4/green3"}],
                [{text: "Ні", callback_data: "green5/green3"}],
            ]
        }
    });
}

exports.green4 = async (ctx) => {
    await getLastMessage(ctx)
    // "Якщо ситуація трапилася з тобою один раз або..."
    await ctx.reply(msg.green4, {
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
    await ctx.reply(msg.green5, {
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
    await ctx.reply(msg.green6, {
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
    await ctx.reply(msg.green7, { // ToDo: add gender
        reply_markup: {
            inline_keyboard: [
                [{text: "Так", callback_data: "green8/green7"}],
                [{text: "Ні", callback_data: "green9/green7"}],
            ]
        }
    });
}

exports.green8 = async (ctx) => {
    await getLastMessage(ctx) //  ToDo: add gender
    // "Це чудово! Сподіваюся, тобі допомогли?"
    await ctx.reply(msg.green8, {
        reply_markup: {
            inline_keyboard: [
                [{text: "Так", callback_data: "green15/green8"}], // ToDo: check logic
                [{text: "Ні", callback_data: "green10/green8"}],
            ]
        }
    });
}

exports.green9 = async (ctx) => {
    await getLastMessage(ctx)
    // "Дивися: у 46% після втручання дорослих ситуація... "
    await ctx.reply(msg.green9, {
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
    await ctx.reply(msg.green10, {
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
    await ctx.reply(msg.green11, {
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
    await ctx.reply(msg.green12, {
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
    await ctx.reply(msg.green13, {
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
    // "Я дуже раджу тобі підписатися на Телеграм-канал..."
    await ctx.reply(msg.green14, {
        parse_mode: "HTML",
        disable_web_page_preview: true,
        reply_markup: {
            inline_keyboard: [
                [{text: "Так", callback_data: "green15/green14"}],
                [{text: "Ні", callback_data: "red1/green14"}],
            ]
        }
    });
}

exports.green15 = async (ctx) => {
    await getLastMessage(ctx)
    // "Прекрасно! Булінг в школі — це дуже..."
    await ctx.reply(msg.green15, {
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
    await ctx.reply(msg.green16, {
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
    await ctx.reply(msg.green17, {
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
    await ctx.reply(msg.green18, {
        reply_markup: {
            inline_keyboard: [
                [{text: "Тиць!", callback_data: "green19/green18"}],
            ]
        }
    });
}

exports.green19 = async (ctx) => {
    await getLastMessage(ctx)
    // "Давай домовимося про таке: ..."
    await ctx.reply(msg.green19, {
        reply_markup: {
            inline_keyboard: [
                [{text: "Тиць!", callback_data: "green20/green19"}],
                [{text: "Тиць!", callback_data: "green21/green19"}],
            ]
        }
    });
}

exports.green20 = async (ctx) => {
    await getLastMessage(ctx)
    // " Добре, чудово! ..."
    await ctx.reply(msg.green20, {
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
    await ctx.reply(msg.green21, {
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
    await ctx.reply(msg.green22, {
        reply_markup: {
            inline_keyboard: [
                [{text: "Тиць!", callback_data: "green23/green22"}],
            ]
        }
    });
}

exports.green23 = async (ctx) => {
    await getLastMessage(ctx)
    // " Коли тобі роблять боляче, ..."
    await ctx.reply(msg.green23, {
        reply_markup: {
            inline_keyboard: [
                [{text: "Тиць!", callback_data: "restartBot/green23"}],
            ]
        }
    });
}
