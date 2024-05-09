

exports.defaultMessage = async (ctx) => {
     await ctx.reply("Не пиши мені! Використовуй кнопки.")
     console.log(`Юзер ${ctx.from.id} пише: ${ctx.message}`)
}


exports.startMessage = async (ctx) => {
     // Перше повідомлення з привітанням
     await ctx.reply("Привіт, дякую за звернення! Це - антибулінговий бот. Нумо знайомитися!");

     // Друге повідомлення з вибором статі
     await ctx.reply("Ти хлопець чи дівчина?", {
          reply_markup: {
               inline_keyboard: [
                    [{ text: "Чоловік", callback_data: "gender_male" }],
                    [{ text: "Жінка", callback_data: "gender_female" }]
               ]
          }
     });
}

exports.gender = async (ctx, sex) => {
     //await ctx.editMessageText("Твій вибір: " + (sex === "male" ? "Чоловік" : "Жінка"));
     await ctx.deleteMessage();

     await ctx.reply("Тепер розберімося з твоїм запитом");
     // Відправка дії "набирання тексту"
     await ctx.replyWithChatAction('typing');

     // Додавання затримки (3 секунди)
     await new Promise(resolve => setTimeout(resolve, 3000));

     await ctx.reply("Тебе щось хвилює", {
          reply_markup: {
               inline_keyboard: [
                    [{ text: "Так", callback_data: "startMessage" }],
                    [{ text: "Ні", callback_data: "startMessage" }]
               ]
          }
     });
}