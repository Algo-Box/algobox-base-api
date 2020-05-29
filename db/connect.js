const { MongoURI } = require('../util');
const mongoose = require('mongoose');

/**
 * Used to connect to DB
 */
async function connect() {
  try {
    // To remove Deprecation Warnings
    mongoose.Promise = global.Promise;
    mongoose.set('useUnifiedTopology', true);
    mongoose.set('useNewUrlParser', true);

    await mongoose.connect(MongoURI);
    console.log('Database Connected');
  } catch(e) {
    console.log(`error occured ${e}`);
    process.exit(1);
  }
}

module.exports = connect;