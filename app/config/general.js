require('dotenv').config()

const mongo = {
    networkAlias: process.env.MONGO_NETWORK_ALIAS,
    user: process.env.MONGO_ADMIN_USER,
    pass: process.env.MONGO_ADMIN_PASS,
    dbName: process.env.MONGO_DB_NAME,
}
const config = {
    mongo: mongo,
    jwtsecret: process.env.JWT_SECRET,
    database: 'mongodb://' + mongo.user + ':' + mongo.pass +'@'+ mongo.networkAlias + ':27017/' + mongo.dbName+'?authSource=admin'
}

module.exports = config