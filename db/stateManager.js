const pool = require('./config');
const logError = require("../utils/logError");

const saveUserState = async (userId, userName, currentState) => {
    // Перевірка на наявність параметрів і присвоєння шаблонних значень
    // userId = userId ? userId : 'defaultUserId';
    userName = userName ? userName : 'undefined UserName';
    currentState = currentState ? currentState : 'undefined State';

    const sql = `
        INSERT INTO user_states (user_id, user_name, state)
        VALUES (?, ?, ?);
    `;
    await pool.query(sql, [userId, userName, currentState]);
}

const saveUserGender = async (tg_id, user_gender) => {
    const sql = `
        INSERT INTO bot_users (tg_id, user_gender)
        VALUES (?, ?)
        ON DUPLICATE KEY UPDATE
        user_gender = VALUES(user_gender);
        `
    await pool.query(sql, [tg_id, user_gender]);
}

const getUserGender = async (uid) => {
    const sql = `
        SELECT user_gender
        FROM bot_users
        WHERE tg_id = ?
    `;

    try {
        const [rows] = await pool.query(sql, [uid]);
        if (rows.length > 0) {
            //console.log(rows[0].user_gender)
            return rows[0].user_gender;
        } else {
            console.log('Не знайшов стать юзера')
            return null;  // Повертаємо null, якщо користувача не знайдено
        }
    } catch (err) {
        logError(err, "📥 fetching user gender")
    }
}


module.exports = { saveUserState,
                saveUserGender,
                getUserGender
};