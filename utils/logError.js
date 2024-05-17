const fs = require('fs');
const path = require('path');

const logFilePath = path.resolve(__dirname, '..', 'error.log');


const logError = (error, comment = '') => {
    const timestamp = new Date().toISOString();
    const message = `${timestamp} - Error:${comment}: ${error.message}\nStack: ${error.stack}\n\n`;

    fs.appendFile(logFilePath, message, (err) => {
        if (err) {
            console.error('🧨 Failed to write to log file:', err);
        }
    });

    console.error("🧨", message);
}

module.exports = logError;