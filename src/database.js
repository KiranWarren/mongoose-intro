// Import mongoose (an ODM - object-document mapper)
const mongoose = require("mongoose");

// Connect OR create & connect to a database
async function databaseConnect() {
  try {
    // DB connection can take some time, especially if the DB is in the cloud
    await mongoose.connect("mongodb://127.0.0.1:27017/PetDB");
    console.log("Database connected.");
  } catch (error) {
    console.error(`database connection failed: ${JSON.stringify(error)}`);
  }
}

module.exports = {
  databaseConnect,
};
