const sqlitedb = require('better-sqlite3');
const bcrypt = require('bcrypt');
const log = require('../services/log-service');
const configService = require('../services/config-service');


let db = new sqlitedb(configService.getConfigValue(['database', 'path']), sqlitedb.OPEN_READWRITE, (err) => {
    if (err) {
        log.error(err.message);
    }
});

function initDatabase() {
    createUserTable();
    insertDefaultUsers();
}

function getUser(username) {
    const user = db.prepare("SELECT * FROM user WHERE username = ? COLLATE NOCASE;").get(username);
    if (!user) {
        log.error(`User "${username}" not found!`);
    }
    return user;
}

function updatePassword(username, password) {
    db.prepare('update user set password = ?, password_changed = 1 where username =?').run(
        bcrypt.hashSync(password, configService.getConfigValue(['user', 'passwordSaltCycles'])), username
    );
}

function createUserTable() {
    const createTable = "CREATE TABLE IF NOT EXISTS user ('username' TEXT, 'password' TEXT, 'role' TEXT, 'password_changed' bit);"
    db.exec(createTable);
}

function insertDefaultUsers() {
    const stmt = db.prepare('INSERT INTO user VALUES (?, ?, ?, ?)');
    configService.getConfigValue(['user', 'default']).forEach(defaultUser => {
        const user = getUser(defaultUser.username);
        if (!user) {
            log.warning('Creating default user...');
            stmt.run(
                defaultUser.username,
                bcrypt.hashSync(defaultUser.password, configService.getConfigValue(['user', 'passwordSaltCycles'])),
                defaultUser.role,
                0
            );
            log.info({"username": defaultUser.username, "role": defaultUser.role});
        }
    });
}

module.exports = {
    initDatabase,
    getUser,
    updatePassword
};