import Course from "../models/Course.js";

export const CreateCourseController = async (req, res) => {
  const courses = req.body;

  try {
    for (let i = 0; i < courses.length; i++) {
      const { name } = courses[i];

      if (name) {
        const if_course_exists = await Course.findOne({
          name: name.toLowerCase(),
        });
        if (if_course_exists) {
          return res
            .status(200)
            .send({ message: `O ${i + 1}º curso da lista local já existe.` });
        }
      }
    }

    for (let i = 0; i < courses.length; i++) {
      const { name } = courses[i];

      const course = new Course({
        name: name.toLowerCase(),
      });

      await course.save();
    }

    return res.status(201).send({ message: "Cursos adicionados com sucesso!" });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const GetAllCoursesController = async (req, res) => {
  try {
    const courses = await Course.find();

    res.status(200).json({ courses });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
