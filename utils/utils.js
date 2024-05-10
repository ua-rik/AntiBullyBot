const { msg } = require('../conversations/allMessages')

exports.getLastMessage = async (ctx) => {
    const lastMessageId = ctx.callbackQuery?.data.split('/')[1] || null
    const lastMessage = msg[lastMessageId]

    if (lastMessage) {
        return ctx.editMessageText(lastMessage);
    }
    return null;
};