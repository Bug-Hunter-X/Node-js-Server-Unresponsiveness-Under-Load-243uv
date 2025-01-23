const express = require('express');
const app = express();
app.get('/', (req, res) => {
  setTimeout(() => {
    res.send('Hello, world!');
  }, 5000); 
});
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});