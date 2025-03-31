const names = require('./names');
console.log(names);

const sayHi = require('./func');

sayHi('Susan');
sayHi(names.john);
sayHi(names.peter);