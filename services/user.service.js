const userModel = require("../models/user.model");
const createUser = async (body) => {
  const user = await userModel.create(body);
  await user.save();
  return user;
};

const getAllUser = async () => {
  const users = await userModel.find({});
  return users;
};

const getUserById = async (userId) => {
  const user = await userModel.findById(userId);
  return user;
};

const updateUserById = async (userId , body) => {
    const user = await userModel.updateOne({_id : userId}, {...body});
    return user;
  };

const deleteUser = async (userId) => {
    const user = await userModel.deleteOne({_id : userId});
    return user;
};

module.exports = {
  createUser,
  getAllUser,
  getUserById,
  updateUserById,
  deleteUser
};
