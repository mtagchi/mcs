if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const config = {
  host: process.env.LOCALHOST,
  user: process.env.MONGO_USER,
  password: process.env.MONGO_PASSWORD,
  port: process.env.MONGO_PORT
};

module.exports = { config };
