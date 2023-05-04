const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3030;

app.use(cors({
  origin: '*'
}));
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));

app.use(express.static('public'));