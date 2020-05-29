import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.Promise = global.Promise;
    mongoose.set('useUnifiedTopology', true);
    mongoose.set('useNewUrlParser', true);
    
    await mongoose.connect(process.env.MongoURI!);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}