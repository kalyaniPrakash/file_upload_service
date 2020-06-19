const AWS = require("aws-sdk");
var express = require("express");
var cors = require("cors");

//Local Dynamo DB config
AWS.config.update({
  region: constants.AWS_CONFIG_DETAILS.region,
  accessKeyId: constants.AWS_CONFIG_DETAILS.accessKeyId,
  secretAccessKey: constants.AWS_CONFIG_DETAILS.secretAccessKey,
  endpoint: constants.AWS_CONFIG_DETAILS.endpoint,
});
const docClient = new AWS.DynamoDB.DocumentClient();

//To run api locally
var app = express();
app.use(cors());
app.listen(5000, () => {});

app.post("/api/v1/updatePolicyReadFlag", (req, res, next) => {
  updatePolicyReadFlag(existingPolicyNumber);
});

updatePolicyReadFlag = async (existingPolicyNumber) => {
  //use docClient
  let params = {
    TableName: tableName,
    Key: {
      ExistingPolicyNumber: existingPolicyNumber,
    },
    UpdateExpression: "set messageRead = :val1",
    ExpressionAttributeValues: {
      ":val1": true,
    },
    ReturnValues: "MESSAGE_READ_FLAG_UPDATED_SUCCESSFULLY",
  };
  docClient.update();
};
