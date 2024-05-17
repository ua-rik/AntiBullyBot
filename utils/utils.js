const { msg } = require('../conversations/allMessages')
const { getUserGender } = require('../db/stateManager');

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
        console.log("📣 ERRROOOORRRR 🧨🧨🧨 :", e);
        return null;
    }
};

// обробляє повідомлення перед вставкою
const genT = async (message, ctx) => {
    // Перевірка наявності гендерних тегів у тексті
    if (/{.*?\|.*?}/.test(message)) {
        // Отримання статі користувача з бази даних
        const gender = await getUserGender(ctx.from.id);
        // Заміна гендерних тегів на відповідні форми
        return replaceGenderSpecificText(message, gender);
    } else {
        // Якщо гендерних тегів немає, повертаємо текст без змін
        return message;
        }
}

// Функція для заміни гендерних тегів у тексті
function replaceGenderSpecificText(text, gender) {
    return text.replace(/{(.*?)\|(.*?)}/g, (match, maleForm, femaleForm) => {
        return gender === 'female' ? femaleForm : maleForm;
    });
}

module.exports = { getLastMessage, genT };