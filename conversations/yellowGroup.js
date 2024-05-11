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