const express = require("express"); // wh
const {Bot, webhookCallback} = require("grammy");

const dotenv = require('dotenv');
console.log("Режим:", process.env.NODE_ENV, '/', process.env.BOT_MODE || 'polling');
dotenv.config({path: `.env.${process.env.NODE_ENV}`});

const bot = new Bot(process.env.BOT_TOKEN);
const mainController = require('./controller/controller')
const {stateSavingMiddleware, logAll} = require('./controller/botMiddleware')

const app = express();
if (process.env.BOT_MODE === "webhook") {
    //express init
    app.use(express.json());
    app.post(`/${process.env.BOT_TOKEN}`, webhookCallback(bot, 'express', { secretToken: process.env.SECRET_TOKEN  }));
}

//bot middlewares
bot.use(stateSavingMiddleware());

if (process.env.NODE_ENV !== 'prod') {
    bot.use(logAll);
}

// bot routes
bot.command("test", (ctx) => mainController.controller('testMessage')(ctx));
bot.command("start", (ctx) => mainController.controller('startMessage')(ctx));
bot.on("message", (ctx) => mainController.controller('defaultMessage')(ctx));
bot.on("callback_query", (ctx) => {
    mainController.controller(ctx.callbackQuery.data)(ctx)
});

///////
if (process.env.BOT_MODE === "webhook") {
    //express init
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
        bot.api.setWebhook(`https://${process.env.WEBHOOK_DOMAIN}/${process.env.BOT_TOKEN}`,
            { secret_token: process.env.SECRET_TOKEN })
            .then(() => {
                console.log('Webhook set on ' + `https://${process.env.WEBHOOK_DOMAIN}/${process.env.BOT_TOKEN}`);
        }).catch((err) => {
            console.error('Failed to set webhook:', err);
        });
    });
} else {
    console.log('start in polling mode >>>> ')
    bot.start()
}



