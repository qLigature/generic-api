const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');

const somethingRouter = require('./routes/something');

const PORT = process.env.PORT || 5000;
const { DB_CONNECTION } = process.env;

// Middleware
app.use(cors());
app.options('*', cors());
app.use(express.json());

if (process.env.NODE_ENV === 'development') {
  const morgan = require('morgan');
  app.use(morgan('dev'));
}

mongoose.connect(DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});  

app.get('/', (req, res) => {
  res.send({ message: 'Hello world!' });
});

app.use('/something', somethingRouter);

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
