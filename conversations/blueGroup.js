const {msg} = require('./allMessages')
const {getLastMessage, genT} = require('../utils/utils')


exports.blue1 = async (ctx) => {
    await getLastMessage(ctx)
    // "Як гадаєте? ... "
    await ctx.reply(await genT(msg.blue1, ctx), {
        reply_markup: {
            inline_keyboard: [
                [{text: "«Просто ігноруй»", callback_data: "blue2/blue1"}],
                [{text: "«Маєш дати здачі!»", callback_data: "blue3/blue1"}],
                [{text: "«Я поруч. Я допоможу!»", callback_data: "blue4/blue1"}], // ToDo - change
            ] // «»


        }
    });
}

exports.blue2 = async (ctx) => {
    await getLastMessage(ctx)
    // "«Ти просто ігноруй!» Говорячи так, ви наче кажете дитині ... "
    await ctx.reply(await genT(msg.blue2, ctx), {
        reply_markup: {
            inline_keyboard: [
                [{text: "Тиць!", callback_data: "blue1/blue2"}],
            ]
        }
    });
}

exports.blue3 = async (ctx) => {
    await getLastMessage(ctx)
    // "«Ти маєш дати здачі!» ...  "
    await ctx.reply(await genT(msg.blue3, ctx), {
        reply_markup: {
            inline_keyboard: [
                [{text: "Тиць!", callback_data: "blue1/blue3"}],
            ]
        }
    });
}

exports.blue4 = async (ctx) => {
    await getLastMessage(ctx)
    // "«Те, що з тобою відбувається — жахливо.» ...  "
    await ctx.reply(await genT(msg.blue4, ctx), {
        reply_markup: {
            inline_keyboard: [
                [{text: "Тиць!", callback_data: "blue5/blue4"}],
            ]
        }
    });
}

exports.blue5 = async (ctx) => {
    await getLastMessage(ctx)
    // "Ви маєте право самостійно звернутися до поліції» ...  "
    await ctx.reply(await genT(msg.blue5, ctx), {
        reply_markup: {
            inline_keyboard: [
                [{
                    text: "Зразок заяви!",
                    url: "https://drive.google.com/file/d/1JXgYaej8SLv02MjirCUiwXqRHbV-6GXV/view?usp=sharing"
                }],
            ]
        }
    });

    // пауза
    await ctx.replyWithChatAction('typing');
    await new Promise(resolve => setTimeout(resolve, 3000));
    // "Краще зорієнтуватися, що робити дорослому..."
    await ctx.reply(await genT(msg.blue6, ctx));
    //
    await ctx.reply('Курс "Школа без цькувань. Батькам"  (1 година)', {
        reply_markup: {
            inline_keyboard: [
                [{text: "До курсу >> ", url: "https://osvita.diia.gov.ua/courses/skola-bez-ckuvan-castina-2-batkam"}],
            ]
        }
    });
    await ctx.reply('Курс "Школа без цькувань. Вчителям"  (2 години)', {
        reply_markup: {
            inline_keyboard: [
                [{text: "До курсу >> ", url: "https://osvita.diia.gov.ua/courses/skola-bez-ckuvan-castina-1-ucitelu"}],
            ]
        }
    });
    // пауза
    await ctx.replyWithChatAction('typing');
    await new Promise(resolve => setTimeout(resolve, 3000));
    //

    await ctx.reply(await genT(msg.blue7, ctx), {
        reply_markup: {
            inline_keyboard: [
                [{text: "Тиць!", callback_data: "startMessage/blue7"}],
            ]
        }
    });
}