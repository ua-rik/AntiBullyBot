const { saveUserState } = require('../db/stateManager');

function stateSavingMiddleware() {
    return async (ctx, next) => {
        try {
            console.log('📥 CONTEXT:', ctx.callbackQuery?.data || ctx.message?.text);

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

module.exports = { stateSavingMiddleware };