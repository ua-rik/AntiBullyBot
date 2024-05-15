const { saveUserState } = require('../db/stateManager');
const {msg} = require("../conversations/allMessages");

function stateSavingMiddleware() {
    return async (ctx, next) => {
        try {
            let data = ctx.callbackQuery?.data || (ctx.message?.text === '/start' ? '/start' : 'txt' || 'ERROR');
            await saveUserState(ctx.from.id, ctx.from.username, data);
            console.log("👌 State saved successfully");
        } catch (err) {
            console.error("🧨 Error saving state:", err.message);
            // ToDo: save error to log
        }
        next();
    }
}

const logAll = (ctx, next) => {
    const currentMessage = msg[ctx.callbackQuery?.data.split('/')[0]]

    console.log(
        '👤:', ctx.from.username,
        '| 📥:', ctx.callbackQuery?.data || ctx.message?.text,
        '| 📤:', currentMessage ? currentMessage.slice(0, 50) + "..." : 'undefined'
    )
    next();
}

module.exports = { stateSavingMiddleware, logAll };