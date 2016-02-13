var rasp2c = require('rasp2c');

rasp2c.detect(function(err, result) {
if (err) {
console.log(err);
} else {
console.log(result);
}
});

rasp2c.set('0xa1', '0x27', '0xff', function(err, result) {
if (err) {
console.log(err);
} else {
console.log(result);
}
});

console.log("detect");