const {readFileSync,writeFileSync} = require('fs');


const first = readFileSync('./content/subfolder/test.txt','utf-8');
console.log(first);

writeFileSync(
    './content/result-sync.txt',
    `Here is the result: ${first}, ${first}`
);

writeFileSync(
    './content/result-sync.txt',
    `This is appended.`,
    {flag: 'a'}
);