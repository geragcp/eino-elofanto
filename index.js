const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const dateStart = Date.now();



app.get('/', (req, res) => {
  const nDate = new Date().toLocaleString('en-US', {
      timeZone: 'America/Denver'
      });

  dateObj = new Date(Date.now() - dateStart);
  hours = dateObj.getUTCHours();
  minutes = dateObj.getUTCMinutes();
  seconds = dateObj.getSeconds();
  
  timeString = hours.toString().padStart(2, '0') + ':' + 
      minutes.toString().padStart(2, '0') + ':' + 
      seconds.toString().padStart(2, '0');

  res.json({
    date: nDate,
    up_sec: `${(Date.now() - dateStart) / 1000} sec.`,
    up_hms: timeString
  });
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
  console.log('Press CTRL + C to quit');
})