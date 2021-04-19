const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();
var express = require('express');
var router = express.Router();

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_URL}.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`

const db_options = {useNewUrlParser: true, useUnifiedTopology: true};
const db_name = process.env.DB_NAME;
const coll_name = process.env.COLL_NAME;

async function testConnection() { 
    const client = await MongoClient.connect(url, db_options);

    const db = client.db(db_name)
    
    //do my db things

    client.close();
    return `Successfully connected to database ${db_name}`;
}

router.get('/', async (req, res, next) => {
    var test = await testConnection();
    res.status(200).json({ status: test })
});

module.exports = router;
