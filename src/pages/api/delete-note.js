import connectMongo from "../../../mongo/connect";
import Note from "../../../mongo/model";

export default async function addNote(req, res) {
  await connectMongo();

  var id = req.body.note_id;

  Note.deleteOne({ _id: `${id}` })
    .then(function () {
      res.send({Status: "Success"}); // Success
      res.redirect("/")
    })
    .catch(function (error) {
        console.log(error); // Failure
        res.send({Status: "Failure"}); // Success
    });
}
