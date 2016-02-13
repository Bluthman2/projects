var LCDPLATE, lcd;
LCDPLATE = require('adafruit-i2c-lcd').plate;
lcd = new LCDPLATE(1, 0x27);
 
// lcd.backlight(lcd.colors.RED);
console.log("Working on lcd!");
lcd.clear();


setTimeout( function(i){
            console.log('Input: "' + i + '", Executed with timeout of ' + i*1000 + 'ms');
            lcd.message('Hello World!');
}, i*1000, i );
