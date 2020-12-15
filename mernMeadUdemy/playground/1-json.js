const fs = require('fs');

// const book = {
//   title: 'Ego is the enemy',
//   author: 'Ryan',
// };

// // fs.writeFileSync('1-json.json', JSON.stringify(book));

const dataBuffer = fs.readFileSync('1-json.json');
const data = JSON.parse(dataBuffer.toString());
console.log(data);
