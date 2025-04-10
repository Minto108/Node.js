// import the path module
const path = require('path');

// to view the platform separtor
console.log(path.sep);

//to return a file path
const filepath = path.join('/content','subfolder','test.txt');
console.log(filepath);

// to return the absolute file path
const absolute = path.resolve(__dirname,'content','subfolder','test.txt');
console.log(absolute);