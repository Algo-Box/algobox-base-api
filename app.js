const express = require('express');
const { PORT } = require('./util');
const { connect } = require('./db');
const cors = require('cors');

// Initialize express App
const app = express();

// Use Default CORS middleware
app.use(cors());

// JSON Body Parser Middleware
app.use(express.json());

/**
 * Main function used to start the Aplication
 */
async function main() {
  // const AllowedOrigins = ['http://localhost:4000'];

  // // CORS middleware
  // app.use(cors({
  //   origin: (origin, callback) => {
  //     if(!origin) return callback(null, true);
  //     if(AllowedOrigins.indexOf(origin)) {
  //       return callback(new Error('CORS Blocked'), false);
  //     }
  //     return callback(null, true);
  //   }
  // }));

  // Create Connection to DB
  await connect();

  // API routes
  app.use('/api', require('./api/router'));

  app.listen(PORT, () => {
    console.log(`Listening to port: ${PORT}`);
  });
}

main();