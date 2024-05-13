const { msg } = require('./allMessages')
const { getLastMessage } = require('../utils/utils')


exports.yellow1 = async (ctx) => {
    await getLastMessage(ctx)
    // "Ти спостерігаєш, що когось ображають..."
    await ctx.reply(msg.yellow1, {
        reply_markup: {
            inline_keyboard: [
                [{text: "Так", callback_data: "yellow2/yellow1"}],
                [{text: "Ні", callback_data: "yellow3/yellow1"}],
            ]
        }
    });
}

exports.yellow2 = async (ctx) => {
    await getLastMessage(ctx)
    // "Цьому комусь важко себе захистити перед нападником/нападниками?"
    await ctx.reply(msg.yellow2, {
        reply_markup: {
            inline_keyboard: [
                [{text: "Так", callback_data: "yellow4/yellow2"}],
                [{text: "Ні", callback_data: "yellow3/yellow2"}],
            ]
        }
    });
}

exports.yellow3 = async (ctx) => {
    await getLastMessage(ctx)
    // "Цьому комусь важко себе захистити перед нападником/нападниками?"
    await ctx.reply(msg.yellow3, {
        reply_markup: {
            inline_keyboard: [
                [{text: "Тиць!", callback_data: "yellow5/yellow3"}],
            ]
        }
    });
}

exports.yellow4 = async (ctx) => {
    await getLastMessage(ctx)
    // "Чи ти розповідав/-ла комусь дорослому про цю ситуацію?"
    await ctx.reply(msg.yellow4, { // ToDo: genger
        reply_markup: {
            inline_keyboard: [
                [{text: "Так", callback_data: "yellow6/yellow4"}],
                [{text: "Ні", callback_data: "yellow5/yellow4"}],
            ]
        }
    });
}

exports.yellow5 = async (ctx) => {
    await getLastMessage(ctx) // ToDo: genger
    // "У 46% випадків після втручання дорослих ситуація..."
    await ctx.reply(msg.yellow5, {
        reply_markup: {
            inline_keyboard: [
                [{text: "Так", callback_data: "yellow6/yellow5"}],
                [{text: "Ні", callback_data: "yellow7/yellow5"}],
            ]
        }
    });
}

exports.yellow6 = async (ctx) => {
    await getLastMessage(ctx)
    // "Чудово! ... крутий вчинок"
    await ctx.reply(msg.yellow6, {
        reply_markup: {
            inline_keyboard: [
                [{text: "Так", callback_data: "yellow8/yellow6"}],
                [{text: "Ні", callback_data: "yellow7/yellow6"}],
            ]
        }
    });
}


exports.yellow7 = async (ctx) => {
    await getLastMessage(ctx)
    // "Тоді просто подякую тобі за небайдужість"
    await ctx.reply(msg.yellow7, {
        reply_markup: {
            inline_keyboard: [
                [{text: "Тиць!", callback_data: "yellow8/yellow7"}],
            ]
        }
    });
}

exports.yellow8 = async (ctx) => {
    await getLastMessage(ctx)
    // "Всіх постраждалих від булінгу обʼєднує те, ..."
    await ctx.reply(msg.yellow8, {
        reply_markup: {
            inline_keyboard: [
                [{text: "Тиць!", callback_data: "yellow9/yellow8"}],
            ]
        }
    });
}

exports.yellow9 = async (ctx) => {
    await getLastMessage(ctx)
    // "Для булінгу потрібні свідки..."
    await ctx.reply(msg.yellow9, {
        reply_markup: {
            inline_keyboard: [
                [{text: "Так", callback_data: "yellow11/yellow9"}],
                [{text: "Ні", callback_data: "yellow10/yellow9"}],
            ]
        }
    });
}

exports.yellow10 = async (ctx) => {
    await getLastMessage(ctx)
    // "Ти молодець! Так і роби!"
    await ctx.reply(msg.yellow10, {
        reply_markup: {
            inline_keyboard: [
                [{text: "Тиць!", callback_data: "yellow12/yellow10"}],
            ]
        }
    });
}


exports.yellow11 = async (ctx) => {
    await getLastMessage(ctx)
    // "Можу тебе зрозуміти..."
    await ctx.reply(msg.yellow11, {
        reply_markup: {
            inline_keyboard: [
                [{text: "Тиць!", callback_data: "yellow12/yellow11"}],
            ]
        }
    });
}

exports.yellow12 = async (ctx) => {
    await getLastMessage(ctx)
    // "Я дуже поважаю тебе..."
    await ctx.reply(msg.yellow12, {
        reply_markup: {
            inline_keyboard: [
                [{text: "Тиць!", callback_data: "restartBot/yellow12"}],
            ]
        }
    });
}