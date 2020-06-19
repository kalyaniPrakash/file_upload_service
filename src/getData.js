const http = require("http");
const constants = require("./constants");
const options = {
  hostname: "localhost",
  port: 3000,
  path: "/getPolicyDetails",
  method: "GET",
};

const hostname = "localhost";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

var AWS = require("aws-sdk");
const AWSaccessKeyId = "not-important";
const AWSsecretAccessKey = "not-important";
AWS.config.update({
  region: "local",
  accessKeyId: AWSaccessKeyId,
  secretAccessKey: AWSsecretAccessKey,
  endpoint: "http://localhost:8000",
});

var dynamodb = new AWS.DynamoDB();
var docClient = new AWS.DynamoDB.DocumentClient();

var params = {
  TableName: "Policy_Renewal_Details",
  Limit: 5, // Limits the number of results per page (beyond the default 1MB limit)
};

console.log("Calling the Scan API on the Policy_Renewal_Details table");
docClient.scan(params, function (err, data) {
  if (err) {
    console.log(err); // an error occurred
  } else {
    console.log("The Scan call evaluated " + data.ScannedCount + " items");
    console.log(data); // successful response
  }
});
