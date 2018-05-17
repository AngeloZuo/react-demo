const fs = require("fs-extra");

const mongoDB = require("../database/mongodb");

function test(testData) {
    // mongoDB.findDocuments("test", "documents", {}, (docs) => {
    //     console.log("-0-0-", docs);
    //     return docs;
    // })
    
    return testData + "-----";
}

function getCustomersData() {
    try {
        const customersData = fs.readJson("./server/data/mockData.json");
        return customersData;
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    test,
    getCustomersData
};