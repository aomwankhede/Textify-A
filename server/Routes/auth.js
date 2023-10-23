const express = require("express");
const User = require("../Models/user");
const router = express();

router.use(express.json());

router.post("/signup", async (req, res) => {
  const { firstName, lastName, dob, gender, email, password, recoveryEmail } =
    req.body;
  const newUser = {
    firstName,
    lastName,
    dob,
    gender,
    email,
    password,
    recoveryEmail,
  };
  try {
    await User.create(newUser);
    console.log(newUser);
    res.status(200).send("User Created");
  } catch (err) {
    console.log(err);
    res.status(401).send(err.message);
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const neededUser = await User.find({ email, password });

  neededUser.length === 0
    ? res.status(401).send("User or password is incorrect")
    : res.status(200).send(neededUser);
});

module.exports = router;
