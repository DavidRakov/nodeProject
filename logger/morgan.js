const morgan = require("morgan");
const express = require("express");
const app = express();

const Morgan = () => {
  return app.use(morgan("tiny"));
};

// לייבא את אספרס ולהפעיל אותו
// ליצור מידללוור כמו בקובץ הכניסה שכל בקשה תיורט ותפעיל את מורגן
// לייצא את מורגן מהקובץ

module.exports = Morgan;
