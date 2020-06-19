const sinon = require("sinon");
const chai = require("chai");
const assert = chai.assert;
const fetchPoliciesDB = require("../../src/database/FetchPoliciesDB");
const AWS = require("aws-sdk");

describe("fetchPoliciesDB Tests", function () {
  const sandbox = sinon.createSandbox();
  var docClient = { method: function () {} };
  var scan = { method: function () {} };
  var getUserPoliciesListFromDB = sinon.spy();
  var err = "error";
  var data = "tableData";
  const getUserPoliciesListPromise = sinon.spy();
  var dbCallback = sinon.spy();
  var params = {
    TableName: "tableName",
  };
  let result = "policyDetails";

  let sinonSandbox;

  beforeEach((done) => {
    sinonSandbox = sinon.createSandbox();
    done();
  });

  afterEach((done) => {
    sinonSandbox.restore();
    done();
  });
  it("fetchPoliciesDB", function () {
    sinonSandbox.stub(AWS.DynamoDB.DocumentClient.prototype, "scan").returns({
      promise: function () {
        return Promise.resolve(result);
      },

      // assert(fileUpload.processData.length).expects(value);
      // mock.verify();
    });
  });
});
