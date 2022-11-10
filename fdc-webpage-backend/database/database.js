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

function getUsernames() {
    return db.prepare("SELECT username, role FROM user;").all();
}

function getOwnUsername(username) {
    return db.prepare("Select username, role FROM user where username = ?").all(username);
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
    configService.getConfigValue(['user', 'default']).forEach(defaultUser => {
        const user = getUser(defaultUser.username);
        if (!user) {
            try {
                log.warning('Creating default user ' + defaultUser.username);
                insertUser(defaultUser);
            } catch (err) {
                log.err(err);
            }
        }
    });
}

function insertUser(userData) {
    const user = getUser(userData.username);
    if (!user) {
        db.prepare('INSERT INTO user VALUES (?, ?, ?, ?)').run(
            userData.username,
            bcrypt.hashSync(userData.password, configService.getConfigValue(['user', 'passwordSaltCycles'])),
            userData.role,
            0
        );
        log.info('Created user');
        log.info(JSON.stringify({"username": userData.username, "role": userData.role}, null, 2));
    } else {
        throw 'user ' + userData.username + ' already exists';
    }
}

function deleteUser(username) {
    if (username) {
        db.prepare('DELETE FROM user where username = ?').run(username);
    } else {
        throw 'No username given to delete!';
    }
}

module.exports = {
    deleteUser,
    getUser,
    getUsernames,
    getOwnUsername,
    initDatabase,
    insertUser,
    updatePassword
};