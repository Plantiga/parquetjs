const arrow = require('apache-arrow');
const path = require('path');
const fs = require('fs');

async function readData(file) {
    const filename = path.join(__dirname, '..', 'test', 'test-files', file);
    // const data = new Uint8Array(fs.readFileSync(filename));
    const fh = await fs.promises.open(filename);
    return arrow.Table.from(fh);
}

async function testRead() {
    console.time("Read")
    let data = await readData('chicago.arrow');
    console.timeLog("Read", `${data.length} rows chicago.arrow`)
}

testRead();
