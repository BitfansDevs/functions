import * as Mongoose from "mongoose";

let database: Mongoose.Connection;

export const connect = () => {

    if (database) {
        return;
    }
    
    Mongoose.connect(process.env.COSMOSDB_PRIMARY_CONNECTION_STRING);
    
    database = Mongoose.connection;

    database.once("open", async () => {
        console.log("Connected to database");
    });
      
    database.on("error", () => {
        console.log("Error connecting to database");
    });

};

export const disconnect = () => {
    
    if (!database) {
      return;
    }
    
    Mongoose.disconnect();

    database.once("close", async () => {
        console.log("Diconnected  to database");
    });

};
