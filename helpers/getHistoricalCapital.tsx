import connectToMongo from "./connectToMongo";

const getHistoricalCapital = async () => {
  const db = await connectToMongo();
  const historicalCapital = await db
    .collection("historicalCapital")
    .find({})
    .toArray();
  const capitalArray: number[] = [];
  historicalCapital.forEach((capital) => capitalArray.push(capital.capital));

  return capitalArray;
};

export default getHistoricalCapital;
