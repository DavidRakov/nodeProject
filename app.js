const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./router/router");
const Morgan = require("./logger/morgan");
const { handleError } = require("./handling-errors/handleError");

app.use(Morgan());
app.use(cors());
app.use(express.json());
app.use(express.static("./public"));
app.use("/api", router);
app.use((err, req, res, next) => handleError(res, 500, err));

const PORT = 6554;
app.listen(PORT, (error) => {
  if (error) return console.log("ERROR");
  console.log(`Server listen on: http://localhost:${PORT}`);
});
