import Party from "../models/Party.js";

export const CreatePartyController = async (req, res) => {
  const { grade, time } = req.body;

  try {
    if ((!grade, !time)) {
      res.send("Preencha todos os campos");
    }

    const if_party_exists = await Party.findOne({
      grade: grade.toLowerCase(),
      time: time.toLowerCase(),
    });

    if (if_party_exists) {
      return res.status(404).send({
        message: "Desculpe, turma existente.",
      });
    }

    const party = new Party({
      grade: grade.toLowerCase(),
      time: time.toLowerCase(),
    });

    await party.save();

    res.send({ message: "Turma adicionada com sucesso!" });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
