const {Bot} = require("grammy");
dotenv = require('dotenv');
console.log(process.env.NODE_ENV)
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });


const bot = new Bot(process.env.BOT_TOKEN);


bot.command("start", (ctx) => ctx.reply("Ласкаво просимо! Бот запущений."));
bot.on("message", async (ctx) => {
    await ctx.reply("Отримав ще одне повідомлення!");
    console.log(ctx.from.id);
    await bot.api.sendMessage(ctx.from.id, `Привіт, ${ctx.from.id}`);
});


bot.start();