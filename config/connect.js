/*globals  require, exports, process */

const mongoose = require('mongoose');

const connectionString = process.env.MONGODB_CONNECTION_STRING;

const initializeConnection = () => {
  mongoose.Promise = Promise;
  mongoose.connect(connectionString, { useNewUrlParser: true });
  mongoose.set('useCreateIndex', true);

  const db = mongoose.connection;
  db.on('error', error => {
    console.error(`There was an error connecting to the database: ${error}`);
  });
  db.once('open', () => {
    // eslint-disable-next-line
    console.log('Successfully connected to database.');
  });
};

module.exports = {
  initializeConnection,
};
