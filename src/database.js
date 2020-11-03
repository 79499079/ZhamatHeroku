const mongoose = require('mongoose');

const {ZHAMAT_HOST} = process.env;

const MONGODB_URI = `mongodb+srv://${
  ZHAMAT_HOST ? ZHAMAT_HOST : "localhost"
}`;

mongoose.connect(MONGODB_URI, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})
  .then(db=> console.log('DB está concectada'))
  .catch((err) => console.error(err));