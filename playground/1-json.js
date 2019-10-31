const fs = require('fs');
// const book = {
//     'title': 'Ego is the enemy',
//     'author': 'Ryan Holiday'
// };

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json',bookJSON);

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = JSON.parse(dataBuffer.toString());

dataJSON.name = 'Jorge';
dataJSON.age = 23;

const JSONstring = JSON.stringify(dataJSON);

fs.writeFileSync('1-json.json',JSONstring);

console.log(dataJSON.title);
