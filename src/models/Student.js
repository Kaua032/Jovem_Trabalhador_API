import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
  responsible_name: {
    type: String,
    require: true,
  },
  born_date: {
    type: Date,
    require: true,
  },
  registration: {
    type: Date,
  },
  name_college: {
    type: String,
  },
  city_college: {
    type: String,
  },
  time_party: {
    type: String,
    enum: ["matutino", "vespertino"],
  },
  grade_party: {
    type: String,
  },
  courses: {
    type: Array,
  },
});

const Student = mongoose.model("Student", StudentSchema);

export default Student;
