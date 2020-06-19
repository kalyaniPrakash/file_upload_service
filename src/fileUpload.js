const fs = require("fs");
const dbConfig = require("./database/DynamoDBConfig");
//const AWS = require("aws-sdk");
const constants = require("./constants");
// AWS.config.update({
//   region: constants.AWS_CONFIG_DETAILS.region,
//   accessKeyId: constants.AWS_CONFIG_DETAILS.accessKeyId,
//   secretAccessKey: constants.AWS_CONFIG_DETAILS.secretAccessKey,
//   endpoint: constants.AWS_CONFIG_DETAILS.endpoint,
// });
//const docClient = new AWS.DynamoDB.DocumentClient();
const contents = fs.readFileSync(
  constants.FILE_DETAILS.fileName,
  constants.FILE_DETAILS.encoding
);
const fileUpload = {};
fileUpload.processData = () => {
  const policiesData = JSON.parse(contents);
  if (policiesData && policiesData.length) {
    console.log(policiesData);
    policiesData.forEach((policy) => {
      console.log(policy);
      dbConfig.dbClient.put(
        { TableName: constants.TABLE_NAME, Item: policy },
        (err, res) => {
          if (err) console.log(err);
        }
      );
    });
  }
};

fileUpload.processData();
module.exports = fileUpload;
