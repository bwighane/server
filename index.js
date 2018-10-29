const express = require("express");
const cors = require("cors");
const app = express();
const port = 10000;

// app.use(cors());
app.get("/test-channel", (req, res) => res.json({ name: "cors" }));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
