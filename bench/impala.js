const parquet = require('../parquet.js');
const path = require('path');

async function readData(file, count) {
    let records = [], record;
    let i = 0;
    const reader = await parquet.ParquetReader.openFile(path.join(__dirname, '..', 'test', 'test-files', file));
    const cursor = reader.getCursor();
    while ((record = await cursor.next()) && (!count || i++ < count)) {
        records.push(record);
    }
    return records;
}

async function testRead() {
    console.time("Read")
    let data = await readData('customer.impala.parquet');
    console.timeLog("Read", `${data.length} rows customer.impala.parquet`)
}

testRead();
