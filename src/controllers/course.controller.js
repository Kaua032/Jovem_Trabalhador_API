import Course from "../models/Course.js";

export const CreateCourseController = async (req, res) => {
  const { name } = req.body;

  try {
    if (!name) {
      res.send("Preencha todos os campos");
    }

    const if_course_exists = await Course.findOne({ name: name.toLowerCase() });

    if (if_course_exists) {
      return res.status(404).send({
        message: "Desculpe, mas já existe um curso com este nome",
      });
    }

    const course = new Course({
      name: name.toLowerCase(),
    });

    await course.save();

    res.send({ message: "Curso adicionado com sucesso!" });
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

export const DeleteCourseController = async (req, res) => {
  const { name } = req.body;

  try {
    const course = await Course.findOneAndDelete({ name });

    if (!course) {
      return res
        .status(404)
        .send({ message: "Esse curso não existe no banco de dados." });
    }

    return res.status(500).send({ message: "Curso deletado com sucesso." });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
