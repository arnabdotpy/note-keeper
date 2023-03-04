import connectMongo from "../../../mongo/connect";
import Note from "../../../mongo/model";

export default async function addNote(req, res) {
  await connectMongo();

  var note = new Note({
    title: req.body.title,
    content: req.body.content,
  });
  await note.save();
  res.send("Added Successfully");
}
