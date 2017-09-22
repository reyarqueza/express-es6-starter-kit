import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello!');
});

app.listen(3000, () => {
  console.log('Open your browser at http://localhost:3000!');
});
