//const {InlineKeyboard} = require("grammy");
const {saveUserGender, getUserGender} = require('../db/stateManager');
const {msg} = require('./allMessages')
const {getLastMessage, genT} = require('../utils/utils')

exports.defaultMessage = async (ctx) => {
    await ctx.reply(msg.white13)
    console.log(`Юзер ${ctx.from.id} пише: ${ctx.message.text}`)
}


exports.startMessage = async (ctx) => {
    await getLastMessage(ctx)
    const chkGender = getUserGender(ctx.from.id)
    if (chkGender) {
        // "Тебе щось хвилює?"
        await ctx.reply(await genT(msg.white4, ctx), {
            reply_markup: {
                inline_keyboard: [
                    [{text: "Так", callback_data: "whatsUp/white4"}],
                    [{text: "Ні", callback_data: "wannaTalk/white4"}],
                    [{text: "Завершити спілкування", callback_data: "thanksTakeCare/white4"}]
                ]
            }
        });
    } else {
        let txt = await genT(msg.white1, ctx)
        await ctx.reply(txt)
        txt = await genT(msg.white2, ctx)
        await ctx.reply(txt, {
            reply_markup: {
                inline_keyboard: [
                    [{text: "Хлопець/Чоловік", callback_data: "gender_male/white2"}],
                    [{text: "Дівчина/Жінка", callback_data: "gender_female/white2"}],
                    [{text: "Не хочу відповідати", callback_data: "no_gender/white2"}],
                ]
            }
        });
    }
}

exports.gender = async (ctx, sex) => {
    await getLastMessage(ctx)
    try {
        await saveUserGender(ctx.from.id, sex)
    } catch (err) {
        console.log('\x1b[31m%s\x1b[0m', '🦠 Error:', err.message);
    }

    // "Тепер розберімося з твоїм запитом"
    await ctx.reply(msg.white3);

    // пауза
    await ctx.replyWithChatAction('typing');
    await new Promise(resolve => setTimeout(resolve, 1000));

    // "Тебе щось хвилює?"
    await ctx.reply(await genT(msg.white4, ctx), {
        reply_markup: {
            inline_keyboard: [
                [{text: "Так", callback_data: "whatsUp/white4"}],
                [{text: "Ні", callback_data: "wannaTalk/white4"}],
                [{text: "Завершити спілкування", callback_data: "thanksTakeCare/white4"}]
            ]
        }
    });
}

exports.wannaTalk = async (ctx) => {
    await getLastMessage(ctx)
    // "Круто, приємно було познайомитися! Просто хочеш поговорити?"
    await ctx.reply(await genT(msg.white5, ctx), {
        reply_markup: {
            inline_keyboard: [
                [{text: "Так", callback_data: "sorryBye/white5"}],
                [{text: "Ні", callback_data: "byeThen/white5"}]
            ]
        }
    });
}

exports.byeThen = async (ctx) => {
    await getLastMessage(ctx)
    //тоді бувай
    await ctx.reply(await genT(msg.white6, ctx), {
        reply_markup: {
            inline_keyboard: [
                [{text: "Тиць!", callback_data: "restartBot/white6"}]
            ]
        }
    });
}

exports.sorryBye = async (ctx) => {
    await getLastMessage(ctx)
    // "Вибач, я трохи на інше запрограмований"
    await ctx.reply(await genT(msg.white7, ctx), {
        reply_markup: {
            inline_keyboard: [
                [{text: "Тиць!", callback_data: "restartBot/white7"}]
            ]
        }
    });
}

exports.whatsUp = async (ctx) => {
    await getLastMessage(ctx)
    // "Розкажи, будь ласка, що саме тебе турбує. Тебе ображають в школі?"
    await ctx.reply(await genT(msg.white8, ctx), {
        reply_markup: {
            inline_keyboard: [
                [{text: "Так", callback_data: "bullyingAbout/white8"}],
                [{text: "Ні", callback_data: "red1/white8"}]
            ]
        }
    });
}

exports.thanksTakeCare = async (ctx) => {
    await getLastMessage(ctx)
    await ctx.reply(await genT(msg.white11, ctx), {
        reply_markup: {
            inline_keyboard: [
                [{text: "Тиць!", callback_data: "restartBot/white11"}]
            ]
        }
    });
}

exports.restartBot = async (ctx) => {
    await getLastMessage(ctx)
    // Запустити діалог спочатку?
    await ctx.reply(msg.white12, {
        reply_markup: {
            inline_keyboard: [
                [{text: "Так", callback_data: "startMessage/white12"}]
            ]
        }
    });
}

exports.bullyingAbout = async (ctx) => {
    await getLastMessage(ctx)

    // Почитай уважно, чи схоже на твій досвід
    await ctx.reply(await genT(msg.white9, ctx), {
        parse_mode: "HTML",
        reply_markup: {
            inline_keyboard: [
                [{text: "Так", callback_data: "yourRole/white9"}],
                [{text: "Ні", callback_data: "red1/white9"}]
            ]
        }
    });
}

exports.yourRole = async (ctx) => {
    await getLastMessage(ctx)
    // "Мені дуже шкода, що так сталося"
    await ctx.reply(await genT(msg.white10, ctx), {
        reply_markup: {
            inline_keyboard: [
                [{text: "Мішень булінгу", callback_data: "green1/white10"}],
                [{text: "Свідок булінгу", callback_data: "yellow1/white10"}],
                [{text: "Нападник", callback_data: "pink1/white10"}],
                [{text: "Дорослий", callback_data: "blue1/white10"}],

            ]
        }
    });
}


exports.notReadyYet = async (ctx) => {
    await getLastMessage(ctx)
    // "діалог не готовий"
    await ctx.reply(msg.white14, {
        reply_markup: {
            inline_keyboard: [
                [{text: "🌀 Перезапустити", callback_data: "startMessage/white14"}],
            ]
        }
    });
}

/// test
// exports.testMessage = async (ctx) => {
//      //await ctx.deleteMessage()
//
//      const keyboard = new InlineKeyboard()
//          .url("Подзвонити?", "tg://resolve?phone=116111");
//      await ctx.reply(
//          `Зателефонуй за номером [911](tel:911) та [\\+380972878635](tel:\\+380972878635)`,
//          {
//               parse_mode: "MarkdownV2",
//               reply_markup: keyboard,
//               disable_web_page_preview: true
//          }
//         );
// }