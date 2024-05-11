const startGroup = require('../conversations/startGroup');
const redGroup = require('../conversations/redGroup');
const pinkGroup = require('../conversations/pinkGroup');
const yellowGroup = require('../conversations/yellowGroup');
const blueGroup = require('../conversations/blueGroup');
const greenGroup = require('../conversations/greenGroup');

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
    yellow1: yellowGroup.yellow1,
    yellow2: yellowGroup.yellow2,
    yellow3: yellowGroup.yellow3,
    yellow4: yellowGroup.yellow4,
    yellow5: yellowGroup.yellow5,
    yellow6: yellowGroup.yellow6,
    yellow7: yellowGroup.yellow7,
    yellow8: yellowGroup.yellow8,
    yellow9: yellowGroup.yellow9,
    yellow10: yellowGroup.yellow10,
    yellow11: yellowGroup.yellow11,
    yellow12: yellowGroup.yellow12,


    //pink
    'pink1': pinkGroup.pink1,
    'pink2': pinkGroup.pink2,
    'pink3': pinkGroup.pink3,
    'pink4': pinkGroup.pink4,
    //green
};



exports.controller = (callback) =>  (ctx) => {
    console.log('💬 ', callback)

    const action = callback.split('/')[0];

    if (msgList[action]) {
        msgList[action](ctx);
    } else {
        //ctx.reply("Не відома опція.");
        console.log('🦠 error');
        ctx.reply("🦠 Помилка");
    }
}