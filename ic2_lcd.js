var LCDPLATE, lcd;
LCDPLATE = require('adafruit-i2c-lcd').plate;
lcd = new LCDPLATE(1, 0x27,-1);
 
// lcd.backlight(lcd.colors.RED);
console.log("Working on lcd!");
lcd.clear();

lcd.message("Hello world!");
 lcd.sendBytes(0, 0x3F); // Sainsmart 1602 I2C backlight off