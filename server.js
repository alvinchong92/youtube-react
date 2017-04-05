const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, '/')));
app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, '/index.html'));
});


app.listen(process.env.PORT || 8080);
