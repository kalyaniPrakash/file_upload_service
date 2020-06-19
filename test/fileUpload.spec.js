const fileUpload = require("../src/fileUpload");
const sinon = require("sinon");
const chai = require("chai");
var assert = require("chai").assert;
const AWS = require("aws-sdk");

describe("File Upload Tests", function () {
  const sandbox = sinon.createSandbox();
  var docClient = { method: function () {} };

  beforeEach(function () {
    sandbox.spy(fileUpload);
    var mock = sinon.mock(docClient);
    var expectation = mock.expects("method");
  });
  afterEach(function () {
    sandbox.restore();
  });
  it("FileUpload", function () {
    assert(fileUpload.processData.bind);
    // assert(fileUpload.processData.length).expects(value);
    // mock.verify();
  });
});

describe(".put should work'", function () {
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

  it("your test", async () => {
    sinonSandbox.stub(AWS.DynamoDB.DocumentClient.prototype, "put").returns({
      promise: function () {
        return Promise.resolve(result);
      },
    });
  });
});
