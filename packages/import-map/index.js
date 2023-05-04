const express = require('express');
const app = express();
const PORT = 3030;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));

app.use(express.static('public'));