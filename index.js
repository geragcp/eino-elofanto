const express = require('express');
const os = require("os");
const app = express();
const port = process.env.PORT || 3000;

const dateStart = Date.now();
const hostname = os.hostname();



app.get('/', (req, res) => {
  const nDate = new Date().toLocaleString('en-US', {
      timeZone: 'America/Denver'
      });

  dateObj = (new Date(Date.now() - dateStart))/1000;

  var numdays = Math.floor(dateObj / 86400);
  var numhours = Math.floor((dateObj % 86400) / 3600);
  var numminutes = Math.floor(((dateObj % 86400) % 3600) / 60);
  var numseconds = ((dateObj % 86400) % 3600) % 60;

  timeString = numdays.toString().padStart(1, '0') + ':' + 
      numhours.toString().padStart(2, '0') + ':' + 
      numminutes.toString().padStart(2, '0') + ':' + 
      numseconds.toFixed().toString().padStart(2, '0');

  res.json({
    hostname: hostname,
    date: nDate,
    up: timeString
  });
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
  console.log('Press CTRL + C to quit');
})