const express = require('express');
const cors = require('cors')
const app = express();

const availLenderRouter = require('./services/availLender/availLenderRouter');

app.use(cors());
app.use(express.json());
app.use('/api/availLender', availLenderRouter);

module.exports = {
  handler:app,
};
