const fs = require('fs');

fs.writeFileSync('notes.txt', 'This file was created by node.js');

try {
    fs.appendFileSync('notes.txt', '\nHere is new sentence!');
} catch (err) {
    /* Handle the error */
    console.log(err);
}

