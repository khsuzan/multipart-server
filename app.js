const express = require("express");
const multer = require("multer");

const app = express();
app.use(express.json());

const multerStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname ? file.originalname : "noname");
  },
});

const upload = multer({ storage: multerStorage });

app.get("/", (req, res) => {
  res.status(200).send("Hi, I am lovely server");
});


app.post("/upload/single", upload.single("file"), function (req, res) {
  res.status(200).json({ msg: req.file });
});


app.listen(5000);
