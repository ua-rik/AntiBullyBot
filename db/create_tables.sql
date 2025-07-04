-- user genders
CREATE TABLE IF NOT EXISTS bot_users
(
    tg_id       VARCHAR(50) PRIMARY KEY                 NOT NULL,
    user_gender ENUM ('male', 'female', 'non_selected') NOT NULL,
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP     NOT NULL,
    updated_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP     NOT NULL ON UPDATE CURRENT_TIMESTAMP
);
-- history
CREATE TABLE IF NOT EXISTS user_states
(
    id         INT AUTO_INCREMENT PRIMARY KEY,
    user_id    VARCHAR(50)                         NOT NULL,
    state      VARCHAR(100)                        NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);