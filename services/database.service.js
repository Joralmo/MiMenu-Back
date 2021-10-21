const mongoose = require("mongoose");

const connect = async () => {
  try {
    const { DB_HOST, DB_USER, DB_PASS, DB_NAME } = process.env;
    const mongoUri = `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}`;
    await mongoose.connect(mongoUri);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connect;
