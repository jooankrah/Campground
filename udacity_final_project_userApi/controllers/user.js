const User = require("../models/user");

//create user controller

const createUser = async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    const token = await user.generateAuthToken();
    res.send({
      status: 201,
      message: "Account created successfully",
      user,
      token,
    });
  } catch (e) {
    res.status(400).send(e);
  }
};

//login controller

const login = async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateAuthToken();
    res.send({
      status: 201,
      message: "Login Successful",
      user,
      token,
    });
  } catch (e) {
    res.status(400).send(e);
  }
};

//logout controller
const logout = async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });
    await req.user.save();

    res.send({
      message: "User Logged out successfully",
      status: 200,
    });
  } catch (e) {
    res.status(400).send(e);
  }
};

module.exports = {
  createUser,
  login,
  logout,
};
