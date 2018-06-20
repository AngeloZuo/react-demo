const MongoClient = require('mongodb').MongoClient;
const config = require("../config/config");
const _ = require("lodash");

const url = config.dbUrl;

const insertDocuments = (args, callback) => {
    const { dbName, customerCollection, addData } = args;
    createConnection(dbName, (db, closeConnection) => {
        const collection = db.collection(customerCollection);
        let tempArray = [];
        if(_.isArray(addData)) {
            tempArray = addData;
        } else {
            tempArray.push(addData);
        }
        collection.insertMany(tempArray, (err, result) => {
            console.log(`Inserted ${tempArray.length} documents into the collection`);
            callback(result);
            closeConnection();
        });
    });
    
}

const findDocuments = (args, callback) => {
    const { dbName, customerCollection, queryParams } = args;
    createConnection(dbName, (db, closeConnection) => {
        // Get the documents collection
        const collection = db.collection(customerCollection);
        // Find some documents
        collection.find(queryParams).toArray((err, docs) => {
            callback(docs);
            closeConnection();
        });
    });
}

const findDocumentsByCondition = (db, callback) => {
    // Get the documents collection
    const collection = db.collection('documents');
    // Find some documents
    collection.find({ 'a': 3 }).toArray((err, docs) => {
        console.log("Found the following records");
        console.log(docs);
        callback(docs);
    });
}

const updateDocument = (db, callback) => {
    // Get the documents collection
    const collection = db.collection('documents');
    // Update document where a is 2, set b equal to 1
    collection.updateMany({ a: 2 }, { $set: { a: 666 } }, (err, result) => {
        console.log("Updated the document with the field a equal to 2");
        callback(result);
    });
}

const removeDocument = (args, callback) => {
    const { dbName, customerCollection, customerList } = args;
    createConnection(dbName, (db, closeConnection) => {
        // Get the documents collection
        const collection = db.collection(customerCollection);
        // Find some documents
        let customerListLength = customerList.length;
        _.forEach(customerList, element => {
            collection.deleteMany(element).then((result) => {
                customerListLength--;
                if (customerListLength === 0) {
                    callback(result);
                    closeConnection();
                }
            });
        });
    });
}

const indexCollection = (db, callback) => {
    db.collection('documents').createIndex(
        { "a": 1 },
        null,
        (err, results) => {
            console.log(results);
            callback();
        }
    );
};

function createConnection(dbName, closeConnection) {
    MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
        console.log("Connected successfully to server");
        const db = client.db(dbName);
    
        closeConnection(db, () => {
            client.close();
        });
    });
}

module.exports = {
    findDocuments,
    insertDocuments,
    removeDocument
}