exports.red1 = async (ctx) => {
    await ctx.deleteMessage()
    await ctx.reply("Тебе турбує щось інше?\n" +
        "Якщо ти стикаєшся з домашнім (тебе бʼють) чи сексуальним насильством - терміново телефонуй:\n" +
        "116 123", {
        reply_markup: {
            inline_keyboard: [
                [{text: "Тиць!", callback_data: "red2"}]
            ]
        }
    });
}

exports.red2 = async (ctx) => {
    await ctx.editMessageText("Тебе турбує щось інше?\n" +
        "Якщо ти стикаєшся з домашнім (тебе бʼють) чи сексуальним насильством - терміново телефонуй:\n" +
        "116 123");
    await ctx.reply("Маєш думки про самогубство чи шкоду собі?\n" +
        "Терміново телефонуй 7333\n" +
        "Я дуже хочу тебе підтримати та допомогти, але я всього лиш бот.\n" +
        "Ти допоможеш собі?", {
        reply_markup: {
            inline_keyboard: [
                [{text: "Так", callback_data: "!!!"}], // todo: link to greenGroup
                [{text: "Ні", callback_data: "red3"}]
            ]
        }
    });
}

exports.red3 = async (ctx) => {
    await ctx.editMessageText("Маєш думки про самогубство чи шкоду собі?\n" +
        "Терміново телефонуй 7333\n" +
        "Я дуже хочу тебе підтримати та допомогти, але я всього лиш бот.\n" +
        "Ти допоможеш собі?");
    await ctx.reply('Обовʼязково звернися по допомогу. ' +
        'Це важливо. ТИ важливий. А поки, аби мати щоденну підтримку, ' +
        'підпишися на <a href="https://t.me/mamavtelegrami">цей телеграм</a>.', {
        parse_mode: "HTML",
        disable_web_page_preview: true,
        reply_markup: {
            inline_keyboard: [
                [{text: "Тиць", callback_data: "red4"}]
            ]
        }
    });
}

exports.red4 = async (ctx) => {
    await ctx.editMessageText('Обовʼязково звернися по допомогу. ' +
        'Це важливо. ТИ важливий. А поки, аби мати щоденну підтримку, ' +
        'підпишися на <a href=\"https://t.me/mamavtelegrami\">цей телеграм</a>.',
        {
            parse_mode: "HTML",
            disable_web_page_preview: true,
        }
    )

    await ctx.reply("Це - анонімний телеграм-бот. Ніхто не дізнається, хто ти. Але, якщо тобі потрібно поговорити з людиною, то звертайся сюди:\n" +
        "116 111",
        {
            reply_markup: {
                inline_keyboard: [
                    [{text: "Тиць!", callback_data: "!!!"}], // ToDo: green link
                ]
            }
        });
}