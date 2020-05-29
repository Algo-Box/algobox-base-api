export function Config() {
  if(process.env.NODE_ENV !== "PROD") {
    require('dotenv').config();
  }
}