var i2c = require('i2c');
var address = 0x27;
var wire = new i2c(address, {device: '/dev/i2c-1'}); // point to your i2c address, debug provides REPL interface 
 
console.log("Writing to lcd.");

wire.scan(function(err, data) {
  // result contains an array of addresses 
});
 
wire.writeByte(byte, function(err) {});
 
wire.writeBytes(command, [byte0, byte1], function(err) {});
 
wire.readByte(function(err, res) { // result is single byte }) 
});
 
wire.readBytes(command, length, function(err, res) {
  // result contains a buffer of bytes 
});
 
wire.on('data', function(data) {
  // result for continuous stream contains data buffer, address, length, timestamp 
});
 
wire.stream(command, length, delay); // continuous stream, delay in ms 
 
 
// plain read/write 
 
wire.write([byte0, byte1], function(err) {});
 
wire.read(length, function(err, res) {
  // result contains a buffer of bytes 
});