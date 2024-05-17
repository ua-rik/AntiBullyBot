const { msg } = require('../conversations/allMessages')
const { getUserGender } = require('../db/stateManager');
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

function formatTimestamp(timestamp) {
    const date = new Date(timestamp);

    const year = date.getFullYear().toString().slice(-2); // Останні два символи року
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Місяць з лідируючим нулем
    const day = String(date.getDate()).padStart(2, '0'); // День з лідируючим нулем

    const hours = String(date.getHours()).padStart(2, '0'); // Години з лідируючим нулем
    const minutes = String(date.getMinutes()).padStart(2, '0'); // Хвилини з лідируючим нулем
    const seconds = String(date.getSeconds()).padStart(2, '0'); // Секунди з лідируючим нулем

    return `${year}-${month}-${day}(${hours}:${minutes}:${seconds})`;
}



module.exports = { getLastMessage, genT, formatTimestamp };