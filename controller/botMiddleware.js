const { saveUserState } = require('../db/stateManager');
const { msg } = require("../conversations/allMessages");
const logError = require("../utils/logError");
const { formatTimestamp } = require('../utils/utils')

function stateSavingMiddleware() {
    return async (ctx, next) => {
        try {
            let data = ctx.callbackQuery?.data || (ctx.message?.text === '/start' ? '/start' : 'txt' || 'ERROR');
            await saveUserState(ctx.from.id, ctx.from.username, data);
            console.log("👌 State saved successfully");
        } catch (err) {
            logError(err, "📤 saving user state");
        }
        next();
    }
}

const logAll = (ctx, next) => {
    const currentMessage = msg[ctx.callbackQuery?.data.split('/')[0]]
    const currentTimestamp = new Date().toISOString();
    const timeToShow = formatTimestamp(currentTimestamp)

    console.log(
        '⌚', timeToShow, '👤:', ctx.from.id, '/', ctx.from.username, '\n',
        '| 📥:', ctx.callbackQuery?.data || ctx.message?.text,
        '| 📤:', currentMessage ? currentMessage.slice(0, 20) + "..." : 'undefined'
    )
    next();
}

module.exports = { stateSavingMiddleware, logAll };