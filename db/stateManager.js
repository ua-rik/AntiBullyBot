const pool = require('./config');

const saveUserState = async (userId, userName, currentState) => {
    // Перевірка на наявність параметрів і присвоєння шаблонних значень
    // userId = userId ? userId : 'defaultUserId';
    userName = userName ? userName : 'undefined UserName';
    currentState = currentState ? currentState : 'undefined State';

    const sql = `
        INSERT INTO user_states (user_id, user_name, state, created_at)
        VALUES (?, ?, ?, NOW());
    `;
    await pool.query(sql, [userId, userName, currentState]);
}

const saveUserGender = async (userId, as) => {
    const sql = `
        INSERT INTO user_genders (user_id, created_at)
        VALUES (?, NOW());
    `;
}

module.exports = { saveUserState,
    // saveUserGender,
    // getUserGender
};