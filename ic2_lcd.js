var LCDPLATE, lcd;
LCDPLATE = require('adafruit-i2c-lcd').plate;
lcd = new LCDPLATE(1, 0x27);
 
// lcd.backlight(lcd.colors.RED);
console.log("Working on lcd!");
lcd.clear();


setTimeout( function(){
            console.log("In timeout");
            lcd.message('Hello World!');
}, 1000);
