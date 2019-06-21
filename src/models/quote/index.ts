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

const quote = mongoose.model('Quote', schema);

export default quote;
