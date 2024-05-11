import College from "../models/College.js";

export const CreateCollegeController = async (req, res) => {
  const colleges = req.body;

  try {
    for (let i = 0; i < colleges.length; i++) {
      const { name, city } = colleges[i];

      if (name && city) {
        const if_exists_college = await College.findOne({
          name: name.toLowerCase(),
          city: city.toLowerCase(),
        });
        if (if_exists_college) {
          return res.status(200).send({
            message: `A ${i + 1}º instiuição da lista local já existe.`,
          });
        }
      }
    }

    for (let i = 0; i < colleges.length; i++) {
      const { name, city } = colleges[i];

      const college = new College({
        name: name.toLowerCase(),
        city: city.toLowerCase(),
      });

      await college.save();
    }

    return res.send({ message: "Instituições criadas com sucesso!" });
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
