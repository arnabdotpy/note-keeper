import mongoose from "mongoose";

const connectMongo = async () => {
    await mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true})
    .then(() => console.log("Database Connected Successfully"))
    .catch((err) => console.log(err));
}

export default connectMongo;