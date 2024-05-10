const express = require("express");
const {Bot, webhookCallback} = require("grammy");

const dotenv = require('dotenv');

console.log(process.env.NODE_ENV)
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const mainController = require('./controller/controller')
const { stateSavingMiddleware } = require('./controller/botMiddleware')

//bot init
const bot = new Bot(process.env.BOT_TOKEN);

//express init
const app = express();
app.use(express.json());
app.use(webhookCallback(bot, "express"));

//bot middlewares

bot.use(stateSavingMiddleware());



bot.command("test", (ctx) => mainController.controller('testMessage')(ctx));

bot.command("start", (ctx) => mainController.controller('startMessage')(ctx));
bot.on("message", (ctx) => mainController.controller('defaultMessage')(ctx));
bot.on("callback_query", (ctx) => {
        mainController.controller(ctx.callbackQuery.data)(ctx)
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);

    // Налаштуємо веб-хук з Telegram
    bot.api.setWebhook(`https://${process.env.WEBHOOK_DOMAIN}/secret-path`).then(() => {
        console.log('Webhook set on ' + `https://${process.env.WEBHOOK_DOMAIN}/secret-path`);
    });
});
