const pool = require('./config');

async function saveUserState(userId, userName, currentState) {
    const sql = `
        INSERT INTO user_states (user_id, user_name, state, created_at)
        VALUES (?, ?, ?, NOW());
    `;
    try {
        await pool.query(sql, [userId, userName, currentState]);
        console.log("DB: State saved");
    } catch (error) {
        console.error("DB: Error saving state:", error);
    }
}


module.exports = { saveUserState, saveUserGender, getUserGenrer };