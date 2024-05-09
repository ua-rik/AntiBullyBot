//не використовую зараз

const express = require('express');
const dotenv = require('dotenv');

console.log(process.env.NODE_ENV);
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const initializeBot = require('./bot');

const app = express();
const bot = initializeBot(process.env.BOT_TOKEN);

app.use(express.json());


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);

    // Налаштуємо веб-хук з Telegram
    bot.api.setWebhook(`https://${process.env.WEBHOOK_DOMAIN}/secret-path`).then(() => {
        console.log('Webhook set on ' + `https://${process.env.WEBHOOK_DOMAIN}/secret-path`);
    });
});
