var AWS = require("aws-sdk");
const constants = require("../constants");
AWS.config.update({
  region: constants.AWS_CONFIG_DETAILS.region,
  accessKeyId: constants.AWS_CONFIG_DETAILS.accessKeyId,
  secretAccessKey: constants.AWS_CONFIG_DETAILS.secretAccessKey,
  endpoint: constants.AWS_CONFIG_DETAILS.endpoint,
});

const dbConfig = {};

const docClient = new AWS.DynamoDB.DocumentClient();

dbConfig.dbClient = docClient;

module.exports = dbConfig;
