const startGroup = require('../conversations/startGroup');
const redGroup = require('../conversations/redGroup');
const pinkGroup = require('../conversations/pinkGroup');
const yellowGroup = require('../conversations/yellowGroup');
const blueGroup = require('../conversations/blueGroup');
const greenGroup = require('../conversations/greenGroup');

const logError = require("../utils/logError");

const msgList = {
    //white-start-group
    'testMessage': startGroup.testMessage, // for tests
    'startMessage': startGroup.startMessage,
    'defaultMessage': startGroup.defaultMessage,
    'gender_male': (ctx) => startGroup.gender(ctx, 'male'),
    'gender_female': (ctx) => startGroup.gender(ctx, 'female'),
    'no_gender': (ctx) => startGroup.gender(ctx, 'non_selected'),
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
    red1: redGroup.red1,
    red2: redGroup.red2,
    red3: redGroup.red3,
    red4: redGroup.red4,
    red5: redGroup.red5,
    red6: redGroup.red6,
    red7: redGroup.red7,

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
    // Blue
    blue1: blueGroup.blue1,
    blue2: blueGroup.blue2,
    blue3: blueGroup.blue3,
    blue4: blueGroup.blue4,
    blue5: blueGroup.blue5,
    //blue6: blueGroup.blue6,
    //blue7: blueGroup.blue7,
    //pink
    'pink1': pinkGroup.pink1,
    'pink1b': pinkGroup.pink1b,
    'pink2': pinkGroup.pink2,
    'pink3': pinkGroup.pink3,
    'pink4': pinkGroup.pink4,
    //green
    green1: greenGroup.green1,
    green2: greenGroup.green2,
    green3: greenGroup.green3,
    green4: greenGroup.green4,
    green5: greenGroup.green5,
    green6: greenGroup.green6,
    green7: greenGroup.green7,
    green8: greenGroup.green8,
    green9: greenGroup.green9,
    green10: greenGroup.green10,
    green11: greenGroup.green11,
    green12: greenGroup.green12,
    green13: greenGroup.green13,
    green14: greenGroup.green14,
    green15: greenGroup.green15,
    green16: greenGroup.green16,
    green17: greenGroup.green17,
    green18: greenGroup.green18,
    green19: greenGroup.green19,
    green20: greenGroup.green20,
    green21: greenGroup.green21,
    green22: greenGroup.green22,
    green23: greenGroup.green23,
    green24: greenGroup.green24,
    green25: greenGroup.green25,
};

exports.controller = (callback) =>  (ctx) => {
    console.log('💬 ', callback)

    const action = callback.split('/')[0];

    if (msgList[action]) {
        msgList[action](ctx);

    } else {
        try {
            // Симуляція помилки
            throw new Error('🦠 controller error: missing block');
        } catch (error) {
            logError(error);
        }
        ctx.reply("🦠 Сталась помилка. Команда розробників вже в курсі - працюємо над цим");
    }
}