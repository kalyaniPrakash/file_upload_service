var express = require("express");
const userPolicies = require("../database/FetchPoliciesDB");
var cors = require("cors");
var app = express();
app.use(cors());
app.listen(5000, () => {});
app.post("/api/v1/updatePolicies", (req, res, next) => {
  console.log("Just Receive Request - " + req.query.email);
  prepareUserPoliciesList(req.query.email, res);
});

prepareUserPoliciesList = async (email, res) => {
  try {
    const data = await userPolicies.getUserPoliciesList(email);
    console.log("Just sending response");
    res.status(200).json(data);
  } catch (error) {
    res.status(200).send(error);
    console.error("ERROR:" + error);
  }
};
