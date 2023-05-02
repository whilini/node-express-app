const db = require("../../model");

const findAll = async (req, res, next) => {
  try {
    const users = await db.users.findAll();

    return res.json(users);
  } catch (err) {
    throw new Error(err);
  }
};

const findOne = async (req, res, next) => {
  try {
    const user = await db.users.findOne({
      where: { userId: req.query.userId },
    });

    return res.json(user);
  } catch (err) {
    throw new Error(err);
  }
};

const createUser = async (req, res, next) => {
  try {
    const user = await db.users.create(req.body);

    return res.json(user);
  } catch (err) {
    throw new Error(err);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const params = req.body;

    const user = await db.users.update(params, { where: { userId: userId } });
    const userInfo = await db.users.findOne({
      where: { userId: userId },
    });

    return res.json(userInfo);
  } catch (err) {
    throw new Error(err);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const user = await db.users.delete({ where: { userId: userId } });

    return res.json(user);
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  findAll,
  findOne,
  createUser,
  updateUser,
  deleteUser,
};
