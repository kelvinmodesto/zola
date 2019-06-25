import mongoose from 'mongoose';

const schema = new mongoose.Schema({

});

const quote = mongoose.model('quote', schema);

export default quote;
