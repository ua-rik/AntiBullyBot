const { msg } = require('../conversations/allMessages')

exports.getLastMessage = async (ctx) => {
    const lastMessageId = ctx.callbackQuery?.data.split('/')[1] || null
    const lastMessage = msg[lastMessageId]

    try {
        if (lastMessage) {
            await ctx.editMessageText(lastMessage,
                {
                    parse_mode: "HTML",
                    disable_web_page_preview: true,
                });
        }
    } catch (e) {
        console.log("📣 ERRROOOORRRR 🧨🧨🧨 :", e);
        return null;
    }
};