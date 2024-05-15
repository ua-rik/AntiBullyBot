const pool = require('./config');

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

module.exports = { saveUserState,
                saveUserGender,
    // getUserGender
};