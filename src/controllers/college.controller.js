import College from "../models/College.js";

export const CreateCollegeController = async (req, res) => {
  const colleges = req.body;

  try {
    for (let i = 0; i < colleges.length; i++) {
      const { name, uf, city } = colleges[i];

      if (name && uf && city) {
        const if_exists_college = await College.findOne({
          name: name.toLowerCase(),
          uf: uf.toUpperCase(),
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
      const { name, uf, city } = colleges[i];

      const college = new College({
        name: name.toLowerCase(),
        uf: uf.toUpperCase(),
        city: city.toLowerCase(),
      });

      await college.save();
    }

    return res
      .status(201)
      .send({ message: "Instituições criadas com sucesso!" });
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

export const UpdateCollegeController = async (req, res) => {
  const { id } = req.params;

  const { name_college, uf_college, city_college } = req.body;

  try {
    const updateFields = {};
    if (name_college) updateFields.name = name_college.toLowerCase();
    if (uf_college) updateFields.uf = uf_college.toUpperCase();
    if (city_college) updateFields.city = city_college.toLowerCase();

    console.log(id);
    console.log(updateFields);
    const college = await College.findByIdAndUpdate(id, updateFields);

    if (!college) {
      return res
        .status(200)
        .send({ message: "Esta escola não existe no banco de dados." });
    }

    return res
      .status(201)
      .send({ message: "Instituição atualizada com sucesso." });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
