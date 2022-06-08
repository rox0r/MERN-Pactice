const mongoose = require("mongoose");

const server = "localhost:27017/";

function dbConnect(dbName) {
  return mongoose.connect("mongodb://" + server + dbName, {
    useNewUrlParser: true,
  });
}

function dbDisconnect(dbName) {
  return mongoose.connection.close();
}

module.exports = { dbConnect, dbDisconnect };
