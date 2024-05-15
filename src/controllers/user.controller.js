import "dotenv/config";
import User from "../models/User.js";

export const CreateUserController = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    if (!name || !email || !password) {
      res.send("Preencha todos os campos");
    }

    const user = new User({
      name,
      email,
      password,
    });

    await user.save();

    res.send(user);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const findUserByIdController = async (req, res) => {
  const userId = req.userId;

  try {
    const userFindid = await User.findById(userId);

    const user = {
      name: userFindid.name,
      email: userFindid.email,
    };

    return res.status(200).send({ user });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
