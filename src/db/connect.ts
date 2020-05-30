import mongoose from 'mongoose';
import config from '../config';

/**
 * connection to database
 */
export async function connect() {
  mongoose.Promise = global.Promise;
  mongoose.set('useUnifiedTopology', true);
  mongoose.set('useNewUrlParser', true);

  await mongoose.connect(config.ENV.MongoURI);

  console.log(`Connected to ${config.ENV.MongoURI}`);
}
