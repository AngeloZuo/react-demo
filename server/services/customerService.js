const fs = require("fs-extra");

function test(testData) {
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