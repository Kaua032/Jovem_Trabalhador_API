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

export const GetAllCollegesController = async (req, res) => {
  try {
    const colleges = await College.find();

    res.status(200).json({ colleges });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const DeleteCollegeController = async (req, res) => {
  const { name, city } = req.body;

  try {
    const college = await College.findOneAndDelete({name, city})
    if (!college){
      return res.status(404).send({message: "Esta instituição não existe."})
    }

    return res.status(500).send({message: "Instituição deletada com sucesso."})
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
