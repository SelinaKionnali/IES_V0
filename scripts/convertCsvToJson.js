const csv = require('csvtojson');
const fs = require('fs');

// Function to convert CSV to JSON
const convertCsvToJson = (csvFilePath, jsonFilePath) => {
  csv()
    .fromFile(csvFilePath)
    .then((jsonObj) => {
      fs.writeFileSync(jsonFilePath, JSON.stringify(jsonObj, null, 4)); // Write to JSON file
      console.log(`Conversion of ${csvFilePath} to ${jsonFilePath} completed!`);
    })
    .catch((err) => {
      console.error(`Error converting ${csvFilePath}:`, err);
    });
};

// Convert the specific CSV files
convertCsvToJson('data/BaseThermalLoad.csv', 'data/BaseThermalLoad.json');
convertCsvToJson('data/ElectricalLoad.csv', 'data/ElectricalLoad.json');
