const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, '/dist')));
app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, 'dist/index.html'));
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`LISTENING on Port ${port}`);
});
