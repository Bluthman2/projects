var Lcd = require('lcd'),
  lcd = new Lcd({
    rs: 12,
    e: 21,
    data: [11, 13, 15, 16],
    cols: 16,
    rows: 2
  });
 
console.log("printing to lcd");
lcd.on('ready', function() {
  lcd.print("Hello world!");
  // setInterval(function() {
  //   lcd.setCursor(0, 0);
  //   lcd.print(new Date().toString().substring(16, 24));
  // }, 1000);
});
 
// If ctrl+c is hit, free resources and exit.
process.on('SIGINT', function() {
  lcd.clear();
  lcd.close();
  process.exit();
});