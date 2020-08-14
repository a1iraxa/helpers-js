
const fs = require('fs');

const writeJsonFile = (path, data) => {
    fs.writeFile( path, JSON.stringify(data), function (error) {
        if (error) {
            console.log(error);
        }
    });
}

module.exports = writeJsonFile;
