const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(bodyParser.json());
app.use(express.static("public"));

app.post("/submit", (req, res) => {
  const { feedback1, feedback2 } = req.body || {};
  if (!feedback1 || !feedback2) {
    return res.status(400).json({ message: "Both fields required." });
  }
  const entry = `${new Date().toISOString()}\n${feedback1}\n${feedback2}\n---\n`;
  fs.appendFileSync(path.join(__dirname, "feedback.txt"), entry);
  res.json({ message: "Thanks for your feedback!" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));