exports.defaultMessage = async (ctx) => {
     // todo: видалити попереднє

     await ctx.reply("Не пиши мені! Використовуй кнопки.")
     console.log(`Юзер ${ctx.from.id} пише: ${ctx.message}`)

     // todo: продублювати попереднє
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
     // await ctx.editMessageText("Твій вибір: " + (sex === "male" ? "Чоловік" : "Жінка"));
     // ToDo: запис в БД статі юзера
     await ctx.deleteMessage();

     await ctx.reply("Тепер розберімося з твоїм запитом");
     // Відправка дії "набирання тексту"
     await ctx.replyWithChatAction('typing');

     // Додавання затримки (2 секунди)
     await new Promise(resolve => setTimeout(resolve, 2000));

     await ctx.reply("Тебе щось хвилює", {
          reply_markup: {
               inline_keyboard: [
                    [{ text: "Так", callback_data: "whatsUp" }],
                    [{ text: "Ні", callback_data: "wannaTalk" }],
                    [{ text: "Завершити спілкування", callback_data: "thanksTakeCare" }]
               ]
          }
     });
}

exports.wannaTalk = async (ctx) => {
     await ctx.deleteMessage()
     await ctx.reply("Круто, приємно було познайомитися! Просто хочеш поговорити?", {
          reply_markup: {
               inline_keyboard: [
                    [{ text: "Так", callback_data: "sorryBye" }],
                    [{ text: "Ні", callback_data: "byeThen" }]
               ]
          }
     });
}

exports.byeThen = async (ctx) => {
     await ctx.deleteMessage()
     await ctx.reply("Тоді бувай!", {
          reply_markup: {
               inline_keyboard: [
                    [{ text: "Тиць!", callback_data: "restartBot" }]
               ]
          }
     });
}

exports.sorryBye = async (ctx) => {
     await ctx.deleteMessage()

     await ctx.reply("Вибач, я трохи на інше запрограмований. " +
         "Але все одно, приємно було спілкуватись! " +
         "Вважай це знаком того, що ти дуже великий молодець!", {
          reply_markup: {
               inline_keyboard: [
                    [{ text: "Тиць!", callback_data: "restartBot" }]
               ]
          }
     });
}

exports.whatsUp = async (ctx) => {
     await ctx.deleteMessage()
     await ctx.reply("Розкажи, будь ласка, що саме тебе турбує. Тебе ображають в школі?", {
          reply_markup: {
               inline_keyboard: [
                    [{ text: "Так", callback_data: "bullyingAbout" }],
                    [{ text: "Ні", callback_data: "!!!" }]
               ]
          }
     });
}

exports.thanksTakeCare = async (ctx) => {
     await ctx.deleteMessage()
     await ctx.reply("Дякую за розмову :) Потурбуйся про себе!?", {
          reply_markup: {
               inline_keyboard: [
                    [{ text: "Тиць!", callback_data: "restartBot" }]
               ]
          }
     });
}

exports.restartBot = async (ctx) => {
     await ctx.deleteMessage()
     await ctx.reply("Запустити діалог спочатку?", {
          reply_markup: {
               inline_keyboard: [
                    [{ text: "Так", callback_data: "startMessage" }]
               ]
          }
     });
}

exports.bullyingAbout = async (ctx) => {
     await ctx.deleteMessage()
     await ctx.reply("Почитай уважно, чи схоже на твій досвід:\n" +
         "Булінг — це коли людині навмисно і неодноразово завдають болю, і їй з певних причин важко захистити себе.\n" +
         "Біль може бути фізичний, психологічний, " +
         "може бути ізоляцією або пошкодженням репутації, втручанням в дружні стосунки.\n" +
         "Тебе непокоїть ситуація схожа на це?", {
          reply_markup: {
               inline_keyboard: [
                    [{ text: "Так", callback_data: "!!!" }],
                    [{ text: "Ні", callback_data: "!!!" }]
               ]
          }
     });
}
