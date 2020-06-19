const fileUpload = require("../../src/fileUpload");
const sinon = require("sinon");
const chai = require("chai");
var assert = require("chai").assert;

describe("DB Config Tests", function () {
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
  it("Db Config Tests", function () {
    assert(fileUpload.processData.bind);
    // assert(fileUpload.processData.length).expects(value);
    // mock.verify();
  });
});
