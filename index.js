const express = require("express");
const cors = require("cors");
const app = express();
const requestIp = require('request-ip')

const port = 10000;
app.use(cors());
app.get("/", (req, res) => {
  const clientIp = requestIp.getClientIp(req);
  res.json({ ip: clientIp });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
