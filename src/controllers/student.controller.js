import Student from "../models/Student.js";
import College from "../models/College.js";
import Party from "../models/Party.js";
import Course from "../models/Course.js";
import General from "../models/General.js";

export const CreateStudentController = async (req, res) => {
  const students = req.body;

  try {
    for (let i = 0; i < students.length; i++) {
      const {
        name,
        phone,
        responsible_name,
        born_date,
        registration,
        name_college,
        city_college,
        time_party,
        grade_party,
        name_course,
      } = students[i];

      const student = new Student({
        name: name.toLowerCase(),
        phone: phone.toLowerCase(),
        responsible_name: responsible_name.toLowerCase(),
        born_date,
        registration,
      });

      await student.save();

      const id_student = student._id;
      let id_college = {};
      let id_party = {};
      let id_course = {};

      if (name_college && city_college) {
        const if_exists_college = await College.findOne({
          name: name_college.toLowerCase(),
          city: city_college.toLowerCase(),
        });
        if (!if_exists_college) {
          return res
            .status(200)
            .send({ message: "Esta escola não existe no banco de dados." });
        }

        id_college = if_exists_college._id;
      }

      if (time_party && grade_party) {
        const if_exists_party = await Party.findOne({
          time: time_party.toLowerCase(),
          grade: grade_party.toLowerCase(),
        });
        if (!if_exists_party) {
          return res
            .status(200)
            .send({ message: "Esta turma não existe no banco de dados." });
        }

        id_party = if_exists_party._id;
      }

      if (name_course) {
        const if_exists_course = await Course.findOne({
          name: name_course.toLowerCase(),
        });

        if (!if_exists_course) {
          return res
            .status(200)
            .send({ message: "Este curso não existe no banco de dados." });
        }

        id_course = if_exists_course._id;
      }

      const general = new General({
        id_student,
        id_course,
        id_party,
        id_college,
        student_registration: registration,
      });

      await general.save();
    }

    res.send({ message: "Estudantes registrados com sucesso" });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
