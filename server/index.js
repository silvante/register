const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
const Users = require("./routes/user");

mongoose
  .connect("mongodb://localhost/register")
  .then(() => {
    console.log("connected to mongodb...");
  })
  .catch(() => {
    console.log("filed while connecting to mongodb...");
  });

const port = process.env.PORT || 2008;
app.listen(port, () => {
  console.log(`started with ${port} port...`);
});

app.get("/", (req, res) => {
  res.send("app use");
});

app.get("/users", async (req, res) => {
  const users = await Users.find().sort({ name: 1 });
  res.send(users);
});

// app.use("/users", users);
app.post("/users", (req, res) => {
  Users.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.jsonF(err));
});
