import mongoose from 'mongoose';

const schema = new mongoose.Schema({
});

const symbol = mongoose.model('symbol', schema);

export default symbol;
