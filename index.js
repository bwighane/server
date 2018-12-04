const express = require("express");
const cors = require("cors");
const app = express();
const requestIp = require('request-ip')

const port = 11000;
app.use(cors());
app.get("/", (req, res) => {
  const clientIp = requestIp.getClientIp(req).split(":");
  console.log(requestIp)
  res.json({ ip: clientIp[clientIp.length - 1] });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
