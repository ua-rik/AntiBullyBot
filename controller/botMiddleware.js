const { saveUserState } = require('../db/stateManager');

function stateSavingMiddleware() {
    return (ctx, next) => {
        console.log('CONTEXT:', ctx.callbackQuery?.data || ctx.message?.text)
        if (ctx.callbackQuery?.data) {
            saveUserState(ctx.from.id, ctx.from.username, ctx.callbackQuery.data)
                .then(() => console.log("1. State saved successfully"))
                .catch(err => console.error("1. Error saving state", err));
        } else if (ctx.message?.text) {
            saveUserState(  ctx.from.id,
                            ctx.from.username,
                            ctx.message.text === '/start'
                                ? '/start'
                                : 'txt')
                .then(() => console.log("2. State saved successfully"))
                .catch(err => console.error("2. Error saving state", err));
        }
        next();
    }
}


module.exports = { stateSavingMiddleware };