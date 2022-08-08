const os = require('os')

console.log('Memoria total:' + os.totalmem() + ' bytes')
console.log('Memoria libre:' + os.freemem() + ' bytes')
const vec = []
for(let i=0;i<1000000;i++){
    vec.push(i);
}
console.log('Memoria libre:' + os.freemem + 'bytess')
