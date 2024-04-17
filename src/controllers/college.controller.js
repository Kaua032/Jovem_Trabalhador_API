import College from "../models/College.js";

export const CreateCollegeController = async (req, res) => {
  const { name, city } = req.body;

  try {
    if (!name || !city) {
      res.send("Preencha todos os campos");
    }
    const if_college_exists = await College.findOne({
      name: name.toLowerCase(),
      city: city.toLowerCase(),
    });

    if (if_college_exists) {
      return res.status(404).send({
        message:
          "Desculpe, já existe uma instituição com esse nome nessa cidade",
      });
    }

    const college = new College({
      name: name.toLowerCase(),
      city: city.toLowerCase(),
    });

    await college.save();

    res.send({ message: "Instituição criada com sucesso!" });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
