import mongoose from 'mongoose';

mongoose.set('useCreateIndex', true);

const Schema = mongoose.Schema;

const thingSchema = new Schema({
  _id: {type: String},
  name: String,
});

export const Thing = mongoose.model('Thing', thingSchema);