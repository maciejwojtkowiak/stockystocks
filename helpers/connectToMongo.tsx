import { MongoClient } from "mongodb";

const connectToMongo = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://maciejtest:ipT4zxXWbIF4sCqG@cluster0.vv1w4.mongodb.net/stockystocks?retryWrites=true&w=majority"
  );
  const db = client.db();
  return db;
};

export default connectToMongo;
