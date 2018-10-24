"use strict";
const express = require("express");
const cors = require("cors");
const app = express();
const port = 7000;

// app.use(cors());
app.get("/", (req, res) =>
  res.json({
    name: "Bwigahne",
    surname: "Mwalwanda",
    middleName: "Clive"
  })
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
