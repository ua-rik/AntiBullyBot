const {InlineKeyboard} = require("grammy");
exports.defaultMessage = async (ctx) => {
     // todo: видалити попереднє

     await ctx.reply("Не пиши мені! Використовуй кнопки.")
     console.log(`Юзер ${ctx.from.id} пише: ${ctx.message}`)

     // todo: продублювати попереднє
}


exports.startMessage = async (ctx) => {
     await ctx.reply("Привіт, дякую за звернення! Це - антибулінговий бот. Нумо знайомитися!");

     await ctx.reply("Ти хлопець чи дівчина?", {
          reply_markup: {
               inline_keyboard: [
                    [{ text: "Хлопець}", callback_data: "gender_male" }],
                    [{ text: "Дівчина", callback_data: "gender_female" }]
               ]
          }
     });
}

exports.gender = async (ctx, sex) => {
     // await ctx.editMessageText("Твій вибір: " + (sex === "male" ? "Чоловік" : "Жінка"));
     // ToDo: запис в БД статі юзера
     await ctx.deleteMessage();

     await ctx.reply("Тепер розберімося з твоїм запитом");

     // пауза
     await ctx.replyWithChatAction('typing');
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
                    [{ text: "Ні", callback_data: "red1" }]
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
                    [{ text: "Так", callback_data: "yourRole" }],
                    [{ text: "Ні", callback_data: "red1" }]
               ]
          }
     });
}

exports.yourRole = async (ctx) => {
     await ctx.deleteMessage()
     await ctx.reply("Мені дуже шкода, що так сталося.\n" +
         "Скажи, яка роль найкраще описує тебе в цих обставинах?", {
          reply_markup: {
               inline_keyboard: [
                    [{ text: "Мішень булінгу", callback_data: "green1" }],
                    [{ text: "Свідок булінгу", callback_data: "yellow1" }],
                    [{ text: "Нападник", callback_data: "pink1" }],
                    [{ text: "Дорослий", callback_data: "blue1" }],

               ]
          }
     });
}



/// test
exports.testMessage = async (ctx) => {
     //await ctx.deleteMessage()

     const keyboard = new InlineKeyboard()
         .url("Подзвонити?", "tg://resolve?phone=116111");
     await ctx.reply(
         `Зателефонуй за номером [911](tel:911) та [\\+380972878635](tel:\\+380972878635)`,
         {
              parse_mode: "MarkdownV2",
              reply_markup: keyboard,
              disable_web_page_preview: true
         }
        );
}