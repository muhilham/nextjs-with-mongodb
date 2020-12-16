import { ObjectID } from 'mongodb'
import { connectToDatabase } from "../../../util/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();
  const {
    query: { pid },
  } = req

  // console.log(pid)

  const movies = await db
    .collection("movies")
    .find({_id: new ObjectID(pid)})
    .sort({ metacritic: -1 })
    .limit(20)
    .toArray();

  res.json(movies);
};