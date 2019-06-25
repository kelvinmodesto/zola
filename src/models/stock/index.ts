import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  description: {
    required: false,
    type: String,
  },
  insertedAt: {
    default: new Date(),
    type: Date,
  },
  name: {
    required: true,
    type: String,
  },
  symbol: {
    required: true,
    type: String,
  },
});

const stock = mongoose.model('stock', schema);

export default stock;
