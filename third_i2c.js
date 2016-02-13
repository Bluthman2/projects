var rasp2c = require('rasp2c');

rasp2c.detect(function(err, result) {
if (err) {
console.log(err);
} else {
console.log(result);
}
});

console.log("detect");