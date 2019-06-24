import mongoose from 'mongoose';

const schema = new mongoose.Schema({

});

const quote = mongoose.model('Quote', schema);

export default quote;
