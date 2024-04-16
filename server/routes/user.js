const express = require("express");
const mongoose = require("mongoose");
const route = express.Router();

const usersSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 40,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 24,
  },
});

const Users = new mongoose.model("user", usersSchema);

// route.get("/", async (req, res) => {
//   const users = await Users.find().sort({ name: 1 });
//   res.send(users);
// });

// create method

// route.post("/", async (req, res) => {
//   if (!req.body.name) {
//     res.status(400).send(`"name" is required`);
//     return;
//   }
//   if (!req.body.email) {
//     res.status(400).send(`"email" is required`);
//     return;
//   }
//   if (!req.body.password) {
//     res.status(400).send(`"password" is required`);
//     return;
//   }
//   if (req.body.name.length < 4) {
//     res.status(400).send(`"name" should be minimum three letters`);
//     return;
//   }
//   if (req.body.password.length < 6) {
//     res.status(400).send(`"password" should be minimum six letters`);
//     return;
//   }
//   let user = new Users({
//     name: req.body.name,
//     email: req.body.email,
//     password: req.body.password,
//   });
//   user = await user.save();
//   res.status(201).send(user);
// });

module.exports = Users;
