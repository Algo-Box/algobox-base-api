export function config() {
  if(process.env.NODE_ENV !== "PROD") {
    require('dotenv').config();
  }
}