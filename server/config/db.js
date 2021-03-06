const mongoose = require('mongoose');
const connectDB = async () => {
  const c = await mongoose.connect(process.env.MONGO_URI);

  console.log(`MongoDB Connected: ${c.connection.host}`.cyan.underline.bold);
}

module.exports = connectDB;