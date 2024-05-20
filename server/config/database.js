import mongoose from "mongoose";

export const connectDB = async () => {
  const { connection } = await mongoose.connect(process.env.MONGO_URI);
  console.log(`MongoDB connected with ${connection.host}`);
};

// MONGO_URI = mongodb://127.0.0.1:27017/authencation

// username :- sharmasohini80
// password :- txVpB6XhM5c86Rfc
