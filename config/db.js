const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/";

function dbConnect(dbName) {
  return mongoose.connect(url + dbName, {
    useNewUrlParser: true,
  });
}

function dbDisconnect(dbName) {
  return mongoose.connection.close();
}

module.exports = { dbConnect, dbDisconnect };
