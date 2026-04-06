
const mongoose = require("mongoose");


const MONGO_URI =
  process.env.MONGODB_URI || /*"mongodb+srv://cesaria:cesariaboatbooking@boatbooking.kalfyvv.mongodb.net/"*/
"mongodb+srv://csrcolazzo_db_user:UqbkND4sC8dxYSaW@blablaboatcommunity.nfnrzwl.mongodb.net/?appName=blablaboatcommunity"
/*const MONGO_URI = process.env.MONGODB_URI;

if (!MONGO_URI) {
  throw new Error("MONGODB_URI is not defined");
}*/

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    const dbName = x.connections[0].name;
    console.log(`Connected to Mongo! Database name: "${dbName}"`);
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });




