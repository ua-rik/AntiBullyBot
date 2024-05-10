const startGroup = require('../conversations/startGroup');
const redGroup = require('../conversations/redGroup');

const msgList = {
    //white-start-group
    'startMessage': startGroup.startMessage,
    'defaultMessage': startGroup.defaultMessage,
    'gender_male': (ctx) => startGroup.gender(ctx, 'male'),
    'gender_female': (ctx) => startGroup.gender(ctx, 'female'),
    'thanksTakeCare': startGroup.thanksTakeCare,
    'restartBot': startGroup.restartBot,
    'byeThen': startGroup.byeThen,
    'sorryBye': startGroup.sorryBye,
    'wannaTalk': startGroup.wannaTalk,
    'bullyingAbout': startGroup.bullyingAbout,
    'wannaTalk': startGroup.wannaTalk,
    //red
    'wannaTalk': startGroup.wannaTalk,
    'wannaTalk': startGroup.wannaTalk,
    //yellow
    //pink
    //green
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