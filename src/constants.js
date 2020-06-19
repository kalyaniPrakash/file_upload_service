require("dotenv").config();
module.exports.AWS_CONFIG_DETAILS = {
  accessKeyId: process.env.ACCESSKEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  region: process.env.REGION,
  endpoint: process.env.ENDPOINT,
};
module.exports.TABLE_NAME = "Policy_Renewal_Details";
module.exports.FILE_DETAILS = {
  fileName: "./testrenewal.json",
  encoding: "utf-8",
};
