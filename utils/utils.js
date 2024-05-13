const { msg } = require('../conversations/allMessages')

exports.getLastMessage = async (ctx) => {
    const lastMessageId = ctx.callbackQuery?.data.split('/')[1] || null
    const lastMessage = msg[lastMessageId]

    if (lastMessage) {
        return ctx.editMessageText("✔️ " + lastMessage,
        {
            parse_mode: "HTML",
            disable_web_page_preview: true,
        });
    }
    return null;
};