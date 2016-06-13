const foo = require('./lib/index.js')

console.log('1 + 2 is "' + foo.adder.add(1, 2) + '"')
console.log('1 - 2 is "' + foo.subtractor.subtract(1, 2) + '"')
console.log('hey left padded to 5 is "' + foo.padder.leftPad('hey', 5) + '"')
console.log('bye left padded to 7 with "-" is "' + foo.padder.rightPad('bye', 7, '-') + '"')
