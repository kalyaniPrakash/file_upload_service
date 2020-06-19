const dbConfig = require("../database/DynamoDBConfig");
const constants = require("../constants");

const userPolicies = {};

getUserPoliciesListFromDB = (email, dbCallback) => {
  let params = {
    TableName: constants.TABLE_NAME,
    FilterExpression: "#email = :email",
    ExpressionAttributeNames: {
      "#email": "Email",
    },
    ExpressionAttributeValues: {
      ":email": email,
    },
  };
  dbConfig.dbClient.scan(params, dbCallback);
};

getUserPoliciesListPromise = (email) => {
  return new Promise((resolve, reject) => {
    getUserPoliciesListFromDB(email, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

getUserPoliciesList = async (email) => {
  return await getUserPoliciesListPromise(email);
};

userPolicies.getUserPoliciesList = getUserPoliciesList;

module.exports = userPolicies;
