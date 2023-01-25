const mongoose = require("mongoose");


const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const SponsorSchema = new Schema({
  id: ObjectId,
  name: String,
  company: String,
  adrress: String,
  contact: String
});

const SponsorModel = mongoose.model('sponsors', SponsorSchema);

module.exports = SponsorModel;
