const express = require("express");
const fetchPoliciesApi = require("../../src/api/FetchPoliciesAPI");
const sinon = require("sinon");
const chai = require("chai");
const assert = chai.assert;

describe("fetchPoliciesApi", function () {
  it("fetchPoliciesApi", function () {
    const app = express();
    const next = sinon.spy();
    const res = sinon.spy();
    const req = {
      session: {
        user: "username", // set user session
      },
    };
    const prepareUserPoliciesList = sinon.spy();
    app.get("/api/v1/getPolicies", (req, res, next) => {
      console.log("Just Receive Request");
      prepareUserPoliciesList("test", res);
    });

    assert.isFalse(prepareUserPoliciesList.calledOnce);
    // assert(res.redirect.calledWith('/login'));
  });
});
