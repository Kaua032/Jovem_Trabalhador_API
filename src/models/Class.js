import mongoose, { mongo } from "mongoose";

const ClassSchema = new mongoose.Schema({
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

const Class = mongoose.model("Class", ClassSchema);

export default Class;
