const mongoose = require('mongoose');
require('dotenv').config();

const fakeDb = require('./FakeDb');

mongoose.connect(process.env.DB_URI, {}, async con => {
  console.log('Populating...');
  await fakeDb.populate();
  await mongoose.connection.close();
  console.log('Finished Populating...');
});
