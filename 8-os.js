// importing the os module
const os = require('os');

// to get user info
console.log(os.userInfo());

// to get total system uptime in secondss
console.log(os.uptime());

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
};

console.log(currentOS);