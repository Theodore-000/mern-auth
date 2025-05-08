import mongoose from "mongoose";

const connectToMongoDB = async () => {
  const MONGODB_URI = process.env.MONGODB_URI;
  try {
    const connect = await mongoose.connect(MONGODB_URI);
    console.log(`Connected to MongoDB: ${connect.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
  await mongoose.connect(MONGODB_URI);
};

export default connectToMongoDB;
