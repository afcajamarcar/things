import mongoose from 'mongoose';

mongoose.set('useCreateIndex', true);

const Schema = mongoose.Schema;

const thingSchema = new Schema({
  _id: { type: Number },
  name: { type: String, required: true },
});

export const Thing = mongoose.model('Thing', thingSchema, 'Thing');
export const Things = mongoose.model('Thing', thingSchema);