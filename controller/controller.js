const startGroup = require('../conversations/startGroup');
const redGroup = require('../conversations/redGroup');

const msgList = {
    //white-start-group
    'testMessage': startGroup.testMessage, // for tests
    'startMessage': startGroup.startMessage,
    'defaultMessage': startGroup.defaultMessage,
    'gender_male': (ctx) => startGroup.gender(ctx, 'male'),
    'gender_female': (ctx) => startGroup.gender(ctx, 'female'),
    'thanksTakeCare': startGroup.thanksTakeCare,
    'whatsUp': startGroup.whatsUp,
    'restartBot': startGroup.restartBot,
    'byeThen': startGroup.byeThen,
    'sorryBye': startGroup.sorryBye,
    'wannaTalk': startGroup.wannaTalk,
    'bullyingAbout': startGroup.bullyingAbout,
    'yourRole': startGroup.yourRole,
    'wannaTalk1': startGroup.wannaTalk,
    //red
    'red1': redGroup.red1,
    'red2': redGroup.red2,
    'red3': redGroup.red3,
    'red4': redGroup.red4,
    //yellow

    //pink
    //green
};



exports.controller = (callback) =>  (ctx) => {
    console.log('💬 ', callback)
    if (msgList[callback]) {
        msgList[callback](ctx);
    } else {
        //ctx.reply("Не відома опція.");
        console.log('🦠 error')
    }
}