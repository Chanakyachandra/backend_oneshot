const express = require("express");
const app = express();
// const path = require("path");
const cors = require("cors");

// Database connection
const mongoose = require("mongoose");
const College = require("./models/colleges");
const Student = require("./models/students");
const uri =
  "mongodb+srv://chanakya:harrypottter159@collegedashboard.hxytu.mongodb.net/collegeDashboard?retryWrites=true&w=majority";

mongoose
  .connect(uri, { useNewUrlParser: true })
  .then(() => {
    console.log("Connection established");
  })
  .catch((error) => {
    console.log("Connection error", error);
  });

app.use(cors());
// // in case u need views
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// Paths
app.get("/colleges", async (req, res) => {
  const colleges = await College.find({});
  res.json(colleges);
});

app.get("/colleges/getByLocation/:location", async (req, res) => {
  const { location } = req.params;
  const collegesByLocation = await College.find({
    $or: [
      { city: { $regex: location, $options: "i" } },
      { state: { $regex: location, $options: "i" } },
      { country: { $regex: location, $options: "i" } },
    ],
  });
  res.json(collegesByLocation);
});

app.get("/colleges/getByCourse/:courseName", async (req, res) => {
  const { courseName } = req.params;
  const collegesByCourseName = await College.find({ courses: courseName });

  res.json(collegesByCourseName);
});

app.get("/college/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const foundCollege = await College.findById(id);
    res.json(foundCollege);
  } catch (error) {
    error.message = "Invalid Id, Please enter a valid Id";
    res.send(error);
  }
});

app.get("/students/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const students = await Student.find({ collegeId: id });
    res.json(students);
  } catch (error) {
    error.message = "Invalid Id, please enter a valid Id";
    res.send(error);
  }
});

app.get("/students", async (req, res) => {
  await Student.find({})
    .populate("collegeId")
    .exec(function (err, students) {
      if (err) return console.log(err);
      res.json(students);
    });
});

app.listen(8000, () => {
  console.log("Server is listening to port 8000");
});