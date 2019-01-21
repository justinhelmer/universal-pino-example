const express = require('express');
const app = express();

app.use(express.static(__dirname));

app.get('/test-client-logs', (req, res) => {
  res.sendFile(__dirname + '/test-client-logs.html');
});

app.get('/test-server-logs', (req, res) => {
  require('./src/index');
  res.sendStatus(200);
});

app.listen(3000);
