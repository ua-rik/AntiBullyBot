const {Bot: Bot_long_pool_version_not_used} = require("grammy");

dotenv = require('dotenv');
console.log(process.env.NODE_ENV);
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });


const bot = new Bot_long_pool_version_not_used(process.env.BOT_TOKEN);
const mainController = require("./controller/controller");
const { stateSavingMiddleware } = require('./controller/botMiddleware')

//bot middlewares
bot.use(stateSavingMiddleware());
// bot roures
bot.command("test", (ctx) => mainController.controller('testMessage')(ctx));
bot.command("start", (ctx) => mainController.controller('startMessage')(ctx));
bot.on("message", (ctx) => mainController.controller('defaultMessage')(ctx));
bot.on("callback_query", (ctx) => {
    mainController.controller(ctx.callbackQuery.data)(ctx)
});
////////

bot.start();