const {msg} = require('../conversations/allMessages')
const {getUserGender} = require('../db/stateManager');
const logError = require("../utils/logError");

const getLastMessage = async (ctx) => {
    const lastMessageId = ctx.callbackQuery?.data.split('/')[1] || null
    const lastMessage = msg[lastMessageId]
    const genderReadyLastMessage = await genT(lastMessage, ctx)
    try {
        if (genderReadyLastMessage) {
            await ctx.editMessageText(genderReadyLastMessage,
                {
                    parse_mode: "HTML",
                    disable_web_page_preview: true,
                });
        }
    } catch (e) {
        logError(e, "📣 editing last message")
        return null;
    }
};

// обробляє повідомлення перед вставкою
const genT = async (message, ctx) => {
    // Перевірка наявності гендерних тегів у тексті
    if (/{.*?\|.*?}/.test(message)) {
        return replaceGenderSpecificText(message, ctx);
    } else {
        // Якщо гендерних тегів немає, повертаємо текст без змін
        return message;
    }
}

// заміна гендерних тегів у тексті
const replaceGenderSpecificText = async (text, ctx) => {
    const gender = await getUserGender(ctx.from.id).catch(error => {
        logError(error, "📣 Error fetching user gender");
        return 'male';
    });
    return text.replace(/{(.*?)\|(.*?)}/g, (match, maleForm, femaleForm) => {
        return gender === 'female' ? femaleForm : maleForm;
    });
}

function formatTimestamp(timestamp) {
    const date = new Date(timestamp);

    const year = date.getFullYear().toString().slice(-2);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day}(${hours}:${minutes}:${seconds})`;
}


module.exports = {getLastMessage, genT, formatTimestamp};