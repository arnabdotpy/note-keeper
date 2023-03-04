import connectMongo from "../../../mongo/connect";
import Note from "../../../mongo/model";

export default async function getNote(req, res) {
  await connectMongo();
  Note.find({}).then((notes) => {
    res.status(200).json(notes);
  })
}
