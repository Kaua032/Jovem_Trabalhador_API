import mongoose from "mongoose";

const PartySchema = new mongoose.Schema({
  grade: {
    type: String,
    require: true,
  },
  time: {
    type: String,
    enum: ["Matutino", "Vespertino"],
    require: true,
  },
});

const Party = mongoose.model("Party", PartySchema);

export default Party;
