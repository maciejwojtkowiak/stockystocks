import connectToMongo from "./connectToMongo";

const updateCapital = async (capital: number) => {
  const db = await connectToMongo();
  const historicalCapital = {
    capital,
  };
  const historicalCapitalCol = db.collection("historicalCapital");
  historicalCapitalCol.insertOne(historicalCapital);
};

export default updateCapital;
