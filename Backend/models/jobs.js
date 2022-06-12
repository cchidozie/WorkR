const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobsSchema = new Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    image: { type: String, required: true },
    image: { type: String },
    rating: { type: Number, required: true },
    category: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Job = mongoose.model('Job', jobsSchema);

module.exports = Job;
