import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  insertedAt: {
    required: true,
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
  type: {
    required: true,
    type: String,
  },
});

const symbol = mongoose.model('Symbol', schema);

export default symbol;
