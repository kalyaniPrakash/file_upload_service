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

const AWS = require("aws-sdk");
const documentClient = new AWS.DynamoDB.DocumentClient();

exports.getAllTasks = function (event, context, callback) {
  const params = {
    TableName: constants.TABLE_NAME,
  };
  documentClient.scan(params, function (err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      data.Items.forEach(function (element, index, array) {
        console.log(element.Title.S + " (" + element.Subtitle.S + ")");
      });
    }
  });
};
