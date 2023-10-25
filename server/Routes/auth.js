const express = require("express");
const User = require("../Models/user");
const router = express();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

router.use(express.json());

const JWT_SECRET = "THIS IS A SECRET.";

router.post("/signup", async (req, res) => {
  let success = false;
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
    let user = await User.findOne({ email: email });
    if (user) {
      return res.status(400).json({ success, err: "User already exists." });
    } else {
      const secPass = await bcrypt.hash(password, 10);
      await User.create({ ...newUser, password: secPass });
      const data = { email: newUser.email };

      const authToken = jwt.sign(data, JWT_SECRET);
      success = true;
      res.status(200).json({ success, authToken });
    }
  } catch (err) {
    console.log(err);
    res.status(401).json({ success });
  }
});

router.post("/login", async (req, res) => {
  let success = false;
  const { email, password } = req.body;

  const neededUser = await User.findOne({ email });
  try {
    if (!neededUser) {
      return res
        .status(400)
        .json({ success, err: "email or password is incorrect" });
    } else {
      const compare = await bcrypt.compare(password, neededUser.password);
      if (!compare) {
        return res
          .status(400)
          .json({ success, err: "Try to login with correct credentials." });
      }

      const data = { email: email };
      const authToken = jwt.sign(data, JWT_SECRET);
      success = true;
      return res.status(200).json({ success, authToken });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ success });
  }
});

module.exports = router;
