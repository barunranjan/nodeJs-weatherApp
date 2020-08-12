const fs = require('fs');

// const book = {
//   title: 'Ego is enemy',
//   author: 'rayon holiday',
// };

// const bookJSON = JSON.stringify(book);
// console.log(bookJSON);

// const bookObject = JSON.parse(bookJSON);
// console.log(bookObject.author);

// fs.writeFileSync('1-json.json', bookJSON);

// const dataBuffer = fs.readFileSync('1-json.json');
// console.log(dataBuffer.toString());

const dataBuffer = fs.readFileSync('1-json.json');
const data = dataBuffer.toString();
const parseData = JSON.parse(data);

(parseData.name = 'varun'), (parseData.age = '27');

console.log(data);
console.log(parseData);

const user = JSON.stringify(parseData);

fs.writeFileSync('1-json.json', user);
