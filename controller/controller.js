const startGroup = require('../conversations/startGroup');

const msgList = {
    //white-start-group
    'startMessage': startGroup.startMessage,
    'defaultMessage': startGroup.defaultMessage,
    'gender_male': (ctx) => startGroup.gender(ctx, 'male'),
    'gender_female': (ctx) => startGroup.gender(ctx, 'female')

};


exports.controller = (callback) =>  (ctx) => {
    console.log('👉 ', callback)
    if (msgList[callback]) {
        msgList[callback](ctx);
    } else {
        //ctx.reply("Не відома опція.");
        console.log('🦠 error')
    }
}