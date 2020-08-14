"use strict";
const https = require('https');
const writeJsonFile = require('./writeJsonFile');

const options = {
    host: 'jsonplaceholder.typicode.com',
    path: '/posts/2',
    headers: {'User-Agent': 'request'}
};

https.get(options, function (res) {

    let json = '';
    res.on('data', function (chunk) {
        json += chunk;
    });
    res.on('end', function () {

        if (res.statusCode === 200) {
            try {
                let data = JSON.parse(json);
                writeJsonFile("./sample.json", data);
            } catch (e) {
                console.log('Error parsing JSON!');
            }
        } else {
            console.log('Status:', res.statusCode);
        }

    });

}).on('error', function (err) {
    console.log('Error:', err);
});
