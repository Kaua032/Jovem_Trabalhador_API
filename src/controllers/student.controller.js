import Student from "../models/Student.js";
import College from "../models/College.js";
import Party from "../models/Party.js";
import Course from "../models/Course.js";
import General from "../models/General.js";

export const CreateStudentController = async (req, res) => {
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
  } = req.body;

  try {
    if (!name || !phone || !responsible_name || !born_date || !registration) {
      res.send("Preencha todos os campos");
    }

    const student = new Student({
      name,
      phone,
      responsible_name,
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
      if (if_exists_college == null) {
        const college = new College({
          name: name_college.toLowerCase(),
          city: city_college.toLowerCase(),
        });
        await college.save();

        id_college = college._id;
      } else {
        id_college = if_exists_college._id;
      }
    }

    if (time_party && grade_party) {
      const if_exists_party = await Party.findOne({
        time: time_party.toLowerCase(),
        grade: grade_party.toLowerCase(),
      });
      if (if_exists_party == null) {
        const party = new Party({
          time: time_party.toLowerCase(),
          grade: grade_party.toLowerCase(),
        });
        await party.save();

        id_party = party._id;
      } else {
        id_party = if_exists_party._id;
      }
    }

    if (name_course) {
      const if_exists_course = await Course.findOne({
        name: name_course.toLowerCase(),
      });
      if (if_exists_course == null) {
        const course = new Course({
          name: name_course.toLowerCase(),
        });
        await course.save();

        id_course = course._id;
      } else {
        id_course = if_exists_course._id;
      }
    }

    const general = new General({
      id_student,
      id_course,
      id_party,
      id_college,
      student_registration: registration
    });

    await general.save();

    res.send({message: "Estudante Registrado com sucesso"});
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
