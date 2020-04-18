const { MongoURI } = require('../util/dotenv');
const mongoose = require('mongoose');

module.exports = async () => {
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