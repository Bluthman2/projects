var LCDPLATE, lcd;
LCDPLATE = require('adafruit-i2c-lcd').plate;
lcd = new LCDPLATE(1, 0x27);
 
// lcd.backlight(lcd.colors.RED);
console.log("Working on lcd!");
lcd.clear();

lcd.createChar(1, [0,0,10,31,31,14,4,0]);
lcd.createChar(2, [0,4,10,17,17,10,4,0]);
 
lcd.clear();
lcd.backlight(lcd.colors.RED);
lcd.message('I\x01 n\x02de.js', true);