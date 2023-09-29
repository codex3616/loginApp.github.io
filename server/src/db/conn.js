import mongoose from "mongoose";
// import { MongoMemoryServer } from "mongodb-memory-server";

//  ######## MY WAYY...
mongoose
  .connect("mongodb://127.0.0.1:27017/RegisterUser", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection created...");
  })
  .catch((err) => {
    console.log("disconnected", err);
  });

//   ############ NOW WITH MONGODB  MEMORY SERVER ##########3

// const connect = async () => {
//   const mongod = await MongoMemoryServer.create();
//   const getUri = await mongod.getUri();
//   mongoose.set("strictQuery", true);

//   const db = await mongoose.connect(getUri);
//   console.log("Database Connected");
//   return db;
// };

// export default connect;
