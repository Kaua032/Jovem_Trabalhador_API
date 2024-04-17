import mongoose, { mongo } from "mongoose";

const GeneralSchema = mongoose.Schema({
    id_student: {
        type: Object,
    },
    id_course: {
        type: Object,
    },
    id_class: {
        type: Object,
    },
    id_college: {
        type: Object,
    }
})

const General = mongoose.model("General", GeneralSchema);

export default General;