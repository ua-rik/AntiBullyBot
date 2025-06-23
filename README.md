# 🤖 AntiBullyBot – Telegram Bot for Preventing Bullying in Schools

**AntiBullyBot** is an interactive assistant designed to help students safely and confidentially report bullying incidents and receive fast, helpful support.

The bot supports students, teachers, and school administrators in responding to bullying promptly and building a healthy, safe atmosphere in the classroom.

## 🎯 What Problems Does AntiBullyBot Solve?

* 🛡️ **Safe Bullying Reporting**: Students can report bullying incidents anonymously or openly.
* 💬 **Support and Advice**: The bot provides practical guidance for victims and bystanders.
* 📚 **Informational Assistance**: Helps educate students about what bullying is, why it happens, and how they can respond or seek help.

## 📐 Architecture

### 📂 Key Components:

#### 🔎 Project Structure (What’s Where and What It Does):

* `bot.js` – Main entry file that initializes the bot, connects middleware, controllers, and launches the server.
* `controller/` – Logic for handling user interactions:

  * `botMiddleware.js` – Middleware to filter and process incoming messages before routing.
  * `controller.js` – Core logic for responding to user actions.
* `conversations/` – Dialogue scenarios for different user groups (victims, observers, aggressors, adults).
* `db/` – Everything related to database:

  * Connection config, user state persistence, SQL table definitions.
* `utils/` – Helper functions and logging utilities.

### 🖥️ Tech Stack

* **Node.js** for the backend logic
* **Express.js** as the web server
* **GrammY** to interact with the Telegram Bot API
* **MySQL** for storing user state information
* **PM2** for process management and uptime reliability

### 🔌 Interfaces

**Telegram Bot API** supports two modes:

* 🔄 **Long-polling**: Bot sends regular update requests (up to 30 seconds).
* 🌐 **Webhook**: Launches an Express.js web server to receive updates from Telegram servers.

**Database:**

* `db/config.js` – Creates a connection pool.
* `db/stateManager.js` – Reads and saves user state.
* `db/create_tables.sql` – SQL script to create necessary tables.

✅ All DB queries are asynchronous and non-blocking.

### 🔐 Data Privacy and Storage

The app uses a **stateless** architecture (no persistent session between requests). All necessary data is passed via context and inline queries.

Stored in DB:

* User gender (`bot_users`) – used to personalize messages with correct gender endings (e.g., "he did" vs "she did"). Errors in DB access do not break the bot’s functionality.
* User interaction history (`user-states`) – useful for future analytics.

❗ The database **does NOT** store sensitive personal data. Only the **Telegram ID** is used as an identifier — a unique numerical ID that doesn’t reveal any personal info (e.g., username, name, or phone number). Hashing user IDs before storing is recommended.

### 🛡️ Application Security

Sensitive data is passed via environment variables stored in `.env.<mode>` files:

```dotenv
# Web server
PORT=
WEBHOOK_DOMAIN=
SECRET_TOKEN=

# Bot
BOT_TOKEN=

# Database
DB_HOST=
DB_USER=
DB_NAME=
DB_PASSWORD=
```

## 🚀 Infrastructure

Tested with:

* Node.js v.20.13 (LTS), v.16 (LTS)
  ⚠️ **IMPORTANT:** Node.js v.21 may have issues with dependency support.
* MySQL v.5.7.34

### 🌍 Network Requirements

* Access to a server.
* A valid SSL certificate is **required** for WebHook mode.

## 🛠️ Launch Instructions

### 🌐 Webhook mode

```bash
NODE_ENV=prod BOT_MODE=webhook node bot.js
```

### 🔄 Long-polling mode

```bash
NODE_ENV=prod node bot.js
```

For stable operation, it’s recommended to use **PM2**:

### 🖥️ PM2 (dev webhook mode)

```bash
NODE_ENV=dev BOT_MODE=webhook pm2 start bot.js --name "bot_webhook_dev" --log <logFileName>
```
