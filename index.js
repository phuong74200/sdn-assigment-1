const express = require('express')
const app = express()
const bodyParser = require('body-parser');

const nationRouter = require('./nationRouter');
const playerRouter = require('./playerRouter');

// middlewares
app.use(bodyParser.json());

// routes
app.use('/nations', nationRouter);
app.use('/players', playerRouter);

const PORT = 5000;

app.listen(PORT, () => {
  console.log('listening on port http://localhost:' + PORT)
})