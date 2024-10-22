import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect("mongodb+srv://arnobhasanice:vZT8KswPZsNJkjoJ@bdrst.c1m9h.mongodb.net/?retryWrites=true&w=majority&appName=BDrst", {
      useNewUrlParser: true, // Optional but recommended
      useUnifiedTopology: true, // Optional but recommended
    })
    .then(() => {
      console.log("Connected to local MongoDB database!");
    })
    .catch((err) => {
      console.log(`Some error occurred while connecting to the local database: ${err}`);
    });
};
