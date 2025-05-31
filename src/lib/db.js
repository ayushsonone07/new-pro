import { MongoClient } from 'mongodb';

const uri = "mongodb://localhost:27017/your_database_name"; // Replace with your connection string
const client = new MongoClient(uri);

export default async function connectToMongo() {
    try {
      await client.connect();
      console.log("Connected to MongoDB");
      // Perform database operations here
    } catch (err) {
      console.error("Error connecting to MongoDB:", err);
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  connectToMongo();