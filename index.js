const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, ".eslintrc.json");
const fileContents = fs.readFileSync(filePath);
module.exports = JSON.parse(fileContents);
