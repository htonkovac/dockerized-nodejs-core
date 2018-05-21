require('dotenv').config()

module.exports = {
    mongo: {
        networkAlias: process.env.MONGO_NETWORK_ALIAS,
        user: process.env.MONGO_ADMIN_USER,
        pass: process.env.MONGO_ADMIN_PASS,
        dbName: process.env.MONGO_DB_NAME,
    },
    jwtsecret: process.env.JWT_SECRET,
    database: 'mongodb://' + this.mongo.networkAlias + ':27017/' + this.mongo.dbName
}