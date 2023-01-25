const mongoose = require("mongoose");


const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ExpertSchema = new Schema({
  id: ObjectId,
  name: String,
  formation: String,
  skils: String,
  adrress: String,
  contact: String
});

const ExpertModel = mongoose.model('experts', ExpertSchema);

module.exports = ExpertModel;
