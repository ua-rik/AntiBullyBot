const {saveUserState} = require('../db/stateManager');
const logError = require("../utils/logError");
const {formatTimestamp} = require('../utils/utils')

function stateSavingMiddleware() {
    return async (ctx, next) => {

        const state = ctx.callbackQuery?.data || (ctx.message?.text === '/start' ? '/start' : 'txt' || 'ERROR');
        void saveUserState(ctx.from.id, state)
            .catch(err => {
                logError(err, "📤 saving user state");
            });
        next();
    }
}

const logAll = (ctx, next) => {
    const currentTimestamp = new Date().toISOString();
    const timeToShow = formatTimestamp(currentTimestamp)

    console.log(
        '⌚', timeToShow, '👤:', ctx.from.id, '/', ctx.from.username,
        '| 📥:', ctx.callbackQuery?.data || ctx.message?.text,
    )
    next();
}

module.exports = {stateSavingMiddleware, logAll};