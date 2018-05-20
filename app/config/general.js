require('dotenv').config()

module.exports = {
    databaseurl: process.env.MONGO_NETWORK_ALIAS,
    databaseuser: process.env.MONGO_ADMIN_USER,
    databasepass: process.env.MONGO_ADMIN_PASS
}