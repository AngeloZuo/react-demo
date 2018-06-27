const MongoClient = require("mongodb").MongoClient;
const config = require("../config/config");
const _ = require("lodash");

const url = config.dbUrl;

const insertDocuments = (args, callback) => {
    const { dbName, collectionName, dataList } = args;
    createConnection(dbName, (db, closeConnection) => {
        const collection = db.collection(collectionName);
        collection.insertMany(dataList, (err, result) => {
            console.log(`Inserted ${dataList.length} documents into the collection`);
            callback(result);
            closeConnection();
        });
    });
};

const findDocuments = (args, callback) => {
    const { dbName, collectionName, queryParams } = args;
    createConnection(dbName, (db, closeConnection) => {
        // Get the documents collection
        const collection = db.collection(collectionName);
        // Find some documents
        collection.find(queryParams).toArray((err, docs) => {
            callback(docs);
            closeConnection();
        });
    });
};

const updateDocument = (args, callback) => {
    const { dbName, collectionName, customerInfo } = args;
    createConnection(dbName, (db, closeConnection) => {
        // Get the documents collection
        const collection = db.collection(collectionName);
        collection.updateOne({ id: customerInfo.id }, { $set: customerInfo }, (err, result) => {
            console.log(`Updated ${customerInfo.id} info into the collection`);
            callback(result);
            closeConnection();
        });
    });
};

const removeDocument = (args, callback) => {
    const { dbName, collectionName, customerList } = args;
    createConnection(dbName, (db, closeConnection) => {
        // Get the documents collection
        const collection = db.collection(collectionName);
        // Find some documents
        let customerListLength = customerList.length;
        _.forEach(customerList, element => {
            collection.deleteMany(element).then(result => {
                customerListLength--;
                if (customerListLength === 0) {
                    callback(result);
                    closeConnection();
                }
            });
        });
    });
};

function createConnection(dbName, closeConnection) {
    MongoClient.connect(
        url,
        { useNewUrlParser: true },
        (err, client) => {
            console.log("Connected successfully to server");
            const db = client.db(dbName);

            closeConnection(db, () => {
                client.close();
            });
        }
    );
}

module.exports = {
    findDocuments,
    insertDocuments,
    removeDocument,
    updateDocument
};
