const express = require("express");
const app = express();

const port = 5503;

const routing = require("./routes/routing.js");
app.use("/", routing);

app.use("/images", express.static("assets"));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
