const UserModel = require("../models/UserSchema");
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

exports.registertion = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  const user = await UserModel.findOne({ username });
  user && res.json({ msg: "user already existed" });

  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = new UserModel({ username, email, password: hashedPassword });

  await newUser.save();
  res.status(201).json({ data: newUser });
});

exports.login = asyncHandler(async (req, res) => {
	const { username, password } = req.body;

	const user = await UserModel.findOne({ username });
	!user && res.json({ msg: "user is not in correct" });

	const isPasswordVaild = await bcrypt.compare(password, user.password);
	!isPasswordVaild && res.json({ msg: "your username or password is wrong" });

	const token = jwt.sign({ id: user._id }, process.env.SECERT);
	return res.json({ token, userID: user._id });
});
