const crypto = require("crypto");

exports.hashString = (str) => {
  return crypto.createHash("md5").update(str).digest("hex");
};
