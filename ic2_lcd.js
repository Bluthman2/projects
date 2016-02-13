var LCDPLATE, lcd;
LCDPLATE = require('adafruit-i2c-lcd').plate;
lcd = new LCDPLATE(1, 0x27);
 
// lcd.backlight(lcd.colors.RED);
console.log("Working on lcd!");
lcd.message('Hello World!');
 
lcd.on('button_change', function(button) {
  lcd.clear();
  lcd.message('Button changed:\n' + lcd.buttonName(button));
});