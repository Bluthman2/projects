function prettyPrint(jsonObject){
    console.log(JSON.stringify(jsonObject,null,2));
}

var Forecast = require('forecast');
	var forecast = new Forecast({
	  service: 'forecast.io',
	  key: 'ee2c1295bd1c1672eb3c4f14a7370361',
	  units: 'fahrenheit', // Only the first letter is parsed 
	  cache: true,      // Cache API requests? 
	  ttl: {            // How long to cache requests. Uses syntax from moment.js: http://momentjs.com/docs/#/durations/creating/ 
	    minutes: 27,
	    seconds: 45
	    }
});

var Lcd = require('lcd'),
  lcd = new Lcd({
    rs: 12,
    e: 21,
    data: [5, 6, 17, 18],
    cols: 8,
    rows: 2
  });
 
lcd.on('ready', function() {
	lcd.setCursor(0, 0);
	forecast.get([28.0684783,-82.4498866], 
		function(err, result) {
			
			if(err) return console.dir(err);
			prettyPrint(result);

			console.log('Latitude: %s', result.latitude);
			console.log('Longitude: %s', result.longitude);
			console.log('Timezone: %s', result.timezone);
			console.log('Summary hourly: %s',result.hourly.summary);
			console.log('Summary minutely: %s', result.minutely.summary);
			console.log('Summary Daily: %s',result.daily.summary);
			console.log();
			console.log('Current Weather Conditions:');
			console.log();
			console.log(
			    '%s, %s°F, %s% humidity, %s% rain',
			    result.currently.summary,
			    Math.round(parseFloat(result.currently.temperature, 10)),
			    result.currently.humidity * 100,
			    result.currently.precipProbability
			 );
			lcd.print("Current temp: " + Math.round(parseFloat(result.currently.temperature, 10)));
	});
});
 
// If ctrl+c is hit, free resources and exit.
process.on('SIGINT', function() {
  lcd.clear();
  lcd.close();
  process.exit();
});